const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Path" },
  { href: "#life", label: "Life" },
  { href: "#contact", label: "Contact" },
] as const;

type MobileNavProps = {
  active: string;
};

export default function MobileNav({ active }: MobileNavProps) {
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {navItems.map(({ href, label }) => {
        const id = href.slice(1);
        return (
          <a
            key={href}
            href={href}
            className={active === id ? "is-active" : undefined}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
