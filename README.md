# equipo-c22-08-n-webapp

## Estructura del Proyecto



### Explicación de las carpetas y archivos:

- **`components/`**: Contiene los componentes reutilizables que se usarán en diferentes partes de la aplicación.
  - **`ui/`**: Componentes básicos de interfaz de usuario como botones, iconos, imágenes e inputs.
  - **`layout/`**: Componentes que forman la estructura general de las páginas (como el encabezado, pie de página y barra lateral).
  - **`widgets/`**: Componentes más complejos, como tarjetas de productos, perfiles de usuario y barras de búsqueda.
  
- **`pages/`**: Contiene las páginas principales de la aplicación.
  
- **`assets/`**: Archivos estáticos, como imágenes, iconos y otros recursos visuales.

Este formato en Markdown debería mostrarse correctamente cuando lo visualices en un entorno compatible con Markdown, como un repositorio en GitHub o un editor de texto.



src/
├── components/          # Componentes reutilizables
│   ├── ui/              # Componentes UI básicos
│   │   ├── Button.jsx
│   │   ├── Icon.jsx
│   │   ├── Image.jsx
│   │   └── Input.jsx
│   ├── layout/          # Componentes de estructura de página
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Sidebar.jsx
│   └── widgets/         # Componentes complejos o secciones
│       ├── ProductCard.jsx
│       ├── UserProfile.jsx
│       └── SearchBar.jsx
├── pages/               # Páginas principales
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
└── assets/              # Archivos estáticos (imágenes, iconos, etc.)
