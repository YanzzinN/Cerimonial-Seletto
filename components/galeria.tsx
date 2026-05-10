// components/galeria.tsx
"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Galeria() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  const images = [
    { src: "/seletto2.webp", alt: "Estética Refinada" },
    { src: "/seletto3.webp", alt: "Memórias Eternizadas" },
    { src: "/seletto4.webp", alt: "Vivências Memoráveis" },
    { src: "/seletto5.webp", alt: "Momentos Únicos" },
    { src: "/seletto7.webp", alt: "Experiências inesquecíveis" },
    { src: "/seletto9.webp", alt: "Momentos Singulares" },
    { src: "/seletto10.webp", alt: "Projetos Personalizados" },
    { src: "/seletto11.webp", alt: "Padrão de Excelência" },
  ];

  return (
    <section id="galeria" className="py-16 md:py-24 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 pb-8 md:pb-10">
          <div>
            <h2 className="text-3xl md:text-6xl font-light tracking-tighter text-zinc-900 mb-2 md:mb-4">
              Momentos <span className="italic font-serif text-zinc-400">Eternizados</span>
            </h2>
            <p className="text-zinc-400 uppercase text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] font-medium">
              Curadoria de celebrações exclusivas
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing px-4 md:px-0" ref={emblaRef}>
        <div className="flex gap-4 md:gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_35%] h-[50vh] md:h-[70vh] min-h-[400px] min-w-0 group"
            >
              <div className="relative w-full h-full overflow-hidden bg-zinc-200 rounded-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 85vw, 35vw"
                  className="object-cover transition-all duration-[1.5s] ease-out group-hover:scale-105"
                />
                {/* Overlay: No mobile, deixamos ele levemente visível ou apenas no toque */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-6 md:p-10">
                  <span className="text-white/60 text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-2">
                    Galeria Cerimonial Seletto
                  </span>
                  <h3 className="text-white text-xl md:text-3xl font-light">
                    {img.alt}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}