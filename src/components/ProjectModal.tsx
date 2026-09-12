import React, { useEffect } from 'react';
import { X, Lightbulb, HelpCircle, Layers, AlertCircle, RefreshCw, CheckCircle2, Award } from 'lucide-react';
import { Project } from '../types/portfolio';
import { Badge } from './Badge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const caseStudySteps = project.caseStudy
    ? [
        {
          label: 'Idea',
          icon: Lightbulb,
          color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200/60 dark:border-amber-800/40',
          content: project.caseStudy.idea,
          question: 'What sparked this project?'
        },
        {
          label: 'Why',
          icon: HelpCircle,
          color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-200/60 dark:border-blue-800/40',
          content: project.caseStudy.why,
          question: 'Why does it matter?'
        },
        {
          label: 'Prototype',
          icon: Layers,
          color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200/60 dark:border-indigo-800/40',
          content: project.caseStudy.prototype,
          question: 'The first implementation'
        },
        {
          label: 'Challenge',
          icon: AlertCircle,
          color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/40 border-rose-200/60 dark:border-rose-800/40',
          content: project.caseStudy.challenge,
          question: 'What failed or pushed limits?'
        },
        {
          label: 'Iteration',
          icon: RefreshCw,
          color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/40 border-sky-200/60 dark:border-sky-800/40',
          content: project.caseStudy.iteration,
          question: 'How I adapted and refined'
        },
        {
          label: 'Result',
          icon: CheckCircle2,
          color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/60 dark:border-emerald-800/40',
          content: project.caseStudy.result,
          question: 'Real-world impact'
        },
        {
          label: 'What I Learned',
          icon: Award,
          color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/40 border-purple-200/60 dark:border-purple-800/40',
          content: project.caseStudy.whatLearned,
          question: 'The engineering takeaway'
        }
      ]
    : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-surface-darkCard rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge
              variant={
                project.category === 'software'
                  ? 'blue'
                  : project.category === 'hardware'
                  ? 'amber'
                  : 'purple'
              }
            >
              {project.category.toUpperCase()}
            </Badge>
            <Badge
              variant={
                project.status === 'Published'
                  ? 'green'
                  : project.status === 'Active'
                  ? 'blue'
                  : 'neutral'
              }
            >
              {project.status}
            </Badge>
            {project.downloads && (
              <Badge variant="green">{project.downloads}</Badge>
            )}
          </div>

          <h3
            id="modal-project-title"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            {project.title}
          </h3>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study Section: Idea -> Why -> Prototype -> Challenge -> Iteration -> Result -> What I Learned */}
        {caseStudySteps.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-6">
              Engineering Deep-Dive: Idea to Outcome
            </h4>

            <div className="space-y-4">
              {caseStudySteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.label}
                    className="flex gap-4 p-4 rounded-xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/80 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center border ${step.color}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-semibold uppercase text-slate-400 dark:text-slate-500">
                          0{idx + 1}
                        </span>
                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {step.label}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                          — {step.question}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {step.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom actions */}
        <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
