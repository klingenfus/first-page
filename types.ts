
export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
  features: string[];
  whatsappMessage?: string;
}
