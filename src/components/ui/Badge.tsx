import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variants = {
    default: 'bg-dark-200 text-dark-800',
    success: 'bg-green-600/20 text-green-400 border border-green-600/30',
    warning: 'bg-yellow-600/20 text-yellow-400 border border-yellow-600/30',
    danger: 'bg-red-600/20 text-red-400 border border-red-600/30',
    info: 'bg-primary-600/20 text-primary-400 border border-primary-600/30',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

