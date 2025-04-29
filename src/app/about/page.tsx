'use client';

import dynamic from 'next/dynamic';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiMaterialdesign,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiGraphql,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiVuedotjs,
  SiAngular,
  SiSass,
  SiGit,
  SiJest,
  SiCypress,
  SiWebpack,
  SiVite,
  SiFigma,
  SiAdobexd,
  SiSketch,
  SiInvision,
  SiStorybook,
  SiChakraui,
  SiBootstrap,
  SiBulma,
  SiFramer,
  SiStyledcomponents,
  SiLess,
  SiPostman,
  SiSwagger
} from 'react-icons/si';
import { 
  Psychology, 
  Link as LinkIcon, 
  Devices, 
  Security 
} from '@mui/icons-material';

// Dynamically import motion components with ssr disabled
const MotionBox = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false
});

const MotionTypography = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false
});

const coreValues = [
  {
    title: 'Integrity',
    description: 'Embody dependability, honesty, and transparency.',
    icon: '🛡️'
  },
  {
    title: 'Innovation',
    description: 'Act courageously, experiment, and make bold decisions.',
    icon: '💡'
  },
  {
    title: 'Dedication',
    description: 'Commit to tirelessly delivering precision and perfection.',
    icon: '⭐'
  }
];

const systemsWay = [
  {
    title: 'Optimize',
    description: 'We leverage customer-centric and cutting-edge talent and technology for higher business efficiency.',
    icon: '⚡'
  },
  {
    title: 'Transform',
    description: 'We reimagine processes and systems by offering holistic solutions for superior enterprise value.',
    icon: '🔄'
  },
  {
    title: 'Scale',
    description: 'We enable future-ready enterprises with long-term growth in a state of perpetual reinvention.',
    icon: '📈'
  }
];

const leadership = [
  {
    name: 'John Smith',
    position: 'CEO & Managing Director',
    image: '/images/team/leader1.jpg'
  },
  {
    name: 'Sarah Johnson',
    position: 'Chief Technology Officer',
    image: '/images/team/leader2.jpg'
  },
  {
    name: 'Michael Chen',
    position: 'Chief Operations Officer',
    image: '/images/team/leader3.jpg'
  },
  {
    name: 'Emily Brown',
    position: 'Chief Innovation Officer',
    image: '/images/team/leader4.jpg'
  }
];

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading state
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
            background: 'url(/images/hero-pattern.png)',
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
              component="h1"
              sx={{
                fontSize: { xs: '3rem', md: '5rem' },
                fontWeight: 700,
                mb: 3,
                maxWidth: '800px',
                background: 'linear-gradient(to right, #fff, #a5a5a5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Enabling a digital tomorrow
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
              Transforming businesses through innovative technology solutions
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Philosophy Section */}
      <Box 
        sx={{ 
          py: 15,
          backgroundColor: '#f8f9fa',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to bottom, transparent, #fff)'
          }
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: '#00bcd4',
                fontWeight: 600,
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}
            >
              OUR PHILOSOPHY
            </Typography>
            <Typography
              variant="h3"
              sx={{
                maxWidth: '800px',
                mb: 4,
                color: '#1D1C3F',
                lineHeight: 1.4,
                fontWeight: 600
              }}
            >
              As a leading contributor to driving change, we understand the importance of continued self-reinvention.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: '700px',
                color: '#666',
                lineHeight: 1.8,
                fontWeight: 400,
                mb: 4
              }}
            >
              We accomplish this by investing in next-generation capabilities that enhance our differentiation in key growth areas and by nurturing talent that drives innovation.
            </Typography>
            <Link href="/contact" passHref>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#1D1C3F',
                  color: 'white',
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: '#2A2957',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Get in Touch
              </Button>
            </Link>
          </MotionBox>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Box sx={{ 
        py: 15, 
        backgroundColor: '#262B3F',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to top, #262B3F, transparent)'
        }
      }}>
        <Container maxWidth="lg">
          <Typography
            variant="subtitle1"
            sx={{
              color: '#00bcd4',
              fontWeight: 600,
              mb: 2,
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}
          >
            OUR CORE VALUES
          </Typography>
          <Typography
            variant="h3"
            sx={{
              maxWidth: '800px',
              mb: 8,
              color: '#ffffff',
              fontWeight: 600
            }}
          >
            We dedicatedly master the power of technology in bespoke ways for our customers
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)'
              },
              gap: 4
            }}
          >
            {coreValues.map((value, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                    }
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      mb: 3,
                      fontSize: '3rem',
                      color: '#00bcd4'
                    }}
                  >
                    {value.icon}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      color: '#ffffff',
                      fontWeight: 600
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.7
                    }}
                  >
                    {value.description}
                  </Typography>
                </Paper>
              </MotionBox>
            ))}
          </Box>
        </Container>
      </Box>

      {/* The Systems Way Section */}
      <Box 
        sx={{ 
          py: 15,
          position: 'relative',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          overflow: 'visible',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'url("/images/grid-pattern.png")',
            opacity: 0.1,
            zIndex: 1
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: 'linear-gradient(to top, #fff, transparent)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ position: 'relative' }}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#262B3F',
                  fontWeight: 600,
                  mb: 2,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  display: 'inline-block',
                  background: '#fff',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: '2px solid #262B3F'
                }}
              >
                THE SYSTEMS WAY
              </Typography>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{
                  maxWidth: '800px',
                  mb: 8,
                  color: '#262B3F',
                  fontWeight: 600,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-20px',
                    left: 0,
                    width: '80px',
                    height: '4px',
                    background: '#262B3F'
                  }
                }}
              >
                Uniquely positioned to partner with the world's largest businesses
              </Typography>
            </MotionBox>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: 'repeat(3, 1fr)'
                },
                gap: 4,
                position: 'relative'
              }}
            >
              {systemsWay.map((item, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      position: 'relative',
                      p: 4,
                      height: '100%',
                      borderRadius: '20px',
                      background: 'white',
                      overflow: 'hidden',
                      border: '1px solid #262B3F',
                      transition: 'all 0.3s ease',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: '#262B3F'
                      },
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(38, 43, 63, 0.15)',
                        borderColor: '#262B3F',
                        '& .icon-container': {
                          transform: 'scale(1.1) rotate(10deg)',
                          background: 'rgba(38, 43, 63, 0.1)'
                        }
                      }
                    }}
                  >
                    <Box
                      className="icon-container"
                      sx={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        background: 'rgba(38, 43, 63, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        transition: 'transform 0.3s ease, background 0.3s ease',
                        transform: 'rotate(-10deg)'
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color: '#262B3F',
                          fontSize: '2rem'
                        }}
                      >
                        {item.icon}
                      </Typography>
                    </Box>

                    <Box sx={{ position: 'relative', zIndex: 2 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          color: '#262B3F',
                          fontWeight: 600,
                          fontSize: '1.5rem'
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#666',
                          lineHeight: 1.7,
                          fontSize: '1rem'
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: '-20px',
                        right: '-20px',
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'rgba(38, 43, 63, 0.05)',
                        zIndex: 1
                      }}
                    />
                  </Paper>
                </MotionBox>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Leadership Section */}
      <Box sx={{ 
        py: 15, 
        backgroundColor: '#262B3F',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to top, #262B3F, transparent)'
        }
      }}>
        <Container maxWidth="lg">
          <Typography
            variant="subtitle1"
            sx={{
              color: 'white',
              fontWeight: 600,
              mb: 2,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'inline-block',
              background: 'linear-gradient(90deg, #00bcd4, #007b8e)',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            OUR LEADERSHIP
          </Typography>
          <Typography
            variant="h3"
            sx={{
              maxWidth: '800px',
              mb: 8,
              color: '#ffffff',
              fontWeight: 600,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-20px',
                left: 0,
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #00bcd4, #007b8e)'
              }
            }}
          >
            Meet the team driving innovation
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)'
              },
              gap: 4
            }}
          >
            {leadership.map((leader, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      paddingTop: '100%',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7))',
                        zIndex: 1
                      }
                    }}
                  >
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      style={{
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                  <Box 
                    sx={{ 
                      p: 3,
                      position: 'relative',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#ffffff',
                        fontWeight: 600,
                        mb: 1
                      }}
                    >
                      {leader.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        fontWeight: 500
                      }}
                    >
                      {leader.position}
                    </Typography>
                  </Box>
                </Paper>
              </MotionBox>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Technology Stack Section */}
      <Box sx={{ py: 12, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              color: '#1D1C3F',
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Our Technology Stack
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              mb: 8,
              color: '#666',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Building with modern and powerful technologies
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(6, 1fr)' },
              gap: 4,
              mb: 8,
            }}
          >
            {[
              { icon: <SiReact size={40} />, name: 'React', color: '#61DAFB' },
              { icon: <SiNextdotjs size={40} />, name: 'Next.js', color: '#000000' },
              { icon: <SiTypescript size={40} />, name: 'TypeScript', color: '#3178C6' },
              { icon: <SiMaterialdesign size={40} />, name: 'Material-UI', color: '#0081CB' },
              { icon: <SiNodedotjs size={40} />, name: 'Node.js', color: '#339933' },
              { icon: <SiPython size={40} />, name: 'Python', color: '#3776AB' },
              { icon: <SiJavascript size={40} />, name: 'JavaScript', color: '#F7DF1E' },
              { icon: <SiGraphql size={40} />, name: 'GraphQL', color: '#E10098' },
              { icon: <SiAmazon size={40} />, name: 'AWS', color: '#232F3E' },
              { icon: <SiDocker size={40} />, name: 'Docker', color: '#2496ED' },
              { icon: <SiKubernetes size={40} />, name: 'Kubernetes', color: '#326CE5' },
              { icon: <SiGithubactions size={40} />, name: 'CI/CD', color: '#2088FF' },
              { icon: <SiMongodb size={40} />, name: 'MongoDB', color: '#47A248' },
              { icon: <SiPostgresql size={40} />, name: 'PostgreSQL', color: '#336791' },
              { icon: <SiRedis size={40} />, name: 'Redis', color: '#DC382D' },
              { icon: <SiTailwindcss size={40} />, name: 'Tailwind', color: '#06B6D4' },
              { icon: <SiRedux size={40} />, name: 'Redux', color: '#764ABC' },
              { icon: <SiFirebase size={40} />, name: 'Firebase', color: '#FFCA28' },
              { icon: <SiVuedotjs size={40} />, name: 'Vue.js', color: '#4FC08D' },
              { icon: <SiAngular size={40} />, name: 'Angular', color: '#DD0031' },
              { icon: <SiSass size={40} />, name: 'Sass', color: '#CC6699' },
              { icon: <SiGit size={40} />, name: 'Git', color: '#F05032' },
              { icon: <SiJest size={40} />, name: 'Jest', color: '#C21325' },
              { icon: <SiCypress size={40} />, name: 'Cypress', color: '#17202C' },
              { icon: <SiWebpack size={40} />, name: 'Webpack', color: '#8DD6F9' },
              { icon: <SiVite size={40} />, name: 'Vite', color: '#646CFF' },
              { icon: <SiFigma size={40} />, name: 'Figma', color: '#F24E1E' },
              { icon: <SiAdobexd size={40} />, name: 'Adobe XD', color: '#FF61F6' },
              { icon: <SiSketch size={40} />, name: 'Sketch', color: '#F7B500' },
              { icon: <SiInvision size={40} />, name: 'InVision', color: '#FF3366' },
              { icon: <SiChakraui size={40} />, name: 'Chakra UI', color: '#319795' },
              { icon: <SiBootstrap size={40} />, name: 'Bootstrap', color: '#7952B3' },
              { icon: <SiBulma size={40} />, name: 'Bulma', color: '#00D1B2' },
              { icon: <SiFramer size={40} />, name: 'Framer', color: '#0055FF' },
              { icon: <SiStyledcomponents size={40} />, name: 'Styled Components', color: '#DB7093' },
              { icon: <SiLess size={40} />, name: 'Less', color: '#1D365D' },
              { icon: <SiStorybook size={40} />, name: 'Storybook', color: '#FF4785' },
              { icon: <SiPostman size={40} />, name: 'Postman', color: '#FF6C37' },
              { icon: <SiSwagger size={40} />, name: 'Swagger', color: '#85EA2D' }
            ].map((tech, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 3,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                    '& .tech-icon': {
                      transform: 'scale(1.1)',
                    }
                  }
                }}
              >
                <Box
                  className="tech-icon"
                  sx={{
                    color: tech.color,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {tech.icon}
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#1D1C3F',
                    fontWeight: 500,
                    textAlign: 'center',
                  }}
                >
                  {tech.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Innovation Highlights Section */}
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
            Innovation Highlights
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
            Pushing boundaries with cutting-edge solutions
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {[
              {
                title: 'AI & Machine Learning',
                description: 'Leveraging advanced AI and ML technologies to create intelligent solutions that drive business growth.',
                icon: <Psychology sx={{ fontSize: 40 }} />,
                color: '#00BCD4',
                gradient: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)'
              },
              {
                title: 'Blockchain Solutions',
                description: 'Developing secure and transparent blockchain applications for various industries.',
                icon: <LinkIcon sx={{ fontSize: 40 }} />,
                color: '#4CAF50',
                gradient: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)'
              },
              {
                title: 'IoT Integration',
                description: 'Connecting devices and systems to create smart, efficient, and automated solutions.',
                icon: <Devices sx={{ fontSize: 40 }} />,
                color: '#FF9800',
                gradient: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)'
              },
              {
                title: 'Cybersecurity',
                description: 'Implementing robust security measures to protect data and ensure system integrity.',
                icon: <Security sx={{ fontSize: 40 }} />,
                color: '#F44336',
                gradient: 'linear-gradient(135deg, #F44336 0%, #D32F2F 100%)'
              }
            ].map((highlight, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: 3,
                    p: 4,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      '& .highlight-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                      '& .highlight-gradient': {
                        opacity: 0.1,
                      }
                    }
                  }}
                >
                  <Box
                    className="highlight-gradient"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: highlight.gradient,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 3,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <Box
                      className="highlight-icon"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '20px',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: highlight.color,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {highlight.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          color: 'white',
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {highlight.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255,255,255,0.7)',
                          lineHeight: 1.7,
                        }}
                      >
                        {highlight.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 