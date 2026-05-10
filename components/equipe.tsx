import Image from "next/image";

export default function Equipe() {
  const membros = [
    { nome: "Laura", cargo: "CERIMONIALISTA & FUNDADORA" },
    { nome: "Danyele", cargo: "CERIMONIALISTA" },
    { nome: "Thalla", cargo: "CERIMONIALISTA" },
    { nome: "Vanessa", cargo: "CERIMONIALISTA" },
  ];

  return (
    <section id="equipe" className="py-24 bg-white text-[#111]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="md:col-span-6 space-y-12 order-2 md:order-1">
            <div className="space-y-4">
              <span className="text-sm font-light tracking-[0.3em] text-neutral-400 uppercase">
                Os Bastidores de Tudo
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#111] leading-[1.2]">
                A Sintonia que Torna <br />
                <span className="italic text-neutral-500 font-light">
                  Tudo Impecável
                </span>
              </h2>
            </div>

            <p className="text-lg text-neutral-600 font-light leading-relaxed max-w-lg">
              Por trás de cada grande evento, existe uma equipe obstinada pela
              perfeição. Nosso time atua com discrição, precisão técnica e
              sensibilidade para garantir que cada cronograma seja executado sem
              ruídos.
            </p>

            <div className="w-full h-px bg-neutral-100" />

            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {membros.map((membro, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-2xl font-serif font-light text-neutral-800 tracking-tight">
                    {membro.nome}
                  </h4>
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#00a884] uppercase">
                    {membro.cargo}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 order-1 md:order-2 flex justify-end">
            <div className="relative aspect-[4/5] w-full max-w-[550px] group overflow-hidden shadow-sm">
              <Image
                src="/equipe.webp"
                alt="Equipe Cerimonial Seletto"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 600px"
                priority
              />
              <div className="absolute inset-0 bg-black/[0.02]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
