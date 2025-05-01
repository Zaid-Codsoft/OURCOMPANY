import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ShinyTextProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
}

const ShinyText = ({ children, className = '', as = 'span' }: ShinyTextProps) => {
  const Component = as;

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <Component
        className="relative z-10"
        style={{
          background: 'linear-gradient(90deg, #00d8ff, #7cff67)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(0, 216, 255, 0.3)',
        }}
      >
        {children}
      </Component>
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(90deg, #00d8ff, #7cff67)',
          filter: 'blur(8px)',
          opacity: 0.5,
          transform: 'scale(1.1)',
        }}
      />
    </motion.div>
  );
};

export default ShinyText; 