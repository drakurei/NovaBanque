import Link from "next/link";

export default function EditorialLink({
  href,
  children,
  arrow = true,
  light = false,
  size = "md",
}: {
  href: string;
  children: React.ReactNode;
  arrow?: boolean;
  light?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }[size];

  const color = light ? "text-ivoire" : "text-charcoal";
  const underline = light ? "bg-ivoire" : "bg-charcoal";

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-2 ${sizeClass} ${color} tracking-tight`}
    >
      <span className="relative">
        {children}
        <span
          className={`absolute -bottom-1 left-0 h-px w-full ${underline} origin-right scale-x-100 group-hover:scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`}
        />
        <span
          className={`absolute -bottom-1 left-0 h-px w-full ${underline} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)]`}
        />
      </span>
      {arrow && (
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
          →
        </span>
      )}
    </Link>
  );
}
