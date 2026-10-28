import { useState } from 'react';
import { ArrowUpRight, Minus, Plus } from '@phosphor-icons/react';
import { services, company } from '../data/content';
import { Photo } from './Primitives';
import { ScrollTrigger } from '../lib/useExperience';
export function Services() {
  const [active, setActive] = useState<number | null>(0);
  return <section id="servicos" className="services section wrap"><div className="section-head reveal"><span className="kicker">O QUE FAZEMOS</span><h2>Da intenção<br/>à <em>realização.</em></h2><p>Visão de conjunto.<br/>Precisão em cada etapa.</p></div><div className="service-list">{services.map((service, i) => <article className={`service ${active === i ? 'selected' : ''}`} key={service.title}><h3><button aria-expanded={active === i} aria-controls={`service-panel-${i}`} onClick={() => { setActive(active === i ? null : i); requestAnimationFrame(() => ScrollTrigger.refresh()); }}><span className="service-number">0{i+1}</span><span>{service.title}</span>{active === i ? <Minus size={27}/> : <Plus size={27}/>}</button></h3><div id={`service-panel-${i}`} className="service-content" hidden={active !== i}><div><p>{service.description}</p><small>{service.detail}</small><a className="text-link" href={company.whatsapp} target="_blank" rel="noreferrer">Fale sobre seu projeto <ArrowUpRight size={19}/></a></div><div className="service-photo"><Photo name={service.image} alt={`Imagem ilustrativa de ${service.title.toLowerCase()}`} sizes="(max-width:767px) 90vw, 35vw"/></div></div></article>)}</div></section>;
}
