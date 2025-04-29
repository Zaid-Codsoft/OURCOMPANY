'use client';

import { Box, Container, Typography, Button, Grid } from '@mui/material';
import type { GridProps } from '@mui/material';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import motion components
const MotionBox = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false
});

const globalOpportunities = [
  {
    title: 'A Truly Global\nWorkforce',
    image: '/images/careers/soft1.jpg'
  },
  {
    title: 'Diverse\nPerspectives',
    image: '/images/careers/soft2.jpg'
  },
  {
    title: 'Seamless\nCollaboration',
    image: '/images/careers/soft3.jpg'
  },
  {
    title: 'Opportunities\nWithout Limits',
    image: '/images/careers/soft4.jpg'
  }
];

const careerPaths = [
  {
    title: 'Associate Software Engineer',
    description: 'Hone your skills with impactful projects.',
    bgImage: '/images/careers/soft1.jpg'
  },
  {
    title: 'Software Engineer',
    description: 'Deliver innovative solutions with confidence.',
    bgImage: '/images/careers/soft2.jpg'
  },
  {
    title: 'Senior Software Engineer',
    description: 'Lead by expertise and technical mastery.',
    bgImage: '/images/careers/soft3.jpg'
  },
  {
    title: 'Associate Team Lead',
    description: 'Mentor peers and manage workflows.',
    bgImage: '/images/careers/soft4.jpg'
  },
  {
    title: 'Team Lead',
    description: 'Drive team success with vision.',
    bgImage: '/images/careers/soft5.jpg'
  }
];

const joiningSteps = [
  {
    title: 'Submit Application',
    description: 'Take the first step towards your future.',
    icon: '📝'
  },
  {
    title: 'Expert Evaluation',
    description: 'Showcase your technical expertise.',
    icon: '🔍'
  },
  {
    title: 'Personal Interview',
    description: 'Connect with our team.',
    icon: '🤝'
  },
  {
    title: 'Seamless Onboarding',
    description: 'Begin your journey with us.',
    icon: '🎉'
  }
];

const JoiningStep = ({ step, index, total }: { step: any; index: number; total: number }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        '&::after': index < total - 1 ? {
          content: '""',
          position: 'absolute',
          top: '50%',
          right: '-50%',
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, #262B3F 50%, transparent 100%)',
          zIndex: 0,
          transform: 'translateY(-50%)',
          '@media (max-width: 900px)': {
            display: 'none'
          }
        } : {}
      }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Box
            sx={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '2px solid #262B3F',
              position: 'relative',
              transition: 'all 0.3s ease',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #262B3F, transparent)',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              },
              '&:hover': {
                transform: 'scale(1.05)',
                '&::before': {
                  opacity: 0.2
                }
              }
            }}
          >
            <Typography variant="h1" sx={{ fontSize: '2.5rem', color: '#262B3F' }}>
              {step.icon}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                mb: 1,
                color: '#262B3F',
                fontWeight: 600,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40px',
                  height: '2px',
                  backgroundColor: '#262B3F',
                  opacity: 0.3
                }
              }}
            >
              {step.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                maxWidth: '200px',
                margin: '0 auto',
                mt: 2
              }}
            >
              {step.description}
            </Typography>
          </Box>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default function CareersPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '90vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          background: '#262B3F',
          color: 'white',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url(/images/team.jpg)',
            opacity: 0.1,
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '5rem' },
                fontWeight: 700,
                mb: 3,
                background: 'linear-gradient(to right, #fff, #a5a5a5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Where People Drive Innovation
            </Typography>
            <Typography
              variant="h4"
              sx={{
                maxWidth: '600px',
                mb: 4,
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 300
              }}
            >
              We're more than a workplace—we're a people-first community that grows stronger together.
            </Typography>
            <Button
              variant="contained"
              href="/careers/job-openings"
              sx={{
                backgroundColor: '#00bcd4',
                color: 'white',
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                textTransform: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                '&:hover': {
                  backgroundColor: '#00a0b4',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 25px rgba(0,0,0,0.2)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Apply at Company
            </Button>
          </MotionBox>
        </Container>
      </Box>

      {/* Joining Steps Section */}
      <Box sx={{ py: 15, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 8,
              color: '#262B3F',
              fontWeight: 600
            }}
          >
            Your Path to Joining Us
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(4, 1fr)'
              },
              gap: { xs: 6, md: 4 },
              position: 'relative',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            {joiningSteps.map((step, index) => (
              <JoiningStep
                key={index}
                step={step}
                index={index}
                total={joiningSteps.length}
              />
            ))}
          </Box>
        </Container>
      </Box>
      {/* Career Paths Section */}
      <Box sx={{ py: 15, backgroundColor: '#262B3F', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              color: 'white',
              fontWeight: 600
            }}
          >
            Career Pathways
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              mb: 8,
              color: 'rgba(255,255,255,0.7)'
            }}
          >
            Your Growth, Our Priority
          </Typography>
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              overflowX: { xs: 'hidden', md: 'auto' },
              pb: 2,
              '&::-webkit-scrollbar': {
                height: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#00bcd4',
                borderRadius: '4px',
              }
            }}
          >
            {careerPaths.map((path, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: { xs: '100%', md: '300px' },
                  flex: { xs: '1', md: '0 0 300px' },
                  height: '400px',
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(38,43,63,0.2), rgba(38,43,63,0.95))',
                        zIndex: 1
                      }
                    }}
                  >
                    <Image
                      src={path.bgImage}
                      alt={path.title}
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      transition: 'all 0.3s ease',
                      transform: 'translateY(0)',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                      }
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 2,
                        color: 'white',
                        fontWeight: 600,
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      {path.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'rgba(255,255,255,0.9)',
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                      }}
                    >
                      {path.description}
                    </Typography>
                  </Box>
                </MotionBox>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Global Careers Section */}
      <Box sx={{ py: 15, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: 'center',
              color: '#00bcd4',
              fontWeight: 600,
              mb: 2,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            GLOBAL CAREERS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              textAlign: 'center',
              mb: 4,
              color: '#262B3F'
            }}
          >
            Connecting Talent Across the World
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              mb: 8,
              color: '#666',
              maxWidth: '1000px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            At our company, we take pride in our global presence, bringing together talented individuals from diverse cultures and regions to create impactful solutions. Here's what makes our global team exceptional
          </Typography>

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            },
            gap: 3
          }}>
            {globalOpportunities.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  height: { xs: '300px', md: '400px' },
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    '& .overlay': {
                      backgroundColor: 'rgba(0,0,0,0.3)'
                    }
                  }
                }}
              >
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    transition: 'all 0.3s ease',
                    zIndex: 1
                  }}
                />
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{
                    objectFit: 'cover'
                  }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    position: 'absolute',
                    bottom: 32,
                    left: 32,
                    color: 'white',
                    fontWeight: 700,
                    fontSize: { xs: '1.75rem', md: '2rem' },
                    lineHeight: 1.2,
                    zIndex: 2,
                    whiteSpace: 'pre-line',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 