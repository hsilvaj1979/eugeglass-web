# Puesta en marcha de Eugeglass

## Datos provisionales

- Teléfono: +56 9 4987 2320
- Correo: chileventas2018@gmail.com
- Cobertura: Santiago, Chile
- Atención: lunes a viernes

Actualízalos en `configuracion` cuando se confirmen los datos definitivos.

## Seguridad antes de publicar

El endpoint de solicitudes usa la clave de servidor para poder registrar formularios sin exponer permisos al visitante. Conserva `SUPABASE_SERVICE_ROLE_KEY` como secreto exclusivo de Vercel. Añade protección con Supabase Auth a `/admin` y políticas específicas por usuario antes de entregar acceso a personal.

## Contenido

Las imágenes iniciales son referencias visuales remotas. Sustitúyelas por fotografías propias optimizadas (WebP o AVIF) y agrega texto real de proyectos, comunas y testimonios. No publiques afirmaciones de experiencia, garantía o certificaciones si no se pueden respaldar.

## Checklist de lanzamiento

- Variables de entorno configuradas en Vercel.
- Migración aplicada y bucket `consultas` confirmado como privado.
- Prueba completa del formulario con adjunto.
- Acceso al panel protegido.
- Título y descripción ajustados al dominio definitivo.
- Sitemap, Analytics y Search Console configurados cuando el dominio esté activo.
