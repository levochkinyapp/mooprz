import { useState } from "react";
import { useModal } from "@/hooks/useModal";
import { ModalOverlay } from "@/components/ModalOverlay";
import { PageLayout } from "@/components/PageLayout";
import { PersonCardButton } from "@/components/PersonCardButton";

const TITLE = "Финансовый отдел";

const persons = [
  { id: "grigoreva", lastName: "Григорьева", firstName: "Наталья", patronymic: "Леонидовна" },
  { id: "savkina", lastName: "Савкина", firstName: "Лариса", patronymic: "Владимировна" },
  { id: "ivanova", lastName: "Иванова", firstName: "Татьяна", patronymic: "Анатольевна" },
];

function personLabel(person: (typeof persons)[0]) {
  return `${person.lastName} ${person.firstName} ${person.patronymic}`;
}

export default function FinansovyyOtdel() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openPerson = openId ? persons.find((p) => p.id === openId) : null;
  useModal(openId !== null, () => setOpenId(null));

  return (
    <>
      <PageLayout>
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{TITLE}</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto justify-items-center">
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
