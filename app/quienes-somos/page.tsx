import Image from "next/image";

export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center mb-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
            Quiénes
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-gray-800 to-gray-700">
              Somos
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Peluquería de caballeros & micropigmentación con atención personalizada y cuidado al detalle
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
                Nuestro
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-gray-800 to-gray-700">
                  establecimiento
                </span>
              </h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Peluquería de caballeros & micropigmentación con atención personalizada y cuidado al detalle. Con más de 15 años de experiencia en el sector, garantizamos el mejor servicio.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Nuestro compromiso es ofrecer un servicio de calidad, donde cada cliente recibe una atención única y profesional. Nos especializamos en cortes clásicos y modernos, así como en técnicas avanzadas de micropigmentación capilar.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl text-gray-700"></span>
                <div>
                  <p className="font-bold text-gray-900">Horario</p>
                  <p className="text-gray-600 text-sm sm:text-base">Lunes a Viernes 10:00 – 20:30</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-gray-700"></span>
                <div>
                  <p className="font-bold text-gray-900">Dirección</p>
                  <p className="text-gray-600 text-sm sm:text-base">Avenida Sinforiano Madroñero</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-gray-700"></span>
                <div>
                  <p className="font-bold text-gray-900">Teléfono</p>
                  <p className="text-gray-600 text-sm sm:text-base">622 50 59 92</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-gray-600 to-gray-700 rounded-xl opacity-75 group-hover:opacity-100 transition blur group-hover:blur-lg"></div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/quienes.png"
                alt="Interior de la peluquería"
                width={600}
                height={400}
                className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-6 sm:mb-8 text-center">
            Nuestra Historia
          </h2>
          <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>
              Fundada hace más de 15 años en Badajoz, nuestra peluquería nació con la visión de combinar la tradición de la barbería clásica con las técnicas más modernas del sector.
            </p>
            <p>
              A lo largo de los años, hemos perfeccionado nuestro arte y expandido nuestros servicios para incluir micropigmentación capilar, convirtiéndonos en referentes en la zona.
            </p>
            <p>
              Cada cliente que entra por nuestra puerta recibe un trato personalizado, porque creemos que cada persona merece lucir su mejor versión.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6">
            ¿Listo para conocernos?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Reserva tu cita y descubre la experiencia completa
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
