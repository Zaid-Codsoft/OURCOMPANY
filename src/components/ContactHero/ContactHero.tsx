'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ContactHero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#262B3F',
        color: 'white',
        overflow: 'hidden',
        py: { xs: 10, md: 15 },
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
           // background: 'linear-gradient(135deg, rgba(38,43,63,0.95) 0%, rgba(38,43,63,0.85) 100%)',
            zIndex: 1
          }
        }}
      >
        <Image
          src="/images/meeting.jpg"
          alt="Contact Us"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          priority
        />
      </Box>

      {/* Gradient Overlays */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0,188,212,0.15) 0%, rgba(63,81,181,0.15) 100%)',
          zIndex: 1
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '140%',
          height: '140%',
          background: 'radial-gradient(circle, rgba(63,81,181,0.1) 0%, rgba(0,188,212,0.1) 50%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          zIndex: 1
        }}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              textAlign: 'center',
              mb: 3,
              background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Get in Touch
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              fontWeight: 400,
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.6,
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            Whether you have a question about our services, want to start a project, or just want to connect - we're here to help!
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            mt: 6,
            flexWrap: { xs: 'wrap', sm: 'nowrap' }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                p: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                }
              }}
            >
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                Available 24/7
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                p: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                }
              }}
            >
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                Quick Response Time
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactHero; 