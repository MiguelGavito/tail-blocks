import { useState } from 'react'
import PrimaryButton from './PrimaryButton'

function SideBar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = ['Dashboard', 'Usuarios', 'Reportes', 'Configuración']

  return (
    <>
      {/* Botón para abrir sidebar */}
      <div className="fixed top-20 left-4 z-30">
        <PrimaryButton type="button" onClick={() => setIsOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </PrimaryButton>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Sidebar panel */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-white border-l border-gray-200 p-5 shadow-xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Sidebar"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Menú</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors"
          >
            ✕
          </button>
        </div>

        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default SideBar