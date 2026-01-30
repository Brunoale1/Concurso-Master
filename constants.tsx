
import React from 'react';
import { BookOpen, CheckCircle, ShieldCheck, Zap, FileText, Layout, Database, GraduationCap, Gavel, Scale, Shield } from 'lucide-react';
import { Feature, Plan, Testimonial } from './types';

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Vade Mecum Esquematizado",
    description: "Leitura da lei seca com destaques para os artigos mais cobrados em provas de elite.",
    icon: "BookOpen"
  },
  {
    id: 2,
    title: "Jurisprudência Atualizada",
    description: "Informativos do STF e STJ resumidos e organizados por ramos do Direito.",
    icon: "Scale"
  },
  {
    id: 3,
    title: "Doutrina Estratégica",
    description: "Resumos focados nos principais autores e nas divergências doutrinárias das bancas.",
    icon: "CheckCircle"
  },
  {
    id: 4,
    title: "Foco em Discursivas",
    description: "Espelhos de prova e orientações para peças práticas e questões dissertativas.",
    icon: "FileText"
  }
];

export const ACERVO_ITEMS = [
  {
    title: "Direito Penal & Processo",
    items: ["Código Penal Comentado", "Pacote Anticrime", "Inquérito Policial", "Provas e Prisões"],
    icon: "Shield"
  },
  {
    title: "Direito Constitucional",
    items: ["Controle de Constitucionalidade", "Direitos Fundamentais", "Poder Judiciário", "Segurança Pública"],
    icon: "Scale"
  },
  {
    title: "Direito Administrativo",
    items: ["Nova Lei de Licitações", "Improbidade Administrativa", "Agentes Públicos", "Responsabilidade Civil"],
    icon: "Gavel"
  },
  {
    title: "Leis Extravagantes",
    items: ["Lei de Drogas", "Estatuto do Desarmamento", "Lei Maria da Penha", "Organizações Criminosas"],
    icon: "ShieldCheck"
  },
  {
    title: "Direito Civil & Processo",
    items: ["Teoria Geral do Direito", "Pessoas e Bens", "Recursos no CPC", "Tutelas de Urgência"],
    icon: "BookOpen"
  },
  {
    title: "Bônus Carreira Policial",
    items: ["Criminologia", "Medicina Legal", "Legislação Institucional", "Editais Verticalizados"],
    icon: "GraduationCap"
  }
];

export const PLANS: Plan[] = [
  {
    id: 1,
    name: "Base Jurídica",
    price: "97,00",
    oldPrice: "197,00",
    features: [
      "Leis Secas Marcadas",
      "Mapas Mentais de Direito",
      "Questões de Nível Médio",
      "Suporte via E-mail"
    ]
  },
  {
    id: 2,
    name: "Elite Policial & Tribunais",
    price: "197,00",
    oldPrice: "397,00",
    recommended: true,
    features: [
      "Tudo do plano Base",
      "Jurisprudência Comentada (STF/STJ)",
      "Informativos Esquematizados",
      "Simulados de Peças Práticas",
      "Acesso ao Grupo VIP",
      "Atualizações de Editais"
    ]
  },
  {
    id: 3,
    name: "Black Master VIP",
    price: "297,00",
    oldPrice: "597,00",
    features: [
      "Tudo do plano Elite",
      "Mentoria Mensal (Foco em Posse)",
      "Guia de Discursivas e Peças",
      "Suporte Prioritário WhatsApp",
      "Cronogramas Personalizados"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carla Oliveira",
    role: "Aprovada no TJ-SP",
    content: "O acervo foi o divisor de águas. Os mapas mentais me ajudaram a revisar todo o conteúdo na semana da prova.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Ricardo Santos",
    role: "Aprovado na PRF",
    content: "O melhor investimento que fiz. O material é direto ao ponto, sem enrolação. Recomendo para todos os concurseiros.",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Aprovada Delegada PC",
    content: "Organização impecável. Antes eu perdia horas procurando material, agora tenho tudo na palma da mão.",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];
