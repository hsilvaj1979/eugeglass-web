import { Check, PanelsTopLeft, Ruler, ShieldCheck, Wind } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const benefits = [
  [Wind, "Protección del clima", "Ayuda a reducir el impacto de viento, polvo y lluvia."],
  [PanelsTopLeft, "Apertura plegable", "Los paneles se desplazan y se recogen hacia un costado."],
  [ShieldCheck, "Seguridad y resistencia", "Configuración de vidrio y herrajes definida para cada proyecto."],
  [Check, "Diseño elegante", "Un cierre discreto que conserva luz y vista hacia el exterior."],
] as const;

export default function FichaTecnica() {
  return <>
    <SiteHeader />
    <PageHero eyebrow="FICHA TÉCNICA" title="Cortinas de cristal plegables." copy="Un sistema a medida para cerrar, abrir y disfrutar tu terraza durante todo el año." />
    <main className="container py-16 md:py-24">
      <section className="overflow-hidden rounded-[2rem] border border-[#102d45]/15 bg-white shadow-xl shadow-[#102d45]/10">
        <div className="grid lg:grid-cols-[.92fr_1.08fr]">
          <div className="p-7 md:p-10">
            <div className="flex items-center gap-4"><div className="flex gap-1" aria-hidden="true">{[0, 1, 2].map((item) => <i className="block h-11 w-5 skew-y-[33deg] border-2 border-[#102d45]" key={item} />)}</div><div><p className="text-xs font-bold tracking-[.2em] text-[#278998]">EUGEGLASS</p><p className="text-xs tracking-[.14em] text-slate-500">FICHA REFERENCIAL</p></div></div>
            <div className="mt-12 border-b border-[#b38353] pb-5"><p className="text-xs font-bold tracking-[.18em] text-[#278998]">SISTEMA PLEGABLE</p><h1 className="display mt-3 text-4xl leading-none text-[#102d45] md:text-5xl">Cortinas de<br />cristal plegables</h1><p className="mt-5 text-sm font-bold tracking-[.08em] text-[#b38353]">DISFRUTA TUS ESPACIOS TODO EL AÑO</p></div>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-600">Solución moderna y elegante para terrazas, balcones y quinchos. Protege tu espacio sin renunciar a la luz ni a la conexión con el exterior.</p>
            <div className="mt-8 grid gap-5">{benefits.map(([Icon, title, copy]) => <div className="flex gap-4" key={title}><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#102d45] text-[#9ee3e9]"><Icon size={19} /></span><div><h2 className="text-sm font-bold text-[#102d45]">{title}</h2><p className="mt-1 text-sm leading-5 text-slate-600">{copy}</p></div></div>)}</div>
          </div>
          <div className="flex flex-col bg-[#e8f5f7] p-5 md:p-8">
            <div className="min-h-[380px] flex-1 rounded-tr-[5rem] bg-cover bg-center" style={{ backgroundImage: "linear-gradient(180deg, transparent 35%, rgba(8, 28, 42, .28)), url('/images/cortinas-plegables-hero.png')" }} />
            <div className="mt-5 grid gap-4 md:grid-cols-[1fr_.9fr]"><div className="rounded-xl bg-[#102d45] p-5 text-white"><p className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#9ee3e9]"><ShieldCheck size={17} /> CIERRE PLEGABLE</p><p className="mt-3 text-sm leading-6 text-slate-200">Los paneles se desplazan y se pliegan para abrir el vano de manera flexible.</p></div><div className="rounded-xl border border-[#102d45]/10 bg-white p-5"><p className="text-xs font-bold tracking-wider text-[#278998]">IDEAL PARA</p><p className="mt-3 text-sm font-semibold leading-6 text-[#102d45]">Terrazas<br />Balcones<br />Quinchos</p></div></div>
          </div>
        </div>
        <div className="border-t border-[#102d45]/10 bg-[#f7fafb] p-7 md:p-10"><div className="grid items-center gap-10 lg:grid-cols-[1fr_.9fr]"><div><p className="text-xs font-bold tracking-[.18em] text-[#278998]">DISEÑO DEL SISTEMA</p><h2 className="display mt-3 text-3xl text-[#102d45]">Paneles que se recogen en un extremo.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">La configuración, cantidad de hojas y sentido de apertura se definen de acuerdo con el vano, la superficie de apoyo y la forma de uso de tu espacio.</p></div><div className="rounded-xl border border-[#102d45]/10 bg-white p-5"><svg viewBox="0 0 510 190" className="h-auto w-full" aria-label="Esquema referencial de paneles plegables" role="img"><path d="M35 158H475" stroke="#102d45" strokeWidth="5" strokeLinecap="round"/><path d="M48 35V158M130 35V158M212 35V158M294 35V158M376 35V158" stroke="#278998" strokeWidth="4"/><path d="M48 35H130V158H48ZM130 35H212V158H130ZM212 35H294V158H212ZM294 35H376V158H294Z" fill="#dceff8" fillOpacity=".75" stroke="#102d45" strokeWidth="3"/><path d="M398 52L450 73L421 149L369 128Z" fill="#9ee3e9" stroke="#102d45" strokeWidth="3"/><path d="M383 56C405 44 427 45 449 61" fill="none" stroke="#b38353" strokeWidth="3" strokeDasharray="7 6"/><circle cx="48" cy="158" r="6" fill="#b38353"/><circle cx="130" cy="158" r="6" fill="#b38353"/><circle cx="212" cy="158" r="6" fill="#b38353"/><circle cx="294" cy="158" r="6" fill="#b38353"/><text x="47" y="181" fill="#64748b" fontSize="12">guía inferior</text><text x="359" y="27" fill="#64748b" fontSize="12">pliegue lateral</text></svg></div></div></div>
        <div className="grid border-t border-[#102d45]/10 md:grid-cols-4"><div className="p-6"><p className="text-xs font-bold tracking-widest text-[#278998]">VIDRIO</p><p className="mt-2 text-sm font-semibold text-[#102d45]">10 o 12 mm*</p></div><div className="border-t border-[#102d45]/10 p-6 md:border-l md:border-t-0"><p className="text-xs font-bold tracking-widest text-[#278998]">CONFIGURACIÓN</p><p className="mt-2 text-sm font-semibold text-[#102d45]">A medida del vano</p></div><div className="border-t border-[#102d45]/10 p-6 md:border-l md:border-t-0"><p className="text-xs font-bold tracking-widest text-[#278998]">APERTURA</p><p className="mt-2 text-sm font-semibold text-[#102d45]">Plegable y lateral</p></div><div className="border-t border-[#102d45]/10 p-6 md:border-l md:border-t-0"><p className="text-xs font-bold tracking-widest text-[#278998]">EVALUACIÓN</p><p className="mt-2 text-sm font-semibold text-[#102d45]">Visita técnica previa</p></div></div>
      </section>
      <p className="mt-5 text-xs leading-5 text-slate-500">*Información referencial. El espesor, cantidad de paneles, herrajes y configuración final se determinan mediante evaluación técnica del proyecto.</p>
      <section className="mt-16 rounded-[2rem] bg-[#102d45] p-8 text-white md:p-12"><p className="text-xs font-bold tracking-[.18em] text-[#9ee3e9]">SEGURIDAD PARA BALCONES</p><h2 className="display mt-4 text-4xl">Una solución evaluada para tu espacio.</h2><p className="mt-4 max-w-3xl leading-7 text-slate-300">La Ley N.º 21.842 reconoce sistemas adicionales, permanentes y resistentes para prevenir caídas accidentales. Revisamos cada caso para proponer una alternativa acorde al espacio, la instalación y las exigencias de la comunidad.</p><a className="btn btn-primary mt-7 bg-[#36b9c8] hover:bg-[#248f9d]" href="/contacto">Solicitar evaluación</a></section>
    </main>
    <SiteFooter />
  </>;
}
