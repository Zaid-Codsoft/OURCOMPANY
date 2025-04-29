'use client';

import { Box } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';

interface PlaceholderImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function PlaceholderImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: PlaceholderImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (error) {
    return (
      <Box
        sx={{
          width: width || '100%',
          height: height || '100%',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          fontSize: '0.875rem',
        }}
        className={className}
      >
        {alt}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: width || '100%',
        height: height || '100%',
        backgroundColor: isLoading ? '#f0f0f0' : 'transparent',
        transition: 'background-color 0.3s ease',
      }}
      className={className}
    >
      <Image
        src={src}
        alt={alt}
        fill={!width || !height}
        width={width}
        height={height}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
        style={{
          objectFit: 'cover',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      />
    </Box>
  );
} 