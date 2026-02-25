import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">О нас</h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Московская областная организация профсоюза работников здравоохранения РФ защищает интересы медицинских работников Подмосковья.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/news" className="text-blue-100 hover:text-white transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-blue-100 hover:text-white transition-colors">
                  Мероприятия
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/documents" className="text-blue-100 hover:text-white transition-colors">
                  Документы
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Путёвки и оздоровление
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Юридическая помощь
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Обучение и повышение квалификации
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Членство
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">
                  Московская область, г. Королёв
                </span>
              </div>
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+79991234567" className="text-blue-100 hover:text-white transition-colors">
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:info@moopz.ru" className="text-blue-100 hover:text-white transition-colors">
                  info@moopz.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-blue-400 pt-8 mb-8">
          <div className="flex items-center justify-between flex-col md:flex-row gap-4">
            <p className="text-sm text-blue-100">
              Следите за нами в социальных сетях
            </p>
            <div className="flex gap-4">
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center justify-center"
                title="VK"
                aria-label="VK"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.915 13.028h-1.888c-.666 0-.874.265-1.052.883-.55 2.069-2.055 2.884-3.142 2.884-.595 0-.874-.289-.874-1.046v-2.407c0-.596-.171-.874-1.046-.874h-1.701c-.469 0-.755-.133-.755-.402 0-.37.215-.883 1.059-1.974 1.198-1.506 2.135-3.476 2.135-3.476.148-.326.362-.405.735-.405h1.839c.529 0 .651.241.529.883l-1.139 2.688c-.278.596.036.882.58.882.556 0 1.599-.47 2.525-1.844 1.001-1.536 1.518-3.078 1.671-3.695.103-.481.29-.63.729-.63h1.914c.611 0 .747.241.611.875-.328 2.048-1.742 4.841-3.492 6.448-1.14 1.03-1.727.787-1.727-.326l.002-.005z" />
                </svg>
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                title="Telegram"
                aria-label="Telegram"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-400 pt-6 text-center text-sm text-blue-100">
          <p>
            &copy; {currentYear} Московская областная организация профсоюза
            работников здравоохранения РФ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
