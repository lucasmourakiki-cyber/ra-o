export interface ProductItem {
  id: string;
  name: string;
  category: string;
  badge?: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface ResultStat {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimal?: number;
  label: string;
  description: string;
  highlight?: boolean;
}

export interface CaseCard {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: 'campo' | 'rebanho' | 'produtos' | 'primora' | 'eventos' | 'cases';
  aspect?: 'wide' | 'portrait' | 'square';
}

export interface ContentArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  city: string;
  productionType: 'Bovinocultura de corte' | 'Bovinocultura de leite' | 'Outro';
  message: string;
}
