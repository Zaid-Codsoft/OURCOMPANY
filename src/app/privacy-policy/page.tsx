'use client';

import { Box, Container, Typography, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 10, md: 15 },
        pb: { xs: 8, md: 12 },
        backgroundColor: '#1D1C3F',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              fontWeight: 700,
              color: 'white',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Privacy Policy
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              Last updated: {new Date().toLocaleDateString()}
            </Typography>

            <Typography variant="h5" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
              1. Introduction
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              At Your Company Name, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
              2. Information We Collect
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              We may collect information about you in a variety of ways. The information we may collect via the website includes:
            </Typography>
            <Box component="ul" sx={{ mb: 4, pl: 3 }}>
              <Typography component="li" variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the website or when you choose to participate in various activities related to the website.
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                <strong>Derivative Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the website.
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                <strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
              3. Use of Your Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
            </Typography>
            <Box component="ul" sx={{ mb: 4, pl: 3 }}>
              <Typography component="li" variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                Create and manage your account.
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                Process your transactions.
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                Send you emails and updates about our services.
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                Monitor and analyze usage and trends to improve your experience with the website.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
              4. Disclosure of Your Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </Typography>
            <Box component="ul" sx={{ mb: 4, pl: 3 }}>
              <Typography component="li" variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
              5. Security of Your Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
              6. Contact Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                <strong>Email:</strong> privacy@yourcompany.com
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                <strong>Phone:</strong> +1 (555) 123-4567
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                <strong>Address:</strong> 123 Business Street, Suite 100, City, State 12345
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy; 