
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import { SERVICES_DATA, DEFAULT_WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from './constants';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-700 mb-4">Nossos Planos de Assistência</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Oferecemos diferentes opções de planos para proporcionar segurança e tranquilidade
            para você e sua família. Confira abaixo e entre em contato para mais detalhes.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <section className="mt-16 py-12 bg-white rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-slate-700 mb-3">Ainda tem dúvidas ou precisa de um plano personalizado?</h3>
          <p className="text-lg text-slate-600 mb-6 max-w-xl mx-auto">
            Nossa equipe está pronta para ajudar você a encontrar a melhor solução.
            Clique no botão abaixo para falar conosco diretamente pelo WhatsApp.
          </p>
          <WhatsAppButton 
            phoneNumber={WHATSAPP_NUMBER}
            message={DEFAULT_WHATSAPP_MESSAGE}
            buttonText="Fale Conosco Pelo WhatsApp"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
