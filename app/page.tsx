import Image from "next/image";

export default function Home() {
  const servicios = [
    {
      nombre: "Corte de cabello",
      descripcion: "Estilo clásico y moderno",
      src: "https://peluqueriajairollera.com/wp-content/uploads/2024/04/icons8-cutting-64.png",
      width: 64,
      height: 64,
    },
    {
      nombre: "Barba / Afeitado",
      descripcion: "Perfilado preciso",
      src: "https://peluqueriajairollera.com/wp-content/uploads/2024/04/icons8-straight-razor-100.png",
      width: 100,
      height: 100,
    },
    {
      nombre: "Micropigmentación",
      descripcion: "Técnica avanzada",
      src: "https://peluqueriajairollera.com/wp-content/uploads/2024/04/icons8-tattoo-machine-60.png",
      width: 60,
      height: 60,
    },
    {
      nombre: "Coloración",
      descripcion: "Aplicación precisa",
      src: "https://peluqueriajairollera.com/wp-content/uploads/2024/04/icons8-drop-of-blood-50.png",
      width: 50,
      height: 50,
    },
  ];

  return (
    <div className="flex flex-col">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(107, 114, 128, 0.5); }
          50% { box-shadow: 0 0 20px rgba(107, 114, 128, 0.8); }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes number-count {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
      `}</style>

      {/* HERO CON FOTO DE FONDO - Mejorado */}
      <section
        className="relative min-h-screen sm:h-screen flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: 'url(/peluqueria2.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.2) 0%, transparent 50%)'
        }}></div>
        
        <div className="relative z-10 text-white px-4 sm:px-6 max-w-3xl mx-auto py-16 sm:py-0 animate-slide-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
            Peluquería
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-gray-100 via-white to-gray-100 animate-pulse-glow">
              Corte y Brocha
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 drop-shadow-lg text-gray-100 font-light" style={{animation: 'slide-up 0.8s ease-out 0.2s both'}}>
            Donde la tradición encuentra el estilo moderno
          </p>
          <a
            href="/reservas"
            className="inline-block bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition transform hover:scale-105 shadow-lg text-sm sm:text-base"
            style={{animation: 'slide-up 0.8s ease-out 0.4s both'}}
          >
            Reserva tu cita ahora
          </a>
        </div>
      </section>

      {/* INFO + IMAGEN - Mejorado */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-white w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                Nuestro
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-gray-800 to-gray-700">
                  establecimiento
                </span>
              </h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Peluquería de caballeros & micropigmentación con atención personalizada y cuidado al detalle. Con más de 15 años de experiencia en el sector, garantizamos el mejor servicio.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2 cursor-pointer">
                <span className="text-2xl text-gray-700">📅</span>
                <div>
                  <p className="font-bold text-gray-900">Horario</p>
                  <p className="text-gray-600">Lunes a Viernes 10:00 – 20:30</p>
                </div>
              </div>
              <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2 cursor-pointer">
                <span className="text-2xl text-gray-700">📍</span>
                <div>
                  <p className="font-bold text-gray-900">Dirección</p>
                  <p className="text-gray-600">Avenida Sinforiano Madroñero</p>
                </div>
              </div>
              <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2 cursor-pointer">
                <span className="text-2xl text-gray-700">📞</span>
                <div>
                  <p className="font-bold text-gray-900">Teléfono</p>
                  <p className="text-gray-600">622 50 59 92</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group animate-float" style={{animation: 'float 3s ease-in-out infinite 0.2s'}}>
            <div className="absolute -inset-1 bg-linear-to-r from-gray-600 to-gray-700 rounded-xl opacity-75 group-hover:opacity-100 transition blur group-hover:blur-lg"></div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl animate-pulse-glow">
              <Image
                src="/corte.jpg"
                alt="Interior de la peluquería"
                width={600}
                height={400}
                className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS - Mejorado */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full" style={{background: 'linear-gradient(to bottom, #1a1a1a, #2a2a2a, #1a1a1a)'}}>
        <div>
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Nuestros servicios
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Cada servicio está diseñado con precisión y cuidado para que lucidores impresionante
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {servicios.map((servicio, idx) => (
              <div
                key={servicio.nombre}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
                style={{
                  animation: `slide-up 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Card base */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-gray-600 via-gray-500 to-gray-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                
                <div className="relative rounded-xl overflow-hidden h-full transition-all duration-300 group-hover:scale-105" style={{backgroundColor: '#252525', transformOrigin: 'center'}}>
                  {/* Contenido */}
                  <div className="h-32 sm:h-40 flex flex-col justify-center items-center bg-linear-to-br from-gray-700 to-gray-800 p-4 sm:p-6 text-center group-hover:bg-gray-700 transition" style={{backgroundImage: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)'}}>
                    <img
                      src={servicio.src}
                      alt={servicio.nombre}
                      width={servicio.width}
                      height={servicio.height}
                      className="object-contain mb-2 group-hover:scale-110 transition w-12 h-12 sm:w-16 sm:h-16 animate-rotate-slow"
                      style={{animation: 'rotate-slow 4s linear infinite'}}
                    />
                  </div>

                  {/* Info siempre visible + overlay */}
                  <div className="p-4 sm:p-6 group-hover:bg-gray-700 transition space-y-2 group-hover:translate-y-1" style={{backgroundColor: '#252525'}}>
                    <h3 className="font-bold text-base sm:text-lg text-white">{servicio.nombre}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition">
                      {servicio.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL - Mejorado */}
      <section className="py-12 sm:py-18 px-4 sm:px-8 md:px-12 lg:px-16 bg-white w-full">
        <div className="text-center space-y-6 sm:space-y-8 animate-slide-up">
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
              ¿Listo para tu
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-gray-800 to-gray-700" style={{animation: 'pulse 2s ease-in-out infinite'}}>
                nuevo look?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Reserva tu cita online en segundos. Nuestro equipo experto te está esperando.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
            <a
              href="/reservas"
              className="bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition transform hover:scale-105 shadow-lg text-sm sm:text-base group relative overflow-hidden"
              style={{
                animation: 'slide-up 0.8s ease-out 0.2s both'
              }}
            >
              <span className="relative z-10">Reservar cita</span>
              <div className="absolute inset-0 bg-linear-to-r from-gray-800 to-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            <a
              href="tel:622505992"
              className="border-2 border-gray-700 text-gray-700 hover:bg-gray-100 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition text-sm sm:text-base group"
              style={{
                animation: 'slide-up 0.8s ease-out 0.3s both'
              }}
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
