import { useState } from "react";
import { useModal } from "@/hooks/useModal";
import { ModalOverlay } from "@/components/ModalOverlay";
import { PageLayout } from "@/components/PageLayout";
import { PersonCardButton } from "@/components/PersonCardButton";

const TITLE = "Отдел охраны труда";

const person = {
  id: "elis",
  lastName: "Елис",
  firstName: "Никита",
  patronymic: "Владимирович",
};

const personLabel = `${person.lastName} ${person.firstName} ${person.patronymic}`;

export default function OtdelOhranyTruda() {
  const [isOpen, setIsOpen] = useState(false);
  useModal(isOpen, () => setIsOpen(false));

  return (
    <>
      <PageLayout>
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{TITLE}</h1>
        </div>
        <div className="flex justify-center max-w-4xl mx-auto">
          <PersonCardButton
            onClick={() => setIsOpen(true)}
            lines={[person.lastName, person.firstName, person.patronymic]}
          />
        </div>
      </PageLayout>
      <ModalOverlay open={isOpen} onClose={() => setIsOpen(false)} ariaLabel={personLabel} />
    </>
  );
}
