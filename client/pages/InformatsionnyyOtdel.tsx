import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserCircle } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import { ModalOverlay } from "@/components/ModalOverlay";

const TITLE = "Информационный отдел";

const person = {
  id: "eremenko",
  lastName: "Еременко",
  firstName: "Виталий",
  patronymic: "Николаевич",
};

const personLabel = `${person.lastName} ${person.firstName} ${person.patronymic}`;

export default function InformatsionnyyOtdel() {
  const [isOpen, setIsOpen] = useState(false);
  useModal(isOpen, () => setIsOpen(false));

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{TITLE}</h1>
        </div>
        <div className="flex justify-center max-w-4xl mx-auto">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-[283px] min-h-[122px] flex items-center gap-4 p-6 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg hover:border-primary transition-all duration-200 group"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <UserCircle className="w-7 h-7 text-primary" />
            </div>
            <span className="font-semibold text-gray-600 group-hover:text-primary transition-colors block text-left">
              <span className="block">{person.lastName}</span>
              <span className="block">{person.firstName}</span>
              <span className="block">{person.patronymic}</span>
            </span>
          </button>
        </div>
      </main>
      <ModalOverlay open={isOpen} onClose={() => setIsOpen(false)} ariaLabel={personLabel} />
      <Footer />
    </div>
  );
}
