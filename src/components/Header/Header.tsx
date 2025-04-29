'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  AppBar, 
  Toolbar, 
  Container, 
  Box, 
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Button,
  Menu,
  MenuItem,
  Collapse
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  transition: 'all 0.3s ease-in-out',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 3,
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 0.2), transparent)',
  }
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 0',
});

const NavLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  margin: '0 1rem',
  fontWeight: 500,
  transition: 'color 0.3s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  color: 'inherit',
  fontWeight: 700,
  fontSize: '1.5rem',
  textDecoration: 'none',
  transition: 'color 0.3s ease-in-out',
}));

const HamburgerButton = styled(motion.button)(({ theme }) => ({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '40px',
  height: '32px',
  '& span': {
    display: 'block',
    width: '100%',
    height: '4px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '4px',
    transition: 'all 0.3s ease-in-out',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1D1C3F',
  color: 'white',
  marginLeft: '1rem',
  '&:hover': {
    backgroundColor: '#2A2957',
  },
}));

const SubMenuItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  color: '#1D1C3F !important',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(29, 28, 63, 0.05)',
    transform: 'translateX(8px)',
  },
}));

const ServicesMenuContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&:hover .services-dropdown': {
    opacity: 1,
    visibility: 'visible',
    transform: 'translateY(0)',
  },
}));

const ServicesDropdown = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: 'white',
  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  borderRadius: '12px',
  minWidth: '280px',
  zIndex: 1000,
  mt: 1,
  color: '#1D1C3F',
  opacity: 0,
  visibility: 'hidden',
  transform: 'translateY(10px)',
  transition: 'all 0.3s ease',
  padding: '8px 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-8px',
    left: '20px',
    width: '16px',
    height: '16px',
    backgroundColor: 'white',
    transform: 'rotate(45deg)',
    boxShadow: '-2px -2px 5px rgba(0,0,0,0.05)',
  }
}));

const ServiceCategory = styled(Box)(({ theme }) => ({
  padding: '12px 16px',
  borderBottom: '1px solid rgba(0,0,0,0.05)',
  '&:last-child': {
    borderBottom: 'none',
  }
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.main,
  marginBottom: '4px',
  fontSize: '0.9rem',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
}));

const ServiceItem = styled(Box)(({ theme }) => ({
  padding: '8px 16px',
  display: 'flex',
  alignItems: 'center',
  color: '#1D1C3F',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(29, 28, 63, 0.05)',
    transform: 'translateX(8px)',
  },
}));

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const servicesMenuItems = [
    {
      id: 'web-development',
      title: 'Web Development',
      href: '/services/web-development'
    },
    {
      id: 'app-development',
      title: 'App Development',
      href: '/services/app-development'
    },
    {
      id: 'wordpress-development',
      title: 'WordPress Development',
      href: '/services/wordpress-development'
    },
    {
      id: 'ui-ux-designing',
      title: 'UI/UX Designing',
      href: '/services/ui-ux-designing'
    },
    {
      id: 'custom-software-development',
      title: 'Custom Software Development',
      href: '/services/custom-software-development'
    },
    {
      id: 'cloud-application',
      title: 'Cloud Application',
      href: '/services/cloud-application'
    },
    {
      id: 'e-commerce',
      title: 'E-Commerce',
      subItems: [
        {
          id: 'e-commerce-design-development',
          title: 'Design and Development',
          href: '/services/e-commerce/design-development'
        },
        {
          id: 'e-commerce-maintenance-support',
          title: 'Maintenance and Support',
          href: '/services/e-commerce/maintenance-support'
        }
      ]
    },
    {
      id: 'cloud-maintenance-integration',
      title: 'Cloud Maintenance and Integration',
      href: '/services/cloud-maintenance-integration'
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Services', href: '/services', hasSubmenu: true },
    { text: 'Careers', href: '/careers' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '/contact' },
  ];

  const renderServicesMenu = () => (
    <ServicesMenuContainer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '8px 16px',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(29, 28, 63, 0.05)',
          },
        }}
        onClick={() => setServicesOpen(!servicesOpen)}
      >
        <Typography sx={{ mr: 1, fontWeight: 500 }}>Services</Typography>
        {servicesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Box>
      <ServicesDropdown className="services-dropdown">
        {servicesMenuItems.map((item) => (
          <ServiceCategory key={item.id}>
            {item.subItems ? (
              <>
                <ServiceTitle>{item.title}</ServiceTitle>
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.id}
                    href={subItem.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <ServiceItem>
                      <ListItemText 
                        primary={subItem.title}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: '0.95rem',
                            color: '#1D1C3F',
                          }
                        }}
                      />
                    </ServiceItem>
                  </Link>
                ))}
              </>
            ) : (
              <Link
                href={item.href}
                style={{ textDecoration: 'none' }}
              >
                <ServiceItem>
                  <ListItemText 
                    primary={item.title}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: '0.95rem',
                        color: '#1D1C3F',
                      }
                    }}
                  />
                </ServiceItem>
              </Link>
            )}
          </ServiceCategory>
        ))}
      </ServicesDropdown>
    </ServicesMenuContainer>
  );

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          style={{ position: 'fixed', width: '100%', zIndex: 3 }}
        >
          <StyledAppBar
            sx={{
              background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
              color: isScrolled ? '#1D1C3F' : 'white',
            }}
          >
            <Container maxWidth="lg">
              <StyledToolbar>
                <Box component={Link} href="/" sx={{ textDecoration: 'none' }}>
                  <Typography variant="h6" sx={{ color: 'inherit' }}>
                    Your Logo
                  </Typography>
                </Box>
                
                {!isMobile ? (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {menuItems.map((item) => (
                      item.hasSubmenu ? (
                        <Box key={item.text}>{renderServicesMenu()}</Box>
                      ) : (
                        <NavLink key={item.text} href={item.href}>
                          {item.text}
                        </NavLink>
                      )
                    ))}
                    <Button 
                      variant="contained"
                      component={Link}
                      href="/contact"
                      sx={{
                        backgroundColor: '#1D1C3F',
                        color: 'white',
                        marginLeft: '1rem',
                        '&:hover': {
                          backgroundColor: '#2A2957',
                        },
                      }}
                    >
                      Let's Talk Business
                    </Button>
                  </Box>
                ) : (
                  <HamburgerButton
                    onClick={toggleDrawer}
                    initial={false}
                    animate={isDrawerOpen ? 'open' : 'closed'}
                  >
                    <motion.span
                      animate={{
                        rotate: isDrawerOpen ? 45 : 0,
                        y: isDrawerOpen ? 8 : 0,
                      }}
                    />
                    <motion.span
                      animate={{
                        opacity: isDrawerOpen ? 0 : 1,
                      }}
                    />
                    <motion.span
                      animate={{
                        rotate: isDrawerOpen ? -45 : 0,
                        y: isDrawerOpen ? -8 : 0,
                      }}
                    />
                  </HamburgerButton>
                )}
              </StyledToolbar>
            </Container>

            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer}
              PaperProps={{
                sx: {
                  width: '100%',
                  maxWidth: '300px',
                  backgroundColor: '#1D1C3F',
                  color: 'white',
                },
              }}
            >
              <List>
                {menuItems.map((item) => (
                  <ListItem
                    key={item.text}
                    component={Link}
                    href={item.href}
                    onClick={toggleDrawer}
                    sx={{
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </StyledAppBar>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header; 