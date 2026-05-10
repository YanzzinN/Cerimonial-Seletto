// components/titulo.tsx
"use client";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function Titulo() {
  const scrollToGallery = () => {
    const galleryElement = document.getElementById("galeria");
    if (galleryElement) galleryElement.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappNumber = "5521995651253";
  const message = encodeURIComponent(
    "Olá! Vi o site do Cerimonial Seletto e gostaria de agendar um evento.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/seletto1.webp"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-30 flex flex-col items-center text-center px-6 max-w-4xl">
        <h1 className="text-white text-5xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.9] md:leading-[0.8]">
          Cerimonial <br /> Seletto
        </h1>

        <p className="text-white/80 mt-6 text-base md:text-xl font-light max-w-xl leading-relaxed">
          Transformamos grandes sonhos em memórias eternas. Especialistas em
          celebrações personalizadas de alto padrão.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all group">
              <MessageCircle
                size={20}
                className="text-green-400 group-hover:text-black transition-colors"
              />
              <span className="font-medium text-sm md:text-base">
                Agende seu evento
              </span>
            </button>
          </a>
          <button
            onClick={scrollToGallery}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/40 text-white hover:bg-white/10 transition-all text-sm md:text-base"
          >
            Veja nossos trabalhos
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-white/50 text-[10px] uppercase tracking-[0.3em] animate-bounce">
        Role para baixo
      </div>
    </section>
  );
}
