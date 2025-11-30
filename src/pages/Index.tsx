import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { LexicalTypes } from '@/components/LexicalTypes';
import { StyleRegisters } from '@/components/StyleRegisters';
import { Dictionaries } from '@/components/Dictionaries';
import { RedFlags } from '@/components/RedFlags';
import { Glossary } from '@/components/Glossary';
import { CTA } from '@/components/CTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <Hero />
      <Problem />
      <Solution />
      <LexicalTypes />
      <StyleRegisters />
      <Dictionaries />
      <RedFlags />
      <Glossary />
      <CTA />
    </div>
  );
};

export default Index;