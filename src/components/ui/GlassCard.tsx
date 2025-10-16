import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  onClick 
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        glass rounded-2xl p-6
        ${hover ? 'glass-hover cursor-pointer transform hover:scale-[1.02]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface GlassCardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCardHeader: React.FC<GlassCardHeaderProps> = ({ children, className = '' }) => {
  return <div className={`mb-6 ${className}`}>{children}</div>;
};

interface GlassCardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCardTitle: React.FC<GlassCardTitleProps> = ({ children, className = '' }) => {
  return <h3 className={`text-2xl font-bold text-white ${className}`}>{children}</h3>;
};

interface GlassCardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCardDescription: React.FC<GlassCardDescriptionProps> = ({ children, className = '' }) => {
  return <p className={`text-sm text-primary-300 mt-1 ${className}`}>{children}</p>;
};

interface GlassCardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCardContent: React.FC<GlassCardContentProps> = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};

