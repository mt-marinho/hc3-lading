import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, List, X } from '@phosphor-icons/react';
import logo from '../../assets/SVG/logo_light.svg';
import { company, navigation } from '../data/content';
import { ContactButton } from './Primitives';
import { lockScroll } from '../lib/useExperience';
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const sentinel = document.querySelector('.header-sentinel');
    const watcher = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    if (sentinel) watcher.observe(sentinel);
    const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id); }, { rootMargin: '-20% 0px -55% 0px' });
    document.querySelectorAll('section[id]').forEach(el => observer.observe(el));
    return () => { watcher.disconnect(); observer.disconnect(); };
  }, []);
  useEffect(() => {
    if (open) { dialog.current?.showModal(); lockScroll(true); }
    else { dialog.current?.close(); lockScroll(false); }
    return () => { lockScroll(false); };
  }, [open]);
  const close = () => { setOpen(false); trigger.current?.focus(); };
  return <><header className={`header ${scrolled ? 'scrolled' : ''}`}><div className="header-inner"><a href="#inicio" aria-label="HC3 Engenharia, início"><img className="logo" src={logo} alt="HC3 Engenharia" width="138" height="45"/></a><nav aria-label="Navegação principal">{navigation.map(([name, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{name}</a>)}</nav><ContactButton className="header-contact" label="Vamos conversar"/><button ref={trigger} className="menu-toggle icon-button" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(true)}><List size={26}/></button></div><div className="reading-progress" aria-hidden="true"/></header><dialog ref={dialog} className="menu-dialog" data-lenis-prevent aria-label="Menu de navegação" onCancel={close} onClose={close}><div className="menu-top"><img className="logo" src={logo} alt="HC3 Engenharia"/><button className="icon-button" onClick={close} aria-label="Fechar menu"><X size={27}/></button></div><nav>{navigation.map(([name,id],i) => <a key={id} href={`#${id}`} onClick={close}><small>0{i+1}</small>{name}<ArrowUpRight/></a>)}<a href="#contato" onClick={close}><small>04</small>Contato<ArrowUpRight/></a></nav><a className="menu-phone" href={company.whatsapp} target="_blank" rel="noreferrer">{company.phone}</a></dialog></>;
}
