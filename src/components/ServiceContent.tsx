'use client';

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Button,
  Skeleton
} from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceContent {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  process: {
    title: string;
    description: string;
  }[];
  heroImage?: string;
  heroBackgroundImage?: string;
  overviewImage?: string;
  featureImages?: string[];
  backgroundPattern?: string;
  featureDescriptions?: string[];
}

interface ServiceContentProps {
  content: ServiceContent;
}

// Optimize default images with proper paths and fallbacks
const defaultImages = {
  hero: '/images/defaults/service-hero.svg',
  heroBackgroundImage: '/images/defaults/service-bg.jpg',
  overview: '/images/defaults/service-overview.jpg',
  pattern: '/images/defaults/grid-pattern.png',
  features: Array(8).fill('').map((_, i) => `/images/defaults/feature-${i + 1}.jpg`)
};

// Memoize the MotionBox component
const MotionBox = motion(Box);

export default function ServiceContent({ content }: ServiceContentProps) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Memoize images object
  const images = {
    hero: content.heroImage || defaultImages.hero,
    heroBackgroundImage: content.heroBackgroundImage || defaultImages.heroBackgroundImage,
    overview: content.overviewImage || defaultImages.overview,
    pattern: content.backgroundPattern || defaultImages.pattern,
    features: content.featureImages || defaultImages.features
  };

  // Handle image loading
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = [
          images.heroBackgroundImage,
          images.overview,
          ...images.features
        ].map((src) => {
          return new Promise<void>((resolve) => {
            const img = new window.Image();
            img.onload = () => resolve();
            img.onerror = () => {
              console.warn(`Failed to load image: ${src}`);
              resolve(); // Resolve anyway to not block the page
            };
            img.src = src;
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Still set to true to show content
      }
    };

    preloadImages();
  }, [images]);

  if (!imagesLoaded) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Skeleton variant="rectangular" width="100%" height="100vh" />
      </Box>
    );
  }

  return (
    <Box component="main">
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${images.heroBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)',
            zIndex: 1,
          }
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: `url("${images.pattern}")`,
            backgroundSize: '30px 30px',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'nowrap',
            gap: { xs: 4, md: 8 },
            alignItems: 'center'
          }}>
            {/* Left Column - Content */}
            <Box sx={{ 
              flex: '1',
              minWidth: 0 // Prevents content from overflowing
            }}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 700,
                    mb: 3,
                    background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.2,
                  }}
                >
                  {content.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 4,
                    color: 'rgba(255,255,255,0.9)',
                    maxWidth: '800px',
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {content.subtitle}
                </Typography>
                <Link href="/contact" passHref>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#00bcd4',
                      color: 'white',
                      px: 6,
                      py: 2,
                      fontSize: '1.1rem',
                      '&:hover': {
                        backgroundColor: '#00acc1',
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Link>
              </MotionBox>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          {/* Overview Section */}
          <Box sx={{ mb: 12 }}>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'nowrap',
              gap: { xs: 3, md: 8 },
              alignItems: 'center'
            }}>
              {/* Content */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 700,
                    mb: 3,
                    color: '#1D1C3F',
                  }}
                >
                  Overview
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: '#666',
                    mb: 4,
                  }}
                >
                  {content.description}
                </Typography>
              </Box>

              {/* Image */}
              <Box
                sx={{
                  flex: 1,
                  position: 'relative',
                  height: { xs: '300px', md: '400px' },
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={images.overview}
                  alt="Service Overview"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: 'cover',
                  }}
                  priority
                  loading="eager"
                  quality={85}
                />
              </Box>
            </Box>
          </Box>

          {/* Features Section */}
          <Box sx={{ mb: 12 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 6,
                color: '#1D1C3F',
                textAlign: 'center',
              }}
            >
              Key Features
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                },
                gap: 4,
              }}
            >
              {content.features.map((feature, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    p: 5,
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `url(${images.features[index]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    },
                  }}
                >
                  <Box sx={{ 
                    position: 'relative', 
                    zIndex: 1,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 3,
                        color: 'white',
                        fontSize: '1.25rem',
                      }}
                    >
                      {feature}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'white',
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                        flex: 1,
                      }}
                    >
                      {content.featureDescriptions?.[index] || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>

          {/* Process Section */}
          <Box sx={{ 
            position: 'relative',
            py: 15,
            px: 4,
            background: 'linear-gradient(to right, rgba(0,188,212,0.03), rgba(63,81,181,0.03))',
            borderRadius: '16px',
          }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 10,
                background: 'linear-gradient(135deg, #1D1C3F 0%, #2B2A5A 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center',
                letterSpacing: '-0.02em',
              }}
            >
              Our Process
            </Typography>
            <Box sx={{ 
              maxWidth: '1400px', 
              mx: 'auto',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: { xs: 4, md: 6 },
            }}>
              {content.process.map((step, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1], delay: index * 0.1 }}
                  viewport={{ once: true }}
                  sx={{
                    display: 'flex',
                    gap: 4,
                    position: 'relative',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #00bcd4, #3f51b5)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1.5rem',
                      position: 'relative',
                      flexShrink: 0,
                      boxShadow: '0 12px 24px -8px rgba(0,188,212,0.3)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: -1,
                        borderRadius: '16px',
                        padding: '1px',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      flex: 1,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '16px',
                      background: 'white',
                      border: '1px solid rgba(0,188,212,0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                        border: '1px solid rgba(0,188,212,0.2)',
                      }
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
                        color: '#1D1C3F',
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        '&::before': {
                          content: '""',
                          display: 'block',
                          width: '4px',
                          height: '24px',
                          background: 'linear-gradient(to bottom, #00bcd4, #3f51b5)',
                          borderRadius: '2px',
                        }
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666',
                        lineHeight: 1.8,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        letterSpacing: '0.01em',
                        flex: 1,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Paper>
                </MotionBox>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 