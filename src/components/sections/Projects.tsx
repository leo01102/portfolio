import React, { useState } from 'react';
import { ArrowUpRight, Github, ChevronDown } from 'lucide-react';
import { Badge } from '@components/ui/Badge';
import { useLanguage } from '@context/LanguageContext';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [parent] = useAutoAnimate<HTMLDivElement>({ duration: 500, easing: 'ease-in-out' });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-x-clip">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">{t.projects.title}</h2>
            <p className="text-textMuted max-w-xl">
              {t.projects.subtitle}
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-xs text-textMuted block">{t.projects.lastUpdate}</span>
            <span className="text-sm font-mono text-white">{t.projects.date}</span>
          </div>
        </div>

        <div ref={parent as React.Ref<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.filter(project => project.visible).map((project) => (
            <div
              key={project.id}
              onClick={() => toggleExpand(project.id)}
              className={`group relative flex flex-col p-8 rounded-3xl bg-surface/40 border border-white/10 hover:border-white/20 hover:bg-surface/60 transition-colors duration-300 backdrop-blur-sm cursor-pointer ${expandedId === project.id ? 'md:col-span-2 lg:col-span-3 bg-surface/80 z-20' : ''}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-widest text-textMuted uppercase mb-1">{project.category}</span>
                  <span className="text-xs text-primary/80 font-mono">{project.date}</span>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-textMuted hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  <button 
                    className="text-textMuted hover:text-white transition-colors"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedId === project.id ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              <div className="mb-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-lg text-textMuted mt-1">
                    {project.subtitle}
                  </p>
                )}
              </div>

              <p className="text-textMuted text-sm leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.slice(0, expandedId === project.id ? undefined : 4).map(tech => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
                {!expandedId && project.technologies.length > 4 && <Badge>+{project.technologies.length - 4}</Badge>}
              </div>

              {expandedId === project.id && (
                <div className="overflow-hidden">
                  <div className="pt-6 border-t border-white/10 flex flex-col gap-6">
                    <div>
                      <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">{t.projects.projectDetails}</h4>
                      <ul className="space-y-2">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-textMuted">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-start">
                        <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t.projects.viewProject} <ArrowUpRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {!expandedId && (
                <button 
                  className="inline-flex items-center text-sm font-bold text-white hover:text-primary transition-colors mt-auto"
                >
                  {t.projects.viewDetails} <ChevronDown className="w-4 h-4 ml-2" />
                </button>
              )}
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};