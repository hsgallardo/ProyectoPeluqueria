import Image from "next/image";

export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes line-expand {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-line-expand {
          animation: line-expand 0.8s ease-out;
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center mb-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 animate-fade-in-up">
            Quiénes
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-gray-800 to-gray-700 animate-slide-in-right">
              Somos
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2" style={{animation: 'fade-in-up 0.6s ease-out 0.2s both'}}>
            Peluquería de caballeros & micropigmentación con atención personalizada y cuidado al detalle
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
                Nuestro
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-gray-800 to-gray-700">
                  establecimiento
                </span>
              </h2>
              <div className="h-1 w-12 bg-gray-700 rounded-full animate-line-expand"></div>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed transition-all duration-300 hover:text-gray-900">
              Peluquería de caballeros & micropigmentación con atención personalizada y cuidado al detalle. Con más de 15 años de experiencia en el sector, garantizamos el mejor servicio.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed transition-all duration-300 hover:text-gray-900">
              Nuestro compromiso es ofrecer un servicio de calidad, donde cada cliente recibe una atención única y profesional. Nos especializamos en cortes clásicos y modernos, así como en técnicas avanzadas de micropigmentación capilar.
            </p>
            <div className="space-y-3 pt-4">
              {[
                { icon: '📅', titulo: 'Horario', texto: 'Lunes a Viernes 10:00 – 20:30' },
                { icon: '📍', titulo: 'Dirección', texto: 'Avenida Sinforiano Madroñero' },
                { icon: '📞', titulo: 'Teléfono', texto: '622 50 59 92' },
              ].map((item, idx) => (
                <div 
                  key={item.titulo}
                  className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2 cursor-pointer group"
                  style={{animation: `fade-in-up 0.6s ease-out ${(idx + 1) * 0.1}s both`}}
                >
                  <span className="text-2xl text-gray-700 group-hover:scale-110 transition-transform">{item.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900">{item.titulo}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group animate-slide-in-right" style={{animation: 'slide-in-right 0.6s ease-out 0.2s both'}}>
            <div className="relative aspect-square w-full max-w-lg mx-auto lg:mx-0 overflow-hidden rounded-xl">
              <Image
                src="/quienes.png"
                alt="Interior de la peluquería"
                width={600}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 shadow-2xl rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-6 sm:mb-8 text-center animate-fade-in-up">
            Nuestra Historia
          </h2>
          <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            {[
              'Fundada hace más de 15 años en Badajoz, nuestra peluquería nació con la visión de combinar la tradición de la barbería clásica con las técnicas más modernas del sector.',
              'A lo largo de los años, hemos perfeccionado nuestro arte y expandido nuestros servicios para incluir micropigmentación capilar, convirtiéndonos en referentes en la zona.',
              'Cada cliente que entra por nuestra puerta recibe un trato personalizado, porque creemos que cada persona merece lucir su mejor versión.'
            ].map((p, idx) => (
              <p 
                key={idx}
                className="transition-all duration-300 hover:text-gray-900 hover:translate-x-2 cursor-pointer"
                style={{animation: `fade-in-up 0.6s ease-out ${(idx + 1) * 0.15}s both`}}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6">
            ¿Listo para conocernos?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Reserva tu cita y descubre la experiencia completa
          </p>
          <a
            href="/reservas"
            className="inline-block bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition transform hover:scale-105 shadow-lg text-sm sm:text-base group relative overflow-hidden"
          >
            <span className="relative z-10">Reservar cita</span>
            <div className="absolute inset-0 bg-linear-to-r from-gray-800 to-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </a>
        </div>
      </section>
    </div>
  );
}
