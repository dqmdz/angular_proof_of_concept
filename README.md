# Angular Proof of Concept - User Management

![Angular Logo](https://angular.io/assets/images/logos/angular/angular.svg)

## 📋 Descripción

Este proyecto es una aplicación Angular desarrollada como prueba de concepto para la gestión de usuarios. Incluye funcionalidades como listado, creación, edición y eliminación de usuarios. La aplicación interactúa con un backend que almacena los datos de usuario e implementa varios componentes de UI como modales, formularios y tablas paginadas.

## 🚀 Características Principales

- Listado de usuarios con paginación
- Creación de nuevos usuarios
- Edición de usuarios existentes
- Eliminación de usuarios
- Filtrado de usuarios por ID
- Integración con backend RESTful

## 🛠 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado en tu sistema:

- Node.js (versión 14 o superior)
- Angular CLI (versión 18 o superior)

Para instalar Angular CLI globalmente, usa:

```bash
npm install -g @angular/cli
```

## 🏁 Inicio Rápido

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/dqmdz/angular_proof_of_concept.git
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd angular_proof_of_concept
   ```

3. **Instala las dependencias:**

   ```bash
   npm install
   ```

4. **Ejecuta la aplicación:**

   ```bash
   ng serve
   ```

   La aplicación estará disponible en `http://localhost:4200/`.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   ├── about/
│   │   ├── users/
│   │   ├── list-users/
│   │   ├── add-user/
│   ├── service/
│   │   └── user.service.ts
│   └── app.routes.ts
├── styles.css
```

## 💡 Componentes Clave

### 🏠 Home Component
- Página principal de la aplicación
- Incluye navbar para navegación

###  About Component
- Muestra información sobre la aplicación
- Incluye versión de Angular y enlaces al repositorio backend

### 👥 User Management
- **List Users**: Muestra lista paginada de usuarios con opciones de filtrado y edición
- **Add User**: Formulario para agregar nuevos usuarios con validación

## 🔧 Tecnologías Utilizadas

- Angular 18+
- Bootstrap para estilos
- ReactiveFormsModule para manejo de formularios
- HttpClient para integración con backend

## 🔗 Backend

El frontend interactúa con un backend RESTful. El repositorio del backend se encuentra [aquí](https://github.com/dqmdz/express_proof_of_concept/tree/express-proof-of-concept-sqlite).

## 🎨 Estilos

La aplicación utiliza Bootstrap para garantizar una UI responsiva y moderna.

## 🏁 Conclusión

Este proyecto demuestra un ejemplo completo pero sencillo de gestión de usuarios en una aplicación Angular, cubriendo los fundamentos de interacción entre componentes, formularios, modales, paginación, filtrado e integración con backend.

---

