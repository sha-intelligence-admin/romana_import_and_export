import Nav from './components/Nav';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Corridors from './components/Corridors';
import Promise from './components/Promise';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <Nav />
      <Hero />
      <Categories />
      <Corridors />
      <Promise />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
