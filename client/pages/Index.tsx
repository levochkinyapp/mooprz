import { useState } from "react";
import { InternalLink } from "@/components/InternalLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  GraduationCap,
  Heart,
  Plane,
  Scale,
  Star,
  Users,
} from "lucide-react";

export default function Index() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const quickLinks = [
    {
      icon: Plane,
      title: "Путёвки на оздоровление",
      description: "Забронируйте путёвку в лучшие здравницы",
      color: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: Scale,
      title: "Консультация юриста",
      description: "Получите бесплатную юридическую помощь",
      color: "bg-blue-50",
      iconColor: "text-primary",
    },
    {
      icon: GraduationCap,
      title: "Обучение и курсы",
      description: "Повысьте свою квалификацию",
      color: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: Users,
      title: "Членство",
      description: "Присоединитесь к профсоюзу",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: FileText,
      title: "Документы",
      description: "Скачайте необходимые документы",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Heart,
      title: "Социальная поддержка",
      description: "Узнайте о программах поддержки",
      color: "bg-pink-50",
      iconColor: "text-pink-600",
    },
  ];

  const reviews = [
    {
      name: "Елена Петрова",
      role: "Врач-терапевт, г. Королёв",
      text: "Огромная благодарность профсоюзу за помощь с путёвкой на оздоровление. Это был отличный отдых со своей семьёй!",
      rating: 5,
      avatar: "ЕП",
    },
    {
      name: "Иван Сидоров",
      role: "Медсестра, г. Подольск",
      text: "Юрист профсоюза помог мне разобраться со сложной рабочей ситуацией. Очень компетентный и отзывчивый человек.",
      rating: 5,
      avatar: "ИС",
    },
    {
      name: "Анна Волкова",
      role: "Врач-педиатр, г. Железнодорожный",
      text: "Спасибо за курсы повышения квалификации! Знания, полученные на обучении, уже применяю в работе.",
      rating: 5,
      avatar: "АВ",
    },
    {
      name: "Дмитрий Козлов",
      role: "Фельдшер, г. Одинцово",
      text: "Профсоюз - настоящая опора для медицинских работников. Всегда готовы помочь и поддержать.",
      rating: 5,
      avatar: "ДК",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Как оформить путёвку на оздоровление",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=280&fit=crop",
      duration: "3:45",
    },
    {
      id: 2,
      title: "Интервью с руководством профсоюза",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=280&fit=crop",
      duration: "12:30",
    },
    {
      id: 3,
      title: "Впечатления членов от программ поддержки",
      thumbnail: "https://images.unsplash.com/photo-1542744094-fe503006271d?w=500&h=280&fit=crop",
      duration: "8:15",
    },
    {
      id: 4,
      title: "Онлайн-лекция о правах медработников",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=280&fit=crop",
      duration: "45:20",
    },
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="flex flex-col min-h-screen min-w-0 w-full pt-20 border-t-0">
      <Header />

      {/* Hero Banner */}
      <section
        className="relative overflow-hidden bg-cover bg-center text-heading"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-[900px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in">
              Московская областная организация профсоюза работников здравоохранения
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 animate-fade-in max-w-[600px] mt-[0.625rem]">
              Защита интересов, поддержка и развитие медицинских работников
              Подмосковья
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-accent hover:bg-red-600 text-white font-bold rounded-lg transition-[transform,background-color] duration-300 ease-out hover:scale-105">
                Подать заявку на услугу
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-heading text-heading font-bold rounded-lg transition-[background-color] duration-300 ease-out hover:bg-hoverCyan">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section — overflow-hidden обрезает тени карточек, чтобы не было полосы над «Мы в цифрах» */}
      <section className="py-16 md:py-24 border-0 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Наши услуги
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для членов профсоюза и медицинских работников
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <div
                  key={index}
                  className="bg-transparent rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer border border-gray-200"
                >
                  <div className={`${link.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`${link.iconColor} w-7 h-7`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Мы в цифрах — фон как у Hero: cover + center, без растягивания при масштабе */}
      <section className="relative -mt-px -mb-1 py-16 md:py-24 overflow-hidden border-0 isolate">
        <div
          className="absolute inset-0 -bottom-1 bg-cover bg-center backface-hidden opacity-80"
          style={{ backgroundImage: "url('/we-in-numbers-bg.png')" }}
          aria-hidden
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--heading)] text-center mb-12">
            Мы в цифрах
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto justify-items-center">
            <div className="flex flex-col items-center text-center w-full sm:max-w-[12rem]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-1">30+</div>
              <div className="text-sm sm:text-base text-gray-600">лет на защите интересов</div>
            </div>
            <div className="flex flex-col items-center text-center w-full sm:max-w-[12rem]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-1">45</div>
              <div className="text-sm sm:text-base text-gray-600">территориальных организаций</div>
            </div>
            <div className="flex flex-col items-center text-center w-full sm:max-w-[12rem]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-1">50 000+</div>
              <div className="text-sm sm:text-base text-gray-600">членов профсоюза</div>
            </div>
            <div className="flex flex-col items-center text-center w-full sm:max-w-[12rem] sm:col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-1">24/7</div>
              <div className="text-sm sm:text-base text-gray-600">поддержка и консультации</div>
            </div>
          </div>
        </div>
      </section>

      {/* News/Updates Section */}
      <section className="py-16 md:py-24 border-0 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Последние новости
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Будьте в курсе актуальной информации о мероприятиях и событиях
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-transparent rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <div className="bg-gradient-to-r from-primary to-blue-900 h-48 flex items-center justify-center">
                  <div className="text-white text-sm font-semibold">
                    Изображение новости
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2">
                    {`${5 - item} дня назад`}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3">
                    {item === 1 &&
                      "Запуск нового портала для членов профсоюза"}
                    {item === 2 &&
                      "Открытие летней программы оздоровления"}
                    {item === 3 &&
                      "Семинар по защите прав медработников"}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Новая информация, касающаяся жизни профсоюза и интересующая
                    наших членов...
                  </p>
                  <InternalLink
                    to="/news"
                    className="text-primary hover:text-accent font-semibold text-sm transition-colors"
                  >
                    Читать далее →
                  </InternalLink>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <InternalLink
              to="/news"
              className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-900 transition-colors duration-200 inline-block"
            >
              Все новости
            </InternalLink>
          </div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="py-16 md:py-24 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Видеотека
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Полезная информация и истории от наших членов
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={videos[currentVideoIndex].thumbnail}
                  alt={videos[currentVideoIndex].title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg">
                    <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevVideo}
                className="hidden min-[1082px]:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-14 md:-translate-x-16 bg-primary text-white p-3 rounded-full hover:bg-blue-900 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextVideo}
                className="hidden min-[1082px]:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-14 md:translate-x-16 bg-primary text-white p-3 rounded-full hover:bg-blue-900 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Video Info */}
            <div className="mt-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {videos[currentVideoIndex].title}
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-gray-600">
                  {videos[currentVideoIndex].duration}
                </span>
                <div className="flex gap-2">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideoIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentVideoIndex
                          ? "w-8 bg-primary"
                          : "w-2 bg-gray-300 hover:bg-hoverCyan"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Video Thumbnails */}
            <div className="grid grid-cols-4 gap-4 mt-8">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`relative rounded-lg overflow-hidden group cursor-pointer transition-all ${
                    index === currentVideoIndex ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Отзывы членов профсоюза
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Услуги и программы, которые помогают нашим членам
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-transparent rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg hover:border-primary transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — фон как у «Мы в цифрах»: cover + center */}
      <section className="relative pt-5 pb-0 text-white bg-transparent min-h-[320px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center backface-hidden opacity-80"
          style={{ backgroundImage: "url('/cta-bg.png')" }}
          aria-hidden
        />
        <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="hidden min-[1082px]:block flex-shrink-0 w-40 md:w-52 lg:w-64 order-2 md:order-1 md:self-end">
            <img
              src="/doctor_left.png"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1 text-center order-1 md:order-2 min-w-0 md:self-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Присоединитесь к нашему профсоюзу
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Получите доступ к дополнительным услугам, программам поддержки и
              защите своих прав
            </p>
            <button className="px-8 py-3 bg-accent hover:bg-red-600 text-white font-bold rounded-lg transition-[transform,background-color] duration-300 ease-out hover:scale-105">
              Подать заявку на членство
            </button>
          </div>
          <div className="hidden min-[1082px]:block flex-shrink-0 w-40 md:w-52 lg:w-64 order-3 md:self-end">
            <img
              src="/doctor_right.png"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
