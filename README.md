# Mi Portafolio Profesional - Gustavo "Guti" Solar 🚀

¡Hola! Bienvenido al repositorio de mi portafolio personal.

Este proyecto nace de la necesidad de mostrar **quién soy realmente**: un profesional híbrido que combina la solidez del **Soporte Técnico** con la creatividad del **Desarrollo de Software**. No quería el típico sitio de plantilla; quería algo que se sintiera "mío", con una estética cuidada y una estructura que contara mi historia profesional.

## 🛠️ Tecnologías y Herramientas

Decidí construir esto desde cero para tener control total sobre el código y el diseño.

- **Backend:** Node.js + Express. Aunque al final se exporta como estático, usé Express para desarrollar de forma modular y organizada.
- **Templating:** EJS (Embedded JavaScript). Me permitió separar componentes como el `navbar`, `footer` y las `cards` de proyectos para no repetir código.
- **Estilos:** CSS3 Puro (Vanilla). Sin frameworks pesados. Usé variables CSS para la paleta de colores "Cyberpunk/Dark" y animaciones `keyframes` para darle vida a la interfaz. Si! Utilicé a la IA para apoyarme en el diseño, no soy muy bueno con CSS JAJAJA.
- **Build System:** Creé un script personalizado (`build.js`) que "congela" mi aplicación dinámica y la convierte en archivos HTML estáticos, perfecto para un despliegue rápido y seguro en Netlify.

## 💡 ¿Cómo fue planeado?

La idea principal fue la **separación de contextos**. Tengo mucha experiencia en infraestructura y soporte (Poder Judicial, Entel, etc.), pero también estoy construyendo cosas increíbles en desarrollo.

1.  **Diseño:** Opté por un tema oscuro con acentos neón (Indigo, Magenta, Teal) para transmitir modernidad y tecnología.
2.  **Estructura de Datos:** En lugar de escribir HTML a mano para cada proyecto, creé un archivo `projects.json`. Esto me permite agregar o modificar proyectos en el futuro simplemente editando un JSON.
3.  **Desafíos:**
    - _El Navbar:_ Quería que el Home fuera limpio, así que el menú solo aparece tras hacer clic en "Comenzar".
    - _Responsividad:_ Me aseguré de que se viera bien tanto en el celular como en el monitor.
    - _Imágenes:_ Tuve que reorganizar la estructura de carpetas para asegurar que las rutas funcionaran tanto en desarrollo local como en el build final.

## 🚀 Cómo correr este proyecto

Si quieres ver cómo está hecho por dentro:

1.  **Instalar dependencias:**

    ```bash
    npm install
    ```

2.  **Modo Desarrollo (con recarga automática):**

    ```bash
    npm run dev
    ```

    Abre `http://localhost:3000` en tu navegador.

3.  **Generar versión estática (Build):**
    ```bash
    npm run build
    ```
    Esto creará una carpeta `dist/` lista para producción.

---

_Hecho con ❤️, 💻 y ☕ por Gutischigami._

_Concepción, 2025._
