import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { NeonButton } from '@components/ui/NeonButton';
import { useLanguage } from '@context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-xl text-textMuted mb-8 leading-relaxed max-w-lg">
            {t.contact.description}
          </p>
          <NeonButton href={`mailto:${t.personal.email}`} icon={true}>
            {t.contact.cta}
          </NeonButton>
        </div>

        <div className="flex-initial min-w-[200px]">
          <div>
            <h4 className="text-sm font-bold tracking-widest text-white uppercase mb-6">{t.contact.socialsTitle}</h4>
            <div className="flex flex-col gap-4">
              <a href={t.personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-textMuted hover:text-white transition-colors group">
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span>GitHub</span>
              </a>
              <a href={t.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-textMuted hover:text-white transition-colors group">
                <Linkedin className="w-5 h-5 group-hover:text-[#0077b5] transition-colors" />
                <span>LinkedIn</span>
              </a>
              <a href={`mailto:${t.personal.email}`} className="flex items-center gap-3 text-textMuted hover:text-white transition-colors group">
                <Mail className="w-5 h-5 group-hover:text-red-400 transition-colors" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex justify-center items-center">
        <p className="text-textMuted text-sm text-center">
          © {new Date().getFullYear()} {t.personal.name}.
        </p>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
    </footer>
  );
};