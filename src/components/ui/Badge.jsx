import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variants = {
    default: 'bg-white/10 text-white border border-white/20',
    success: 'bg-green-500/20 text-green-400 border border-green-500/40',
    warning: 'bg-amber-500/20 text-amber-400 border border-amber-500/40',
    danger: 'bg-red-500/20 text-red-400 border border-red-500/40',
    info: 'bg-blue-500/20 text-blue-400 border border-blue-500/40',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
