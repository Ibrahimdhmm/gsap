import Navbar from '../components/Navbar';
import ButtonGradient from '../assets/svg/ButtonGradient';
import Link from 'next/link';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Collaborations from '../components/Collaborations';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Page Title',
  }
  
export default function Page() {
  
  return (
    <>
 

      <div className='overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]'>
        <Navbar />
        <Hero />
        <Benefits />
        <Collaborations />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
      
    </>
  );
}

