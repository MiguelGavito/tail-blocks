# Tail-Blocks

Mini aplicación React con layout completo y componentes reutilizables.

## Instalación

```bash
npm install
npm run dev
```

## Estructura

- `Header` - Navegación superior
- `SideBar` - Menú lateral desplegable
- `Content` - Contenido principal (pricing)
- `Footer` - Pie de página

**Componentes reutilizables:**
- `PrimaryButton` - Botón con estilos consistentes
- `SideBar` - Panel lateral con estado
- `InfoCard` - Tarjetas de información

## Decisiones de diseño

**Sidebar como drawer**: Panel deslizante desde la derecha en vez de fijo. Ahorra espacio en móviles y no tapa contenido.

**Colores indigo + grises**: Esquema simple, buen contraste y profesional.

**Componentes con props**: Reutilizables sin copiar código. TypeScript ayuda a evitar errores.

**Estados hover y focus-visible**: Para que sea usable con mouse y teclado.

## Utilidades Tailwind más usadas

**Flexbox** (`flex`, `flex-col`, `items-center`, `justify-between`)
- Para layouts sin escribir CSS custom

**Spacing** (`p-4`, `px-5`, `mb-6`, `space-y-2`)
- Espaciado consistente con escala de 4px

**Responsive** (`md:w-1/2`, `lg:w-1/3`)
- Breakpoints para adaptar a móvil/tablet/desktop

**Colores** (`bg-indigo-600`, `text-gray-900`)
- Paleta predefinida, evita inventar colores

**Interactividad** (`hover:bg-indigo-500`, `focus-visible:ring-2`, `transition-colors`)
- Feedback visual sin JavaScript adicional

**Posicionamiento** (`fixed`, `right-0`, `z-50`)
- Para overlay y sidebar flotante

**Transformaciones** (`translate-x-full`, `opacity-0`)
- Animaciones del drawer sin CSS custom
