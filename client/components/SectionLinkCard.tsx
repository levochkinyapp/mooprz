import type { LucideIcon } from "lucide-react";
import { InternalLink } from "@/components/InternalLink";
import { cn } from "@/lib/utils";

type SectionLinkCardProps = {
  to: string;
  label: string;
  icon: LucideIcon;
  className?: string;
};

export function SectionLinkCard({ to, label, icon: Icon, className }: SectionLinkCardProps) {
  return (
    <InternalLink
      to={to}
      className={cn(
        "flex items-center gap-4 p-6 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg hover:border-primary transition-all duration-200 group",
        className
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <span className="font-semibold text-gray-600 group-hover:text-primary transition-colors">
        {label}
      </span>
    </InternalLink>
  );
}
