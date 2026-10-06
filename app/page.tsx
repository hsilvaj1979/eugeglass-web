import { ArrowUpRight, Check, PanelsTopLeft, Phone, Ruler, ShieldCheck, Wind } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const features = [
  [PanelsTopLeft, "Apertura total", "Los paneles se deslizan y se recogen para liberar la vista y el paso."],
  [ShieldCheck, "Vidrio de seguridad", "Configuramos el sistema según las necesidades técnicas de cada espacio."],
  [Wind, "Protección climática", "Ayuda a disminuir el impacto del viento, polvo y lluvia en tu terraza."],
  [Ruler, "Fabricación a medida", "Medidas, recorrido y espesores definidos después de evaluar tu proyecto."],
] as const;

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <section className="glass-image min-h-[690px] text-white"><div className="container flex min-h-[690px] items-end py-20"><div className="max-w-3xl">
        <p className="mb-5 text-xs font-bold tracking-[.18em] text-[#9ee3e9]">CORTINAS DE CRISTAL PLEGABLES · SANTIAGO</p>
        <h1 className="display text-6xl leading-[.91] md:text-8xl">Abre tu terraza.<br />Conserva tu vista.</h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-100">Diseñamos e instalamos cortinas de cristal plegables a medida para disfrutar balcones, terrazas y quinchos durante todo el año.</p>
        <div className="mt-9 flex flex-wrap gap-3"><a className="btn btn-primary bg-[#36b9c8] hover:bg-[#248f9d]" href="/contacto">Solicitar evaluación <ArrowUpRight size={17} /></a><a className="btn btn-secondary" href="tel:+56949872320"><Phone size={16} /> +56 9 4987 2320</a></div>
      </div></div></section>

      <section id="sistema" className="container grid gap-12 py-24 md:grid-cols-[1fr_1.5fr]"><div><p className="eyebrow">UN SOLO SISTEMA, BIEN RESUELTO</p><h2 className="display mt-4 text-5xl">Especialistas en cortinas plegables.</h2></div><p className="text-xl leading-9 text-slate-600">Nos enfocamos exclusivamente en cierres de cristal plegables. Eso nos permite cuidar el recorrido de cada panel, las terminaciones y la experiencia de uso desde la primera visita hasta la instalación.</p></section>

      <section className="folding-glass-section py-24"><div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr]"><div className="folding-glass-image min-h-[520px] rounded-tr-[6rem]" /><div className="flex flex-col justify-center"><p className="eyebrow">CORTINAS DE CRISTAL PLEGABLES</p><h2 className="display mt-4 text-5xl leading-[.95] md:text-6xl">Disfruta tus espacios todo el año.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Una solución elegante para terrazas, quinchos y balcones que protege del clima sin perder amplitud ni luminosidad.</p><div className="mt-9 grid gap-4 sm:grid-cols-2">{features.map(([Icon, title, copy]) => <div className="border-t border-[#102d45]/20 pt-4" key={title}><Icon size={21} className="text-[#278998]" /><h3 className="mt-3 text-sm font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{copy}</p></div>)}</div><aside className="mt-8 border-l-4 border-[#b38353] bg-white p-5 shadow-sm"><p className="flex items-center gap-2 text-sm font-bold text-[#102d45]"><ShieldCheck size={19} className="text-[#278998]" /> Seguridad para balcones</p><p className="mt-3 text-sm leading-6 text-slate-600">La Ley N.º 21.842 reconoce sistemas adicionales, permanentes y resistentes para prevenir caídas accidentales. Evaluamos cada caso para proponer una solución acorde al espacio y a las condiciones del edificio.</p><p className="mt-3 text-xs leading-5 text-slate-500">La solución final depende de la evaluación técnica, la instalación y las exigencias de la comunidad o administración.</p></aside><div className="mt-9 flex flex-wrap gap-3"><a className="btn btn-primary" href="/contacto">Solicitar evaluación <ArrowUpRight size={17} /></a><a className="btn btn-outline" href="/ficha-tecnica">Ver ficha técnica</a></div></div></div></section>

      <section className="border-y border-slate-200 bg-white py-24"><div className="container"><p className="eyebrow">PROCESO DE TRABAJO</p><h2 className="display mt-3 text-5xl">Tu cierre, hecho para tu espacio.</h2><div className="mt-12 grid border-l border-t border-slate-200 md:grid-cols-3">{[["01", "Evaluación", "Revisamos medidas, vano, orientación y condiciones de instalación."], ["02", "Propuesta", "Definimos la configuración del sistema y una cotización clara."], ["03", "Instalación", "Fabricamos e instalamos con terminaciones cuidadas."]].map(([number, title, copy]) => <article key={number} className="min-h-52 border-b border-r border-slate-200 p-7"><span className="text-sm text-[#278998]">{number}</span><h3 className="mt-10 text-xl font-bold">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">{copy}</p></article>)}</div></div></section>

      <section className="container py-24"><p className="eyebrow">INSTALACIONES</p><div className="mt-4 flex items-end justify-between"><h2 className="display text-5xl">Espacios abiertos a la vista.</h2><a href="/galeria" className="hidden text-sm font-bold md:block">Ver galería →</a></div><div className="mt-10 grid gap-5 md:grid-cols-3">{[["/images/cortinas-plegables-hero.png", "Terraza residencial"], ["/images/galeria-terraza-cerrada.png", "Cierre de terraza"], ["/images/galeria-detalle-plegable.png", "Detalle del sistema"]].map(([src, title]) => <a href="/galeria" className="gallery-card flex h-96 items-end rounded-[1.4rem] p-6 text-white" style={{ backgroundImage: `linear-gradient(180deg, transparent 25%, rgba(8, 28, 42, .68)), url('${src}')` }} key={title}><div><p className="text-xs font-bold tracking-widest text-[#9ee3e9]">CORTINAS PLEGABLES</p><p className="mt-2 text-lg font-bold">{title}</p></div></a>)}</div></section>

      <section className="bg-[#dceff8] py-24"><div className="container grid gap-10 md:grid-cols-2"><div><p className="eyebrow">EUGEGLASS</p><h2 className="display mt-4 text-5xl">Una instalación clara, de principio a fin.</h2></div><div className="grid gap-4 sm:grid-cols-2">{["Asesoría especializada", "Sistema a medida", "Instalación profesional", "Atención en Santiago"].map((item) => <div className="flex gap-3 border-t border-[#102d45]/20 py-5 text-sm font-bold" key={item}><Check size={18} className="text-[#278998]" />{item}</div>)}</div></div></section>
      <section className="container py-24 text-center"><p className="eyebrow">COMENCEMOS</p><h2 className="display mx-auto mt-4 max-w-3xl text-5xl md:text-6xl">Dale a tu terraza la flexibilidad que necesita.</h2><div className="mt-8 flex flex-wrap justify-center gap-3"><a className="btn btn-primary" href="/contacto">Solicitar presupuesto <ArrowUpRight size={17} /></a><a className="btn btn-outline" href="tel:+56949872320"><Phone size={16} /> +56 9 4987 2320</a></div></section>
    </main>
    <SiteFooter />
  </>;
}
