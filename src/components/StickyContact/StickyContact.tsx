'use client';

import { useState } from 'react';
import { Box, Button, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ContactForm from '../ContactForm/ContactForm';
import React from 'react';

const StickyContact = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          id="sticky-contact-button"
          variant="contained"
          onClick={handleClickOpen}
          sx={{
            backgroundColor: '#1D1C3F',
            color: 'white',
            borderRadius: '12px',
            padding: '12px 24px',
            fontSize: '1rem',
            fontWeight: 600,
            boxShadow: '0 4px 12px rgba(29, 28, 63, 0.2)',
            transform: 'rotate(90deg)',
            transformOrigin: 'right center',
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: '#2A2957',
              transform: 'rotate(90deg) translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Let's Discuss
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
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
          }
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              color: '#1D1C3F',
              zIndex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ p: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: '#1D1C3F',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Let's Discuss Your Project
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                mb: 4,
                textAlign: 'center',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Fill out the form below and we'll get back to you shortly to discuss how we can help bring your vision to life.
            </Typography>
            <ContactForm onSubmit={handleClose} />
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default StickyContact; 