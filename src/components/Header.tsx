
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-psychPurple-700">МайндфулКоннекшнс</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="font-medium animated-underline">Услуги</a>
          <a href="#about" className="font-medium animated-underline">О нас</a>
          <a href="#testimonials" className="font-medium animated-underline">Отзывы</a>
          <a href="#faq" className="font-medium animated-underline">Вопросы</a>
          <a href="#contact" className="font-medium animated-underline">Контакты</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-psychPurple-600 hover:bg-psychPurple-700">Записаться на консультацию</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background animate-fade-in">
          <div className="flex flex-col space-y-4 px-6 py-6">
            <a href="#services" className="font-medium py-2" onClick={toggleMenu}>Services</a>
            <a href="#about" className="font-medium py-2" onClick={toggleMenu}>About</a>
            <a href="#testimonials" className="font-medium py-2" onClick={toggleMenu}>Testimonials</a>
            <a href="#faq" className="font-medium py-2" onClick={toggleMenu}>FAQ</a>
            <a href="#contact" className="font-medium py-2" onClick={toggleMenu}>Contact</a>
            <Button className="bg-psychPurple-600 hover:bg-psychPurple-700 w-full">Book a Consultation</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
