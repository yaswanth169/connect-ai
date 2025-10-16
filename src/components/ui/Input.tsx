import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon: Icon,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-white mb-2">
          {label}
        </label>
      )}
      <div className="relative group">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-400 group-focus-within:text-white transition-colors">
            <Icon className="w-5 h-5" strokeWidth={2.5} />
          </div>
        )}
        <input
          className={`w-full glass rounded-xl px-4 py-3.5 ${
            Icon ? 'pl-12' : ''
          } text-white placeholder:text-primary-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all duration-300 ${
            error ? 'border-red-500/50 focus:ring-red-500/20' : ''
          } ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-400 font-medium">{error}</p>
      )}
    </div>
  );
};

