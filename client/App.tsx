import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import News from "./pages/News";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import YouthCouncil from "./pages/YouthCouncil";
import About from "./pages/About";
import Struktura from "./pages/Struktura";
import Predsedatel from "./pages/Predsedatel";
import ZamestiteliPredsedatelya from "./pages/ZamestiteliPredsedatelya";
import OtdelOhranyTruda from "./pages/OtdelOhranyTruda";
import OtdelSotsialnoEkonomicheskoyZashchity from "./pages/OtdelSotsialnoEkonomicheskoyZashchity";
import OtdelPravovoyZashchity from "./pages/OtdelPravovoyZashchity";
import InformatsionnyyOtdel from "./pages/InformatsionnyyOtdel";
import OrganizatsionnoAnaliticheskiyOtdel from "./pages/OrganizatsionnoAnaliticheskiyOtdel";
import FinansovyyOtdel from "./pages/FinansovyyOtdel";
import VyshestoyashchieOrganizatsii from "./pages/VyshestoyashchieOrganizatsii";
import ProfsoyuznyeOrganizatsii from "./pages/ProfsoyuznyeOrganizatsii";
import IstoricheskayaSpravka from "./pages/IstoricheskayaSpravka";
import PolitikaKonfidencialnosti from "./pages/PolitikaKonfidencialnosti";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/youth-council" element={<YouthCouncil />} />
        <Route path="/youth-council/o-sovete" element={<Placeholder title="О совете" />} />
        <Route path="/youth-council/obuchenie-shkoly-aktiva" element={<Placeholder title="Обучение / Школы актива" />} />
        <Route path="/youth-council/konkursy" element={<Placeholder title="Конкурсы" />} />
        <Route path="/youth-council/aktsii" element={<Placeholder title="Акции" />} />
        <Route path="/youth-council/turizm" element={<Placeholder title="Туризм" />} />
        <Route path="/youth-council/drugie-molodezhnye-initsiativy" element={<Placeholder title="Другие молодёжные инициативы" />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/molodezh" element={<Placeholder title="Молодёжь" />} />
        <Route path="/news/ohrana-truda" element={<Placeholder title="Охрана труда" />} />
        <Route path="/news/pravovaya-zashchita" element={<Placeholder title="Правовая защита" />} />
        <Route path="/news/ozdorovlenie" element={<Placeholder title="Оздоровление" />} />
        <Route path="/news/sotspartnyorstvo" element={<Placeholder title="Соцпартнёрство" />} />
        <Route path="/news/mezhdunarodnaya-rabota" element={<Placeholder title="Международная работа" />} />
        <Route path="/events" element={<Placeholder title="Мероприятия" />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/yuridicheskaya-pomoshch-inspector" element={<Placeholder title="Юридическая помощь / Инспектор профсоюза" />} />
        <Route path="/services/sotsialnoe-partnyorstvo" element={<Placeholder title="Социальное партнёрство" />} />
        <Route path="/services/mezhdunarodnoe-sotrudnichestvo" element={<Placeholder title="Международное сотрудничество" />} />
        <Route path="/documents" element={<Placeholder title="Документы" />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/struktura" element={<Struktura />} />
        <Route path="/about/struktura/predsedatel" element={<Predsedatel />} />
        <Route path="/about/struktura/predsedatel/suslonova" element={<Placeholder title="Нина Владимировна Суслонова" />} />
        <Route path="/about/struktura/zamestiteli-predsedatelya" element={<ZamestiteliPredsedatelya />} />
        <Route path="/about/struktura/zamestiteli-predsedatelya/veselova" element={<Placeholder title="Веселова Татьяна Евгеньевна" />} />
        <Route path="/about/struktura/zamestiteli-predsedatelya/katane" element={<Placeholder title="Катанэ Юлия Александровна" />} />
        <Route path="/about/struktura/otdel-ohrany-truda" element={<OtdelOhranyTruda />} />
        <Route path="/about/struktura/otdel-sotsialno-ekonomicheskoy-zashchity" element={<OtdelSotsialnoEkonomicheskoyZashchity />} />
        <Route path="/about/struktura/otdel-pravovoy-zashchity" element={<OtdelPravovoyZashchity />} />
        <Route path="/about/struktura/informatsionnyy-otdel" element={<InformatsionnyyOtdel />} />
        <Route path="/about/struktura/organizatsionno-analiticheskiy-otdel" element={<OrganizatsionnoAnaliticheskiyOtdel />} />
        <Route path="/about/struktura/finansovyy-otdel" element={<FinansovyyOtdel />} />
        <Route path="/about/vyshestoyashchie-organizatsii" element={<VyshestoyashchieOrganizatsii />} />
        <Route path="/about/vyshestoyashchie-organizatsii/fnpr" element={<Placeholder title="ФНПР" />} />
        <Route path="/about/vyshestoyashchie-organizatsii/profsoyuz-zdravookhraneniya-rf" element={<Placeholder title="Профсоюз работников здравоохранения РФ" />} />
        <Route path="/about/organizatsionno-ustavnye-dokumenty" element={<Placeholder title="Организационно-уставные документы" />} />
        <Route path="/about/profsoyuznye-organizatsii" element={<ProfsoyuznyeOrganizatsii />} />
        <Route path="/about/istoricheskaya-spravka" element={<IstoricheskayaSpravka />} />
        <Route path="/about/istoricheskaya-spravka/ustav" element={<Placeholder title="Устав" />} />
        <Route path="/about/istoricheskaya-spravka/polozheniya" element={<Placeholder title="Положения" />} />
        <Route path="/about/istoricheskaya-spravka/postanovleniya" element={<Placeholder title="Постановления" />} />
        <Route path="/politika-konfidencialnosti" element={<PolitikaKonfidencialnosti />} />
              <Route path="/contacts" element={<Placeholder title="Контакты" />} />
              <Route path="/search" element={<Placeholder title="Поиск" />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
