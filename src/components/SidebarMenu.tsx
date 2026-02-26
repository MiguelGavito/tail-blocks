type SidebarMenuProps = {
	isOpen: boolean
	onClose: () => void
}

function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
	const menuItems = ['Dashboard', 'Usuarios', 'Reportes', 'Configuración']

	return (
		<>
			<div
				onClick={onClose}
				className={`fixed inset-0 z-40 bg-black/30 transition-opacity ${
					isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
				}`}
				aria-hidden="true"
			/>

			<aside
				className={`fixed right-0 top-0 z-50 h-full w-72 bg-white border-l border-gray-200 p-5 shadow-lg transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
				aria-label="Sidebar"
			>
				<div className="mb-6 flex items-center justify-between">
					<h2 className="text-lg font-semibold text-gray-900">Menú</h2>
					<button
						type="button"
						onClick={onClose}
						className="rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
					>
						Cerrar
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

export default SidebarMenu
