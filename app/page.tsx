import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import CoreOffer from '@/components/sections/CoreOffer';
import WhoThisIsFor from '@/components/sections/WhoThisIsFor';
import Instructor from '@/components/sections/Instructor';
import ProgramStructure from '@/components/sections/ProgramStructure';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Problem />
        <Solution />
        <CoreOffer />
        <WhoThisIsFor />
        <Instructor />
        <ProgramStructure />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-white py-8 px-4 text-center">
        <p className="text-sm">
          © 2025 Future English Academy. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Speak Up: Find Your Voice in English
        </p>
      </footer>
    </>
  );
}

