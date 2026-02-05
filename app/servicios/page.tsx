export default function Servicios() {
  const servicios = [
    {
      nombre: "Corte de cabello",
      descripcion: "Estilo clásico y moderno",
      detalles: "Cortes personalizados adaptados a tu estilo y tipo de cabello. Desde cortes clásicos hasta los estilos más modernos y vanguardistas.",
      src: "/cabello.jpg",
      width: 64,
      height: 64,
      precio: "18€",
      tiempo: "30 min",
    },
    {
      nombre: "Barba / Afeitado",
      descripcion: "Perfilado preciso",
      detalles: "Servicio completo de afeitado tradicional y perfilado de barba. Utilizamos técnicas clásicas con productos de alta calidad.",
      src: "/barba.jpg",
      width: 100,
      height: 100,
      precio: "11€",
      tiempo: "20 min",
    },
    {
      nombre: "Micropigmentación",
      descripcion: "Técnica avanzada",
      detalles: "Micropigmentación capilar para disimular la calvicie y aportar densidad visual. Técnica avanzada con resultados naturales.",
      src: "/micro.jpg",
      width: 60,
      height: 60,
      precio: "80€",
      tiempo: "60 min",
    },
    {
      nombre: "Coloración",
      descripcion: "Aplicación precisa",
      detalles: "Coloración profesional para cabello y barba. Productos de primera calidad para resultados duraderos y naturales.",
      src: "/color.jpg",
      width: 50,
      height: 50,
      precio: "50€",
      tiempo: "45 min",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-linear-to-b from-gray-300 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
            Nuestros
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-gray-800 to-gray-700">
              Servicios
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Cada servicio está diseñado con precisión y cuidado para que luzcas impresionante
          </p>
        </div>
      </section>

      {/* Servicios Grid */}
        <section className="py-6 sm:py-12 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicios.map((servicio) => (
            <div
              key={servicio.nombre}
              className="relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 min-h-80 sm:h-auto"
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0">
                <img
                  src={servicio.src}
                  alt={servicio.nombre}
                  className="w-full h-full object-cover opacity-65"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/40 to-white/"></div>
              </div>
              
              {/* Contenido */}
              <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="font-black text-xl sm:text-2xl text-gray-900">
                  {servicio.nombre}
                </h3>
                <p className="text-gray-500 italic text-sm sm:text-base">
                  {servicio.descripcion}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {servicio.detalles}
                </p>
                
                {/* Precio y Tiempo */}
                <div className="flex justify-between items-center pt-3 sm:pt-4 border-t border-gray-300 mt-4 sm:mt-6">
                  <div className="flex gap-4 sm:gap-6">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Precio</p>
                      <p className="font-bold text-lg sm:text-xl text-gray-900">{servicio.precio}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Tiempo</p>
                      <p className="font-bold text-lg sm:text-xl text-gray-900">{servicio.tiempo}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-8 sm:mb-12 text-center">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <img
                src="/estrella.jpg"
                alt="Experiencia"
                className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Experiencia</h3>
              <p className="text-gray-600 text-sm sm:text-base">Más de 15 años perfeccionando nuestro arte</p>
            </div>
            <div className="text-center">
              <img
                src="/top.jpg"
                alt="Calidad"
                className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Calidad</h3>
              <p className="text-gray-600 text-sm sm:text-base">Productos premium y técnicas avanzadas</p>
            </div>
            <div className="text-center">
              <img
                src="/atencion.jpg"
                alt="Atención"
                className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Atención</h3>
              <p className="text-gray-600 text-sm sm:text-base">Servicio personalizado para cada cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6">
            ¿Listo para tu nuevo look?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Reserva tu cita y experimenta nuestros servicios
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/reservas"
              className="bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Reservar cita
            </a>
            <a
              href="tel:622505992"
              className="border-2 border-gray-700 text-gray-700 hover:bg-gray-100 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition transform hover:scale-105 text-sm sm:text-base"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
