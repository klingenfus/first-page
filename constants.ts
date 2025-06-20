
import { Service } from './types';

export const WHATSAPP_NUMBER = '5541999999999'; // Replace with the actual WhatsApp number, e.g., 55 for Brazil country code
export const DEFAULT_WHATSAPP_MESSAGE = 'Olá! Gostaria de mais informações sobre os planos de assistência.';

export const SERVICES_DATA: Service[] = [
  {
    id: '1',
    name: 'Plano Serenidade Essencial',
    description: 'Cobertura fundamental para garantir tranquilidade nos momentos mais necessários, com atendimento humanizado.',
    price: 'R$ 89,90/mês',
    imageUrl: 'https://picsum.photos/seed/serenity/600/400',
    imageAlt: 'Imagem representando serenidade e cuidado',
    features: [
      'Assistência funeral completa',
      'Urna padrão',
      'Traslado (até 100km)',
      'Apoio burocrático simplificado'
    ],
    whatsappMessage: 'Olá! Gostaria de saber mais sobre o Plano Serenidade Essencial.'
  },
  {
    id: '2',
    name: 'Plano Amparo Familiar',
    description: 'Um plano abrangente que oferece suporte completo e personalizado para toda a família, com benefícios adicionais.',
    price: 'R$ 159,90/mês',
    imageUrl: 'https://picsum.photos/seed/familycare/600/400',
    imageAlt: 'Imagem representando amparo e união familiar',
    features: [
      'Todos os itens do Plano Essencial',
      'Urna de categoria superior',
      'Coroa de flores',
      'Sala de velório',
      'Descontos em parceiros'
    ],
    whatsappMessage: 'Olá! Tenho interesse no Plano Amparo Familiar.'
  },
  {
    id: '3',
    name: 'Plano Legado Premium',
    description: 'O mais alto nível de cuidado e atenção, com serviços exclusivos e diferenciais para um legado de paz e respeito.',
    price: 'R$ 279,90/mês',
    imageUrl: 'https://picsum.photos/seed/premiumlegacy/600/400',
    imageAlt: 'Imagem representando um legado de paz e respeito',
    features: [
      'Todos os itens do Plano Familiar',
      'Urna luxo',
      'Cremação ou sepultamento (opcional)',
      'Assistência psicológica para a família',
      'Cobertura nacional'
    ],
    whatsappMessage: 'Olá! Poderiam me fornecer mais detalhes sobre o Plano Legado Premium?'
  },
];

export const COMPANY_NAME = "Proteção & Amparo";
export const COMPANY_SLOGAN = "Cuidando de quem você ama, em todos os momentos.";
