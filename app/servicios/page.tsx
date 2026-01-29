export default function Servicios() {
  const servicios = [
    {
      nombre: "Corte de cabello",
      descripcion: "Estilo clásico y moderno",
      detalles: "Cortes personalizados adaptados a tu estilo y tipo de cabello. Desde cortes clásicos hasta los estilos más modernos y vanguardistas.",
      src: "/cabello.jpg",
      width: 64,
      height: 64,
    },
    {
      nombre: "Barba / Afeitado",
      descripcion: "Perfilado preciso",
      detalles: "Servicio completo de afeitado tradicional y perfilado de barba. Utilizamos técnicas clásicas con productos de alta calidad.",
      src: "/barba.jpg",
      width: 100,
      height: 100,
    },
    {
      nombre: "Micropigmentación",
      descripcion: "Técnica avanzada",
      detalles: "Micropigmentación capilar para disimular la calvicie y aportar densidad visual. Técnica avanzada con resultados naturales.",
      src: "/micro.jpg",
      width: 60,
      height: 60,
    },
    {
      nombre: "Coloración",
      descripcion: "Aplicación precisa",
      detalles: "Coloración profesional para cabello y barba. Productos de primera calidad para resultados duraderos y naturales.",
      src: "/color.jpg",
      width: 50,
      height: 50,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Nuestros
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-gray-800 to-gray-700">
              Servicios
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada servicio está diseñado con precisión y cuidado para que luzcas impresionante
          </p>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio) => (
            <div
              key={servicio.nombre}
              className="relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-100"
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
              <div className="relative h-full flex flex-col justify-end p-6 space-y-4">
                <h3 className="font-black text-2xl text-gray-900">
                  {servicio.nombre}
                </h3>
                <p className="text-gray-500 italic">
                  {servicio.descripcion}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {servicio.detalles}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/estrella.jpg"
                alt="Experiencia"
                className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-xl text-gray-900 mb-2">Experiencia</h3>
              <p className="text-gray-600">Más de 15 años perfeccionando nuestro arte</p>
            </div>
            <div className="text-center">
              <img
                src="/top.jpg"
                alt="Calidad"
                className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-xl text-gray-900 mb-2">Calidad</h3>
              <p className="text-gray-600">Productos premium y técnicas avanzadas</p>
            </div>
            <div className="text-center">
              <img
                src="/atencion.jpg"
                alt="Atención"
                className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-xl text-gray-900 mb-2">Atención</h3>
              <p className="text-gray-600">Servicio personalizado para cada cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            ¿Listo para tu nuevo look?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Reserva tu cita y experimenta nuestros servicios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/reservas"
              className="bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold px-8 py-4 rounded-full transition transform hover:scale-105 shadow-lg"
            >
              Reservar cita
            </a>
            <a
              href="tel:622505992"
              className="border-2 border-gray-700 text-gray-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition transform hover:scale-105"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
