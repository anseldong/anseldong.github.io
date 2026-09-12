import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import {
  PERSONAL_INFO,
  MATHEMATICS_DATA,
  SERVICE_EXPERIENCE_DATA
} from '../data/portfolioData';
import {
  Sparkles,
  Compass,
  Cpu,
  Calculator,
  HeartHandshake,
  BookOpen,
  Award,
  Users,
  Code,
  CheckCircle2
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const interests = [
    { name: 'Computer Science', desc: 'SwiftUI, Python, systems, and algorithms', icon: Code },
    { name: 'Mechanical Engineering', desc: 'VEX IQ robotics, linkages, and prototyping', icon: Cpu },
    { name: 'Competition Mathematics', desc: 'Combinatorics, number theory, and speed problem solving', icon: Calculator },
    { name: 'Performing Arts', desc: 'Symphonic clarinet and classical piano', icon: Sparkles },
    { name: 'Community Service', desc: 'Food drives, shelter programs, and student panels', icon: HeartHandshake }
  ];

  const currentlyLearning = [
    'SwiftData & CloudKit',
    'High-Speed Intake Dynamics',
    'Advanced Competition Math',
    'ABRSM Grade 7 Piano',
    'Spanish',
    'Chinese'
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      <SectionHeader
        tag="Personal Introduction & Philosophy"
        title="About Me"
        subtitle="I’m a student who likes understanding how things work — and then trying to build my own version."
      />

      {/* Main Philosophy Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Curiosity at the intersection of code, mechanics, and service.
        </h3>
        <div className="prose dark:prose-invert max-w-none text-base text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
          <p>
            Most of my projects sit somewhere between software, engineering, and curiosity. Sometimes that means building an iOS app with thousands of active downloads. Sometimes it means wiring solenoids and MOSFETs to a Raspberry Pi to play an acoustic piano. And sometimes it means staying up late testing gear ratios to figure out why a bean bag keeps sliding off a VEX IQ goal.
          </p>
          <p>
            I believe the best way to understand an idea is to implement it yourself. Whether it’s writing clean SwiftUI code, timing flip turns in the pool, or analyzing modular arithmetic in competition math, I enjoy putting in the deliberate practice to master difficult concepts.
          </p>
          <p>
            Beyond building things for myself, I care deeply about empowering others. In robotics, that meant stepping into a mentorship role on SAESPride to teach newer students how to CAD, wire, and drive. In our community, it means volunteering at local food distribution centers and welcoming unhoused guests at local parish car park programs.
          </p>
        </div>

        {/* Contribution Statement Callout */}
        <div className="mt-8 p-5 rounded-2xl bg-brand-50/50 dark:bg-brand-950/20 border border-brand-200/60 dark:border-brand-800/40 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-brand-700 dark:text-brand-400">
            <Compass className="w-4 h-4" />
            <span>High School Community Contribution</span>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
            "{PERSONAL_INFO.contributionStatement}"
          </p>
        </div>
      </div>

      {/* Core Interests Grid */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Core Intellectual Interests
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((interest) => {
            const Icon = interest.icon;
            return (
              <div
                key={interest.name}
                className="p-5 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-semibold text-base text-slate-900 dark:text-white">
                  {interest.name}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {interest.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mathematics Section */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Mathematics Competitions & Problem Solving
            </h3>
          </div>
          <Badge variant="blue">Think Academy & Competitions</Badge>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Active competition math student since 4th grade, with national honors across Berkeley Mini Math Tournament, AMC 8, and Math Kangaroo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MATHEMATICS_DATA.map((item) => (
            <div
              key={item.competition}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  {item.competition}
                </span>
                <span className="text-xs font-mono text-slate-400">{item.gradeYear}</span>
              </div>
              <ul className="space-y-1">
                {item.honors.map((h, i) => (
                  <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Community Service & Leadership Section */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Service Experience & Community Engagement
            </h3>
          </div>
          <Badge variant="green">Community Service</Badge>
        </div>

        <div className="space-y-4">
          {SERVICE_EXPERIENCE_DATA.map((srv) => (
            <div
              key={srv.organization}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="font-semibold text-sm text-slate-900 dark:text-white">
                  {srv.organization}
                </div>
                <div className="text-xs font-mono text-slate-400">{srv.timeframe}</div>
              </div>
              <ul className="space-y-1.5 pt-1">
                {srv.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Learning & Exploring */}
      <div className="p-6 rounded-2xl bg-slate-100/70 dark:bg-surface-darkCard/40 border border-slate-200/70 dark:border-slate-800">
        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
          Currently Learning & Leveling Up
        </h4>
        <div className="flex flex-wrap gap-2">
          {currentlyLearning.map((topic) => (
            <span
              key={topic}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 shadow-2xs"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Motto Graphic Card */}
      <div className="p-8 rounded-3xl bg-slate-900 dark:bg-slate-950 text-white text-center sm:text-left sm:flex sm:items-center sm:justify-between border border-slate-800 shadow-float">
        <div className="space-y-2">
          <div className="text-xs font-mono text-brand-400 uppercase tracking-wider">
            Personal Motto
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Curiosity builds better things.
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            The desire to know how machines tick, why algorithms scale, and how people interact is what drives every project I start.
          </p>
        </div>
        <div className="mt-6 sm:mt-0 flex-shrink-0">
          <span className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-brand-400 border border-white/10 mx-auto">
            <Sparkles className="w-7 h-7" />
          </span>
        </div>
      </div>
    </div>
  );
};
