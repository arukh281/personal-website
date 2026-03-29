import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";
import { scrollSmootherRef } from "../lib/scrollSmoother";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const isCoarsePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: isCoarsePointer ? 0.35 : 1.7,
      speed: isCoarsePointer ? 1 : 1.7,
      effects: !isCoarsePointer,
      autoResize: true,
      ignoreMobileResize: true,
    });
    scrollSmootherRef.current = smoother;
    smoother.scrollTop(0);
    smoother.paused(true);

    const onNavClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const section = target.getAttribute("data-href");
      if (!section || !scrollSmootherRef.current) return;
      e.preventDefault();
      scrollSmootherRef.current.scrollTo(section, true, "top top");
    };

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      elem.addEventListener("click", onNavClick);
    });
    const onResize = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", onResize);
    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", onNavClick);
      });
      window.removeEventListener("resize", onResize);
      smoother.kill();
      scrollSmootherRef.current = null;
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          AK
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#life-hobbies" href="#life-hobbies">
              <HoverLinks text="LIFE & HOBBIES" />
            </a>
          </li>
          <li>
            <a data-href="#certifications" href="#certifications">
              <HoverLinks text="CERTIFICATIONS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
