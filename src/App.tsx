import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Sun, Radio, Building2, Wrench, Box, Users } from 'lucide-react';
import Timeline from './components/Timeline';
import ServiceCard from './components/ServiceCard';
import WorkProcess from './components/WorkProcess';
import Achievement from './components/Achievement';
import { logoImage, bannerImage } from './assets';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Telecommunication Engineering Services',
      icon: <Radio className="w-12 h-12" />,
      description: 'Comprehensive telecommunication solutions for modern connectivity needs.'
    },
    {
      title: 'Renewable Energies & Electrical Systems',
      icon: <Sun className="w-12 h-12" />,
      description: 'Sustainable energy solutions for a greener future.'
    },
    {
      title: 'Building & Civil Work',
      icon: <Building2 className="w-12 h-12" />,
      description: 'Expert construction and infrastructure development services.'
    },
    {
      title: 'Operation & Maintenance',
      icon: <Wrench className="w-12 h-12" />,
      description: 'Reliable maintenance services for optimal system performance.'
    },
    {
      title: 'Supply of Equipment',
      icon: <Box className="w-12 h-12" />,
      description: 'Quality equipment sourcing and supply chain management.'
    },
    {
      title: 'ICT Solutions',
      icon: <Users className="w-12 h-12" />,
      description: 'Advanced Information & Communication Technology solutions.'
    }
  ];

  const navLinks = ['Home', 'About Us', 'Services', 'Work Process', 'Projects'];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <img className="h-16 w-auto" src={logoImage} alt='SEEMADA'/>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className={`font-medium text-lg transition-colors ${
                    isScrolled ? 'text-gray-800 hover:text-[#9E191E]' : 'text-white hover:text-gray-200'
                  }`}
                >
                  {link}
                </a>
              ))}
              <a href='#contact' className={`px-6 py-2.5 rounded-md transition-all transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-[#9E191E] text-white hover:bg-red-800' 
                  : 'bg-white text-[#9E191E] hover:bg-gray-100'
              }`}>
                Get in Touch
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden" >
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block px-3 py-2 text-gray-800 hover:text-[#9E191E] transition-colors rounded-md hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a href='#contact' className="w-full mt-4 bg-[#9E191E] text-white px-3 py-2.5 rounded-md hover:bg-red-800 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl" id="home">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-[#9E191E] px-2 py-1 rounded-sm">
                SEEMADA
              </span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl">
                POWER & TECHNOLOGY
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Your trusted partner in Telecommunication, Renewable Energies, Construction, and Civil Engineering. 
              With a dynamic team of professionals and a commitment to excellence, we deliver high-value solutions 
              tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href='#services' className="bg-[#9E191E] text-white px-8 py-3.5 rounded-md hover:bg-red-800 transition-all transform hover:scale-105 text-lg font-medium">
                Learn More
              </a>
              <a href='#contact' className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-3.5 rounded-md hover:bg-white/20 transition-all transform hover:scale-105 text-lg font-medium">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2F2F39]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="about-us" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2F2F39]">Our Journey</h2>
          <Timeline />
        </div>
      </section>

      {/* Work Process Section */}
      <section id="work-process" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2F2F39]">How We Work</h2>
          <WorkProcess />
        </div>
      </section>

      {/* Achievements Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2F2F39]">Our Achievements</h2>
          <Achievement />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#87888A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-2xl p-8 lg:p-12">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#2F2F39]">Get in Touch</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
              <div>
                <h3 className="text-2xl font-semibold mb-8">Company Information</h3>
                <div className="space-y-6">
                  <p className="flex items-center text-lg">
                    <Building2 className="w-6 h-6 mr-4 text-[#9E191E]" />
                    SEEMADA POWER & TECHNOLOGY
                  </p>
                  <p className="flex items-center text-lg">
                    <MapPin className="w-6 h-6 mr-4 text-[#9E191E]" />
                    Lot CB 83 Ambatoroka - Antananarivo
                  </p>
                  <p className="flex items-center text-lg">
                    <Phone className="w-6 h-6 mr-4 text-[#9E191E]" />
                    Contact: Mr. RATOVOHERY Solonirina Tolotriniaina
                  </p>
                  <p className="flex items-center text-lg">
                    <Mail className="w-6 h-6 mr-4 text-[#9E191E]" />
                    solonirina.r@seemadapt.mg
                  </p>
                </div>
              </div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-[#9E191E] focus:ring focus:ring-[#9E191E] focus:ring-opacity-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-[#9E191E] focus:ring focus:ring-[#9E191E] focus:ring-opacity-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-[#9E191E] focus:ring focus:ring-[#9E191E] focus:ring-opacity-50"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#9E191E] text-white px-6 py-3 rounded-md hover:bg-red-800 transition-all transform hover:scale-105 text-lg font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2F2F39] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">SEEMADA</h3>
              <p className="text-gray-300 text-lg">
                Your trusted partner in technology and power solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(' ', '-')}`} 
                      className="text-gray-300 hover:text-white transition-colors text-lg"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.slice(0, 4).map((service) => (
                  <li key={service.title}>
                    <a 
                      href="#services" 
                      className="text-gray-300 hover:text-white transition-colors text-lg"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center text-lg">
                  <MapPin className="w-5 h-5 mr-3" />
                  Antananarivo, Madagascar
                </li>
                <li className="flex items-center text-lg">
                  <Phone className="w-5 h-5 mr-3" />
                  +261 34 33 795 86 / +261 38 57 012 98
                </li>
                <li className="flex items-center text-lg">
                  <Mail className="w-5 h-5 mr-3" />
                  solonirina.r@seemadapt.mg
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p className="text-lg">&copy; {new Date().getFullYear()} SEEMADA POWER & TECHNOLOGY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;