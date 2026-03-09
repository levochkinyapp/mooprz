import { UserCircle } from "lucide-react";

type PersonCardButtonProps = {
  onClick: () => void;
  /** Три строки для отображения (например: фамилия, имя, отчество в нужном порядке) */
  lines: [string, string, string];
};

const CARD_CLASS =
  "w-[283px] min-h-[122px] flex items-center gap-4 p-6 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg hover:border-primary transition-all duration-200 group";

export function PersonCardButton({ onClick, lines }: PersonCardButtonProps) {
  return (
    <button type="button" onClick={onClick} className={CARD_CLASS}>
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        <UserCircle className="w-7 h-7 text-primary" />
      </div>
      <span className="font-semibold text-gray-600 group-hover:text-primary transition-colors block text-left">
        <span className="block">{lines[0]}</span>
        <span className="block">{lines[1]}</span>
        <span className="block">{lines[2]}</span>
      </span>
    </button>
  );
}
