export default function Contacto() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Contacto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para atenderte. Visítanos, llámanos o síguenos en redes sociales
          </p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Información Principal */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-2xl text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl"></span>
                Ubicación
              </h3>
              <p className="text-gray-700 text-lg">Avenida Sinforiano Madroñero</p>
              <p className="text-gray-700 text-lg">Badajoz, España</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-2xl text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl"></span>
                Teléfono
              </h3>
              <a 
                href="tel:622505992" 
                className="text-gray-700 hover:text-gray-900 font-semibold text-2xl transition"
              >
                622 50 59 92
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-2xl text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl"></span>
                Horario
              </h3>
              <div className="space-y-2 text-lg">
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
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-2xl text-gray-900 mb-6">
                Síguenos en Redes Sociales
              </h3>
              <div className="space-y-6">
                <a 
                  href="https://www.facebook.com/PeluqueriaJairollera/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition group"
                >
                  <div className="text-4xl"></div>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-blue-600 transition">Facebook</p>
                    <p className="text-sm text-gray-600">@hugoogallardo</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.instagram.com/peluqueriajairollera/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-pink-50 transition group"
                >
                  <div className="text-4xl"></div>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-pink-600 transition">Instagram</p>
                    <p className="text-sm text-gray-600">@hugoogallardo</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
                  <div className="text-4xl"></div>
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <a 
                      href="mailto:hugogallardo2004@gmail.com"
                      className="text-sm text-gray-600 hover:text-gray-900 transition"
                    >
                      hugogallardo2004@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Cómo llegar */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-2xl text-gray-900 mb-4">
                Cómo Llegar
              </h3>
              <p className="text-gray-600 mb-4">
                Estamos ubicados en el centro de Badajoz, fácil acceso en transporte público y aparcamiento cercano.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Avenida+Sinforiano+Madroñero+Badajoz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold px-6 py-3 rounded-full transition transform hover:scale-105"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            ¿Listo para tu cita?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Reserva ahora y asegura tu espacio
          </p>
          <a
            href="/reservas"
            className="inline-block bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold px-8 py-4 rounded-full transition transform hover:scale-105 shadow-lg"
          >
            Reservar cita
          </a>
        </div>
      </section>
    </div>
  );
}
