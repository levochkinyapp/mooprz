import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import News from "./pages/News";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import YouthCouncil from "./pages/YouthCouncil";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
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
        <Route path="/about" element={<Placeholder title="О нас" />} />
        <Route path="/contacts" element={<Placeholder title="Контакты" />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
