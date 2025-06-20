
import React from 'react';
import { COMPANY_NAME, COMPANY_SLOGAN } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-teal-700">{COMPANY_NAME}</h1>
        <p className="text-lg text-slate-600 mt-1">{COMPANY_SLOGAN}</p>
      </div>
    </header>
  );
};

export default Header;
