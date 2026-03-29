import * as THREE from "three";
import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
  type ErrorInfo,
  type ReactNode,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, RoundedBox } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";
import { profile } from "../data/profile";

/** Visual size vs physics baseline (1 = previous cube edge 2×scale). */
const BOX_VISUAL = 0.8;

const spheres = [...Array(30)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale * BOX_VISUAL]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale * BOX_VISUAL]}
        args={[0.15 * scale * BOX_VISUAL, 0.275 * scale * BOX_VISUAL]}
      />
      <RoundedBox
        args={[
          2 * scale * BOX_VISUAL,
          2 * scale * BOX_VISUAL,
          2 * scale * BOX_VISUAL,
        ]}
        radius={Math.min(0.34 * scale * BOX_VISUAL, scale * 0.9 * BOX_VISUAL)}
        smoothness={5}
        castShadow
        receiveShadow
        rotation={[0.3, 1, 1]}
      >
        <primitive object={material} attach="material" />
      </RoundedBox>
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TECH_URLS = [...profile.techStackImages] as string[];

/** Avoids useLoader/useTexture: failed CDN loads throw and can white-screen the whole app. */
function TechSpheres({
  isActive,
  materials,
}: {
  isActive: boolean;
  materials: THREE.MeshPhysicalMaterial[];
}) {
  return (
    <>
      {spheres.map((props, i) => (
        <SphereGeo
          key={i}
          {...props}
          material={materials[i % materials.length]}
          isActive={isActive}
        />
      ))}
    </>
  );
}

function TechMaterialsLoader({
  isActive,
  onMaterials,
}: {
  isActive: boolean;
  onMaterials: (m: THREE.MeshPhysicalMaterial[] | null) => void;
}) {
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const urls = [...TECH_URLS];
    let cancelled = false;

    Promise.all(
      urls.map(
        (url) =>
          new Promise<THREE.Texture>((resolve, reject) => {
            loader.load(url, resolve, undefined, reject);
          })
      )
    )
      .then((textures) => {
        if (cancelled) return;
        textures.forEach((t) => {
          t.colorSpace = THREE.SRGBColorSpace;
          t.needsUpdate = true;
        });
        const mats = textures.map(
          (texture) =>
            new THREE.MeshPhysicalMaterial({
              map: texture,
              metalness: 0.4,
              roughness: 0.55,
              clearcoat: 0.08,
            })
        );
        onMaterials(mats);
        const first = textures[0]?.image as HTMLImageElement | undefined;
        // #region agent log
        fetch(
          "http://127.0.0.1:7553/ingest/7498b2c9-ea9b-430f-8713-77ebf76ca8b8",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Debug-Session-Id": "c78711",
            },
            body: JSON.stringify({
              sessionId: "c78711",
              location: "TechStack.tsx:TechMaterialsLoader",
              message: "textures ready",
              data: {
                count: textures.length,
                imgW: first?.naturalWidth ?? null,
                imgH: first?.naturalHeight ?? null,
              },
              timestamp: Date.now(),
              hypothesisId: "H2",
            }),
          }
        ).catch(() => {});
        // #endregion
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        const msg =
          err instanceof Error
            ? err.message
            : err &&
                typeof err === "object" &&
                "message" in err &&
                typeof (err as ErrorEvent).message === "string"
              ? (err as ErrorEvent).message
              : String(err);
        // #region agent log
        fetch(
          "http://127.0.0.1:7553/ingest/7498b2c9-ea9b-430f-8713-77ebf76ca8b8",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Debug-Session-Id": "c78711",
            },
            body: JSON.stringify({
              sessionId: "c78711",
              location: "TechStack.tsx:TechMaterialsLoader",
              message: "texture load failed",
              data: { err: msg },
              timestamp: Date.now(),
              hypothesisId: "H2",
            }),
          }
        ).catch(() => {});
        // #endregion
        const fallback = urls.map(
          () =>
            new THREE.MeshPhysicalMaterial({
              color: new THREE.Color("#14b8a6"),
              metalness: 0.35,
              roughness: 0.6,
            })
        );
        onMaterials(fallback);
      });

    return () => {
      cancelled = true;
    };
  }, [onMaterials]);

  return <Pointer isActive={isActive} />;
}

type BoundaryState = { hasError: boolean };

class TechCanvasBoundary extends React.Component<
  { children: ReactNode },
  BoundaryState
> {
  state: BoundaryState = { hasError: false };

  static getDerivedStateFromError(): BoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, _info: ErrorInfo) {
    // #region agent log
    fetch(
      "http://127.0.0.1:7553/ingest/7498b2c9-ea9b-430f-8713-77ebf76ca8b8",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "c78711",
        },
        body: JSON.stringify({
          sessionId: "c78711",
          location: "TechStack.tsx:TechCanvasBoundary",
          message: "canvas error boundary",
          data: { name: error.name, msg: error.message },
          timestamp: Date.now(),
          hypothesisId: "H4",
        }),
      }
    ).catch(() => {});
    // #endregion
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function TechCanvasInner({ isActive }: { isActive: boolean }) {
  const [materials, setMaterials] = useState<THREE.MeshPhysicalMaterial[] | null>(
    null
  );
  const onMaterials = useMemo(
    () => (m: THREE.MeshPhysicalMaterial[] | null) => setMaterials(m),
    []
  );

  return (
    <Physics gravity={[0, 0, 0]}>
      <TechMaterialsLoader isActive={isActive} onMaterials={onMaterials} />
      {materials ? (
        <TechSpheres isActive={isActive} materials={materials} />
      ) : null}
    </Physics>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);
  const lastLogRef = useRef<boolean | null>(null);

  useEffect(() => {
    const root = document.querySelector(".techstack");
    const exists = !!root;
    // #region agent log
    fetch(
      "http://127.0.0.1:7553/ingest/7498b2c9-ea9b-430f-8713-77ebf76ca8b8",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "c78711",
        },
        body: JSON.stringify({
          sessionId: "c78711",
          location: "TechStack.tsx:IO",
          message: "techstack mount",
          data: { rootFound: exists },
          timestamp: Date.now(),
          hypothesisId: "H1",
        }),
      }
    ).catch(() => {});
    // #endregion
    if (!root) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const on = entries.some((e) => e.isIntersecting);
        setIsActive(on);
        if (lastLogRef.current !== on) {
          lastLogRef.current = on;
          // #region agent log
          fetch(
            "http://127.0.0.1:7553/ingest/7498b2c9-ea9b-430f-8713-77ebf76ca8b8",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-Debug-Session-Id": "c78711",
              },
              body: JSON.stringify({
                sessionId: "c78711",
                location: "TechStack.tsx:IO",
                message: "intersection",
                data: { isIntersecting: on },
                timestamp: Date.now(),
                hypothesisId: "H1",
              }),
            }
          ).catch(() => {});
          // #endregion
        }
      },
      { threshold: [0, 0.12, 0.25] }
    );
    obs.observe(root);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="techstack">
      <h2> My Techstack</h2>

      <TechCanvasBoundary>
        <Canvas
          shadows
          gl={{
            alpha: true,
            stencil: false,
            depth: true,
            antialias: true,
          }}
          camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
          onCreated={(state) => {
            state.gl.toneMappingExposure = 1.5;
            const attrs = state.gl.getContextAttributes?.();
            // #region agent log
            fetch(
              "http://127.0.0.1:7553/ingest/7498b2c9-ea9b-430f-8713-77ebf76ca8b8",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "X-Debug-Session-Id": "c78711",
                },
                body: JSON.stringify({
                  sessionId: "c78711",
                  location: "TechStack.tsx:Canvas",
                  message: "webgl created",
                  data: { depthBuffer: attrs?.depth ?? null },
                  timestamp: Date.now(),
                  hypothesisId: "H3",
                }),
              }
            ).catch(() => {});
            // #endregion
          }}
          className="tech-canvas"
        >
          <ambientLight intensity={1} />
          <spotLight
            position={[20, 20, 25]}
            penumbra={1}
            angle={0.2}
            color="white"
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <directionalLight position={[0, 5, -4]} intensity={2} />
          <TechCanvasInner isActive={isActive} />
          <Environment
            files="/models/char_enviorment.hdr"
            environmentIntensity={0.5}
            environmentRotation={[0, 4, 2]}
          />
          <EffectComposer enableNormalPass={false}>
            <N8AO color="#0f002c" aoRadius={2} intensity={0.65} />
          </EffectComposer>
        </Canvas>
      </TechCanvasBoundary>
    </div>
  );
};

export default TechStack;
