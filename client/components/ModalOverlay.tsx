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
          "relative mx-auto mt-10 md:mt-16 w-full max-w-4xl max-h-[80vh] flex flex-col overflow-hidden rounded-xl bg-white border border-gray-200 shadow-lg transition-[transform,opacity] duration-200 ease-out origin-top",
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
      >
        <div className="shrink-0 flex justify-end p-2 md:p-4 pb-0 md:pb-0">
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
            aria-label="Закрыть окно"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-y-contain px-6 md:px-8 pt-2 pb-6 md:pb-8">
          {children}
        </div>
      </div>
    </div>
  );
}
