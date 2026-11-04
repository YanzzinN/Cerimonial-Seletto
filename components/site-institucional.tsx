import Image from "next/image";
import Galeria from "@/components/galeria";

const whatsapp = `https://wa.me/5579996843886?text=${encodeURIComponent("Olá! Vi o site do Cerimonial Seletto e gostaria de agendar um evento.")}`;
const membros = [
  { nome: "Laura", cargo: "Cerimonialista & fundadora" },
  { nome: "Danyele", cargo: "Cerimonialista" },
  { nome: "Thalia", cargo: "Cerimonialista" },
  { nome: "Vanessa", cargo: "Cerimonialista" },
];

export default function SiteInstitucional() {
  return (
    <main className="proposal proposal--fotografia" id="inicio">
      <header className="proposal__header">
        <a className="proposal__brand" href="#inicio" aria-label="Cerimonial Seletto, início">
          <Image src="/icon.png" alt="" width={48} height={48} />
          <span>Cerimonial Seletto</span>
        </a>
        <nav className="proposal__nav" aria-label="Navegação principal">
          <a href="#galeria">Galeria</a>
          <a href="#equipe">A equipe</a>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">Contato</a>
        </nav>
      </header>
      <section className="proposal__hero" aria-labelledby="proposal-title">
        <div className="proposal__hero-copy">
          <h1 id="proposal-title">Cerimonial<br />Seletto</h1>
          <p>Transformamos grandes sonhos em memórias eternas. Especialistas em celebrações personalizadas de alto padrão.</p>
          <div className="proposal__actions">
            <a className="proposal__cta" href={whatsapp} target="_blank" rel="noopener noreferrer">Agende seu evento</a>
            <a className="proposal__secondary" href="#galeria">Veja nossos trabalhos <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <figure className="proposal__hero-photo">
          <Image src="/seletto1.webp" alt="Celebração do Cerimonial Seletto" fill priority unoptimized sizes="100vw" />
          <figcaption>Foto por: @denissonrosendofotografo</figcaption>
        </figure>
      </section>
      <Galeria />
      <section className="proposal__team" id="equipe" aria-labelledby="proposal-team-title">
        <div className="proposal__team-copy">
          <h2 id="proposal-team-title">A sintonia que torna tudo impecável</h2>
          <p>Por trás de cada grande evento, existe uma equipe obstinada pela perfeição. Nosso time atua com discrição, precisão técnica e sensibilidade para garantir que cada cronograma seja executado sem ruídos.</p>
          <ul className="proposal__members">
            {membros.map((membro) => <li key={membro.nome}><strong>{membro.nome}</strong><span>{membro.cargo}</span></li>)}
          </ul>
        </div>
        <div className="proposal__team-photo"><Image src="/equipe.webp" alt="Equipe Cerimonial Seletto" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
      </section>
      <footer className="proposal__footer">
        <div className="proposal__footer-brand"><Image src="/icon.png" alt="" width={56} height={56} /><p>Transformando sonhos em eventos impecáveis com curadoria, precisão e sensibilidade.</p></div>
        <nav aria-label="Navegação do rodapé"><strong>Navegação</strong><a href="#inicio">Início</a><a href="#galeria">Galeria</a><a href="#equipe">A equipe</a></nav>
        <div className="proposal__footer-contact"><strong>Contato</strong><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a><span>Sergipe, Brasil</span><a href="https://www.instagram.com/cerimonial_seletto/" target="_blank" rel="noopener noreferrer">Instagram @cerimonialseletto</a></div>
        <div className="proposal__footer-bottom"><span>© {new Date().getFullYear()} Cerimonial Seletto. Todos os direitos reservados.</span><span>Desenvolvido por Anthoni Carvalho · <a href="https://www.instagram.com/anthorinco/" target="_blank" rel="noopener noreferrer">@anthorinco</a></span></div>
      </footer>
    </main>
  );
}
