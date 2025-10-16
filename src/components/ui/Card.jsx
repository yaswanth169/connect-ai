import React from 'react';

export const Card = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`bg-dark-100 rounded-xl p-6 border border-dark-200 ${
        hover ? 'hover:border-primary-600 hover:shadow-lg hover:shadow-primary-600/10 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className = '' }) => {
  return <h3 className={`text-xl font-semibold text-dark-900 ${className}`}>{children}</h3>;
};

export const CardDescription = ({ children, className = '' }) => {
  return <p className={`text-sm text-dark-600 ${className}`}>{children}</p>;
};

export const CardContent = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};
