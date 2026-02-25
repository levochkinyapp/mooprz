import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

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
                href="#"
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                title="YouTube"
              >
                <Youtube size={20} />
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
