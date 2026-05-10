import Link from "next/link";
import Image from "next/image";

export default function Rodape() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fafafa] text-[#111] border-t border-neutral-100">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1 space-y-6">
            <div className="w-16 h-16 bg-black flex items-center justify-center rounded-sm">
              <Image
                src="/icon.png"
                alt="Logo da Empresa"
                width={100}
                height={100}
              />
            </div>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              Transformando sonhos em eventos impecáveis com curadoria, precisão
              e sensibilidade.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-400">
              Navegação
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-sm font-light hover:text-[#00a884] transition-colors"
              >
                Início
              </Link>
              <Link
                href="#galeria"
                className="text-sm font-light hover:text-[#00a884] transition-colors"
              >
                Galeria
              </Link>
              <Link
                href="#equipe"
                className="text-sm font-light hover:text-[#00a884] transition-colors"
              >
                A Equipe
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-400">
              Contato
            </h4>
            <div className="flex flex-col space-y-3 text-sm font-light">
              <a
                href="https://wa.me/5521995651253"
                target="_blank"
                className="hover:text-[#00a884] transition-colors"
              >
                WhatsApp
              </a>

              <p className="text-neutral-500">Sergipe, Brasil</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-400">
              Redes Sociais
            </h4>
            <a
              href="https://www.instagram.com/cerimonial_seletto/"
              target="_blank"
              className="group flex items-center gap-2 text-sm font-light hover:text-[#00a884] transition-colors"
            >
              <span>Instagram</span>
              <span className="text-neutral-400 group-hover:text-[#00a884]">
                @cerimonialseletto
              </span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-widest text-neutral-400 uppercase">
            © {currentYear} Cerimonial Seletto. Todos os direitos reservados.
          </p>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[10px] tracking-widest text-neutral-400 uppercase">
              Desenvolvido por{" "}
              <span className="text-[#111] font-medium">Anthoni Carvalho</span>
            </p>

            <a
              href="https://www.instagram.com/anthorinco/"
              target="_blank"
              className="group flex items-center gap-2 text-[10px] tracking-widest font-light hover:text-[#00a884] transition-colors uppercase"
            >
              <span>Instagram</span>
              <span className="text-neutral-900 font-medium">@anthorinco</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
