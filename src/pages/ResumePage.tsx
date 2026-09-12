import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Printer,
  Download,
  Copy,
  Check,
  ExternalLink,
  MapPin,
  Mail,
  GraduationCap,
  Calculator,
  Waves,
  Music,
  Bot,
  Code,
  HeartHandshake
} from 'lucide-react';

export const ResumePage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-10">
      {/* Top Header & Actions Bar (Hidden when printing) */}
      <div className="no-print">
        <SectionHeader
          tag="Curriculum Vitae"
          title="Résumé"
          subtitle="A comprehensive, information-dense record of academic achievements, STEM projects, robotics leadership, athletics, and community service."
        />

        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Exact digital transcription of Google Doc résumé</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied Email</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Contact</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-medium text-white bg-slate-900 dark:bg-brand-600 hover:bg-slate-800 dark:hover:bg-brand-500 shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* The Printable High-Density Résumé Sheet */}
      <div className="print-page bg-white text-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-float dark:bg-slate-950 dark:text-slate-100 dark:border-slate-800 transition-colors">
        {/* Résumé Header */}
        <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-800">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ansel Yanze Dong
          </h1>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
            <span>10654 Flora Vista Avenue, Cupertino, CA 95014</span>
            <span>•</span>
            <a
              href="mailto:adong27@students.st-andrews.org"
              className="text-brand-600 dark:text-brand-400 hover:underline"
            >
              adong27@students.st-andrews.org
            </a>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-6 space-y-1.5">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400">
            Mission Statement
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {PERSONAL_INFO.missionStatement}
          </p>
        </div>

        {/* Contribution Statement */}
        <div className="mt-5 space-y-1.5">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400">
            Contribution Statement
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {PERSONAL_INFO.contributionStatement}
          </p>
        </div>

        <hr className="my-6 border-slate-200 dark:border-slate-800" />

        {/* Education Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Education
            </h2>
          </div>

          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <span className="font-semibold text-slate-900 dark:text-white">
                St. Andrew’s Episcopal School
              </span>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                Expected Graduation: June 2027 · Attended 3 years
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <span className="font-medium text-slate-800 dark:text-slate-200">
                Think Academy Online Math Class
              </span>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                4th Grade – present · 2022–present
              </span>
            </div>
          </div>
        </div>

        <hr className="my-6 border-slate-200 dark:border-slate-800" />

        {/* Mathematics Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Mathematics
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            {/* BmMT 2026 */}
            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>Berkeley Mini Math Tournament (BmMT) 2026</span>
                <span className="font-mono text-xs text-slate-500">7th Grade 2026</span>
              </div>
              <ul className="mt-1 space-y-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>Individual Round – Honorable Mention (Top 50%)</li>
                <li>Puzzle Round – Distinguished Honorable Mention (Top 20%)</li>
                <li>Team Round – Honorable Mention (Top 50%)</li>
                <li>Relay Round – Distinguished Honorable Mention (Top 20%)</li>
                <li>Overall – Distinguished Honorable Mention (Top 20%)</li>
              </ul>
            </div>

            {/* MathCounts */}
            <div className="flex justify-between items-baseline font-semibold">
              <span>MathCounts</span>
              <span className="font-mono text-xs text-slate-500">7th Grade 2026</span>
            </div>

            {/* Noetic 2023 */}
            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>Noetic Learning Math Contest Spring 2023</span>
                <span className="font-mono text-xs text-slate-500">4th Grade 2023</span>
              </div>
              <ul className="mt-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>National Honor Roll</li>
              </ul>
            </div>

            {/* AMC 8 */}
            <div>
              <div className="font-semibold">AMC 8 Competition</div>
              <ul className="mt-1 space-y-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>7th Grade 2026: 17 Points – Achievement Roll</li>
                <li>6th Grade 2025: 16 Points – Achievement Roll</li>
                <li>4th Grade 2023: 16 Points – Achievement Roll</li>
              </ul>
            </div>

            {/* Math Kangaroo */}
            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>Math Kangaroo Competition – Level 3</span>
                <span className="font-mono text-xs text-slate-500">3rd Grade 2022</span>
              </div>
              <ul className="mt-1 space-y-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>Full score (96 points)</li>
                <li>National Rank: 1</li>
                <li>State of California Rank: 1</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-slate-200 dark:border-slate-800" />

        {/* Athletics Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Waves className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Athletics
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>Santa Clara Swim Club</span>
                <span className="font-mono text-xs text-slate-500">3rd to 8th Grade · 2022 – present</span>
              </div>
              <ul className="mt-1 space-y-1.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>
                  <span className="font-medium">14 Year-Old Age Group Championships Qualifying Times</span> at Summer Age Group Championships (Age: 13):
                  <ul className="ml-5 mt-0.5 space-y-0.5 list-circle">
                    <li>100 Meter Fly — 1:06.22</li>
                    <li>200 Meter Fly — 2:28.83</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Summer Far Westerns Championships (50m) 2025</span> (Age: 12):
                  <ul className="ml-5 mt-0.5 space-y-0.5 list-circle">
                    <li>Rose gold medalist in two events (100 Fly and 200 Free)</li>
                    <li>Silver medalist in 400 Medley Relay (Fly)</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Top three best events:</span> 400 Free LCM — 4:45.68 · 100 Free LCM — 1:00.59 · 200 Free LCM — 2:14.45
                </li>
              </ul>
            </div>

            <div className="pt-1">
              <div className="flex justify-between items-baseline font-semibold">
                <span>SAES Flag Football Blue Team</span>
                <span className="font-mono text-xs text-slate-500">6th Grade 2024</span>
              </div>
              <ul className="mt-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>First place in local league</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-slate-200 dark:border-slate-800" />

        {/* Performing Arts Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Music className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Performing Arts
            </h2>
          </div>

          <div className="space-y-2 text-xs sm:text-sm">
            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>Piano — ABRSM Grade 6 (2023–2024 Syllabus)</span>
                <span className="font-mono text-xs text-slate-500">6th Grade 2025</span>
              </div>
              <ul className="mt-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>Scored Distinction</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>Piano — ABRSM Grade 7 (2025–2026 Syllabus)</span>
                <span className="font-mono text-xs text-slate-500">7th Grade 2026</span>
              </div>
              <ul className="mt-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>Scored Merit</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>SAES Symphonic Band</span>
                <span className="font-mono text-xs text-slate-500">6th Grade 2025–2026</span>
              </div>
              <ul className="mt-0.5 space-y-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>Played as B Flat Clarinet</li>
                <li>The band earned its first ever gold plaque.</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-slate-200 dark:border-slate-800" />

        {/* Robotics Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Robotics
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            {/* SAESPride */}
            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>SAESPride — 82894A — Saint Andrew’s Episcopal School</span>
                <span className="font-mono text-xs text-slate-500">7th Grade 2025–2026 | Leadership</span>
              </div>
              <ul className="mt-1 space-y-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>Mentored and introduced first-time team members to the VEX robotics ecosystem, helping them develop their technical skills and enthusiasm for robotics.</li>
                <li>NorCal Regional Championships: 13th Place Teamwork</li>
                <li>Awards: Build Award</li>
              </ul>
            </div>

            {/* Cheese Sandwich */}
            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>Cheese Sandwich — 52617X — Independent Team</span>
                <span className="font-mono text-xs text-slate-500">6th Grade 2024–2025 | Breakthrough Season</span>
              </div>
              <ul className="mt-1 space-y-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>Roles: Developed and experimented prototypes for ideal robot components; Main driver and secondary programmer</li>
                <li>NorCal Regional Championships: 2nd Place Teamwork, 4th Place Skills</li>
                <li>Awards: Teamwork Champion Award × 2, Teamwork 2nd Place Award × 2, Robot Skills Champion, Judges Award, Amaze Award</li>
              </ul>
            </div>

            {/* Eureka3 */}
            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>Eureka³ — 686V — InoBotics</span>
                <span className="font-mono text-xs text-slate-500">5th Grade 2023–2024</span>
              </div>
              <ul className="mt-1 space-y-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>Primary Roles: Team Captain, Builder, and Driver</li>
                <li>NorCal Regional Championships: 15th Place Teamwork, 8th Place Skills</li>
              </ul>
            </div>

            {/* Indiana Jones */}
            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>Indiana Jones — 94087A — Independent Team</span>
                <span className="font-mono text-xs text-slate-500">4th Grade 2022–2023</span>
              </div>
              <ul className="mt-1 space-y-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>Developed personal interest in robotics; Primary Role: Programmer</li>
                <li>NorCal Regional Championships: 3rd Place Teamwork</li>
                <li>VEX IQ World Championships: 7th Place Division Finals Teamwork</li>
                <li>Awards: Teamwork 3rd Place Award, Teamwork Championship Award, Design Award</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-slate-200 dark:border-slate-800" />

        {/* Computer Science Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Computer Science
            </h2>
          </div>

          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex justify-between items-baseline font-semibold">
              <span>SwiftUI Application Development</span>
              <span className="font-mono text-xs text-slate-500">5th Grade – present · 2024 – present</span>
            </div>
            <ul className="space-y-1 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">Rapid Relay Calculator (2024–2025)</span> – 659 Downloads
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">Mix and Match Calculator (2025–2026)</span> – 3.75K Downloads
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-slate-200 dark:border-slate-800" />

        {/* Service Experience Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Service Experience
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>SAES Student Panel</span>
                <span className="font-mono text-xs text-slate-500">7th Grade – present · 2025 – present</span>
              </div>
              <ul className="mt-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>Answered questions about the Saint Andrew’s school environment and community to parents who are interested to apply their child(ren) to Saint Andrew’s</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>Second Harvest of Silicon Valley</span>
                <span className="font-mono text-xs text-slate-500">7th Grade 2026</span>
              </div>
              <ul className="mt-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>Assisted with food distribution to community members in need</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-semibold">
                <span>St. Jude’s Episcopal Church – Rotating Safe Car Park Program</span>
                <span className="font-mono text-xs text-slate-500">6th Grade 2024</span>
              </div>
              <ul className="mt-0.5 space-y-0.5 list-disc list-inside text-slate-700 dark:text-slate-300 text-xs">
                <li>Assisted with meal preparation, serving, setup, and cleanup</li>
                <li>Welcomed and provided hospitality to guests experiencing homelessness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
