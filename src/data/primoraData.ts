import { ProductItem, ResultStat, CaseCard, GalleryPhoto, ContentArticle } from '../types';
import { OFFICIAL_ASSETS } from './primoraAssets';

export const OFFICIAL_INFO = {
  name: 'PRIMORA',
  fullName: 'PRIMORA NUTRIÇÃO ANIMAL',
  tagline: 'NUTRIÇÃO ANIMAL & AGROPECUÁRIA',
  address: 'Rodovia SC 355, km 50,1',
  neighborhood: 'Rio das Pedras',
  cityState: 'Videira - SC',
  cep: '89560-000',
  fullAddress: 'Rodovia SC 355, km 50,1, Rio das Pedras, Videira - SC, 89560-000',
  phone: '(49) 99193-6317',
  whatsappRaw: '5549991936317',
  whatsappDefaultMessage: 'Olá! Gostaria de falar com um especialista da Primora Nutrição Animal.',
  whatsappLink: 'https://wa.me/5549991936317?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Primora%20Nutri%C3%A7%C3%A3o%20Animal.',
  instagramUser: '@primora.nutricao',
  instagramLink: 'https://www.instagram.com/primora.nutricao/',
  mapsLink: 'https://maps.app.goo.gl/4jGzYXwzVsgozJvj7',
};

export const PRODUCTS: ProductItem[] = [
  {
    id: 'lacta-protein',
    name: 'PRIMORA LACTA PROTEIN',
    category: 'Bovinocultura de Leite',
    badge: 'Alta Performance',
    description: 'Suplemento proteico e energético formulado especialmente para vacas em lactação, promovendo equilíbrio ruminal, resposta rápida de produção de leite e manutenção do escore corporal.',
    image: OFFICIAL_ASSETS.primora01,
    highlights: [
      'Equilíbrio e saúde ruminal',
      'Resposta produtiva comprovada a campo (+3,3 L/vaca/dia)',
      'Excelente palatabilidade e consumo homogêneo',
      'Sustentação do escore corporal ao longo da lactação'
    ]
  },
  {
    id: 'sup-energia',
    name: 'PRIMORA SUP ENERGIA',
    category: 'Nutrição & Eficiência',
    badge: 'Aporte Energético',
    description: 'Suplementação concentrada em energia nobre para suprir déficits em períodos críticos e potencializar a digestibilidade dos volumosos e pastagens.',
    image: OFFICIAL_ASSETS.primora02,
    highlights: [
      'Aporte rápido de energia metabolizável',
      'Otimização do aproveitamento da forragem',
      'Ideal para desafios nutricionais e entressafra',
      'Estabilidade de produção diária'
    ]
  },
  {
    id: 'corte-max',
    name: 'PRIMORA CORTE MAX',
    category: 'Bovinocultura de Corte',
    badge: 'Ganho de Peso',
    description: 'Fórmula desenvolvida para maximizar o ganho médio diário (GMD), eficiência alimentar e acabamento de carcaça em sistemas a pasto ou confinamento.',
    image: OFFICIAL_ASSETS.primora03,
    highlights: [
      'Elevado ganho médio diário (GMD)',
      'Melhor conversão alimentar do lote',
      'Acabamento uniforme de carcaça',
      'Menor tempo de permanência no pasto'
    ]
  },
  {
    id: 'nucleo-leite',
    name: 'PRIMORA NÚCLEO LEITE',
    category: 'Núcleos & Concentrados',
    badge: 'Máxima Concentração',
    description: 'Núcleo mineral e vitamínico de alta precisão para inclusão em misturas na fazenda, garantindo aporte completo de microminerais e aditivos funcionais.',
    image: OFFICIAL_ASSETS.primora04,
    highlights: [
      'Microminerais orgânicos de alta absorção',
      'Suporte metabólico e sanitário do rebanho',
      'Flexibilidade de formulação na propriedade',
      'Aumento da persistência de lactação'
    ]
  },
  {
    id: 'suplementos-minerais',
    name: 'PRIMORA SUPLEMENTAÇÃO MINERAL',
    category: 'Minerais & Micronutrientes',
    badge: 'Equilíbrio Mineral',
    description: 'Macro e microminerais de alta biodisponibilidade para prevenção de deficiências, suporte imunológico, reprodução eficiente e integridade de cascos.',
    image: OFFICIAL_ASSETS.primora07,
    highlights: [
      'Macro e microminerais balanceados',
      'Melhoria nos índices reprodutivos',
      'Resistência imunológica e cascos fortes',
      'Desenvolvimento esquelético e muscular'
    ]
  },
  {
    id: 'racoes-especiais',
    name: 'LINHA DE RAÇÕES DE PRECISÃO',
    category: 'Rações Balanceadas',
    badge: 'Corte e Leite',
    description: 'Rações formuladas com matérias-primas selecionadas e controle rigoroso de qualidade, adaptadas para as exigências de cada fase zootécnica.',
    image: OFFICIAL_ASSETS.primora09,
    highlights: [
      'Matérias-primas de alta digestibilidade',
      'Padrão constante de mistura e moagem',
      'Atendimento personalizado a corte e leite',
      'Foco direto em rentabilidade no campo'
    ]
  }
];

export const PILOT_STATS: ResultStat[] = [
  {
    id: 'litros',
    value: 3.3,
    decimal: 1,
    prefix: '+',
    suffix: ' L',
    label: 'Aumento médio por vaca/dia',
    description: 'Volume adicional consistente aferido no balde de ordenha.',
    highlight: true,
  },
  {
    id: 'percentual',
    value: 23,
    decimal: 0,
    prefix: '+',
    suffix: '%',
    label: 'Aumento médio na produção de leite',
    description: 'Elevação percentual da média de produção do lote avaliado.',
    highlight: true,
  },
  {
    id: 'lucro',
    value: 3.25,
    decimal: 2,
    prefix: 'R$ ',
    suffix: '/ dia',
    label: 'Lucro líquido médio por vaca',
    description: 'Margem líquida estimada por vaca ao dia após desconto da nutrição.',
  },
  {
    id: 'receita',
    value: 8.28,
    decimal: 2,
    prefix: 'R$ ',
    suffix: '/ dia',
    label: 'Receita adicional média por vaca',
    description: 'Faturamento bruto adicional obtido por vaca ao dia.',
  },
  {
    id: 'vacas',
    value: 30,
    decimal: 0,
    suffix: 'Vacas',
    label: 'Lote de vacas leiteiras acompanhado',
    description: 'Avaliação realizada em condições reais de manejo em Videira e região.',
  }
];

export const CASE_CARDS: CaseCard[] = [
  {
    id: 'c1',
    tag: 'Desempenho Extremo',
    title: 'Animais com salto produtivo imediato',
    description: 'Em animais com potencial genético reprimido por restrição nutricional, o aporte balanceado resultou em rápida recuperação e elevação da produção diária.',
  },
  {
    id: 'c2',
    tag: 'Resposta Rápida',
    title: 'Em 4 dias sem pasto, o ganho já foi expressivo',
    description: 'Mesmo diante de intempéries e escassez de forragem verde no piquete, o suplemento sustentou a produtividade com agilidade.',
  },
  {
    id: 'c3',
    tag: 'Consistência Nutricional',
    title: 'Vacas sem o produto apresentaram retração',
    description: 'A ausência da suplementação técnica refletiu em retração de volume, evidenciando o papel da nutrição balanceada na estabilidade da lactação.',
  }
];

export const HOW_WE_WORK_STEPS = [
  {
    step: '01',
    title: 'DIAGNÓSTICO',
    description: 'Análise detalhada do rebanho, qualidade do volumoso disponível, água e histórico de produção para mapear gargalos nutricionais.',
  },
  {
    step: '02',
    title: 'ESTRATÉGIA NUTRICIONAL',
    description: 'Formulações precisas de rações, suplementos e núcleos calculados para atender a exigência energética e proteica exata de cada lote.',
  },
  {
    step: '03',
    title: 'ACOMPANHAMENTO',
    description: 'Presença técnica no cocho, monitoramento de sobras, escore de fezes, saúde ruminal e ajustes periódicos conforme a evolução a campo.',
  },
  {
    step: '04',
    title: 'RESULTADO',
    description: 'Mensuração clara de litros no balde, ganho médio diário (GMD), eficiência reprodutiva e retorno financeiro no bolso do produtor.',
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g-panorama',
    url: OFFICIAL_ASSETS.agroPanorama,
    title: 'Panorama do rebanho em sistema intensivo com nutrição de precisão',
    category: 'campo',
    aspect: 'wide'
  },
  {
    id: 'g1',
    url: OFFICIAL_ASSETS.bovinosCocho,
    title: 'Bovinos se alimentando no cocho com suplemento Primora',
    category: 'rebanho',
    aspect: 'wide'
  },
  {
    id: 'g2',
    url: OFFICIAL_ASSETS.pastagemAerea,
    title: 'Vista aérea de pastagem e divisão de piquetes no campo',
    category: 'campo',
    aspect: 'square'
  },
  {
    id: 'g3',
    url: OFFICIAL_ASSETS.bovinoManejo,
    title: 'Manejo nutricional de precisão e sanidade animal',
    category: 'cases',
    aspect: 'wide'
  },
  {
    id: 'g4',
    url: OFFICIAL_ASSETS.bovinosProducao,
    title: 'Infraestrutura produtiva agropecuária e armazenamento de forragem',
    category: 'produtos',
    aspect: 'portrait'
  },
  {
    id: 'g5',
    url: OFFICIAL_ASSETS.vacaCampo,
    title: 'Rebanho a pasto com suplementação mineral estratégica',
    category: 'primora',
    aspect: 'wide'
  }
];

export const ARTICLES: ContentArticle[] = [
  {
    id: 'art-1',
    title: 'Nutrição de Vacas Leiteiras: Como blindar a produção contra oscilações de forragem',
    category: 'Nutrição de Vacas Leiteiras',
    readTime: '4 min de leitura',
    summary: 'Estratégias nutricionais focadas no equilíbrio ruminal para manter o consumo de matéria seca e sustentar o pico de lactação com saúde.',
    image: OFFICIAL_ASSETS.bovinosCocho
  },
  {
    id: 'art-2',
    title: 'Dieta Balanceada: O impacto direto na conversão alimentar e no lucro por vaca',
    category: 'Dieta Balanceada',
    readTime: '5 min de leitura',
    summary: 'Como a sincronização precisa entre proteína degradável e energia metabolizável reduz desperdícios e maximiza a rentabilidade no tanque.',
    image: OFFICIAL_ASSETS.bovinoManejo
  },
  {
    id: 'art-3',
    title: 'Manejo Nutricional no Cocho: Práticas diárias que evitam sobras e acidose',
    category: 'Manejo Nutricional',
    readTime: '3 min de leitura',
    summary: 'A importância da regularidade de fornecimento, homogeneidade da mistura e ajuste de fibra efetiva para a saúde ruminal permanente.',
    image: OFFICIAL_ASSETS.pastagemAerea
  }
];
