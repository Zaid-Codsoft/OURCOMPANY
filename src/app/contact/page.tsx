'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactHero from '../../components/ContactHero/ContactHero';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <Box component="main">
      <ContactHero />
      
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' }, gap: 6 }}>
            {/* Left Column - Content */}
            <Box sx={{ pr: { md: 5 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 3,
                  color: '#262B3F',
                  lineHeight: 1.2
                }}
              >
                Let's Build Something Amazing Together
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#666',
                  mb: 5,
                  lineHeight: 1.7
                }}
              >
                Ready to transform your ideas into reality? Our team of experts is here to help you create innovative solutions that drive success.
              </Typography>

              {/* Contact Information */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <LocationOnIcon sx={{ color: '#00bcd4', fontSize: '2rem' }} />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: '#262B3F', mb: 1, fontWeight: 600 }}
                    >
                      Visit Us
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: '#666', lineHeight: 1.6 }}
                    >
                      123 Innovation Drive,<br />
                      Tech Valley, Silicon City 12345
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <EmailIcon sx={{ color: '#00bcd4', fontSize: '2rem' }} />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: '#262B3F', mb: 1, fontWeight: 600 }}
                    >
                      Email Us
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ 
                        color: '#666',
                        '&:hover': {
                          color: '#00bcd4'
                        },
                        transition: 'color 0.3s ease'
                      }}
                    >
                      contact@company.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <PhoneIcon sx={{ color: '#00bcd4', fontSize: '2rem' }} />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: '#262B3F', mb: 1, fontWeight: 600 }}
                    >
                      Call Us
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ 
                        color: '#666',
                        '&:hover': {
                          color: '#00bcd4'
                        },
                        transition: 'color 0.3s ease'
                      }}
                    >
                      +1 (555) 123-4567
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Right Column - Form */}
            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                p: { xs: 3, md: 5 },
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #00bcd4, #3f51b5)',
                }
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#262B3F',
                  mb: 1,
                  fontWeight: 600
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#666',
                  mb: 4
                }}
              >
                Fill out the form below and we'll get back to you shortly.
              </Typography>
              <ContactForm />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact; 