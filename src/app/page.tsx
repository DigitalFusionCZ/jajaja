'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.title = "Kavárna U Kódu - Nejlepší káva v Praze";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1A1A1A" /><stop offset="100%" stop-color="#D4AF37" /></linearGradient></defs><circle cx="50" cy="50" r="40" fill="url(#g)" stroke="#C0C0C0" stroke-width="5" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  const sectionClassName = "py-20 px-8 lg:px-16";
  const headingClassName = "text-4xl lg:text-5xl font-serif text-white mb-8 text-center drop-shadow-lg";

  return (
    <div className="bg-[#1A1A1A] text-[#C0C0C0] font-sans min-h-screen relative">
      <header className="fixed top-0 w-full bg-[#1A1A1A] bg-opacity-90 z-50 shadow-lg">
        <nav className="container mx-auto px-8 lg:px-16 py-4 flex justify-between items-center">
          <div className="text-3xl font-serif text-[#D4AF37] drop-shadow-md">Testovací Kavárna &quot;U Kódu&quot;</div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-[#D4AF37] transition-colors duration-300">Úvod</a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors duration-300">O nás</a>
            <a href="#services" className="hover:text-[#D4AF37] transition-colors duration-300">Služby</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors duration-300">Kontakt</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#D4AF37] focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#1A1A1A] bg-opacity-95 py-4`}>
          <div className="flex flex-col items-center space-y-4">
            <a href="#hero" onClick={closeMenu} className="block text-[#C0C0C0] hover:text-[#D4AF37] transition-colors duration-300">Úvod</a>
            <a href="#about" onClick={closeMenu} className="block text-[#C0C0C0] hover:text-[#D4AF37] transition-colors duration-300">O nás</a>
            <a href="#services" onClick={closeMenu} className="block text-[#C0C0C0] hover:text-[#D4AF37] transition-colors duration-300">Služby</a>
            <a href="#contact" onClick={closeMenu} className="block text-[#C0C0C0] hover:text-[#D4AF37] transition-colors duration-300">Kontakt</a>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1511920170033-de86a635035f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 px-8">
            <h1 className="text-5xl lg:text-7xl font-serif text-white leading-tight drop-shadow-xl mb-4">Testovací Kavárna &quot;U Kódu&quot;</h1>
            <p className="text-xl lg:text-2xl text-[#C0C0C0] font-light italic drop-shadow-lg">Nejlepší káva pro vaše bugy.</p>
          </div>
        </section>

        <section id="about" className={`${sectionClassName} bg-[#1F1F1F] text-center`}>
          <h2 className={headingClassName}>O nás</h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-[#DCDCDC]">
            Jsme moderní kavárna v srdci Prahy, která nabízí nejen skvělou kávu, ale i klidné prostředí pro práci a setkávání. Naše specialita je &quot;debuggovací doppio&quot;.
          </p>
        </section>

        <section id="services" className={`${sectionClassName} bg-[#1A1A1A] text-center`}>
          <h2 className={headingClassName}>Služby</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="bg-[#292929] p-8 rounded-lg shadow-xl border border-[#222222]">
              <h3 className="text-2xl font-serif text-[#D4AF37] mb-4">Vynikající Káva</h3>
              <p className="text-[#DCDCDC]">Široká nabídka kávových specialit z kvalitních zrn, připravených batisty s láskou a precizností.</p>
            </div>
            <div className="bg-[#292929] p-8 rounded-lg shadow-xl border border-[#222222]">
              <h3 className="text-2xl font-serif text-[#D4AF37] mb-4">Klidné Pracovní Prostředí</h3>
              <p className="text-[#DCDCDC]">Pohodlná místa, stabilní Wi-Fi a tichá atmosféra ideální pro soustředěnou práci nebo studium.</p>
            </div>
            <div className="bg-[#292929] p-8 rounded-lg shadow-xl border border-[#222222]">
              <h3 className="text-2xl font-serif text-[#D4AF37] mb-4">&quot;Debuggovací Doppio&quot;</h3>
              <p className="text-[#DCDCDC]">Naše originální specialita, která vás nakopne a pomůže vám se soustředit na řešení i těch nejzapeklitějších bugů.</p>
            </div>
          </div>
        </section>

        <section id="contact" className={`${sectionClassName} bg-[#1F1F1F] text-center`}>
          <h2 className={headingClassName}>Kontakt</h2>
          <div className="max-w-2xl mx-auto text-lg leading-relaxed text-[#DCDCDC] space-y-4">
            <p><strong className="text-[#D4AF37]">Email:</strong> <a href="mailto:test@kavarna.cz" className="hover:underline">test@kavarna.cz</a></p>
            <p><strong className="text-[#D4AF37]">Telefon:</strong> <a href="tel:+420777123456" className="hover:underline">+420 777 123 456</a></p>
            <p><strong className="text-[#D4AF37]">Adresa:</strong> Bugfixová 1, 110 00 Praha 1</p>
          </div>
        </section>
      </main>

      <footer className="bg-[#141414] py-8 text-center text-sm text-[#777] shadow-inner">
        <p>
          Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-[#C0C0C0] hover:text-[#D4AF37] transition-colors duration-300">DigitalFusion</a>
        </p>
      </footer>
    </div>
  );
}
