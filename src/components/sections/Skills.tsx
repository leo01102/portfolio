import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { 
  SiPython, SiTypescript, SiJavascript, SiDotnet, SiHtml5, SiCss3, SiSass,
  SiPytorch, SiTensorflow, SiOnnx, SiPandas, SiNumpy,
  SiReact, SiNextdotjs, SiTailwindcss, SiThreedotjs, SiBootstrap, SiVite,
  SiFastapi, SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiSupabase, SiGooglecloud,
  SiGit, SiGithub, SiPostman, SiOpenai
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { DiVisualstudio } from 'react-icons/di';
import { Bot, Database, Code2, Cpu, Puzzle, MessageSquare, Flag, Users, Heart, RefreshCw } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Python': <SiPython className="text-[#3776AB]" />,
  'TypeScript': <SiTypescript className="text-[#3178C6]" />,
  'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
  'Visual Basic .NET': <SiDotnet className="text-[#512BD4]" />,
  'HTML': <SiHtml5 className="text-[#E34F26]" />,
  'CSS': <SiCss3 className="text-[#1572B6]" />,
  'SCSS': <SiSass className="text-[#CC6699]" />,
  'PyTorch': <SiPytorch className="text-[#EE4C2C]" />,
  'TensorFlow': <SiTensorflow className="text-[#FF6F00]" />,
  'ONNX': <SiOnnx className="text-[#005CED]" />,
  'Pandas': <SiPandas className="text-[#150458]" />,
  'NumPy': <SiNumpy className="text-[#013243]" />,
  'Natural Language Processing (NLP)': <Bot className="text-primary" />,
  'Wav2Vec': <Cpu className="text-secondary" />,
  'OpenAI API': <SiOpenai className="text-white" />,
  'React': <SiReact className="text-[#61DAFB]" />,
  'Next.js': <SiNextdotjs className="text-white" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
  'Bootstrap': <SiBootstrap className="text-[#7952B3]" />,
  'Lightweight Charts': <img src="/icons/Lightweight%20Charts.svg" alt="Lightweight Charts" className="w-5 h-5" />,
  'AmCharts': <img src="/icons/AmCharts.svg" alt="AmCharts" className="w-5 h-5" />,
  'Three.js': <SiThreedotjs className="text-white" />,
  'FastAPI': <SiFastapi className="text-[#009688]" />,
  'Node.js': <SiNodedotjs className="text-[#339933]" />,
  'Express.js': <SiExpress className="text-white" />,
  'PostgreSQL': <SiPostgresql className="text-[#4169E1]" />,
  'MySQL': <SiMysql className="text-[#4479A1]" />,
  'Supabase': <SiSupabase className="text-[#3ECF8E]" />,
  'Vite': <SiVite className="text-[#646CFF]" />,
  'Google Cloud': <SiGooglecloud className="text-[#4285F4]" />,
  'Git': <SiGit className="text-[#F05032]" />,
  'GitHub': <SiGithub className="text-white" />,
  'Postman': <SiPostman className="text-[#FF6C37]" />,
  'VS Code': <VscVscode className="text-[#007ACC]" />,
  'Visual Studio': <DiVisualstudio className="text-[#5C2D91]" />,

  // Soft Skills
  'Adaptability': <RefreshCw className="text-primary" />,
  'Adaptabilidad': <RefreshCw className="text-primary" />,
  'Aanpassingsvermogen': <RefreshCw className="text-primary" />,
  
  'Problem Solving': <Puzzle className="text-secondary" />,
  'Resolución de Problemas': <Puzzle className="text-secondary" />,
  'Probleemoplossing': <Puzzle className="text-secondary" />,
  
  'Communication': <MessageSquare className="text-blue-400" />,
  'Comunicación': <MessageSquare className="text-blue-400" />,
  'Communicatie': <MessageSquare className="text-blue-400" />,
  
  'Leadership': <Flag className="text-red-500" />,
  'Liderazgo': <Flag className="text-red-500" />,
  'Leiderschap': <Flag className="text-red-500" />,
  
  'Teamwork': <Users className="text-green-500" />,
  'Trabajo en Equipo': <Users className="text-green-500" />,
  'Teamwerk': <Users className="text-green-500" />,
  
  'Emotional Intelligence': <Heart className="text-pink-500" />,
  'Inteligencia Emocional': <Heart className="text-pink-500" />,
  'Emotionele Intelligentie': <Heart className="text-pink-500" />
};

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const recentConference = t.conferences.items[0];

  return (
    <section id="about" className="py-24 px-6 bg-surfaceHighlight/20 border-y border-white/5 overflow-x-clip">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">{t.skills.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.skills.items.map((category) => (
            <div key={category.name} className="space-y-4">
              <h3 className="text-sm font-bold tracking-widest text-primary uppercase border-b border-white/10 pb-2">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-textMuted hover:text-white transition-colors duration-200 group">
                    <span className="text-xl opacity-70 group-hover:opacity-100 transition-opacity">
                      {iconMap[skill] || <Code2 className="w-4 h-4" />}
                    </span>
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">{t.conferences.title}</h2>
          
          <div className="p-8 rounded-3xl bg-black/40 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-white/20 transition-colors group">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="text-blue-400">{recentConference.date}</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span className="text-textMuted">{recentConference.role}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                {recentConference.event}
              </h3>
              
              <p className="text-textMuted leading-relaxed">
                {recentConference.description}
              </p>
            </div>

            <a 
              href={recentConference.certificate} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-all whitespace-nowrap"
            >
              {recentConference.certificateLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};