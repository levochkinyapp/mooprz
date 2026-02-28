import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserCircle } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import { ModalOverlay } from "@/components/ModalOverlay";

const TITLE = "Председатель Московской областной организации профсоюза работников здравоохранения РФ";

export default function Predsedatel() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  useModal(isProfileOpen, () => setIsProfileOpen(false));

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
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <UserCircle className="w-7 h-7 text-primary" />
            </div>
            <span className="font-semibold text-gray-600 group-hover:text-primary transition-colors block text-left">
              <span className="block">Нина</span>
              <span className="block">Владимировна</span>
              <span className="block">Суслонова</span>
            </span>
          </button>
        </div>
      </main>

      <ModalOverlay
        open={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        ariaLabel="Информация о Нине Владимировне Суслоновой"
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <img
            src="/suslonova.png"
            alt="Нина Владимировна Суслонова"
            className="w-full md:w-72 h-auto rounded-xl object-cover"
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
      </ModalOverlay>

      <Footer />
    </div>
  );
}
