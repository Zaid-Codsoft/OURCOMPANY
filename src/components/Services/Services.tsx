'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';

const FirstSection = dynamic(() => import('./FirstSection'), {
  loading: () => (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  ),
  ssr: false
});

const NewSection = dynamic(() => import('./NewSection'), {
  loading: () => (
    <Box sx={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  ),
  ssr: false
});

const Services = () => {
  return (
    <>
      <Suspense fallback={
        <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      }>
      <FirstSection />
      </Suspense>
      <Suspense fallback={
        <Box sx={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      }>
      <NewSection />
      </Suspense>
    </>
  );
};

export default Services; 