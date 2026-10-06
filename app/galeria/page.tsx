import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const galleryItems = [
  { src: "/images/cortinas-plegables-hero.png", alt: "Cortinas de cristal plegables en una terraza", height: "h-[360px]" },
  { src: "/images/galeria-terraza-cerrada.png", alt: "Terraza cerrada con paneles de cristal", height: "h-[285px]" },
  { src: "/images/galeria-detalle-plegable.png", alt: "Detalle de herrajes para cortinas plegables", height: "h-[400px]" },
  { src: "/images/galeria-shower-door.png", alt: "Shower door de cristal a medida", height: "h-[435px]" },
  { src: "/images/galeria-baranda-cristal.png", alt: "Baranda de cristal en escalera residencial", height: "h-[310px]" },
  { src: "/images/galeria-espejo-medida.png", alt: "Espejo decorativo a medida en recibidor", height: "h-[455px]" },
  { src: "/images/galeria-terraza-cerrada.png", alt: "Solución de cierre de terraza con cristal", height: "h-[330px]" },
  { src: "/images/galeria-baranda-cristal.png", alt: "Pasamanos y protección de cristal", height: "h-[370px]" },
  { src: "/images/galeria-detalle-plegable.png", alt: "Sistema plegable de cristal en detalle", height: "h-[275px]" },
];

export default function Galeria() {
  return (
    <>
      <SiteHeader />
      <PageHero eyebrow="GALERÍA" title="Detalles que hacen la diferencia." copy="Una colección de soluciones en cristal para inspirar tus espacios." />
      <main className="container columns-1 gap-5 py-20 md:columns-3">
        {galleryItems.map((item, index) => (
          <figure key={`${item.src}-${index}`} className="mb-5 break-inside-avoid overflow-hidden rounded-[1.4rem]">
            <div aria-label={item.alt} className={`gallery-card ${item.height}`} role="img" style={{ backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(8, 28, 42, 0.32)), url('${item.src}')` }} />
          </figure>
        ))}
      </main>
      <SiteFooter />
    </>
  );
}
