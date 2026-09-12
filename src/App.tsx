import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { RoboticsPage } from './pages/RoboticsPage';
import { AppsPage } from './pages/AppsPage';
import { MusicPage } from './pages/MusicPage';
import { SwimmingPage } from './pages/SwimmingPage';
import { AboutPage } from './pages/AboutPage';
import { ResumePage } from './pages/ResumePage';
import { HowIBuildPage } from './pages/HowIBuildPage';
import { Project } from './types/portfolio';

export function App() {
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validTabs = [
        'home',
        'projects',
        'robotics',
        'apps',
        'music',
        'swimming',
        'about',
        'resume',
        'how-i-build'
      ];
      if (validTabs.includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync with browser URL hash navigation (back/forward button support)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validTabs = [
        'home',
        'projects',
        'robotics',
        'apps',
        'music',
        'swimming',
        'about',
        'resume',
        'how-i-build'
      ];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            setActiveTab={setActiveTab}
            onOpenProjectModal={handleOpenProjectModal}
          />
        );
      case 'projects':
        return <ProjectsPage onOpenProjectModal={handleOpenProjectModal} />;
      case 'robotics':
        return <RoboticsPage />;
      case 'apps':
        return <AppsPage />;
      case 'music':
        return <MusicPage />;
      case 'swimming':
        return <SwimmingPage />;
      case 'about':
        return <AboutPage />;
      case 'resume':
        return <ResumePage />;
      case 'how-i-build':
        return <HowIBuildPage />;
      default:
        return (
          <HomePage
            setActiveTab={setActiveTab}
            onOpenProjectModal={handleOpenProjectModal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#080b11] text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-brand-500/20 selection:text-brand-600 dark:selection:text-brand-400">
      {/* Navigation Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {renderActivePage()}
      </main>

      {/* Global Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProjectModal}
      />
    </div>
  );
}

export default App;
