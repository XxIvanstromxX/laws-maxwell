# 🧲⚡ Ecuaciones de Maxwell - Visualización Interactiva


## 📖 Descripción

Este proyecto es una aplicación web interactiva desarrollada con React y Vite que explora y visualiza las cuatro ecuaciones fundamentales de Maxwell, pilares del electromagnetismo moderno. Cada sección ofrece explicaciones detalladas, representaciones matemáticas y visualizaciones dinámicas para facilitar la comprensión de estos conceptos físicos esenciales.

## ✨ Características

- **Interfaz responsiva y moderna** con efectos de animación usando Framer Motion
- **Visualizaciones interactivas** de cada ley para mejorar la comprensión intuitiva
- **Diseño atractivo** con temática oscura y efectos visuales inspirados en la física
- **Navegación fluida** entre las diferentes leyes
- **Efectos de partículas y animaciones matemáticas** para ilustrar conceptos complejos

## 🔬 Contenido de las Leyes de Maxwell

### 1. Ley de Gauss para el Campo Eléctrico
- Fórmula: ∇·E = ρ/ε₀
- Visualización del campo eléctrico de una carga puntual
- Explicación de sus implicaciones y aplicaciones

### 2. Ley de Gauss para el Campo Magnético
- Fórmula: ∇·B = 0
- Visualización de líneas de campo magnético cerradas
- Explicación de la inexistencia de monopolos magnéticos

### 3. Ley de Inducción de Faraday
- Fórmula: ∇×E = -∂B/∂t
- Demostración de la inducción electromagnética
- Aplicaciones en generadores y transformadores

### 4. Ley de Ampere-Maxwell
- Fórmula: ∇×B = μ₀J + μ₀ε₀∂E/∂t
- Visualización de campos magnéticos producidos por corrientes
- Explicación del término de corriente de desplazamiento añadido por Maxwell

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca para construir interfaces de usuario
- **Vite** - Herramienta de compilación que proporciona una experiencia de desarrollo más rápida
- **Tailwind CSS 4** - Framework CSS para diseño rápido y responsivo
- **Framer Motion** - Biblioteca para animaciones fluidas y reactivas
- **React Intersection Observer** - Para animaciones activadas al desplazarse
- **React Icons** - Conjunto de iconos para la interfaz

## 🚀 Instalación y Uso

1. Clona este repositorio:
   ```bash
   git clone https://github.com/XxIvanstromxX/laws-maxwell.git
   cd laws-maxwell
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:####`

## 📁 Estructura del Proyecto

- `/src/components` - Componentes reutilizables (Header, Footer, AnimatedSection)
- `/src/sections` - Componentes principales para cada ley de Maxwell
  - `Hero.jsx` - Sección de portada con animaciones introductorias
  - `GaussElectricLaw.jsx` - Primera ley de Maxwell
  - `GaussMagneticLaw.jsx` - Segunda ley de Maxwell
  - `FaradayLaw.jsx` - Tercera ley de Maxwell
  - `AmpereMaxwellLaw.jsx` - Cuarta ley de Maxwell
- `/public` - Recursos estáticos


## 🧠 Aprendizaje y Recursos

Este proyecto sirve como herramienta educativa para:
- Estudiantes de física e ingeniería eléctrica
- Entusiastas de la ciencia interesados en el electromagnetismo
- Desarrolladores que buscan ejemplos de visualizaciones científicas en React

## 🤝 Contribuir

Las contribuciones son bienvenidas. Si deseas contribuir:
1. Haz un fork del repositorio
2. Crea una rama para tu función (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Distribuido bajo la Licencia MIT. Consulta `LICENSE` para más información.

## 📬 Contacto

Iván Martínez - [@xVan24x](https://twitter.com/xVan24x) - axel-ivan24@hotmail.com

Link del proyecto: [https://github.com/XxIvanstromxX/laws-maxwell](https://github.com/XxIvanstromxX/laws-maxwell)

---

⚡ **Desarrollado con pasión por la física y el desarrollo web** 🧲
