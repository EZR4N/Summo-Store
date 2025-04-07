# 🛒 Tienda Summo Store 

Este es un proyecto de ecommerce moderno y responsive en el cual los usuarios pueden buscar productos, ver detalles, agregar productos al carrito de compras y continuar al checkout (sin pago).  
Para desarrollarlo usé **React**, **Firebase** y **Sass**. Este ecommerce se basa en las mejores prácticas para UI/UX, optimización de performance y accesibilidad.

![Logo Summo Store](./public/assets/imagenes/Screenshot_10.png)

---

## ✨ Características Principales

- 🗂️ **Listado de productos** con categorías, marcas y filtros  

- 📝 **Detalle de los productos** con imágenes y descripción
- 📱 **Diseño responsive**
- ⏳ **Spinners de carga** con React Spinners
- 🖼️ **LazyLoad en imágenes** y `useMemo` para mejor rendimiento
- ⚠️ **Alertas** con SweetAlert
- 📦 **Catálogo en tiempo real** desde Firestore
- 🛒 **Carrito de compras persistente**
- ✅ **Checkout con validación de formularios**
- 📤 **Órdenes almacenadas** en Firebase
- 🔄 **Estado global** con Context API
- ⚡ **Rendimiento optimizado** con Vite
---

## 🛠️ Tech Stack

**Front:** React, React Router  
**Estilización:** Sass, Bootstrap  
**Base de datos:** Firebase  
**UI:** React Slick, React Spinners, SweetAlert  
**Variables de entorno:** Dotenv para API Key  

---

## 🎨 Diseño

Este ecommerce se basa en un wireframe creado por mi compañero de estudio **Juan Pousada**.

---

## 📦 Instalación y Configuración

### ✅ Requisitos Previos

- Node.js v16+  
- Cuenta de Firebase  
- CLI de Firebase (opcional para despliegue)

### 🔧 Pasos de instalación

```bash
git clone https://github.com/EZR4N/Summo-Store
cd "summo store"
npm install
npm run dev