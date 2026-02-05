import "./globals.css";

export const metadata = {
  title: "Peluquería de Caballeros & Micropigmentación Capilar en Badajoz",
  description: "Peluquería de caballeros con diez años de experiencia en Badajoz",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        {/* TOP BAR - Información de contacto y redes sociales */}
        <div className="text-white text-xs py-2 border-b border-gray-800 overflow-x-auto" style={{backgroundColor: '#1a1a1a'}}>
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center sm:text-left text-xs">
              <span> +34 622 50 59 92 </span>
              <span className="hidden sm:inline">📧 hugogallardo2004@gmail.com</span>
            </div>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/hugoogallardo/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                Facebook
              </a>
              <a href="https://www.instagram.com/hugoogallardo/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* HEADER PRINCIPAL */}
        <header className="bg-black text-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
            {/* Navegación principal */}
            <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 text-xs sm:text-sm font-semibold uppercase tracking-wide">
              <a href="/" className="hover:text-gray-300 transition">
                Inicio
              </a>
              <a href="/quienes-somos" className="hover:text-gray-300 transition">
                Quiénes Somos
              </a>
              <a href="/servicios" className="hover:text-gray-300 transition">
                Servicios
              </a>
              <a href="/reservas" className="hover:text-gray-300 transition">
                Citas
              </a>
              <a href="/mis-citas" className="hover:text-gray-300 transition">
                Mis Citas
              </a>
              <a href="/contacto" className="hover:text-gray-300 transition">
                Contacto
              </a>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="text-white mt-8" style={{backgroundColor: '#000000'}}>
          <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
              {/* Información */}
              <div>
                <h3 className="font-bold mb-4 text-lg">Peluquería</h3>
                <p className="text-sm text-gray-300">Peluquería de caballeros y micropigmentación capilar</p>
              </div>

              {/* Horario */}
              <div>
                <h4 className="font-bold mb-4">Horario</h4>
                <p className="text-sm text-gray-300">L-V 10:00-14:00 h y 17:00-20:30 h</p>
                <p className="text-sm text-gray-300">S 10:00-14:00 h</p>
              </div>

              {/* Enlaces */}
              <div>
                <h4 className="font-bold mb-4">Enlaces</h4>
                <div className="flex flex-col gap-2 text-sm text-gray-300">
                  <a href="/quienes-somos" className="hover:text-white">Quiénes Somos</a>
                  <a href="/servicios" className="hover:text-white">Servicios</a>
                  <a href="/reservas" className="hover:text-white">Reservas</a>
                  <a href="/contacto" className="hover:text-white">Contacto</a>
                </div>
              </div>
            </div>

            
            
          </div>
        </footer>
      </body>
    </html>
  );
}
