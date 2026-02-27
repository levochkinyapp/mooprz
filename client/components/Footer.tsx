import { InternalLink } from "@/components/InternalLink";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-600 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4">О нас</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <InternalLink to="/about/struktura" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Структура
                </InternalLink>
              </li>
              <li>
                <InternalLink to="/about/vyshestoyashchie-organizatsii" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Вышестоящие организации
                </InternalLink>
              </li>
              <li>
                <InternalLink to="/about/organizatsionno-ustavnye-dokumenty" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Организационно-уставные документы
                </InternalLink>
              </li>
              <li>
                <InternalLink to="/politika-konfidencialnosti" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Политика конфиденциальности МООП РЗ РФ
                </InternalLink>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <InternalLink to="/news" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Новости
                </InternalLink>
              </li>
              <li>
                <InternalLink to="/events" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Мероприятия
                </InternalLink>
              </li>
              <li>
                <InternalLink to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Услуги
                </InternalLink>
              </li>
              <li>
                <InternalLink to="/documents" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Документы
                </InternalLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Путёвки и оздоровление
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Юридическая помощь
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Обучение и повышение квалификации
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Членство
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  119331, г. Москва, ул. Марии Ульяновой, д. 9, корп. 1
                </span>
              </div>
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+79991234567" className="text-gray-600 hover:text-gray-900 transition-colors">
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:moopzdr@medicalprof.ru" className="text-gray-600 hover:text-gray-900 transition-colors">
                  moopzdr@medicalprof.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-300 pt-8 mb-8">
          <div className="flex items-center justify-between flex-col md:flex-row gap-4">
            <p className="text-sm text-gray-600">
              Следите за нами в социальных сетях
            </p>
            <div className="flex gap-4">
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0077FF] hover:bg-[#0066DD] rounded-full transition-colors flex items-center justify-center"
                title="VK"
                aria-label="VK"
              >
                <span className="text-white font-bold text-sm leading-none">VK</span>
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0088cc] hover:bg-[#0077b5] rounded-full transition-colors flex items-center justify-center"
                title="Telegram"
                aria-label="Telegram"
              >
                <svg
                  className="w-5 h-5 text-white shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.84.42z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
          <p>
            &copy; {currentYear} Московская областная организация профсоюза
            работников здравоохранения РФ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
