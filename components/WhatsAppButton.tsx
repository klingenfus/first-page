
import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  buttonText?: string;
  className?: string;
  icon?: React.ReactNode;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message, buttonText = "Contatar via WhatsApp", className = '', icon }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {buttonText}
    </a>
  );
};

export default WhatsAppButton;
