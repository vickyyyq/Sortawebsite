import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Traction() {
  const { tr } = useLanguage();

  const nodes = [
    { current: true, nodeKey: 'node1' as const },
    { current: false, nodeKey: 'node2' as const },
    { current: false, nodeKey: 'node3' as const },
  ];

  return (
    <section id="traction" className="bg-[var(--color-fog)] section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-[var(--color-gold)] text-label mb-4 block">
            {tr('traction', 'overline')}
          </span>
          <h2>
            {tr('traction', 'heading')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto py-10 animate-in fade-in duration-1000 delay-200 fill-mode-both">
          <div className="hidden md:flex relative justify-between items-center w-full">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[var(--color-mist)] -translate-y-1/2 z-0" />
            <div className="absolute top-1/2 left-0 w-[10%] h-1 bg-[var(--color-gold)] -translate-y-1/2 z-0" />

            {nodes.map((node, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center w-1/3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-6 shadow-md transition-all ${
                  node.current
                    ? 'bg-[var(--color-gold)] ring-8 ring-[var(--color-gold)]/20 scale-110'
                    : 'bg-white border-4 border-[var(--color-mist)]'
                }`}>
                  {node.current && <div className="w-3 h-3 bg-white rounded-full animate-pulse" />}
                </div>
                <h4 className={`text-center px-4 ${node.current ? 'text-[var(--color-navy)]' : 'text-[var(--color-text-muted)] font-medium'}`}>
                  {tr('traction', node.nodeKey)}
                </h4>
              </div>
            ))}
          </div>

          <div className="md:hidden flex flex-col gap-12 relative pl-4">
            <div className="absolute top-4 bottom-4 left-4 w-1 bg-[var(--color-mist)] z-0" />
            <div className="absolute top-4 h-12 left-4 w-1 bg-[var(--color-gold)] z-0" />

            {nodes.map((node, index) => (
              <div key={index} className="relative z-10 flex items-center gap-6 pl-6">
                <div className={`absolute left-0 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center shadow-md ${
                  node.current
                    ? 'bg-[var(--color-gold)] ring-4 ring-[var(--color-gold)]/20'
                    : 'bg-white border-[3px] border-[var(--color-mist)]'
                }`}>
                  {node.current && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
                </div>
                <h4 className={`${node.current ? 'text-[var(--color-navy)]' : 'text-[var(--color-text-muted)] font-medium'}`}>
                  {tr('traction', node.nodeKey)}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
          <p className="text-[var(--color-text-muted)] italic text-lg bg-white p-6 rounded-xl border border-[var(--color-mist)] shadow-sm">
            {tr('traction', 'body')}
          </p>
        </div>
      </div>
    </section>
  );
}
