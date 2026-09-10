import { PropsWithChildren, CSSProperties } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}>;

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  return (
    <Tag className={`reveal ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
