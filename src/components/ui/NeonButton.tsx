import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
}

export const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  icon = true 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all duration-300 rounded-full group";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 border-2 border-transparent",
    secondary: "bg-transparent text-white border-2 border-white/20 hover:border-white/50 hover:bg-white/5 backdrop-blur-sm",
  };

  const content = (
    <>
      <span className="relative flex items-center gap-2">
        {children}
        {icon && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        )}
      </span>
    </>
  );

  if (href) {
    const isInternal = href.startsWith('#');
    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]}`} 
        target={isInternal ? undefined : "_blank"} 
        rel={isInternal ? undefined : "noreferrer"}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {content}
    </button>
  );
};