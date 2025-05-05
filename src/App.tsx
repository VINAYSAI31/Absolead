import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Whatsapp from './components/Whatsapp';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>

        <Hero />
        <About />
        <Services />
        <Industries />
        <Partners />
        <Contact />
        <Whatsapp/>
      </main>
      <Footer />
    </div>
  );
}

export default App;