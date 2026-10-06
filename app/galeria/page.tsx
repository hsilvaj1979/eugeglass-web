import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const galleryItems = [
  { src: "/images/cortinas-plegables-hero.png", alt: "Cortinas de cristal plegables en una terraza", height: "h-[360px]" },
  { src: "/images/galeria-terraza-cerrada.png", alt: "Terraza cerrada con paneles de cristal plegables", height: "h-[285px]" },
  { src: "/images/galeria-detalle-plegable.png", alt: "Detalle de herrajes de cortinas plegables", height: "h-[400px]" },
  { src: "/images/cortinas-plegables-hero.png", alt: "Sistema plegable abierto hacia un costado", height: "h-[435px]" },
  { src: "/images/galeria-terraza-cerrada.png", alt: "Cierre de cristal para terraza residencial", height: "h-[310px]" },
  { src: "/images/galeria-detalle-plegable.png", alt: "Paneles de cristal plegables en detalle", height: "h-[455px]" },
];

export default function Galeria() {
  return <>
    <SiteHeader />
    <PageHero eyebrow="GALERÍA" title="Cortinas plegables en detalle." copy="Inspiración para terrazas, balcones y quinchos con cierre de cristal a medida." />
    <main className="container columns-1 gap-5 py-20 md:columns-3">{galleryItems.map((item, index) => <figure key={`${item.src}-${index}`} className="mb-5 break-inside-avoid overflow-hidden rounded-[1.4rem]"><div aria-label={item.alt} className={`gallery-card ${item.height}`} role="img" style={{ backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(8, 28, 42, 0.32)), url('${item.src}')` }} /></figure>)}</main>
    <SiteFooter />
  </>;
}
