-- Eugeglass: esquema inicial. Ejecutar con `supabase db push` o en el SQL Editor.
create extension if not exists "uuid-ossp";
create type consulta_estado as enum ('nueva','en_proceso','cotizada','aceptada','cerrada');
create table public.servicios (id uuid primary key default uuid_generate_v4(), nombre text not null, descripcion text, imagen text, orden integer not null default 0, activo boolean not null default true, created_at timestamptz not null default now());
create table public.proyectos (id uuid primary key default uuid_generate_v4(), titulo text not null, descripcion text, categoria text, imagen_principal text, destacado boolean not null default false, publicado boolean not null default false, created_at timestamptz not null default now());
create table public.galeria (id uuid primary key default uuid_generate_v4(), proyecto_id uuid references public.proyectos(id) on delete cascade, imagen text not null, alt text, orden integer not null default 0, created_at timestamptz not null default now());
create table public.preguntas_frecuentes (id uuid primary key default uuid_generate_v4(), pregunta text not null, respuesta text not null, orden integer not null default 0, activo boolean not null default true);
create table public.consultas (id uuid primary key default uuid_generate_v4(), nombre text not null, correo text not null, telefono text not null, comuna text not null, direccion text, tipo_proyecto text, servicio text, medidas text, comentarios text, estado consulta_estado not null default 'nueva', notas_internas text, created_at timestamptz not null default now());
create table public.archivos (id uuid primary key default uuid_generate_v4(), consulta_id uuid not null references public.consultas(id) on delete cascade, archivo text not null, nombre text, tipo text, created_at timestamptz not null default now());
create table public.configuracion (id uuid primary key default uuid_generate_v4(), nombre_empresa text not null default 'Eugeglass', correo text, telefono text, direccion text, horario text, cobertura text default 'Santiago, Chile', updated_at timestamptz not null default now());
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types) values ('consultas','consultas',false,10485760,array['image/jpeg','image/png','application/pdf']) on conflict (id) do nothing;
alter table public.servicios enable row level security; alter table public.proyectos enable row level security; alter table public.galeria enable row level security; alter table public.preguntas_frecuentes enable row level security; alter table public.consultas enable row level security; alter table public.archivos enable row level security; alter table public.configuracion enable row level security;
create policy "Lectura publica servicios" on public.servicios for select using (activo=true);
create policy "Lectura publica proyectos" on public.proyectos for select using (publicado=true);
create policy "Lectura publica galeria" on public.galeria for select using (true);
create policy "Lectura publica faq" on public.preguntas_frecuentes for select using (activo=true);
-- El service role empleado por la API omite RLS. El panel debe añadir políticas por rol admin antes de publicarse.
