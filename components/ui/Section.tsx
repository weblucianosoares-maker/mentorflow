import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'dark' | 'darker' | 'gradient';
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, bg = 'dark' }) => {
  const bgStyles = {
    dark: 'bg-slate-900',
    darker: 'bg-slate-950',
    gradient: 'bg-gradient-to-b from-slate-900 to-slate-950'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgStyles[bg]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {children}
      </div>
    </section>
  );
};