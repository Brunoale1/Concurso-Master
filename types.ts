
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Plan {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
