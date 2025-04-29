'use client';

import { Container, Typography, Box, Card, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionCard = motion(Card);

const insights = [
  {
    id: 1,
    type: "Case Study",
    title: "Enabling Seamless Resale Operations Across E-Commerce",
    image: "/images/blog/b2.jpg",
    slug: "enabling-seamless-resale-operations",
    position: { top: '0', right: '320px' }
  },
  {
    id: 2,
    type: "Blogs",
    title: "Custom Web Application Development: Everything You Need to Know",
    image: "/images/blog/b1.jpg",
    slug: "custom-web-application-development-guide",
    position: { top: '0', right: '0' }
  },
  {
    id: 3,
    type: "Case Study",
    title: "Empowering XQUIC for Automated Financial Accuracy",
    image: "/images/blog/b3.jpg",
    slug: "empowering-xquic-automated-financial",
    position: { top: '220px', right: '0' }
  },
  {
    id: 4,
    type: "Blogs",
    title: "How Cloud Computing Can Transform Small Businesses",
    image: "/images/blog/b1.jpg",
    slug: "cloud-computing-small-business-transformation",
    position: { top: '220px', right: '320px' }
  },
  {
    id: 5,
    type: "Blogs",
    title: "Trends of Mobile Design: What\'s Next for Your Business?",
    image: "/images/blog/b2.jpg",
    slug: "mobile-design-trends-business",
    position: { top: '440px', right: '320px' }
  },
  {
    id: 6,
    type: "Case Study",
    title: "KUDO\'s Journey to Bridging Global Communications",
    image: "/images/blog/b3.jpg",
    slug: "kudo-global-communications",
    position: { top: '440px', right: '0' }
  }
];

export default function FeaturedInsights() {
  return (
    <Box sx={{ py: 12, background: 'linear-gradient(180deg, #ffffff 0%, #f0f7f8 100%)' }}>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          position: 'relative',
          minHeight: '800px'
        }}>
          {/* Content Section */}
          <Box sx={{ 
            flex: '0 0 40%', 
            position: { xs: 'relative', md: 'sticky' },
            top: { md: '100px' },
            mb: { xs: 8, md: 0 },
            pr: { md: 4 }
          }}>
            <Typography
              variant="h6"
              sx={{
                color: '#00bcd4',
                fontWeight: 600,
                mb: 2,
                textTransform: 'uppercase'
              }}
            >
              FEATURED INSIGHTS
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: '#1D1C3F',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                maxWidth: '600px'
              }}
            >
              Stories of our transformations across Services and Industries
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: '#666',
                mb: 4,
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 400
              }}
            >
              From Concept to Completion
            </Typography>
            <Button
              variant="contained"
              component={Link}
              href="/blog"
              sx={{
                backgroundColor: '#00bcd4',
                color: 'white',
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#00acc1'
                }
              }}
            >
              Explore More
            </Button>
          </Box>

          {/* Cards Section */}
          <Box sx={{ 
            flex: '0 0 60%',
            position: 'relative',
            display: { xs: 'none', md: 'block' },
            height: '800px'
          }}>
            {insights.map((insight, index) => (
              <Link 
                key={insight.id}
                href="/blog"
                style={{ 
                  textDecoration: 'none',
                  position: 'absolute',
                  ...insight.position,
                  width: '300px',
                  zIndex: 1
                }}
              >
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    zIndex: 2,
                    transition: { duration: 0.2 },
                  }}
                  sx={{
                    height: '200px',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${insight.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      zIndex: 0
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'relative',
                      zIndex: 1,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: 3
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#ffffff',
                        fontWeight: 700,
                        mb: 1,
                        letterSpacing: '0.5px'
                      }}
                    >
                      {insight.type}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: '#ffffff',
                        lineHeight: 1.3,
                        fontSize: '1rem',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      {insight.title}
                    </Typography>
                  </Box>
                </MotionCard>
              </Link>
            ))}
          </Box>

          {/* Mobile Cards Section */}
          <Box sx={{ 
            display: { xs: 'grid', md: 'none' },
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 3
          }}>
            {insights.map((insight, index) => (
              <Link 
                key={insight.id}
                href="/blog"
                style={{ textDecoration: 'none' }}
              >
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  sx={{
                    height: '200px',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${insight.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      zIndex: 0
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'relative',
                      zIndex: 1,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: 3
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#ffffff',
                        fontWeight: 700,
                        mb: 1,
                        letterSpacing: '0.5px'
                      }}
                    >
                      {insight.type}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: '#ffffff',
                        lineHeight: 1.3,
                        fontSize: '1rem',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      {insight.title}
                    </Typography>
                  </Box>
                </MotionCard>
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 