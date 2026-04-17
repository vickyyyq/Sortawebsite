import React from 'react';
import { loadDefaultJapaneseParser } from 'budoux';
import { useLanguage } from '@/contexts/LanguageContext';

const parser = loadDefaultJapaneseParser();

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  children: string;
};

export function JpH2({ children, style, ...props }: Props) {
  const { language } = useLanguage();

  if (language !== 'jp') {
    return <h2 style={style} {...props}>{children}</h2>;
  }

  const chunks = parser.parse(children);
  return (
    <h2
      style={{ wordBreak: 'keep-all', overflowWrap: 'break-word', ...style }}
      {...props}
    >
      {chunks.map((chunk, i) => (
        <React.Fragment key={i}>
          <span style={{ display: 'inline-block' }}>{chunk}</span>
          {i < chunks.length - 1 && <wbr />}
        </React.Fragment>
      ))}
    </h2>
  );
}
