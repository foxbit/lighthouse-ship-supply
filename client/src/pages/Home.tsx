import { Mail, Phone, MapPin, Anchor, Leaf, Shield, Clock, Zap, Send, Upload, Menu, X, Globe, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, Language } from "@/lib/translations";

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    navio: "",
    agencia: "",
    eta: "",
    mensagem: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cotação enviada:", formData);
    alert(language === "pt" ? "Cotação enviada com sucesso! Entraremos em contato em breve." : 
          language === "en" ? "Quote sent successfully! We will contact you soon." :
          language === "es" ? "¡Cotización enviada con éxito! Nos comunicaremos pronto." :
          "Devis envoyé avec succès! Nous vous contacterons bientôt.");
    setFormData({ navio: "", agencia: "", eta: "", mensagem: "" });
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-[#0D1B2A] text-white py-3 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <a href="mailto:comercial@lighthouseship.com.br" className="flex items-center gap-2 hover:text-[#C9A84C] transition">
              <Mail size={16} />
              <span className="hidden lg:inline">{t.topBar.contact}</span>
            </a>
            <a href="https://wa.me/5598999756216" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C9A84C] transition">
              <MessageCircle size={16} />
              {t.topBar.phone}
            </a>
          </div>
          <span className="text-[#C9A84C] font-semibold">{t.topBar.support}</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0D1B2A] rounded-full flex items-center justify-center flex-shrink-0">
              <Anchor className="text-[#C9A84C]" size={24} />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-[#0D1B2A]">LIGHTHOUSE</h1>
              <p className="text-xs text-[#C9A84C] font-semibold">Ship Supply</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#inicio" className="text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition">{t.nav.inicio}</a>
            <a href="#quem-somos" className="text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition">{t.nav.quemSomos}</a>
            <a href="#suprimentos" className="text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition">{t.nav.suprimentos}</a>
            <a href="#portos" className="text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition">{t.nav.portos}</a>
            <a href="#contato" className="text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition">{t.nav.contato}</a>
            
            {/* Language Selector Desktop */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center gap-2 text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition px-3 py-2 rounded border border-gray-300 hover:border-[#C9A84C]"
              >
                <Globe size={18} />
                <span>{languages.find(l => l.code === language)?.flag}</span>
              </button>
              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 transition ${
                        language === lang.code ? "bg-[#C9A84C] text-white" : ""
                      }`}
                    >
                      {lang.flag} {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button className="bg-[#C9A84C] hover:bg-[#B8941F] text-white font-semibold">{t.nav.solicitarCotacao}</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
            <a href="#inicio" className="block text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition py-2">{t.nav.inicio}</a>
            <a href="#quem-somos" className="block text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition py-2">{t.nav.quemSomos}</a>
            <a href="#suprimentos" className="block text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition py-2">{t.nav.suprimentos}</a>
            <a href="#portos" className="block text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition py-2">{t.nav.portos}</a>
            <a href="#contato" className="block text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition py-2">{t.nav.contato}</a>
            
            {/* Language Selector Mobile */}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <p className="text-sm font-semibold text-[#0D1B2A] mb-2">Idioma / Language</p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded text-sm font-medium transition ${
                      language === lang.code 
                        ? "bg-[#C9A84C] text-white" 
                        : "bg-gray-100 text-[#1A1A2E] hover:bg-gray-200"
                    }`}
                  >
                    {lang.flag} {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <Button className="w-full bg-[#C9A84C] hover:bg-[#B8941F] text-white font-semibold">{t.nav.solicitarCotacao}</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="bg-[#0D1B2A] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-[#C9A84C] font-semibold text-xs md:text-sm mb-4">{t.hero.label}</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 font-playfair leading-tight">{t.hero.title}</h2>
            <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button className="bg-[#C9A84C] hover:bg-[#B8941F] text-white px-6 md:px-8 py-3 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                {t.hero.btnQuote}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 md:px-8 py-3 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                {t.hero.btnSupplies}
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028518339/6zvZhDvRRWjir6mmFofA9R/1774914654334(1)(1)_a5fd9019.png"
              alt={t.hero.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          <div className="flex flex-col items-center">
            <Clock className="text-[#C9A84C] mb-4" size={40} />
            <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-2">{t.stats.stat1Title}</h3>
            <p className="text-gray-600 font-medium">{t.stats.stat1Desc}</p>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="text-[#C9A84C] mb-4" size={40} />
            <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-2">{t.stats.stat2Title}</h3>
            <p className="text-gray-600 font-medium">{t.stats.stat2Desc}</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="text-[#C9A84C] mb-4" size={40} />
            <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-2">{t.stats.stat3Title}</h3>
            <p className="text-gray-600 font-medium">{t.stats.stat3Desc}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="quem-somos" className="bg-[#F5F7FA] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4 md:mb-6 font-playfair">{t.about.title}</h2>
            <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.para1 }} />
            <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.para2 }} />
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Zap className="text-[#C9A84C] flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">{t.about.pillar1}</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-[#C9A84C] flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">{t.about.pillar2}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-[#C9A84C] flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">{t.about.pillar3}</span>
              </div>
            </div>
            <a href="#contato" className="inline-block mt-8 text-[#C9A84C] font-semibold hover:text-[#B8941F] transition">
              {t.about.learnMore}
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028518339/6zvZhDvRRWjir6mmFofA9R/port-sao-luis-oSWmkccYEm6WmA7ZVzKbAv.webp"
              alt={t.about.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Supplies Section */}
      <section id="suprimentos" className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D1B2A] mb-12 md:mb-16 font-playfair">{t.supplies.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white border-t-4 border-[#C9A84C] rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition">
              <Leaf className="text-[#C9A84C] mb-4" size={40} />
              <h3 className="text-xl md:text-2xl font-bold text-[#0D1B2A] mb-4">{t.supplies.card1Title}</h3>
              <ul className="text-gray-700 leading-relaxed space-y-2 text-sm md:text-base">
                <li dangerouslySetInnerHTML={{ __html: t.supplies.card1Item1 }} />
                <li dangerouslySetInnerHTML={{ __html: t.supplies.card1Item2 }} />
                <li dangerouslySetInnerHTML={{ __html: t.supplies.card1Item3 }} />
                <li dangerouslySetInnerHTML={{ __html: t.supplies.card1Item4 }} />
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-t-4 border-[#C9A84C] rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition">
              <Upload className="text-[#C9A84C] mb-4" size={40} />
              <h3 className="text-xl md:text-2xl font-bold text-[#0D1B2A] mb-4">{t.supplies.card2Title}</h3>
              <ul className="text-gray-700 leading-relaxed space-y-2 text-sm md:text-base">
                <li dangerouslySetInnerHTML={{ __html: t.supplies.card2Item1 }} />
                <li dangerouslySetInnerHTML={{ __html: t.supplies.card2Item2 }} />
                <li dangerouslySetInnerHTML={{ __html: t.supplies.card2Item3 }} />
                <li dangerouslySetInnerHTML={{ __html: t.supplies.card2Item4 }} />
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-t-4 border-[#C9A84C] rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition">
              <Shield className="text-[#C9A84C] mb-4" size={40} />
              <h3 className="text-xl md:text-2xl font-bold text-[#0D1B2A] mb-4">{t.supplies.card3Title}</h3>
              <ul className="text-gray-700 leading-relaxed space-y-2 text-sm md:text-base">
                <li dangerouslySetInnerHTML={{ __html: t.supplies.card3Item1 }} />
                <li dangerouslySetInnerHTML={{ __html: t.supplies.card3Item2 }} />
                <li dangerouslySetInnerHTML={{ __html: t.supplies.card3Item3 }} />
                <li dangerouslySetInnerHTML={{ __html: t.supplies.card3Item4 }} />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#0D1B2A] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 font-playfair">{t.whyChoose.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <Zap className="text-[#C9A84C] mx-auto mb-4" size={40} />
              <h3 className="text-lg md:text-xl font-bold mb-3">{t.whyChoose.pillar1Title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{t.whyChoose.pillar1Desc}</p>
            </div>
            <div className="text-center">
              <Shield className="text-[#C9A84C] mx-auto mb-4" size={40} />
              <h3 className="text-lg md:text-xl font-bold mb-3">{t.whyChoose.pillar2Title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{t.whyChoose.pillar2Desc}</p>
            </div>
            <div className="text-center">
              <Clock className="text-[#C9A84C] mx-auto mb-4" size={40} />
              <h3 className="text-lg md:text-xl font-bold mb-3">{t.whyChoose.pillar3Title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{t.whyChoose.pillar3Desc}</p>
            </div>
            <div className="text-center">
              <Leaf className="text-[#C9A84C] mx-auto mb-4" size={40} />
              <h3 className="text-lg md:text-xl font-bold mb-3">{t.whyChoose.pillar4Title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{t.whyChoose.pillar4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ports Section */}
      <section id="portos" className="bg-[#F5F7FA] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D1B2A] mb-12 md:mb-16 font-playfair">{t.ports.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-lg transition">
              <MapPin className="text-[#C9A84C] mx-auto mb-4" size={40} />
              <h3 className="text-xl md:text-2xl font-bold text-[#0D1B2A]">{t.ports.port1}</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{t.ports.port1Desc}</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-lg transition">
              <MapPin className="text-[#C9A84C] mx-auto mb-4" size={40} />
              <h3 className="text-xl md:text-2xl font-bold text-[#0D1B2A]">{t.ports.port2}</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{t.ports.port2Desc}</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-lg transition">
              <MapPin className="text-[#C9A84C] mx-auto mb-4" size={40} />
              <h3 className="text-xl md:text-2xl font-bold text-[#0D1B2A]">{t.ports.port3}</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{t.ports.port3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order System Section */}
      <section id="sistema-pedidos" className="bg-gradient-to-r from-[#0D1B2A] to-[#1a2a3a] py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">{t.orderSystem.title}</h2>
              <p className="text-gray-300 mb-8 text-sm md:text-base leading-relaxed">{t.orderSystem.description}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center mt-1">
                    <span className="text-[#0D1B2A] text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#C9A84C] mb-1">{t.orderSystem.feature1}</h3>
                    <p className="text-gray-400 text-sm">{t.orderSystem.feature1Desc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center mt-1">
                    <span className="text-[#0D1B2A] text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#C9A84C] mb-1">{t.orderSystem.feature2}</h3>
                    <p className="text-gray-400 text-sm">{t.orderSystem.feature2Desc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center mt-1">
                    <span className="text-[#0D1B2A] text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#C9A84C] mb-1">{t.orderSystem.feature3}</h3>
                    <p className="text-gray-400 text-sm">{t.orderSystem.feature3Desc}</p>
                  </div>
                </div>
              </div>
              
              <a href="https://lighthouse-order-hub.lovable.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C9A84C] text-[#0D1B2A] px-8 py-3 rounded-lg font-semibold hover:bg-[#D4B35F] transition transform hover:scale-105">
                {t.orderSystem.cta}
              </a>
            </div>
            
            {/* Right Screenshots - Animated */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Screenshot 1 - Cart */}
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028518339/VmPFreFKjNQSaCck.png" 
                  alt="Shopping Cart" 
                  className="w-full rounded-lg shadow-2xl border-4 border-[#C9A84C] animate-bounce" 
                  style={{
                    animationDelay: '0s',
                    animationDuration: '3s',
                  }}
                />
                {/* Screenshot 2 - Catalog */}
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028518339/pjbSLKWsgZkSSCjy.png" 
                  alt="Product Catalog" 
                  className="w-full rounded-lg shadow-2xl border-4 border-[#C9A84C] absolute top-0 left-0 animate-pulse" 
                  style={{
                    animationDelay: '1.5s',
                    animationDuration: '3s',
                    opacity: 0.7,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="contato" className="bg-white py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D1B2A] mb-4 font-playfair">{t.form.title}</h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm md:text-base">{t.form.description}</p>
          
          <form onSubmit={handleSubmit} className="bg-[#F5F7FA] rounded-lg p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#0D1B2A] mb-2">{t.form.shipLabel}</label>
                <input
                  type="text"
                  name="navio"
                  value={formData.navio}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
                  placeholder={t.form.shipPlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0D1B2A] mb-2">{t.form.agencyLabel}</label>
                <input
                  type="text"
                  name="agencia"
                  value={formData.agencia}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
                  placeholder={t.form.agencyPlaceholder}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1B2A] mb-2">{t.form.etaLabel}</label>
              <input
                type="datetime-local"
                name="eta"
                value={formData.eta}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1B2A] mb-2">{t.form.messageLabel}</label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
                placeholder={t.form.messagePlaceholder}
              />
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#C9A84C] transition cursor-pointer">
              <Upload className="mx-auto mb-2 text-gray-400" size={24} />
              <p className="text-sm text-gray-600">{t.form.fileLabel}</p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C9A84C] hover:bg-[#B8941F] text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {t.form.submitBtn}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1B2A] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Anchor className="text-[#C9A84C]" size={28} />
              <div>
                <h3 className="text-lg font-bold">LIGHTHOUSE</h3>
                <p className="text-xs text-[#C9A84C]">Ship Supply</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">{t.footer.tagline}</p>
            <div className="mt-6">
              <p className="text-gray-400 text-sm font-semibold mb-1">{t.footer.company}</p>
              <p className="text-gray-400 text-xs">{t.footer.cnpj}</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#C9A84C] mb-4">{t.footer.locationTitle}</h4>
            <p className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: t.footer.address }} />
          </div>

          <div>
            <h4 className="font-bold text-[#C9A84C] mb-4">{t.footer.contactTitle}</h4>
            <p className="text-gray-400 text-sm mb-3">
              <a href={`mailto:${t.topBar.contact}`} className="hover:text-[#C9A84C] transition">
                {t.topBar.contact}
              </a>
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <a href="https://wa.me/5598985977557" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A84C] transition flex items-center gap-1">
                <MessageCircle size={16} />
                {t.topBar.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p dangerouslySetInnerHTML={{ __html: t.footer.copyright }} />
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5598999756216?text=Olá%20Lighthouse%20Ship%20Supply!%20Gostaria%20de%20solicitar%20uma%20cotação."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition transform hover:scale-110 z-40"
        title={language === "pt" ? "Emergência? Fale conosco agora" : language === "en" ? "Emergency? Talk to us now" : language === "es" ? "¿Emergencia? Hable con nosotros ahora" : "Urgence? Parlez-nous maintenant"}
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
