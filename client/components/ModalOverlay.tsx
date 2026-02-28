import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type ModalOverlayProps = {
  open: boolean;
  onClose: () => void;
  ariaLabel?: string;
  children?: React.ReactNode;
};

export function ModalOverlay({ open, onClose, ariaLabel, children = null }: ModalOverlayProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black/45 p-4 md:p-6 transition-opacity duration-200",
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={cn(
          "relative mx-auto mt-10 md:mt-16 w-full max-w-4xl max-h-[80vh] overflow-y-auto overscroll-y-contain rounded-xl bg-white border border-gray-200 shadow-lg p-6 md:p-8 transition-[transform,opacity] duration-200 ease-out origin-top",
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
          aria-label="Закрыть окно"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
