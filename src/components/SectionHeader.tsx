import React from 'react';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  centered = false,
  className = ''
}) => {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? 'text-center' : ''} ${className}`}>
      {tag && (
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-brand-600 dark:text-brand-400 mb-2 font-mono">
          {tag}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
