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
        <div className="text-white text-xs py-2 border-b border-gray-800" style={{backgroundColor: '#1a1a1a'}}>
          <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
            <div className="flex gap-4">
              <span> +34 622 50 59 92 </span>
              <span>📧 hugogallardo2004@gmail.com</span>
            </div>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/PeluqueriaJairollera/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                Facebook
              </a>
              <a href="https://www.instagram.com/peluqueriajairollera/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* HEADER PRINCIPAL */}
        <header className="bg-black text-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-6">
            {/* Navegación principal */}
            <nav className="flex justify-center gap-8 text-sm font-semibold uppercase tracking-wide">
              <a href="/" className="hover:text-gray-300 transition">
                Inicio
              </a>
              <a href="#quienes-somos" className="hover:text-gray-300 transition">
                Quiénes Somos
              </a>
              <a href="#servicios" className="hover:text-gray-300 transition">
                Servicios
              </a>
              <a href="/reservas" className="hover:text-gray-300 transition">
                Citas
              </a>
              <a href="#contacto" className="hover:text-gray-300 transition">
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
        <footer className="text-white mt-20" style={{backgroundColor: '#000000'}}>
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-3 gap-8 mb-8">
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
                  <a href="#quienes-somos" className="hover:text-white">Quiénes Somos</a>
                  <a href="#servicios" className="hover:text-white">Servicios</a>
                  <a href="/reservas" className="hover:text-white">Reservas</a>
                </div>
              </div>
            </div>

            
            
          </div>
        </footer>
      </body>
    </html>
  );
}
