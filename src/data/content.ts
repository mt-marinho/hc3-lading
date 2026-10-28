export const company = {
  name: 'HC3 Engenharia', phone: '(67) 99803-7643',
  whatsapp: 'https://wa.me/5567998037643?text=' + encodeURIComponent('Olá, HC3! Gostaria de conversar sobre meu projeto e solicitar um orçamento.'),
};
export const navigation = [['A HC3', 'sobre'], ['Serviços', 'servicos'], ['Projetos', 'projetos']] as const;
export const services = [
  { title: 'Engenharia civil', description: 'Planejamento, acompanhamento técnico e soluções de engenharia para dar consistência a cada decisão do seu projeto.', image: 'structure', detail: 'Planejamento / Orientação técnica / Acompanhamento' },
  { title: 'Obras e construções', description: 'Da primeira etapa ao acabamento, execução com organização, qualidade e atenção ao que faz cada espaço funcionar.', image: 'hero', detail: 'Execução / Construção / Acabamentos' },
  { title: 'Reformas e modernizações', description: 'Novas possibilidades para ambientes residenciais e comerciais. Transformações pensadas para o uso, o conforto e a valorização do espaço.', image: 'kitchen', detail: 'Reformas / Adequações / Modernização' },
];
// Descrições editoriais das mídias fornecidas. Não são nomes oficiais de obras.
export const gallery = [
  { image: 'hero', title: 'Forma & presença', category: 'Fachadas', alt: 'Fachada de sobrado com volumes contemporâneos e painéis de madeira' },
  { image: 'living', title: 'Espaços que acolhem', category: 'Interiores', alt: 'Sala de estar com madeira, iluminação embutida e mobiliário em tons claros' },
  { image: 'pool', title: 'O exterior também é casa', category: 'Áreas externas', alt: 'Piscina e pátio com revestimento de pedra' },
  { image: 'kitchen', title: 'Precisão nos encontros', category: 'Interiores', alt: 'Cozinha integrada com armários de madeira e ilha central' },
];
export const pillars = [
  ['Planejamento', 'Clareza antes de começar. Entender o projeto é a base de uma boa execução.'],
  ['Precisão', 'Cada medida, cada escolha e cada encontro entre materiais merece atenção.'],
  ['Compromisso', 'Diálogo e responsabilidade para conduzir as decisões ao longo da obra.'],
  ['Qualidade', 'Um olhar cuidadoso sobre o conjunto, do que estrutura ao que dá acabamento.'],
];
