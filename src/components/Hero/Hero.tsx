'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
  {
    title: "Welcome to Our Business",
    subtitle: "We provide innovative solutions for your business needs",
    videoUrl: "/videos/hero1.mp4", // You'll need to add your video files
  },
  {
    title: "Transform Your Business",
    subtitle: "Cutting-edge technology for modern enterprises",
    videoUrl: "/videos/hero2.mp4",
  },
  {
    title: "Innovate & Grow",
    subtitle: "Partner with us for sustainable growth",
    videoUrl: "/videos/hero3.mp4",
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !videoRef.current) return;

    const video = videoRef.current;
    video.load();
    
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [currentSlide, mounted]);

  if (!mounted) {
    return (
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          backgroundColor: '#1D1C3F',
        }}
      />
    );
  }

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
    >
      {/* Video Background */}
      <Box
        component="video"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        key={currentSlide}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src={heroSlides[currentSlide].videoUrl} type="video/mp4" />
      </Box>

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 2,
          color: 'white',
          paddingTop: '80px', // Add padding to account for header
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              {heroSlides[currentSlide].title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              {heroSlides[currentSlide].subtitle}
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#1D1C3F',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: '#2A2957',
                }
              }}
            >
              Get Started
            </Button>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '5%',
            display: 'flex',
            gap: 1,
          }}
        >
          {heroSlides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'white',
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 