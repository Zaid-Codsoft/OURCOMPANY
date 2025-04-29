'use client';

import { Container, Typography, Box, Button, CircularProgress, TextField } from '@mui/material';
import dynamic from 'next/dynamic';
import { Suspense, useState, useEffect } from 'react';
import Image from 'next/image';

// Dynamically import components with proper SSR configuration
const Hero = dynamic(() => import('../components/Hero/Hero'), { 
  ssr: true,
  loading: () => (
    <Box sx={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  )
});

const Services = dynamic(() => import('../components/Services/Services'), { 
  ssr: true,
  loading: () => (
    <Box sx={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  )
});

const Industries = dynamic(() => import('../components/Industries/Industries'), { 
  ssr: true,
  loading: () => (
    <Box sx={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  )
});

const FeaturedInsights = dynamic(() => import('../components/FeaturedInsights/FeaturedInsights'), { 
  ssr: true,
  loading: () => (
    <Box sx={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  )
});

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Box component="main">
      <Box sx={{ position: 'relative' }}>
        <Suspense fallback={
          <Box sx={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        }>
          <Hero />
        </Suspense>
        
        <Suspense fallback={
          <Box sx={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        }>
          <Services />
        </Suspense>
        
        <Suspense fallback={
          <Box sx={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        }>
          <Industries />
        </Suspense>
        
        <Suspense fallback={
          <Box sx={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        }>
          <FeaturedInsights />
        </Suspense>

        {/* Careers Section */}
        <Box
          sx={{
            position: 'relative',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(/images/career-team.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.4)',
              zIndex: 0
            }
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Join Our Global Team
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                mb: 4,
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              Be part of a diverse team that drives innovation and creates impactful solutions across the globe
            </Typography>
            <Button
              variant="contained"
              href="/careers"
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
              Explore Careers
            </Button>
          </Container>
        </Box>

        {/* Career Contact Section */}
        <Box sx={{ py: 12, backgroundColor: '#f8f9fa' }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 6,
                alignItems: 'center'
              }}
            >
              {/* Left Column - Form */}
              <Box
                sx={{
                  backgroundColor: 'white',
                  p: 4,
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    color: '#1D1C3F',
                    fontWeight: 700,
                  }}
                >
                  Get in Touch
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: '#666',
                    lineHeight: 1.7,
                  }}
                >
                  Have questions about our career opportunities? Fill out the form below and we'll get back to you.
                </Typography>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(29, 28, 63, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(29, 28, 63, 0.2)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1D1C3F',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(29, 28, 63, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(29, 28, 63, 0.2)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1D1C3F',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Phone"
                    variant="outlined"
                    type="tel"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(29, 28, 63, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(29, 28, 63, 0.2)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1D1C3F',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(29, 28, 63, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(29, 28, 63, 0.2)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1D1C3F',
                        },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#1D1C3F',
                      color: 'white',
                      py: 1.5,
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: '#2A2957',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>

              {/* Right Column - Content */}
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    color: '#1D1C3F',
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  Why Join Us?
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        color: '#1D1C3F',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(29, 28, 63, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#1D1C3F',
                          fontSize: '1.5rem',
                        }}
                      >
                        🌟
                      </Box>
                      Growth Opportunities
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666',
                        lineHeight: 1.7,
                        pl: 7,
                      }}
                    >
                      Continuous learning and development programs to help you reach your full potential.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        color: '#1D1C3F',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(29, 28, 63, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#1D1C3F',
                          fontSize: '1.5rem',
                        }}
                      >
                        🌍
                      </Box>
                      Global Impact
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666',
                        lineHeight: 1.7,
                        pl: 7,
                      }}
                    >
                      Work on projects that make a difference across the world.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        color: '#1D1C3F',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(29, 28, 63, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#1D1C3F',
                          fontSize: '1.5rem',
                        }}
                      >
                        🤝
                      </Box>
                      Collaborative Culture
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666',
                        lineHeight: 1.7,
                        pl: 7,
                      }}
                    >
                      Join a supportive team that values collaboration and innovation.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Life at Our Company Section */}
        <Box sx={{ py: 12, backgroundColor: '#1D1C3F' }}>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 2,
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Life at Our Company
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                mb: 8,
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Discover what makes our workplace special and hear from our team members
            </Typography>

            {/* Testimonials Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 4,
                mb: 8,
              }}
            >
              {[
                {
                  name: 'Ahmed Khan',
                  role: 'Senior Software Engineer',
                  quote: 'The collaborative environment and opportunities for growth have made my journey here incredibly rewarding.',
                  location: 'Karachi, Pakistan'
                },
                {
                  name: 'Fatima Ali',
                  role: 'Product Designer',
                  quote: 'Working here has been transformative. The culture of innovation and support is unmatched.',
                  location: 'Lahore, Pakistan'
                },
                {
                  name: 'Usman Malik',
                  role: 'DevOps Engineer',
                  quote: 'The global perspective and diverse team make every day a learning experience.',
                  location: 'Islamabad, Pakistan'
                }
              ].map((testimonial, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: 3,
                    p: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                    }
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      mb: 3,
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                      fontStyle: 'italic',
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                      }}
                    >
                      {testimonial.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.9rem',
                      }}
                    >
                      {testimonial.location}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Office Culture Highlights */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
                gap: 3,
              }}
            >
              {[
                {
                  title: 'Work-Life Balance',
                  description: 'Flexible hours and remote work options',
                  icon: '⚖️'
                },
                {
                  title: 'Learning & Development',
                  description: 'Regular training and skill enhancement programs',
                  icon: '📚'
                },
                {
                  title: 'Health & Wellness',
                  description: 'Comprehensive health benefits and wellness programs',
                  icon: '❤️'
                },
                {
                  title: 'Team Events',
                  description: 'Regular team building and social activities',
                  icon: '🎉'
                }
              ].map((highlight, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: 2,
                    p: 3,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                    }
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: '2.5rem',
                      mb: 2,
                      color: 'white',
                    }}
                  >
                    {highlight.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {highlight.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    {highlight.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
} 