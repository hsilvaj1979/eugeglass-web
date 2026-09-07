# Eugeglass

Sitio web premium para soluciones arquitectónicas en vidrio y aluminio en Santiago. Construido con Next.js 15, React 19, TypeScript, Tailwind CSS 4 y Supabase.

## Inicio rápido

1. Copia `.env.example` como `.env.local` y completa las credenciales de Supabase.
2. Instala dependencias: `npm install`.
3. Ejecuta el sitio: `npm run dev`.
4. Abre `http://localhost:3000`.

## Base de datos

1. Crea un proyecto en Supabase.
2. Ejecuta `supabase/migrations/202609070001_initial_schema.sql` en el SQL Editor o con el CLI de Supabase.
3. Opcionalmente ejecuta `supabase/seed/seed.sql`.
4. Configura las tres variables de entorno. `SUPABASE_SERVICE_ROLE_KEY` debe existir únicamente en Vercel y en el entorno local; nunca se expone al navegador.

El formulario guarda solicitudes y adjuntos privados en el bucket `consultas`. El panel visual es una base inicial; antes de uso público, protege sus rutas con Supabase Auth y añade políticas para el rol administrador.

## Estructura

- `app/`: rutas públicas, panel y API.
- `components/`: componentes reutilizables de identidad y layout.
- `lib/`: integraciones de servidor.
- `supabase/`: migraciones y datos iniciales.
- `docs/`: operación y despliegue.

## Despliegue en Vercel

1. Sube este repositorio a GitHub.
2. Importa el repositorio en Vercel.
3. Agrega las variables de `.env.example` en **Settings → Environment Variables**.
4. Despliega y apunta el dominio cuando esté disponible.

Consulta [la guía de puesta en marcha](docs/puesta-en-marcha.md) para los pasos detallados.
