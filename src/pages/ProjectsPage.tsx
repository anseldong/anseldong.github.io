import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ArrowRight, Sparkles, Terminal, Cpu, Smartphone, Layers } from 'lucide-react';

interface ProjectsPageProps {
  onOpenProjectModal: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenProjectModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'software' | 'hardware' | 'experimental'>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'software', label: 'Software' },
    { id: 'hardware', label: 'Hardware / Engineering' },
    { id: 'experimental', label: 'Experimental' }
  ];

  return (
    <div className="space-y-10">
      <SectionHeader
        tag="Engineering & Code"
        title="Projects"
        subtitle="A collection of things I've built, prototyped, explored, and learned from first principles."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-150 ${
                isActive
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                  : 'bg-white dark:bg-surface-darkCard text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const isHardware = project.category === 'hardware';
          const isPublished = project.status === 'Published';

          return (
            <div
              key={project.id}
              onClick={() => onOpenProjectModal(project)}
              className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/40 dark:hover:border-brand-500/40 hover:shadow-float dark:hover:shadow-float-dark hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Badges bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={isHardware ? 'amber' : project.category === 'software' ? 'blue' : 'purple'}
                    >
                      {project.category.toUpperCase()}
                    </Badge>
                    <Badge variant={isPublished ? 'green' : 'neutral'}>
                      {project.status}
                    </Badge>
                  </div>
                  {project.downloads && (
                    <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-200/50 dark:border-emerald-800/40">
                      {project.downloads}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-medium text-brand-600 dark:text-brand-400">
                <span>View engineering breakdown</span>
                <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Idea → Result</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Philosophy Callout */}
      <div className="p-6 rounded-2xl bg-slate-100/60 dark:bg-surface-darkCard/40 border border-slate-200/70 dark:border-slate-800 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h4 className="text-base font-semibold text-slate-900 dark:text-white">
            Have an idea to collaborate on?
          </h4>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            I'm always looking to test new prototypes, explore robotics mechanisms, or build community software.
          </p>
        </div>
        <a
          href="mailto:adong27@students.st-andrews.org"
          className="mt-4 sm:mt-0 inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-medium text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors whitespace-nowrap"
        >
          Send an email →
        </a>
      </div>
    </div>
  );
};
