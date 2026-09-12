import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { SWIMMING_DATA } from '../data/portfolioData';
import { Waves, Timer, Trophy, Medal, Award, Calendar, HeartHandshake } from 'lucide-react';

export const SwimmingPage: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16">
      <SectionHeader
        tag="Athletics & Dedication"
        title="Swimming"
        subtitle="Competitive swimming has taught me something that robotics doesn't: sometimes progress is measured in fractions of a second."
      />

      {/* Hero Reflection Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-slate-100 dark:from-cyan-950/30 dark:via-blue-950/20 dark:to-slate-900 border border-cyan-500/20 dark:border-cyan-800/30">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 flex items-center justify-center flex-shrink-0 mt-1">
            <Waves className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
              Training Discipline & Grit
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {SWIMMING_DATA.reflection}
            </p>
          </div>
        </div>
      </div>

      {/* Core Metrics 4-Card Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="text-xs font-mono text-slate-400 uppercase">Competitive Tenure</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            4+ Years
          </div>
          <div className="text-xs text-slate-500 font-mono mt-1">3rd – 8th Grade (2022–present)</div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="text-xs font-mono text-slate-400 uppercase">Club Affiliation</div>
          <div className="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-400 mt-1">
            Santa Clara Swim Club
          </div>
          <div className="text-xs text-slate-500 font-mono mt-1">Historic Bay Area club</div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="text-xs font-mono text-slate-400 uppercase">Daily Practice</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            ~2 hrs/day
          </div>
          <div className="text-xs text-slate-500 font-mono mt-1">Early mornings & intense sets</div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="text-xs font-mono text-slate-400 uppercase">Primary Stroke</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Butterfly & Free
          </div>
          <div className="text-xs text-slate-500 font-mono mt-1">100m / 200m Fly Specialist</div>
        </div>
      </div>

      {/* Two Columns: Far Westerns & Age Group Qualifiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Summer Far Westerns Championships */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Summer Far Westerns (50m)
              </h3>
            </div>
            <Badge variant="amber">2025 · Age 12</Badge>
          </div>

          <p className="text-xs text-slate-500 font-mono">
            {SWIMMING_DATA.farWesterns2025.meet}
          </p>

          <div className="space-y-3">
            {SWIMMING_DATA.farWesterns2025.achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 flex items-start gap-3"
              >
                <Medal className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
            Far Westerns represents one of the premier competitive youth championship meets in the western United States.
          </div>
        </div>

        {/* 14-Year-Old Qualifying Times & Personal Bests */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Championship Qualifying Times
              </h3>
            </div>
            <Badge variant="blue">Age: 13</Badge>
          </div>

          <p className="text-xs text-slate-500 font-mono">
            Achieved 14-Year-Old Age Group Championships standards at Summer Age Group Championships:
          </p>

          <div className="space-y-2.5">
            {SWIMMING_DATA.qualifyingTimes14yo.map((q) => (
              <div
                key={q.event}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800"
              >
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  {q.event}
                </span>
                <span className="text-sm font-mono font-bold text-cyan-600 dark:text-cyan-400">
                  {q.time}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Top Three Best LCM Events
            </div>
            <div className="grid grid-cols-3 gap-2">
              {SWIMMING_DATA.topEvents.map((t) => (
                <div
                  key={t.event}
                  className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 text-center border border-slate-200/50 dark:border-slate-800"
                >
                  <div className="text-[11px] font-mono text-slate-500">{t.event}</div>
                  <div className="text-xs font-bold font-mono text-slate-900 dark:text-white mt-0.5">
                    {t.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* School Athletics Mention: Flag Football */}
      <div className="p-5 rounded-xl bg-slate-100/70 dark:bg-surface-darkCard/40 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-brand-600 dark:text-brand-400" />
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              SAES Flag Football Blue Team (6th Grade 2024)
            </div>
            <div className="text-xs text-slate-500">
              First place champions in local school league
            </div>
          </div>
        </div>
        <Badge variant="blue">League Champions</Badge>
      </div>
    </div>
  );
};
