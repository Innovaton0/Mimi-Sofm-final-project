# La Rama Tatuaje por Mimi Sofm

**La Rama Tatuaje** es una aplicación web diseñada para conectar a entusiastas de los tatuajes con artistas talentosos y diseños únicos. Los tatuadores pueden suscribirse a la plataforma para aumentar su visibilidad y llegar a una audiencia más amplia. Los clientes, por su parte, pueden descubrir fácilmente artistas y explorar ideas creativas para tatuajes personalizados o para una experiencia memorable en Barcelona. Es la herramienta perfecta para aquellos que buscan creatividad y talento en el apasionante mundo del tatuaje.

## Tecnologías Utilizadas

- **Visual Studio Code**: Entorno de desarrollo utilizado para escribir y depurar el código.

- **Vue.js**: Framework progresivo de JavaScript utilizado para construir interfaces de usuario interactivas y dinámicas.

- **Tailwind CSS**: Framework de CSS que facilita un diseño moderno, atractivo y responsive.

- **API**: Implementada para obtener y gestionar datos de tatuajes y tatuadores de manera eficiente.

- **Figma**: Herramienta de diseño utilizada para crear gráficos y prototipos visuales de alta calidad.

- **Canva**: Plataforma utilizada para la presentación visual del proyecto.

- **Trello**: Herramienta de gestión de proyectos utilizada para la planificación y organización del flujo de trabajo.

## Características

- **Búsqueda Rápida:** Encuentra fácilmente tatuajes y tatuadores con un potente motor de búsqueda.

- **Suscripción para Tatuadores:** Permite a los tatuadores aumentar su visibilidad y atraer más clientes.

- **Inspiración Creativa:** Explora ideas innovadoras y únicas para tus tatuajes.

- **Diseño Responsive:** Garantiza una experiencia de usuario óptima en todos los dispositivos, ya sea móvil, tablet o escritorio.

## Instalación

Para instalar y ejecutar la aplicación localmente, sigue estos pasos detallados:

1. **Clona este repositorio en tu máquina local:**

    ```bash
    git clone https://github.com/Innovaton0/Mimi-Sofm-final-project 
    ```

2. **Navega al directorio del proyecto:**

    ```bash
    cd Mimi-Sofm-final-project
    ```

3. **Instala las dependencias necesarias:**

    Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina. Luego, ejecuta el siguiente comando para instalar las dependencias del proyecto:

    ```bash
    npm install
    ```

4. **Obtener una llave de API externa:**

    La aplicación requiere una llave de API externa para acceder a ciertos servicios. Sigue estos pasos para configurarla con nuestras dependencias.

    - **Importa las dependencias necesarias en tu archivo de configuración o componente principal:**

      ```javascript
      import { defineStore } from 'pinia';
      import { faker } from '@faker-js/faker';
      import axios from 'axios';
      ```

    - **Obtén tu llave de API:**

      Regístrate en el proveedor del servicio API de 'Faker' y genera una llave de API. La llave es un identificador único que permite a la aplicación autenticar las solicitudes a la API. Aquí tienes un ejemplo de cómo se vería tu llave:

      ```plaintext
      key: "XkGd6JgK1qI30r2bIcuIbHz0wJzOpCPU8csyfDWp3X02K8m0xakAxFfV"
      ```

5. **Inicia la aplicación:**

    Ejecuta el siguiente comando para iniciar la aplicación en modo de desarrollo:

    ```bash
    npm run dev
    ```

6. **Accede a la aplicación:**

    Abre tu navegador y visita `http://localhost:5173/` para ver la aplicación en funcionamiento.

## Contribución

**¡Contribuciones son bienvenidas!** Si deseas contribuir al proyecto, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama para tus cambios:

    ```bash
    git checkout -b feature/new-feat
    ```

3. Realiza tus modificaciones y haz commit de los cambios:

    ```bash
    git commit -m 'add new feat'
    ```

4. Haz push de tus cambios a tu rama:

    ```bash
    git push origin feature/new-feat
    ```

5. Abre un Pull Request para revisión.

## Créditos

Este proyecto ha sido desarrollado por estudiantes en [CodeOp](http://codeop.tech), un prestigioso bootcamp de desarrollo front-end en Barcelona.

**Equipo de Desarrollo**: *Inno Melkonjan, Marianto Simó, Mateus França, e Ignacia Ossandón.*
