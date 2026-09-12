import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { MUSIC_DATA } from '../data/portfolioData';
import { Music as MusicIcon, Award, Disc, Sparkles, Check } from 'lucide-react';

export const MusicPage: React.FC = () => {
  const { clarinet, piano, quote } = MUSIC_DATA;

  return (
    <div className="space-y-12 sm:space-y-16">
      <SectionHeader
        tag="Performing Arts & Craft"
        title="Music"
        subtitle="A different kind of problem solving: discipline, tone production, ensemble dynamics, and creative expression."
      />

      {/* Authentic Quote Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-800/40 relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 flex items-center justify-center flex-shrink-0 mt-1">
            <MusicIcon className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 italic leading-relaxed">
              "{quote}"
            </p>
            <div className="text-xs font-mono text-purple-600 dark:text-purple-400">
              Clarinet (SAES Symphonic Band) & Piano (ABRSM)
            </div>
          </div>
        </div>
      </div>

      {/* 2 Major Columns: Clarinet & Piano */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Column 1: Clarinet */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Badge variant="purple">School Ensemble</Badge>
              <span className="text-xs font-mono text-slate-400">{clarinet.gradeYears}</span>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {clarinet.instrument}
              </h3>
              <p className="text-sm font-mono text-purple-600 dark:text-purple-400 mt-0.5">
                {clarinet.ensemble} · {clarinet.school}
              </p>
            </div>

            {/* Gold Plaque Achievement Banner */}
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/50 flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono font-semibold uppercase text-amber-800 dark:text-amber-300">
                  Historic Milestone
                </div>
                <div className="text-sm font-medium text-amber-900 dark:text-amber-200 mt-0.5">
                  {clarinet.achievement}
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {clarinet.description}
            </p>

            <div className="pt-2 space-y-2">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Instructor & Repertoire
              </div>
              <div className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Directed by <span className="font-semibold">{clarinet.teacher}</span>
              </div>
              <ul className="space-y-1.5 pt-1">
                {clarinet.repertoire.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <Check className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 font-mono">
            Started in 6th grade · Symphonic section contributor
          </div>
        </div>

        {/* Column 2: Piano */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Badge variant="blue">ABRSM Board</Badge>
              <Badge variant="green">Distinction & Merit</Badge>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {piano.instrument}
              </h3>
              <p className="text-sm font-mono text-brand-600 dark:text-brand-400 mt-0.5">
                Independent Craft & Examination Board
              </p>
            </div>

            {/* ABRSM Official Examination Badges */}
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/50 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                    {piano.abrsm.grade6.syllabus}
                  </div>
                  <div className="text-xs text-slate-500">{piano.abrsm.grade6.year}</div>
                </div>
                <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-emerald-200/60 dark:bg-emerald-800/60 text-emerald-900 dark:text-emerald-200">
                  {piano.abrsm.grade6.result}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/50 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-brand-700 dark:text-brand-400 font-semibold">
                    {piano.abrsm.grade7.syllabus}
                  </div>
                  <div className="text-xs text-slate-500">{piano.abrsm.grade7.year}</div>
                </div>
                <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-blue-200/60 dark:bg-blue-800/60 text-brand-900 dark:text-brand-200">
                  {piano.abrsm.grade7.result}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {piano.description}
            </p>

            <div className="pt-2 space-y-2">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Favorite Arrangements & Styles
              </div>
              <ul className="space-y-1.5 pt-1">
                {piano.favoritePieces.map((piece, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                    <span>{piece}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 font-mono">
            {piano.abrsm.status}
          </div>
        </div>
      </div>
    </div>
  );
};
