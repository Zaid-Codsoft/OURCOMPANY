'use client';

import { Box, Container, Typography, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const TermsOfService = () => {
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
            Terms of Service
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
              1. Agreement to Terms
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
              2. Use License
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              Permission is granted to temporarily download one copy of the materials (information or software) on Your Company Name's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </Typography>
            <Box component="ul" sx={{ mb: 4, pl: 3 }}>
              <Typography component="li" variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                Modify or copy the materials;
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                Attempt to decompile or reverse engineer any software contained on Your Company Name's website;
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                Remove any copyright or other proprietary notations from the materials; or
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                Transfer the materials to another person or "mirror" the materials on any other server.
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
              3. Disclaimer
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              The materials on Your Company Name's website are provided on an 'as is' basis. Your Company Name makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
              4. Limitations
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              In no event shall Your Company Name or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Your Company Name's website, even if Your Company Name or a Your Company Name authorized representative has been notified orally or in writing of the possibility of such damage.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
              5. Accuracy of Materials
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              The materials appearing on Your Company Name's website could include technical, typographical, or photographic errors. Your Company Name does not warrant that any of the materials on its website are accurate, complete, or current. Your Company Name may make changes to the materials contained on its website at any time without notice.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
              6. Links
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              Your Company Name has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Your Company Name of the site. Use of any such linked website is at the user's own risk.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
              7. Modifications
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              Your Company Name may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
              8. Governing Law
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
              9. Contact Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
              If you have any questions about these Terms of Service, please contact us at:
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                <strong>Email:</strong> legal@yourcompany.com
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

export default TermsOfService; 