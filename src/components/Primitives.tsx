import { ArrowUpRight } from '@phosphor-icons/react';
import { company } from '../data/content';
export function Photo({ name, alt, className = '', eager = false, sizes = '(max-width: 767px) 100vw, 55vw' }: { name: string; alt: string; className?: string; eager?: boolean; sizes?: string }) {
  return <img className={className} src={`/media/${name}-1080.webp`} srcSet={`/media/${name}-640.webp 640w, /media/${name}-1080.webp 1080w`} sizes={sizes} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" width="1080" height="1080"/>;
}
export function ContactButton({ className = '', label = 'Solicitar orçamento' }: { className?: string; label?: string }) {
  return <a className={`button ${className}`} href={company.whatsapp} target="_blank" rel="noreferrer"><span>{label}</span><ArrowUpRight size={21}/></a>;
}
