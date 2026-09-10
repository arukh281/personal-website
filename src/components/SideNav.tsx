const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Path" },
  { href: "#life", label: "Life" },
  { href: "#contact", label: "Contact" },
] as const;

type SideNavProps = {
  active: string;
};

export default function SideNav({ active }: SideNavProps) {
  return (
    <nav className="side-nav" aria-label="Main navigation">
      <a href="#top" className="side-nav-logo" aria-label="Home">
        AK
      </a>
      <div className="side-nav-links">
        {navItems.map(({ href, label }) => {
          const id = href.slice(1);
          return (
            <a
              key={href}
              href={href}
              className={active === id ? "is-active" : undefined}
              aria-current={active === id ? "true" : undefined}
            >
              {label}
            </a>
          );
        })}
      </div>
      <div className="side-nav-footer">Portfolio</div>
      <div className="side-nav-progress" aria-hidden>
        <div className="side-nav-progress-fill" />
      </div>
    </nav>
  );
}
