export default function Contacto() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
            Contacto
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Estamos aquí para atenderte. Visítanos, llámanos o síguenos en redes sociales
          </p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-8 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Información Principal */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl"></span>
                Ubicación
              </h3>
              <p className="text-gray-700 text-base sm:text-lg">Avenida Sinforiano Madroñero</p>
              <p className="text-gray-700 text-base sm:text-lg">Badajoz, España</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl"></span>
                Teléfono
              </h3>
              <a 
                href="tel:622505992" 
                className="text-gray-700 hover:text-gray-900 font-semibold text-xl sm:text-2xl transition"
              >
                622 50 59 92
              </a>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl"></span>
                Horario
              </h3>
              <div className="space-y-2 text-sm sm:text-lg">
                <p className="text-gray-700">
                  <span className="font-semibold">Lunes a Viernes:</span> 10:00 - 14:00 y 17:00 - 20:30
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Sábado:</span> 10:00 - 14:00
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Domingo:</span> Cerrado
                </p>
              </div>
            </div>
          </div>
          
          {/* Redes Sociales y Email */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-4 sm:mb-6">
                Síguenos en Redes Sociales
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <a 
                  href="https://www.facebook.com/hugoogallardo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-blue-50 transition group"
                >
                  <div className="text-3xl sm:text-4xl"></div>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-blue-600 transition text-base sm:text-lg">Facebook</p>
                    <p className="text-xs sm:text-sm text-gray-600">@hugoogallardo</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.instagram.com/hugoogallardo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-pink-50 transition group"
                >
                  <div className="text-3xl sm:text-4xl"></div>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-pink-600 transition text-base sm:text-lg">Instagram</p>
                    <p className="text-xs sm:text-sm text-gray-600">@hugoogallardo</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-gray-50">
                  <div className="text-3xl sm:text-4xl"></div>
                  <div>
                    <p className="font-bold text-gray-900 text-base sm:text-lg">Email</p>
                    <a 
                      href="mailto:hugogallardo2004@gmail.com"
                      className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition break-all"
                    >
                      hugogallardo2004@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Cómo llegar */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-3 sm:mb-4">
                Cómo Llegar
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Estamos ubicados en el centro de Badajoz, fácil acceso en transporte público y aparcamiento cercano.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Avenida+Sinforiano+Madroñero+Badajoz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold px-5 sm:px-6 py-2 sm:py-3 rounded-full transition transform hover:scale-105 text-sm sm:text-base"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6">
            ¿Listo para tu cita?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Reserva ahora y asegura tu espacio
          </p>
          <a
            href="/reservas"
            className="inline-block bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            Reservar cita
          </a>
        </div>
      </section>
    </div>
  );
}
