'use client';

import { Box, Container, Typography, Link as MuiLink, IconButton, Divider, Button } from '@mui/material';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'App Development', href: '/services/app-development' },
    { name: 'UI/UX Designing', href: '/services/ui-ux-designing' },
    { name: 'Custom Software Development', href: '/services/custom-software-development' },
    { name: 'Cloud Application', href: '/services/cloud-application' },
    { name: 'Cloud Maintenance', href: '/services/cloud-maintenance-integration' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <InstagramIcon />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  const contactInfo = [
    { icon: <EmailIcon />, text: 'info@yourcompany.com', href: 'mailto:info@yourcompany.com' },
    { icon: <PhoneIcon />, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: <LocationOnIcon />, text: '123 Business Street, Suite 100, City, State 12345', href: 'https://maps.google.com' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1D1C3F',
        color: 'white',
        py: 8,
        mt: 'auto',
        position: 'relative',
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
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          mb: 6
        }}>
          {/* Company Info */}
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 2, 
                fontWeight: 700,
                background: 'linear-gradient(90deg, #00bcd4, #3f51b5)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Your Company Name
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
              Transforming businesses through innovative technology solutions. We help companies achieve their digital goals with cutting-edge development services.
            </Typography>
            
            {/* Contact Info */}
            <Box sx={{ mb: 3 }}>
              {contactInfo.map((contact, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 1.5,
                    '&:hover': {
                      '& .contact-icon': {
                        backgroundColor: 'rgba(255,255,255,0.2)',
                      },
                      '& .contact-text': {
                        color: 'white',
                      }
                    }
                  }}
                >
                  <Box 
                    className="contact-icon"
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      width: 36, 
                      height: 36, 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      mr: 2,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {contact.icon}
                  </Box>
                  <MuiLink 
                    href={contact.href}
                    className="contact-text"
                    sx={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      fontSize: '0.9rem',
                    }}
                  >
                    {contact.text}
                  </MuiLink>
                </Box>
              ))}
            </Box>
            
            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Services */}
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', md: 'center' }
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 3, 
                fontWeight: 600,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 3,
                  background: 'linear-gradient(90deg, #00bcd4, #3f51b5)',
                  borderRadius: 2,
                }
              }}
            >
              Our Services
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {services.map((service, index) => (
                <Box component="li" key={index} sx={{ mb: 1.5 }}>
                  <Link
                    href={service.href}
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        marginRight: 1,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0';
                      }}
                    >
                      →
                    </Box>
                    {service.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Quick Links */}
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', md: 'flex-end' }
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 3, 
                fontWeight: 600,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 3,
                  background: 'linear-gradient(90deg, #00bcd4, #3f51b5)',
                  borderRadius: 2,
                }
              }}
            >
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {quickLinks.map((link, index) => (
                <Box component="li" key={index} sx={{ mb: 1.5 }}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        marginRight: 1,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0';
                      }}
                    >
                      →
                    </Box>
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="/privacy-policy"
              style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: '0.875rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                e.currentTarget.style.textDecoration = 'none';
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: '0.875rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                e.currentTarget.style.textDecoration = 'none';
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 