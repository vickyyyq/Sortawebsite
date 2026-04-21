import { JpH2 } from '@/components/JpH2';
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
    <section id="traction" className="section-padding section-divider" style={{ background: 'var(--color-sky-wash)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-label mb-3 block">
            {tr('traction', 'overline')}
          </span>
          <JpH2>
            {tr('traction', 'heading')}
          </JpH2>
        </div>

        <div className="max-w-4xl py-10 animate-in fade-in duration-1000 delay-200 fill-mode-both">
          <div className="hidden md:flex relative justify-between items-center w-full">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[var(--color-mist)] -translate-y-1/2 z-0" />
            <div className="absolute top-1/2 left-0 w-[10%] h-px bg-[var(--color-sky)] -translate-y-1/2 z-0" />

            {nodes.map((node, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center w-1/3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-6 border-2 transition-all ${
                  node.current
                    ? 'bg-[var(--color-sky)] border-[var(--color-sky)] ring-8 ring-[var(--color-sky)]/15'
                    : 'bg-white border-[var(--color-mist)]'
                }`}>
                  {node.current && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
                </div>
                <h4 className={`text-center px-4 text-base ${node.current ? 'text-[var(--color-navy)]' : 'text-[var(--color-text-muted)] font-medium'}`}>
                  {tr('traction', node.nodeKey)}
                </h4>
              </div>
            ))}
          </div>

          <div className="md:hidden flex flex-col gap-10 relative pl-4">
            <div className="absolute top-4 bottom-4 left-4 w-px bg-[var(--color-mist)] z-0" />
            <div className="absolute top-4 h-10 left-4 w-px bg-[var(--color-sky)] z-0" />

            {nodes.map((node, index) => (
              <div key={index} className="relative z-10 flex items-center gap-6 pl-6">
                <div className={`absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full flex items-center justify-center border-2 ${
                  node.current
                    ? 'bg-[var(--color-sky)] border-[var(--color-sky)] ring-4 ring-[var(--color-sky)]/15'
                    : 'bg-white border-[var(--color-mist)]'
                }`}>
                  {node.current && <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
                </div>
                <h4 className={`text-base ${node.current ? 'text-[var(--color-navy)]' : 'text-[var(--color-text-muted)] font-medium'}`}>
                  {tr('traction', node.nodeKey)}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
          <p className="text-[var(--color-text-muted)] italic text-base border-l-2 border-[var(--color-sky)] pl-6 py-2">
            {tr('traction', 'body')}
          </p>
        </div>
      </div>
    </section>
  );
}
