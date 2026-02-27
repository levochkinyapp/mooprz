import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const TITLE = "Председатель Московской областной организации профсоюза работников здравоохранения РФ";

export default function Predsedatel() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    if (!isProfileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsProfileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isProfileOpen]);

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
            onClick={() => setIsProfileOpen(true)}
            className="w-[283px] min-h-[122px] flex items-center gap-4 p-6 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg hover:border-primary transition-all duration-200 group"
          >
            <img
              src="/suslonova.png"
              alt="Нина Владимировна Суслонова"
              className="w-12 h-12 rounded-lg object-cover shrink-0"
            />
            <span className="font-semibold text-gray-600 group-hover:text-primary transition-colors block text-left">
              <span className="block">Нина</span>
              <span className="block">Владимировна</span>
              <span className="block">Суслонова</span>
            </span>
          </button>
        </div>
      </main>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/45 p-4 md:p-6 transition-opacity duration-200",
          isProfileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsProfileOpen(false)}
        role="presentation"
      >
        <div
          className={cn(
            "relative mx-auto mt-10 md:mt-16 w-full max-w-4xl max-h-[80vh] overflow-y-auto rounded-xl bg-white border border-gray-200 shadow-lg p-6 md:p-8 transition-[transform,opacity] duration-200 ease-out origin-top",
            isProfileOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          )}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Информация о Нине Владимировне Суслоновой"
        >
          <button
            type="button"
            onClick={() => setIsProfileOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
            aria-label="Закрыть окно"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <img
              src="/suslonova.png"
              alt="Нина Владимировна Суслонова"
              className="w-full md:w-72 h-auto rounded-xl object-cover border border-gray-200"
            />

            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold text-heading mb-4">
                Нина Владимировна Суслонова
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  28 июля 2021 года на внеочередной конференции Московской областной организации профсоюза
                  работников здравоохранения РФ Нина Владимировна Суслонова избрана председателем.
                </p>
                <p>
                  Родилась Нина Владимировна 9 августа 1960 г. в посёлке Мамакан Иркутской области.
                  В 1986 году начала свою врачебную деятельность в женской консультации Новочебоксарской
                  городской больницы. В 1991 году поступила в аспирантуру Чувашского госуниверситета и в 1994
                  году защитила кандидатскую диссертацию. Заслуженный врач Российской Федерации, доктор
                  медицинских наук.
                </p>
                <p>
                  С 2000 г. - министр здравоохранения Чувашской Республики, с 2005 г. - министр
                  здравоохранения и социального развития Чувашской Республики. В 2007 г. назначена
                  заместителем председателя кабинета министров Чувашской Республики - министром
                  здравоохранения и социального развития. В 2010 г. - председатель кабинета министров
                  Чувашской Республики.
                </p>
                <p>В 2011 г. занимала должность начальника управления здравоохранения города Сочи.</p>
                <p>
                  С ноября 2011 г. по январь 2013 г. была заместителем руководителя Департамента
                  здравоохранения Москвы.
                </p>
                <p>С 14 января 2013 г. по ноябрь 2016 г. - министр здравоохранения Московской области.</p>
                <p>С ноября 2016 года - Советник Губернатора Московской области по вопросам здравоохранения.</p>
                <p>
                  Возглавив министерство здравоохранения Подмосковья, Нина Владимировна привлекла в регион
                  мощную команду, коренным образом переформатировала работу министерства, задала высокий темп
                  переменам в отрасли. За сравнительно небольшой срок под её руководством были созданы
                  19 сосудистых центров и отделений для современного лечения больных с сердечно - сосудистыми
                  заболеваниями, четыре современных перинатальных центра, решена проблема обеспечения жителей
                  области льготными лекарствами и многое другое. Перемены выражались не только в капитальном
                  ремонте больниц и строительстве новых поликлиник, но и в их содержании и оснащении всем
                  необходимым, а самое главное, на качестве предоставляемых услуг населению.
                </p>
                <p>
                  Все эти годы Нина Владимировна активно работала и продолжает работать с общественными
                  организациями, с Профсоюзом работников отрасли, профессиональным сообществом. Эту важнейшую
                  работу под непосредственным руководством Губернатора Московской области Андрея Воробьева она
                  выполняла и до конференции.
                </p>
                <p>
                  Принимала активное участие в разработке и подписании Двустороннего отраслевого Соглашения,
                  действующего в Подмосковном здравоохранении и сегодня.
                </p>
                <p>
                  Член профсоюза работников здравоохранения РФ с 1984 года. С 2013 года - член Президиума и
                  обкома Московской областной организации Профсоюза работников здравоохранения РФ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
