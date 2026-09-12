import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { HOW_I_BUILD_STEPS } from '../data/portfolioData';
import {
  Lightbulb,
  HelpCircle,
  Wrench,
  AlertTriangle,
  RefreshCw,
  Rocket,
  Award,
  ArrowRight,
  Repeat
} from 'lucide-react';

export const HowIBuildPage: React.FC = () => {
  const stepIcons = [
    Lightbulb,
    HelpCircle,
    Wrench,
    AlertTriangle,
    RefreshCw,
    Rocket,
    Award
  ];

  const stepColors = [
    'text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/60',
    'text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/60',
    'text-orange-500 bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-800/60',
    'text-rose-500 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/60',
    'text-cyan-500 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800/60',
    'text-purple-500 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/60',
    'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60'
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      <SectionHeader
        tag="Engineering Methodology"
        title="How I Build"
        subtitle="From idea to impact — here’s the 7-step engineering cycle I use to turn rough concepts into working systems."
      />

      {/* Philosophy Sub-banner */}
      <div className="p-6 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-brand-600 dark:text-brand-400">
            <Repeat className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              Iterative, First-Principles Thinking
            </div>
            <div className="text-xs text-slate-500">
              The point is to show how I think, not just what I have made.
            </div>
          </div>
        </div>
        <Badge variant="blue">The 7-Step Cycle</Badge>
      </div>

      {/* 7 Stepper Items */}
      <div className="space-y-6">
        {HOW_I_BUILD_STEPS.map((step, idx) => {
          const Icon = stepIcons[idx] || Lightbulb;
          const colorClass = stepColors[idx] || stepColors[0];

          return (
            <div
              key={step.stepNumber}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-float dark:hover:shadow-float-dark transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                {/* Step Number & Icon */}
                <div className="flex sm:flex-col items-center sm:items-center gap-3 flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs ${colorClass}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    STEP {step.stepNumber}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1 min-w-0">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-brand-600 dark:text-brand-400 mt-0.5">
                      "{step.prompt}"
                    </p>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Real-World Concrete Example */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-2.5">
                    <span className="font-semibold text-slate-900 dark:text-slate-200 flex-shrink-0 font-mono">
                      In Practice:
                    </span>
                    <span>{step.exampleFromWork}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Closing Summary Box */}
      <div className="p-8 rounded-3xl bg-slate-900 dark:bg-slate-950 text-white text-center space-y-4 border border-slate-800">
        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400 mx-auto">
          <Lightbulb className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight">
          That’s the cycle.
        </h3>
        <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
          I build, I test, I learn, and I repeat. Every finished app, robot mechanism, or competition heat is just preparation for the next problem waiting to be solved.
        </p>
      </div>
    </div>
  );
};
