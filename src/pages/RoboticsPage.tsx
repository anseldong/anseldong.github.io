import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { ROBOTICS_SEASONS } from '../data/portfolioData';
import { Trophy, Bot, Users, Award, ChevronRight, CheckCircle, Lightbulb, Cog } from 'lucide-react';

export const RoboticsPage: React.FC = () => {
  const [selectedSeasonIdx, setSelectedSeasonIdx] = useState<number>(0);
  const currentSeason = ROBOTICS_SEASONS[selectedSeasonIdx];

  return (
    <div className="space-y-12 sm:space-y-16">
      <SectionHeader
        tag="VEX IQ Competition & Engineering"
        title="Robotics"
        subtitle="Engineering, teamwork, iteration, and a love for high-stakes competition across four seasons of VEX IQ."
      />

      {/* Hero Quote / Takeaway Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-brand-500/10 to-purple-500/10 dark:from-amber-950/30 dark:via-brand-950/20 dark:to-slate-900 border border-amber-500/20 dark:border-amber-800/30 relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center flex-shrink-0 mt-1">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Core Engineering Principle
            </h3>
            <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic">
              "Robotics taught me that engineering isn't only about building the best machine. It's also about helping the people around you become better engineers."
            </p>
          </div>
        </div>
      </div>

      {/* Season Timeline Switcher Bar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
            Select Competition Season
          </span>
          <span className="text-xs font-mono text-slate-400">
            {ROBOTICS_SEASONS.length} Competitive Seasons
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {ROBOTICS_SEASONS.map((season, idx) => {
            const isSelected = selectedSeasonIdx === idx;
            return (
              <button
                key={season.teamNumber}
                onClick={() => setSelectedSeasonIdx(idx)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md'
                    : 'bg-white dark:bg-surface-darkCard text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                <div>
                  <div className={`text-xs font-mono ${isSelected ? 'text-slate-300 dark:text-slate-600' : 'text-slate-400'}`}>
                    {season.academicYear}
                  </div>
                  <div className="font-bold text-base mt-1">
                    {season.teamName}
                  </div>
                  <div className={`text-xs font-mono mt-0.5 ${isSelected ? 'text-slate-300 dark:text-slate-600' : 'text-slate-500'}`}>
                    #{season.teamNumber}
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-current/10 text-xs font-medium">
                  {season.role.split(',')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Season Detailed Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-8 animate-in fade-in duration-200">
        {/* Season Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="amber">{currentSeason.academicYear}</Badge>
              <Badge variant="neutral">{currentSeason.affiliation}</Badge>
              <Badge variant="blue">{currentSeason.grade}</Badge>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {currentSeason.teamName} <span className="text-slate-400 font-mono text-xl font-normal">({currentSeason.teamNumber})</span>
            </h3>
            <p className="mt-1 text-sm font-medium text-amber-600 dark:text-amber-400 font-mono">
              {currentSeason.theme}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 md:text-right">
            <div className="text-xs font-mono text-slate-400 uppercase">Primary Roles</div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
              {currentSeason.role}
            </div>
          </div>
        </div>

        {/* Narrative & Focus */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
            Season Overview
          </h4>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {currentSeason.summary}
          </p>
        </div>

        {/* Results & Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Competition Rankings */}
          <div className="p-5 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-slate-500">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Championship Placement</span>
            </div>
            <div className="space-y-2">
              {currentSeason.norCalResults?.teamwork && (
                <div className="flex items-center justify-between text-sm py-1 border-b border-slate-200/40 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400">NorCal Regional:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {currentSeason.norCalResults.teamwork}
                  </span>
                </div>
              )}
              {currentSeason.norCalResults?.skills && (
                <div className="flex items-center justify-between text-sm py-1 border-b border-slate-200/40 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400">Regional Skills:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {currentSeason.norCalResults.skills}
                  </span>
                </div>
              )}
              {currentSeason.worldsResults?.divisionTeamwork && (
                <div className="flex items-center justify-between text-sm py-1 border-b border-slate-200/40 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400">VEX IQ Worlds (Dallas):</span>
                  <span className="font-semibold text-brand-600 dark:text-brand-400">
                    {currentSeason.worldsResults.divisionTeamwork}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Awards Won */}
          <div className="p-5 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-slate-500">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Official Tournament Awards</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentSeason.awards.map((award) => (
                <span
                  key={award}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/50 flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{award}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Engineering Highlights */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
            Technical & Design Contributions
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentSeason.robotHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
              >
                <Cog className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Reflection */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border-l-4 border-amber-500 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-slate-900 dark:text-white">Season Reflection: </span>
          {currentSeason.takeaway}
        </div>
      </div>

      {/* Summary Matrix of All Seasons */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          All Competition Seasons at a Glance
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-slate-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-900 text-xs font-mono uppercase text-slate-500 border-b border-slate-200/80 dark:border-slate-800">
              <tr>
                <th className="p-4">Academic Year</th>
                <th className="p-4">Team</th>
                <th className="p-4">Role</th>
                <th className="p-4">Championships</th>
                <th className="p-4">Key Honors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-sans">
              {ROBOTICS_SEASONS.map((s) => (
                <tr key={s.teamNumber} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                  <td className="p-4 font-mono text-xs text-slate-600 dark:text-slate-400">{s.academicYear}</td>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">
                    {s.teamName} <span className="font-mono text-xs text-slate-400 font-normal">#{s.teamNumber}</span>
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 text-xs">{s.role}</td>
                  <td className="p-4 text-xs font-mono">
                    {s.worldsResults?.divisionTeamwork ? (
                      <span className="text-brand-600 dark:text-brand-400 font-semibold">Worlds Division Finalist</span>
                    ) : s.norCalResults?.teamwork ? (
                      <span>{s.norCalResults.teamwork.split('(')[0]}</span>
                    ) : (
                      'Regional Qualifier'
                    )}
                  </td>
                  <td className="p-4 text-xs text-amber-700 dark:text-amber-300 font-medium">
                    {s.awards[0]} {s.awards.length > 1 ? `(+${s.awards.length - 1} more)` : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
