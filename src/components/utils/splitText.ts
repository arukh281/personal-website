import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const narrow = window.innerWidth <= 1024;
  const TriggerStart = narrow ? "top 72%" : "20% 60%";
  const toggleActions = narrow
    ? "play none none none"
    : "play pause resume reverse";
  const scrollTriggerBase = {
    toggleActions,
    ...(narrow ? { once: true } : {}),
  };

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      para.split?.revert();
    }

    para.split = new SplitText(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    para.anim = gsap.fromTo(
      para.split.words,
      narrow ? { autoAlpha: 0, y: 28 } : { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          start: TriggerStart,
          ...scrollTriggerBase,
        },
        duration: narrow ? 1.15 : 1,
        ease: narrow ? "power2.out" : "power3.out",
        y: 0,
        stagger: narrow ? 0.035 : 0.02,
      }
    );
  });
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      title.split?.revert();
    }
    title.split = new SplitText(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });
    title.anim = gsap.fromTo(
      title.split.chars,
      narrow
        ? { autoAlpha: 0, y: 20, rotate: 3 }
        : { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          start: TriggerStart,
          ...scrollTriggerBase,
        },
        duration: narrow ? 1 : 0.8,
        ease: "power2.out",
        y: 0,
        rotate: 0,
        stagger: narrow ? 0.04 : 0.03,
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
