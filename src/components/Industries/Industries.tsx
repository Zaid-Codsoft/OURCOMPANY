'use client';

import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Flight as TravelIcon,
  AccountBalance as PublicSectorIcon,
  PhoneIphone as TelecomIcon,
  ShoppingCart as RetailIcon,
  LocalGasStation as EnergyIcon,
  RocketLaunch as StartupIcon,
  Store as EcommerceIcon,
  AccountBalance as BankingIcon,
  LocalHospital as HealthcareIcon,
  SportsEsports as GamingIcon
} from '@mui/icons-material';

const industries = [
  { name: 'Travel & Hospitality', icon: TravelIcon },
  { name: 'Public Sector', icon: PublicSectorIcon },
  { name: 'Telecommunication', icon: TelecomIcon },
  { name: 'Retail & CPG', icon: RetailIcon },
  { name: 'Oil, Gas, and Energy', icon: EnergyIcon },
  { name: 'Startups', icon: StartupIcon },
  { name: 'E-commerce', icon: EcommerceIcon },
  { name: 'Banking & Fintech', icon: BankingIcon },
  { name: 'Healthcare & Pharmaceuticals', icon: HealthcareIcon },
  { name: 'Gaming', icon: GamingIcon }
];

const Industries = () => {
  return (
    <Box 
      sx={{ 
        py: 10,
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 8,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              color: '#000',
            }}
          >
            Discover our Impact Across Industries
          </Typography>
        </motion.div>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 4 }}>
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  p: 3,
                  borderBottom: '1px solid rgba(29, 28, 63, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  '&:hover': {
                    borderColor: '#1D1C3F',
                    transform: 'translateX(10px)',
                    '& .MuiSvgIcon-root': {
                      color: '#1D1C3F',
                    }
                  }
                }}
              >
                <industry.icon 
                  sx={{ 
                    color: 'rgba(29, 28, 63, 0.5)',
                    fontSize: '1.5rem',
                    transition: 'color 0.3s ease'
                  }} 
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: '#333',
                    fontSize: '1.1rem',
                  }}
                >
                  {industry.name}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 8
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Box
                component="button"
                sx={{
                  backgroundColor: '#1D1C3F',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '16px 32px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#2A2957',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(29, 28, 63, 0.2)',
                  }
                }}
              >
                Let's Talk Business
              </Box>
            </Link>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Industries; 