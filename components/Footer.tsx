
import React from 'react';
import { COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 text-slate-300 py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-base">&copy; {currentYear} {COMPANY_NAME}. Todos os direitos reservados.</p>
        <p className="text-sm mt-1">Este é um site demonstrativo. Para informações oficiais, entre em contato.</p>
      </div>
    </footer>
  );
};

export default Footer;
