# equipo-c22-08-n-webapp

## Titulo Proyecto
## Tecnologias
## Descripcion, target
## Estado
## Versiones   (badges)
## Capturas de la funcionalidad  /// dependiendo del publico objetivo 
## Como instalar / flujo de proyecto
## Licencias (opcional)

## Estructura del Proyecto




### Explicación de las carpetas y archivos:

- **`components/`**: Contiene los componentes reutilizables que se usarán en diferentes partes de la aplicación.
  - **`ui/`**: Componentes básicos de interfaz de usuario como botones, iconos, imágenes e inputs.
  - **`layout/`**: Componentes que forman la estructura general de las páginas (como el encabezado, pie de página y barra lateral).
  - **`widgets/`**: Componentes más complejos, como tarjetas de productos, perfiles de usuario y barras de búsqueda.
  
- **`pages/`**: Contiene las páginas principales de la aplicación.
  
- **`assets/`**: Archivos estáticos, como imágenes, iconos y otros recursos visuales.




# Estructura del Proyecto

Este proyecto está organizado de la siguiente manera:

```plaintext
📁 equipo-c22-08-n-webapp
└── 📁 fronted
    ├── 📁 public
    │   └── vite.svg
    ├── 📁 src
    │   ├── 📁 assets
    │   │   ├── adopt.jpg
    │   │   ├── defaultPet.jpg
    │   │   ├── ourMission.jpg
    │   │   ├── pet.avif
    │   │   └── whyAdopt.avif
    │   ├── 📁 components
    │   │   ├── 📁 layout
    │   │   │   ├── Footer.jsx
    │   │   │   ├── Header.jsx
    │   │   │   ├── Layout.jsx
    │   │   │   ├── LayoutLogin.jsx
    │   │   │   └── LayoutPets.jsx
    │   │   ├── 📁 router
    │   │   │   └── Router.jsx
    │   │   ├── 📁 routes
    │   │   │   └── index.jsx
    │   │   └── 📁 ui
    │   │       ├── Button.jsx
    │   │       ├── Card.jsx
    │   │       ├── CardsCarusel.jsx
    │   │       ├── CatIconButton.jsx
    │   │       ├── DogIconButton.jsx
    │   │       ├── Filter.jsx
    │   │       ├── FindForm.jsx
    │   │       ├── Image.jsx
    │   │       ├── ImageCarousel.jsx
    │   │       ├── Input.jsx
    │   │       ├── InputForm.jsx
    │   │       ├── Pet.jsx
    │   │       ├── PetGrid.jsx
    │   │       └── SelectForm.jsx
    │   ├── 📁 hooks
    │   │   ├── index.js
    │   │   ├── PetProfile.jsx
    │   │   └── useFetch.js
    │   ├── 📁 pages
    │   │   ├── About.jsx
    │   │   ├── Adopt.jsx
    │   │   ├── Adoption.jsx
    │   │   ├── CreateAccount.jsx
    │   │   ├── CreateAccountMultiSep.jsx
    │   │   ├── Example.jsx
    │   │   ├── Index.jsx
    │   │   ├── Login.jsx
    │   │   ├── RecoverPassword.jsx
    │   │   ├── ShelterEvents.jsx
    │   │   └── SolicAdopt.jsx
    │   ├── 📁 store
    │   │   ├── appContext.jsx
    │   │   └── flux.jsx
    │   ├── 📁 utils
    │   │   └── helpers.js
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── tailwind.config.js
    └── vite.config.js
```



### Nota:
- Cada carpeta y archivo está representado por íconos para facilitar la visualización.
- Actualiza esta estructura según se agreguen o eliminen elementos del proyecto.
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
