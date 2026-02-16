# Guía de Despliegue en Hostinger

Esta aplicación es una Single Page Application (SPA) construida con React y Vite. Para desplegarla en Hostinger (o cualquier hosting compartido Apache), sigue estos pasos:

## 1. Preparación

Asegúrate de tener todas las dependencias instaladas:
```bash
npm install
```

## 2. Construcción (Build)

Ejecuta el comando de construcción para generar los archivos estáticos optimizados para producción:

```bash
npm run build
```

Este comando:
1. Verificará que no haya errores de TypeScript.
2. Generará una carpeta `dist` en la raíz de tu proyecto.

## 3. Subida de Archivos

1. **Accede a tu panel de Hostinger** (hPanel) y ve al **Administrador de Archivos**.
2. Navega a la carpeta `public_html`.
3. Borra cualquier archivo por defecto que pueda haber (como `default.php`).
4. **Sube el CONTENIDO de la carpeta `dist`** (no la carpeta `dist` en sí, sino lo que hay dentro) a `public_html`.
   - Deberías ver `index.html`, `assets/`, y otros archivos directamente en `public_html`.

## 4. Configuración de Rutas (.htaccess)

Hemos incluido automáticamente un archivo `.htaccess` en la carpeta `public` que se copiará a `dist` al construir. Este archivo es CRÍTICO para que funcionen las rutas de la aplicación (como `/contact`, `/pricing`, etc.) cuando el usuario recarga la página.

**Contenido de .htaccess (ya incluido):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

Si por alguna razón las rutas dan error 404, verifica que este archivo (sin nombre, solo extensión `.htaccess`) esté presente en `public_html`.

## 5. Variables de Entorno (Si aplica)

Si tu aplicación usa variables de entorno (como `VITE_SUPABASE_URL`), asegúrate de que estén definidas en tu archivo `.env` localmente AL MOMENTO DE HACER EL BUILD.
Vite "incrusta" estas variables en el código JavaScript durante el comando `npm run build`. No necesitas subir el archivo `.env` al servidor.

¡Tu sitio debería estar línea!
