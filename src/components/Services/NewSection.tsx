'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Container, Button, Card, CardContent } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const servicesMenuItems = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Creating responsive and dynamic websites that engage users and drive business growth. Our solutions are tailored to your specific needs.',
    href: '/services/web-development'
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Building powerful mobile applications that deliver exceptional user experiences across all platforms. We create apps that users love.',
    href: '/services/app-development'
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Development',
    description: 'Creating custom, scalable, and secure WordPress solutions that help businesses establish a strong online presence. We specialize in theme development, plugin customization, and e-commerce integration.',
    href: '/services/wordpress-development'
  },
  {
    id: 'ui-ux-designing',
    title: 'UI/UX Designing',
    description: 'Crafting intuitive and beautiful user interfaces that enhance user experience and increase engagement. We focus on both aesthetics and functionality.',
    href: '/services/ui-ux-designing'
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    description: 'Developing tailored software solutions that address your unique business challenges. We build scalable and maintainable applications.',
    href: '/services/custom-software-development'
  },
  {
    id: 'cloud-application',
    title: 'Cloud Application',
    description: 'Leveraging cloud technologies to build scalable and secure applications. We help you migrate and optimize your cloud infrastructure.',
    href: '/services/cloud-application'
  },
  {
    id: 'cloud-maintenance-integration',
    title: 'Cloud Maintenance and Integration',
    description: 'Ensuring your cloud infrastructure runs smoothly with comprehensive maintenance and seamless integration services.',
    href: '/services/cloud-maintenance-integration'
  }
];

const scrollingServices = servicesMenuItems.map(service => service.title);

const NewSection = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % scrollingServices.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, display: 'flex', gap: '4rem' }}>
        {/* Left Side - Text Section */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h2" sx={{ fontSize: '3rem', fontWeight: 700, color: '#333' }}>
            Our Comprehensive
          </Typography>
          <Box sx={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentServiceIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h1" sx={{ 
                  fontSize: '4rem', 
                  fontWeight: 700,
                  background: 'black',
                  backgroundSize: '300% 300%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {scrollingServices[currentServiceIndex]}
                </Typography>
              </motion.div>
            </AnimatePresence>
          </Box>
          <Typography variant="h2" sx={{ fontSize: '3rem', fontWeight: 700, color: '#333' }}>
            Solutions
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#666', mt: 2 }}>
            We offer a comprehensive range of services designed to help your business thrive in the digital landscape. Our team of experts is dedicated to delivering exceptional results.
          </Typography>
        </Box>

        {/* Right Side - Cards Section */}
        <Box sx={{ 
          flex: 1, 
          position: 'relative',
          maxHeight: '500px',
          overflowY: 'auto',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '10px',
            '&:hover': {
              background: '#555',
            },
          },
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            height: '30px',
            zIndex: 1,
            pointerEvents: 'none',
          },
          '&::before': {
            top: 0,
            background: 'linear-gradient(to bottom, #f8f9fa, transparent)',
          },
          '&::after': {
            bottom: 0,
            background: 'linear-gradient(to top, #f8f9fa, transparent)',
          }
        }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: 3,
            p: 1
          }}>
            {servicesMenuItems.map((service) => (
              <Card 
                key={service.id}
                sx={{ 
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ mb: 1.5, fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {service.description}
                  </Typography>
                  <Button 
                    component={Link}
                    href={service.href}
                    variant="contained" 
                    sx={{ 
                      background: '#1D1C3F',
                      color: 'white',
                      '&:hover': {
                        background: '#2A2957',
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default NewSection; 