import { ArrowUpRight } from '@phosphor-icons/react';
import { gallery } from '../data/content';
import { Photo } from './Primitives';
export function Gallery({ onSelect }: { onSelect: (index: number) => void }) {
  return <section id="projetos" className="portfolio section wrap"><div className="section-head reveal"><span className="kicker">UM OLHAR SOBRE OS ESPAÇOS</span><h2>Arquitetura vivida.<br/><em>Detalhes sentidos.</em></h2><p>Uma seleção visual de formas,<br/>materiais e possibilidades.</p></div><div className="project-grid">{gallery.map((item, i) => <button className={`project project-${i}`} key={item.title} onClick={() => onSelect(i)} aria-label={`Ampliar imagem: ${item.title}`}><div className="project-frame image-reveal"><Photo name={item.image} alt={item.alt} className="parallax-photo"/><span className="project-zoom"><ArrowUpRight size={28}/></span></div><div className="project-caption"><h3>{item.title}</h3><span>{item.category}</span></div></button>)}</div><p className="portfolio-note">Vitrine visual HC3. Títulos descritivos das imagens, sem identificação de empreendimentos.</p></section>;
}
