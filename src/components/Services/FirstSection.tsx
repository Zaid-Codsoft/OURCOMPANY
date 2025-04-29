'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const floatingImages = [
  { src: '/images/service1.jpg', alt: 'Service 1', position: 'top-left', isLarge: true },
  { src: '/images/service2.jpg', alt: 'Service 2', position: 'bottom-left', isLarge: false },
  { src: '/images/service3.jpg', alt: 'Service 3', position: 'top-right', isLarge: false },
  { src: '/images/service4.jpg', alt: 'Service 4', position: 'bottom-right', isLarge: true },
];

const springConfig = { 
  stiffness: 200,
  damping: 20,
  mass: 0.5
};

const FirstSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    [0.8, 1, 1, 0.8]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0.7, 0.8],
    [-45, 0]
  );

  const subtitleOpacity = useTransform(
    scrollYProgress,
    [0.8, 0.85],
    [0, 1]
  );

  const subtitleY = useTransform(
    scrollYProgress,
    [0.8, 0.85],
    [20, 0]
  );

  const getPositionStyle = useCallback((position: string) => {
    switch (position) {
      case 'top-left':
        return { top: '-110px', left: '-110px' };
      case 'top-right':
        return { top: '-40px', right: '-20px' };
      case 'bottom-left':
        return { bottom: '-60px', left: '-20px' };
      case 'bottom-right':
        return { bottom: '-110px', right: '-110px' };
      default:
        return {};
    }
  }, []);

  const renderFloatingImages = useMemo(() => (
    floatingImages.map((image, index) => (
      <motion.div
        key={index}
        style={{
          position: 'absolute',
          width: image.isLarge ? '225px' : '150px',
          height: image.isLarge ? '225px' : '150px',
          zIndex: image.isLarge ? 2 : 1,
          opacity,
          scale,
          rotate,
          ...getPositionStyle(image.position),
          willChange: 'transform, opacity',
        }}
        transition={{
          type: "spring",
          ...springConfig,
          delay: index * 0.1,
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 150px, 225px"
          quality={75}
          style={{
            objectFit: 'cover',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          }}
        />
      </motion.div>
    ))
  ), [opacity, scale, rotate, getPositionStyle]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#f8f9fa',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
          zIndex: 2,
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.1s ease',
          '&:hover': {
            transform: 'scale(1.12)',
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '3.5rem', md: '4rem' },
            fontWeight: 700,
            background: 'black',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradient 8s ease infinite',
            textShadow: '3px 3px 0px rgba(0,0,0,0.1), 6px 6px 0px rgba(0,0,0,0.05)',
            transform: 'perspective(1000px) rotateX(20deg)',
            transformStyle: 'preserve-3d',
            transition: 'all 0.3s ease',
            willChange: 'transform',
            '&:hover': {
              transform: 'perspective(1000px) rotateX(15deg) scale(1.05)',
              textShadow: '4px 4px 0px rgba(0,0,0,0.15), 8px 8px 0px rgba(0,0,0,0.1)',
            },
            '@keyframes gradient': {
              '0%': {
                backgroundPosition: '0% 50%',
              },
              '50%': {
                backgroundPosition: '100% 50%',
              },
              '100%': {
                backgroundPosition: '0% 50%',
              },
            },
          }}
        >
          SERVICES
        </Typography>

        <motion.div
          style={{
            opacity: subtitleOpacity,
            y: subtitleY,
            willChange: 'transform, opacity',
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              mt: 2,
              fontSize: '1.2rem',
              color: '#666',
              fontStyle: 'italic',
            }}
          >
            Transforming ideas into exceptional experiences
          </Typography>
        </motion.div>

        {renderFloatingImages}
      </Box>
    </Box>
  );
};

export default React.memo(FirstSection); 