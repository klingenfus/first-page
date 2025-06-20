
import React from 'react';
import { Service } from '../types';
import { WHATSAPP_NUMBER, DEFAULT_WHATSAPP_MESSAGE } from '../constants';
import WhatsAppButton from './WhatsAppButton';

interface ServiceCardProps {
  service: Service;
}

const CheckIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const WhatsAppIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.03 0 3.92-.6 5.47-1.61L22 22l-1.61-4.53A9.94 9.94 0 0022 12c0-5.52-4.48-10-10-10zm2.46 12.44c-.21.13-.45.2-.7.2-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.25 0 .49.07.7.2l1.58-1.58c-.52-.39-1.12-.62-1.78-.62-1.66 0-3 1.34-3 3s1.34 3 3 3c.66 0 1.26-.23 1.78-.62l-1.58-1.58zM9.5 12.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S11.83 11 11 11s-1.5.67-1.5 1.5z" />
  </svg>
);


const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
      <img className="w-full h-56 object-cover" src={service.imageUrl} alt={service.imageAlt} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-slate-800 mb-2">{service.name}</h3>
        <p className="text-slate-600 text-base mb-4 flex-grow">{service.description}</p>
        
        <div className="mb-6">
          <p className="text-3xl font-bold text-teal-600 mb-4">{service.price}</p>
          <ul className="space-y-2 mb-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start text-slate-700 text-base">
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <WhatsAppButton
            phoneNumber={WHATSAPP_NUMBER}
            message={service.whatsappMessage || DEFAULT_WHATSAPP_MESSAGE}
            buttonText="Saiba Mais via WhatsApp"
            className="w-full text-base"
            icon={<WhatsAppIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
