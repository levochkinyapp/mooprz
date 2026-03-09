import { useState } from "react";
import { useModal } from "@/hooks/useModal";
import { ModalOverlay } from "@/components/ModalOverlay";
import { PageLayout } from "@/components/PageLayout";
import { PersonCardButton } from "@/components/PersonCardButton";

const TITLE = "Отдел социально-экономической защиты";

const persons = [
  { id: "polkhova", lastName: "Полхова", firstName: "Лариса", patronymic: "Сергеевна" },
  { id: "batov", lastName: "Батов", firstName: "Геннадий", patronymic: "Николаевич" },
];

function personLabel(person: (typeof persons)[0]) {
  return `${person.lastName} ${person.firstName} ${person.patronymic}`;
}

export default function OtdelSotsialnoEkonomicheskoyZashchity() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openPerson = openId ? persons.find((p) => p.id === openId) : null;
  useModal(openId !== null, () => setOpenId(null));

  return (
    <>
      <PageLayout>
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{TITLE}</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {persons.map((person) => (
            <PersonCardButton
              key={person.id}
              onClick={() => setOpenId(person.id)}
              lines={[person.lastName, person.firstName, person.patronymic]}
            />
          ))}
        </div>
      </PageLayout>
      <ModalOverlay
        open={openId !== null}
        onClose={() => setOpenId(null)}
        ariaLabel={openPerson ? personLabel(openPerson) : undefined}
      >
        {openPerson ? (
          <h2 className="text-xl font-bold text-heading">{personLabel(openPerson)}</h2>
        ) : null}
      </ModalOverlay>
    </>
  );
}
