import React from 'react';
import { Instagram, MessageCircle, MapPin, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useState, useEffect } from 'react';

const images = [
  'https://i.ibb.co/L74KZNf/Whats-App-Image-2025-01-30-at-09-37-18.jpg?ex=679cc9b8&is=679b7838&hm=03fd63f800682074fbbfdb307066cae2d570771c17c611592916f26aee64eb2c&=&format=webp&width=1202&height=676',
  'https://i.ibb.co/RkbxFtLN/Whats-App-Image-2025-01-30-at-09-53-44.jpg?ex=679cc9b8&is=679b7838&hm=e71ff81c9d3bcb1f956066bb795c7bfc59568973c0a271391ea36646216e04a3&=&format=webp&width=1202&height=676',
  'https://i.ibb.co/W4DCvHr6/Whats-App-Image-2025-01-30-at-10-14-17.jpg?ex=679cccf4&is=679b7b74&hm=dd8dd6e23bfe2eaeaaacc9de00d47ca68f5adb3c343e8d161192dd5965038b85&=&format=webp&width=901&height=676',
  //'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1920'
];

const amenities = [
  'Café da manhã incluso',
  'Wi-Fi gratuito',
  'Piscina',
  'Day Use',
  'Ar condicionado',
  'Vista para o mar'
];

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, []);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => nextImage(), 7000);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Carousel */}
      <div className="relative h-screen">
        {/* Navigation Arrows - Moved before the image for better z-index stacking */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors z-20 cursor-pointer shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors z-20 cursor-pointer shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute inset-0 z-10">
          <img
            src={images[currentImage]}
            alt="Pousada"
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
          <h1 className="text-5xl font-bold mb-4">Aconchego de Maricá</h1>
          <p className="text-xl mb-8">Seu refúgio à beira-mar</p>
          <a
            href="https://api.whatsapp.com/send/?phone=5521970091790&text&type=phone_number&app_absent=09"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Reserve Agora
          </a>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Bem-vindo ao Paraíso</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Localizada em um dos pontos mais privilegiados do litoral, a Pousada Aconchego de Maricá oferece uma experiência única de hospedagem, combinando conforto, tranquilidade e uma vista deslumbrante para o mar.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nossos quartos são equipados com todo o conforto que você precisa, e nossa equipe está sempre pronta para tornar sua estadia inesquecível.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-800">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2">Localização</h3>
              <p className="text-gray-600">Rua 127, Cordeirinho<br />Maricá - RJ</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className="text-gray-600">(21) 97009-1790</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2">E-mail</h3>
              <p className="text-gray-600">aconchegodemarica@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.instagram.com/pousadaaconchegodemarica/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5521970091790&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center text-gray-400">
            © 2025 Pousada Aconchedo de Maricá. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;