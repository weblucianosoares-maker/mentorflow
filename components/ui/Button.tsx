import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'danger' | 'success';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg uppercase tracking-wide flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-400 to-gold-600 text-black hover:shadow-gold-500/20",
    outline: "border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-900/20 hover:shadow-green-500/30 border border-green-500/50"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};