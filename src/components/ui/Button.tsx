import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2.5 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-900/20 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-primary-100 shadow-lg hover:shadow-xl transform hover:scale-[1.02]',
    secondary: 'bg-primary-800/50 backdrop-blur-sm text-white border border-white/20 hover:bg-primary-700/60 hover:border-white/30',
    ghost: 'bg-transparent text-white hover:bg-white/10',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" strokeWidth={2.5} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" strokeWidth={2.5} />}
    </button>
  );
};

