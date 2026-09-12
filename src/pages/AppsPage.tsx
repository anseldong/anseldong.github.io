import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { APPS_DATA } from '../data/portfolioData';
import { Download, Sparkles, Smartphone, Tablet, Layers, ShieldCheck, CheckCircle2, ArrowUpRight, Wrench } from 'lucide-react';

export const AppsPage: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>('mix-and-match');
  const activeApp = APPS_DATA.find((a) => a.id === selectedAppId) || APPS_DATA[0];

  return (
    <div className="space-y-12 sm:space-y-16">
      <SectionHeader
        tag="iOS & Native Development"
        title="Apps"
        subtitle="Turning ideas into polished, production-ready software in the hands of real users."
      />

      {/* Global Impact Banner: 4,400+ Downloads */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase font-semibold text-emerald-600 dark:text-emerald-400">
              Verified App Store Metrics
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            4,400+ Total App Downloads
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            Software built directly to solve real problems for competitive robotics teams, tournament referees, and local community members.
          </p>
        </div>

        <div className="flex items-center gap-4 text-left">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
            <div className="text-xl sm:text-2xl font-bold font-mono text-brand-600 dark:text-brand-400">
              3.75K
            </div>
            <div className="text-xs text-slate-500 font-mono">Mix & Match</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
            <div className="text-xl sm:text-2xl font-bold font-mono text-slate-800 dark:text-slate-200">
              659
            </div>
            <div className="text-xs text-slate-500 font-mono">Rapid Relay</div>
          </div>
        </div>
      </div>

      {/* App Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {APPS_DATA.map((app) => {
          const isSelected = selectedAppId === app.id;
          return (
            <button
              key={app.id}
              onClick={() => setSelectedAppId(app.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-150 flex items-center gap-2 ${
                isSelected
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm'
                  : 'bg-white dark:bg-surface-darkCard text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:border-slate-400'
              }`}
            >
              <span>{app.name}</span>
              {app.downloads && (
                <span className={`text-xs font-mono px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-slate-800 text-slate-200 dark:bg-slate-200 dark:text-slate-800' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {app.downloads.split(' ')[0]}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active App In-Depth Breakdown */}
      <div className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant={activeApp.status === 'Published' ? 'green' : 'blue'}>
                {activeApp.status}
              </Badge>
              <Badge variant="neutral">{activeApp.platform}</Badge>
              <span className="text-xs font-mono text-slate-400">{activeApp.releaseYear}</span>
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {activeApp.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 font-mono">
              {activeApp.tagline}
            </p>
          </div>

          {activeApp.downloads && (
            <div className="px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 font-mono text-sm flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span className="font-bold">{activeApp.downloads}</span>
            </div>
          )}
        </div>

        {/* 2-Column Story: Problem & How Built */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              The Problem It Solves
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeApp.problemSolved}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              How I Built It
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeApp.howBuilt}
            </p>
          </div>
        </div>

        {/* Feature Highlights & Technology Badges */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
            Key Architecture & Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeApp.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap gap-2">
            {activeApp.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Developer Takeaway */}
        <div className="p-4 rounded-xl bg-brand-50/50 dark:bg-brand-950/20 border border-brand-200/50 dark:border-brand-800/30 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-brand-700 dark:text-brand-300">Engineering Takeaway: </span>
          {activeApp.whatLearned}
        </div>
      </div>

      {/* Developer Toolkit & Ecosystem Bar */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-100/60 dark:bg-surface-darkCard/40 border border-slate-200/70 dark:border-slate-800">
        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
          Apple Ecosystem & Backend Tooling
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-slate-700 dark:text-slate-300">
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-400 block text-[10px]">FRAMEWORK</span>
            SwiftUI & UIKit
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-400 block text-[10px]">INPUT / CANVAS</span>
            PencilKit & Gestures
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-400 block text-[10px]">DATA & SYNC</span>
            CloudKit & Firebase
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-400 block text-[10px]">DISTRIBUTION</span>
            App Store Connect
          </div>
        </div>
      </div>
    </div>
  );
};
