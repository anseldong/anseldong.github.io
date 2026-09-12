import React from 'react';
import {
  ArrowRight,
  Bot,
  Smartphone,
  Music as MusicIcon,
  Waves,
  Sparkles,
  Download,
  ExternalLink,
  Cpu,
  Compass
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, APPS_DATA } from '../data/portfolioData';
import { Badge } from '../components/Badge';
import { Project } from '../types/portfolio';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onOpenProjectModal: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onOpenProjectModal
}) => {
  const goodNeighbor = PROJECTS_DATA.find((p) => p.id === 'goodneighbor');

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 border border-brand-200/60 dark:border-brand-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              <span>{PERSONAL_INFO.grade} · {PERSONAL_INFO.school} · California</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              hi, i’m ansel <span className="inline-block hover:rotate-12 transition-transform cursor-default">👋</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroSubtitle}
            </p>

            <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              I’m a middle-school student focused on software development, VEX robotics, competitive swimming, and music. I love understanding how things work from first principles and turning ideas into functioning products.
            </p>

            {/* Role Descriptors */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="neutral" size="md">Student</Badge>
              <Badge variant="blue" size="md">Developer</Badge>
              <Badge variant="amber" size="md">Roboticist</Badge>
              <Badge variant="purple" size="md">Musician</Badge>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => {
                  setActiveTab('projects');
                  window.location.hash = 'projects';
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-brand-600 hover:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-500 shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <span>Explore my work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('resume');
                  window.location.hash = 'resume';
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-300 bg-white dark:bg-surface-darkCard hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition-colors"
              >
                <span>View résumé</span>
              </button>
            </div>
          </div>

          {/* Decorative Subtle Abstract Visual */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl p-6 bg-gradient-to-tr from-brand-100/50 via-purple-100/40 to-amber-100/30 dark:from-brand-950/40 dark:via-purple-950/20 dark:to-slate-900 border border-slate-200/60 dark:border-slate-800/80 shadow-subtle flex flex-col justify-between overflow-hidden">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-brand-600 dark:text-brand-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Engineering Philosophy
                </div>
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  "Build, test, break, learn, and repeat."
                </div>
              </div>

              <div className="space-y-1.5 pt-4 border-t border-slate-200/50 dark:border-slate-800/60">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-500">App Downloads</span>
                  <span className="font-semibold text-brand-600 dark:text-brand-400">4,400+</span>
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-500">VEX Seasons</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">4 (Worlds & Regs)</span>
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-500">ABRSM Piano</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Distinction & Merit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. What I Do: 4-Pillar Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Focus Areas
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
              What I do
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Robotics */}
          <div
            onClick={() => {
              setActiveTab('robotics');
              window.location.hash = 'robotics';
            }}
            className="p-5 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/50 dark:hover:border-brand-500/50 hover:shadow-float dark:hover:shadow-float-dark transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-200/50 dark:border-amber-800/40 mb-4 group-hover:scale-105 transition-transform">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center justify-between">
                <span>Robotics</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="mt-2 text-xs font-mono text-amber-600 dark:text-amber-400">
                VEX IQ · Engineering · Mentoring
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                4 competition seasons, Worlds Division finalist, and leadership mentoring first-time team builders.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs font-medium text-slate-500">
              NorCal Champions · Build Award
            </div>
          </div>

          {/* Card 2: Apps */}
          <div
            onClick={() => {
              setActiveTab('apps');
              window.location.hash = 'apps';
            }}
            className="p-5 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/50 dark:hover:border-brand-500/50 hover:shadow-float dark:hover:shadow-float-dark transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center border border-blue-200/50 dark:border-blue-800/40 mb-4 group-hover:scale-105 transition-transform">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center justify-between">
                <span>Apps</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="mt-2 text-xs font-mono text-brand-600 dark:text-brand-400">
                SwiftUI · iOS · Product Design
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Native iOS developer with published tools used by thousands of students and teams internationally.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs font-medium text-slate-500">
              4,400+ App Store Downloads
            </div>
          </div>

          {/* Card 3: Music */}
          <div
            onClick={() => {
              setActiveTab('music');
              window.location.hash = 'music';
            }}
            className="p-5 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800/80 hover:border-purple-500/50 dark:hover:border-purple-500/50 hover:shadow-float dark:hover:shadow-float-dark transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-200/50 dark:border-purple-800/40 mb-4 group-hover:scale-105 transition-transform">
                <MusicIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center justify-between">
                <span>Music</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="mt-2 text-xs font-mono text-purple-600 dark:text-purple-400">
                Clarinet · Piano · Ensemble
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                B Flat Clarinet in SAES Symphonic Band (earned first gold plaque) and ABRSM Piano Distinction & Merit.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs font-medium text-slate-500">
              SAES Gold Plaque · ABRSM Gr 6 & 7
            </div>
          </div>

          {/* Card 4: Swimming */}
          <div
            onClick={() => {
              setActiveTab('swimming');
              window.location.hash = 'swimming';
            }}
            className="p-5 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:shadow-float dark:hover:shadow-float-dark transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-200/50 dark:border-cyan-800/40 mb-4 group-hover:scale-105 transition-transform">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center justify-between">
                <span>Swimming</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="mt-2 text-xs font-mono text-cyan-600 dark:text-cyan-400">
                Santa Clara Swim Club · 4+ Years
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Competitive butterfly specialist with 14yo Championship qualification times and Far Westerns medals.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs font-medium text-slate-500">
              Far Westerns Medalist · 100/200 Fly
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Work */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Spotlight
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
              Featured work
            </h2>
          </div>
          <button
            onClick={() => {
              setActiveTab('projects');
              window.location.hash = 'projects';
            }}
            className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 flex items-center gap-1 group"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured Card 1: GoodNeighbor */}
          <div
            onClick={() => goodNeighbor && onOpenProjectModal(goodNeighbor)}
            className="p-6 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800/80 hover:shadow-float dark:hover:shadow-float-dark hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="blue">SwiftUI & Firebase</Badge>
                <Badge variant="green">Active Prototype</Badge>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                GoodNeighbor
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                A two-sided mobile platform connecting local residents who need everyday assistance with verified community volunteers.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  SwiftUI
                </span>
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  Firestore
                </span>
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  Community
                </span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-brand-600 dark:text-brand-400 font-medium">
              <span>Read case study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Featured Card 2: VEX Robotics Leadership & Comp */}
          <div
            onClick={() => {
              setActiveTab('robotics');
              window.location.hash = 'robotics';
            }}
            className="p-6 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800/80 hover:shadow-float dark:hover:shadow-float-dark hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="amber">VEX IQ Robotics</Badge>
                <Badge variant="amber">Build Award</Badge>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                VEX Competition Robotics
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                4 seasons of mechanical design, autonomous coding, and teamwork. Mentoring new SAESPride team members and competing at NorCal and Worlds.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  CAD
                </span>
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  Sensors
                </span>
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  Mentorship
                </span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-amber-600 dark:text-amber-400 font-medium">
              <span>Explore robotics timeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Featured Card 3: Published iOS Apps */}
          <div
            onClick={() => {
              setActiveTab('apps');
              window.location.hash = 'apps';
            }}
            className="p-6 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800/80 hover:shadow-float dark:hover:shadow-float-dark hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="green">App Store</Badge>
                <Badge variant="green">4,400+ Downloads</Badge>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Published iOS Apps
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Mix and Match Calculator (3.75K downloads) and Rapid Relay Calculator (659 downloads) providing fast, rule-accurate scoring tools for teams.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  SwiftUI
                </span>
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  PencilKit
                </span>
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  CloudKit
                </span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <span>View app showcase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Currently" / "What I'm exploring" Section */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-100/70 dark:bg-surface-darkCard/60 border border-slate-200/70 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
              Currently Exploring & Building
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">Autumn 2026</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800">
            <div className="text-xs font-mono text-brand-600 dark:text-brand-400 mb-1">Software</div>
            <div className="text-sm font-medium text-slate-900 dark:text-white">
              SwiftData & Offline Caching
            </div>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Evaluating local schema migrations and zero-latency iPad UI updates.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800">
            <div className="text-xs font-mono text-amber-600 dark:text-amber-400 mb-1">Hardware</div>
            <div className="text-sm font-medium text-slate-900 dark:text-white">
              High-Traction VEX Intake
            </div>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Testing dual-roller gear ratios to eliminate game element slippage.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800">
            <div className="text-xs font-mono text-purple-600 dark:text-purple-400 mb-1">Performing Arts</div>
            <div className="text-sm font-medium text-slate-900 dark:text-white">
              ABRSM Piano Repertoire
            </div>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Practicing Grade 7 syllabus and classical sonatas with nuanced dynamics.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800">
            <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-1">Athletics</div>
            <div className="text-sm font-medium text-slate-900 dark:text-white">
              100m Fly Turn Efficiency
            </div>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Shaving tenths of a second off wall transitions with Santa Clara Swim Club.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Invitation to Explore CTA */}
      <section className="text-center py-8 sm:py-12 border-t border-slate-200/60 dark:border-slate-800">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Curious to see how I build?
        </h3>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
          Explore my step-by-step engineering cycle, robotics timeline, or verified accomplishments.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              setActiveTab('how-i-build');
              window.location.hash = 'how-i-build';
            }}
            className="px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors"
          >
            How I Build Process →
          </button>
          <button
            onClick={() => {
              setActiveTab('robotics');
              window.location.hash = 'robotics';
            }}
            className="px-5 py-2.5 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-300 bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Robotics Timeline →
          </button>
        </div>
      </section>
    </div>
  );
};
