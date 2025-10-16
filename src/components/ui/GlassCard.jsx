import React from 'react';

export const GlassCard = ({ 
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
        ${hover ? 'glass-hover cursor-pointer' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export const GlassCardHeader = ({ children, className = '' }) => {
  return <div className={`mb-6 ${className}`}>{children}</div>;
};

export const GlassCardTitle = ({ children, className = '' }) => {
  return <h3 className={`text-2xl font-bold text-white ${className}`}>{children}</h3>;
};

export const GlassCardDescription = ({ children, className = '' }) => {
  return <p className={`text-sm text-primary-300 mt-1 ${className}`}>{children}</p>;
};

export const GlassCardContent = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};
