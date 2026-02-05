export default function Contacto() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center animate-bounce-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
            Contacto
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Estamos aquí para atenderte. Elige tu forma preferida de contacto
          </p>
        </div>
      </section>

      {/* Tarjetas principales en 3 columnas */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              icon: '📍', 
              titulo: 'Ubicación', 
              contenido: 'Avenida Sinforiano Madroñero, Badajoz, España',
              delay: 0 
            },
            { 
              icon: '📞', 
              titulo: 'Teléfono', 
              contenido: '622 50 59 92', 
              isPhone: true, 
              delay: 0.1 
            },
            { 
              icon: '📅', 
              titulo: 'Horario', 
              contenido: 'Lunes a Viernes: 10:00 - 20:30 | Sábado: 10:00 - 14:00',
              delay: 0.2 
            },
          ].map((item) => (
            <a
              key={item.titulo}
              href={item.isPhone ? 'tel:622505992' : undefined}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-gray-300 transition-all duration-300 group"
              style={{animation: `bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${item.delay}s both`}}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-3">{item.titulo}</h3>
              <p className={`${item.isPhone ? 'text-lg sm:text-2xl font-semibold text-blue-600 group-hover:text-blue-700' : 'text-gray-600 text-sm sm:text-base leading-relaxed'}`}>
                {item.contenido}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Redes Sociales y Email */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Redes Sociales */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100" style={{animation: `bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both`}}>
            <h3 className="font-bold text-2xl sm:text-3xl text-gray-900 mb-6">
              Síguenos
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: '👨',
                  nombre: 'Facebook',
                  handle: '@hugoogallardo',
                  url: 'https://www.instagram.com/hugoogallardo/'
                },
                {
                  icon: '📷',
                  nombre: 'Instagram',
                  handle: '@hugoogallardo',
                  url: 'https://www.instagram.com/hugoogallardo/'
                }
              ].map((social) => (
                <a
                  key={social.nombre}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition group"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform">{social.icon}</div>
                  <div className="flex-1">
                    <p className="font-bold text-lg text-gray-900">{social.nombre}</p>
                    <p className="text-sm text-gray-600">{social.handle}</p>
                  </div>
                  <div className="text-2xl group-hover:translate-x-2 transition">→</div>
                </a>
              ))}
            </div>
          </div>

          {/* Email y Mapa */}
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group" style={{animation: `bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both`}}>
              <h3 className="font-bold text-2xl sm:text-3xl text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-4xl">✉️</span>
                Email
              </h3>
              <a
                href="mailto:hugogallardo2004@gmail.com"
                className="text-blue-600 hover:text-blue-700 font-semibold text-lg break-all transition"
              >
                hugogallardo2004@gmail.com
              </a>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all" style={{animation: `bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both`}}>
              <h3 className="font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
                Cómo Llegar
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                Centro de Badajoz. Acceso en transporte público y aparcamiento cercano.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Avenida+Sinforiano+Madroñero+Badajoz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition group"
              >
                Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center" style={{animation: `bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both`}}>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            ¿Listo para tu cita?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Reserva ahora y asegura tu espacio
          </p>
          <a
            href="/reservas"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition transform hover:scale-105 shadow-lg"
          >
            Reservar cita
          </a>
        </div>
      </section>
    </div>
  );
}