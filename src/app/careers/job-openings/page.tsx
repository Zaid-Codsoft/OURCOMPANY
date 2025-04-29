'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import { motion } from 'framer-motion';
import { useState } from 'react';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    status: 'Closed',
    description: 'We are looking for an experienced Senior Software Engineer to join our team. The ideal candidate should have strong expertise in modern web technologies and a passion for building scalable applications.',
    requirements: [
      '5+ years of experience in software development',
      'Strong proficiency in JavaScript/TypeScript',
      'Experience with React, Node.js, and cloud platforms',
      'Excellent problem-solving skills',
      'Strong communication and collaboration abilities'
    ],
    responsibilities: [
      'Design and develop high-quality, scalable applications',
      'Collaborate with cross-functional teams',
      'Mentor junior developers',
      'Participate in code reviews and technical discussions',
      'Contribute to architectural decisions'
    ]
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Hybrid',
    type: 'Full-time',
    status: 'Closed',
    description: 'We are seeking a talented UI/UX Designer to create beautiful and intuitive user interfaces. The ideal candidate should have a strong portfolio and experience in modern design tools.',
    requirements: [
      '3+ years of experience in UI/UX design',
      'Proficiency in Figma, Adobe XD, or similar tools',
      'Strong understanding of user-centered design principles',
      'Experience with responsive design',
      'Portfolio demonstrating previous work'
    ],
    responsibilities: [
      'Create user-centered designs',
      'Develop wireframes and prototypes',
      'Conduct user research and testing',
      'Collaborate with developers and product managers',
      'Maintain design systems and guidelines'
    ]
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    status: 'Closed',
    description: 'We are looking for a DevOps Engineer to help us build and maintain our cloud infrastructure. The ideal candidate should have experience with CI/CD pipelines and cloud platforms.',
    requirements: [
      '4+ years of experience in DevOps',
      'Strong knowledge of AWS, Azure, or GCP',
      'Experience with Docker and Kubernetes',
      'Proficiency in infrastructure as code',
      'Understanding of security best practices'
    ],
    responsibilities: [
      'Design and implement CI/CD pipelines',
      'Manage cloud infrastructure',
      'Monitor system performance',
      'Implement security measures',
      'Automate deployment processes'
    ]
  }
];

const JobCard = ({ job }: { job: typeof jobOpenings[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 3,
        backgroundColor: 'white',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '4px',
          height: '100%',
          background: job.status === 'Open' 
            ? 'linear-gradient(to bottom, #4CAF50, #81C784)'
            : 'linear-gradient(to bottom, #F44336, #E57373)',
          transition: 'all 0.3s ease',
        },
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          '&::before': {
            width: '6px',
          }
        },
      }}
    >
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 2, 
          color: '#1D1C3F', 
          fontWeight: 700,
          fontSize: '1.5rem',
        }}
      >
        {job.title}
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <Chip
          icon={<WorkIcon />}
          label={job.department}
          sx={{ 
            backgroundColor: 'rgba(29, 28, 63, 0.08)',
            color: '#1D1C3F',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'rgba(29, 28, 63, 0.12)',
            }
          }}
        />
        <Chip
          icon={<LocationOnIcon />}
          label={job.location}
          sx={{ 
            backgroundColor: 'rgba(29, 28, 63, 0.08)',
            color: '#1D1C3F',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'rgba(29, 28, 63, 0.12)',
            }
          }}
        />
        <Chip
          label={job.type}
          sx={{ 
            backgroundColor: 'rgba(29, 28, 63, 0.08)',
            color: '#1D1C3F',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'rgba(29, 28, 63, 0.12)',
            }
          }}
        />
        <Chip
          label={job.status}
          sx={{
            backgroundColor: job.status === 'Open' 
              ? 'rgba(76, 175, 80, 0.1)' 
              : 'rgba(244, 67, 54, 0.1)',
            color: job.status === 'Open' ? '#4CAF50' : '#F44336',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: job.status === 'Open' 
                ? 'rgba(76, 175, 80, 0.15)' 
                : 'rgba(244, 67, 54, 0.15)',
            }
          }}
        />
      </Box>

      <Typography 
        variant="body1" 
        sx={{ 
          mb: 3, 
          color: '#666', 
          lineHeight: 1.7,
          fontSize: '1.1rem',
        }}
      >
        {job.description}
      </Typography>

      {isExpanded && (
        <Box 
          sx={{ 
            mt: 3,
            pt: 3,
            borderTop: '1px solid rgba(29, 28, 63, 0.1)',
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 2, 
              color: '#1D1C3F', 
              fontWeight: 600,
              fontSize: '1.2rem',
            }}
          >
            Requirements
          </Typography>
          <Box component="ul" sx={{ mb: 3, pl: 2 }}>
            {job.requirements.map((req, index) => (
              <Typography
                key={index}
                component="li"
                variant="body1"
                sx={{ 
                  mb: 1.5, 
                  color: '#666',
                  fontSize: '1.05rem',
                  '&::marker': {
                    color: '#1D1C3F',
                  }
                }}
              >
                {req}
              </Typography>
            ))}
          </Box>

          <Typography 
            variant="h6" 
            sx={{ 
              mb: 2, 
              color: '#1D1C3F', 
              fontWeight: 600,
              fontSize: '1.2rem',
            }}
          >
            Responsibilities
          </Typography>
          <Box component="ul" sx={{ mb: 3, pl: 2 }}>
            {job.responsibilities.map((resp, index) => (
              <Typography
                key={index}
                component="li"
                variant="body1"
                sx={{ 
                  mb: 1.5, 
                  color: '#666',
                  fontSize: '1.05rem',
                  '&::marker': {
                    color: '#1D1C3F',
                  }
                }}
              >
                {resp}
              </Typography>
            ))}
          </Box>
        </Box>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
        <Button
          variant="text"
          onClick={() => setIsExpanded(!isExpanded)}
          sx={{ 
            color: '#1D1C3F',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'rgba(29, 28, 63, 0.08)',
            }
          }}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
        <Button
          variant="contained"
          href={`/careers/apply/${job.id}`}
          disabled={job.status === 'Closed'}
          sx={{
            backgroundColor: job.status === 'Open' 
              ? 'linear-gradient(45deg, #1D1C3F 30%, #2A2957 90%)'
              : '#9e9e9e',
            color: 'white',
            px: 4,
            py: 1.5,
            borderRadius: '8px',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: job.status === 'Open' 
                ? 'linear-gradient(45deg, #2A2957 30%, #1D1C3F 90%)'
                : '#9e9e9e',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          {job.status === 'Open' ? 'Apply Now' : 'Position Closed'}
        </Button>
      </Box>
    </Paper>
  );
};

export default function JobOpeningsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobOpenings.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 10, md: 15 },
        pb: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
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
              mb: 3,
              textAlign: 'center',
              fontWeight: 800,
              background: 'linear-gradient(45deg, #1D1C3F 30%, #2A2957 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Join Our Team
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 8,
              textAlign: 'center',
              color: '#666',
              maxWidth: '800px',
              mx: 'auto',
              fontWeight: 400,
            }}
          >
            Discover exciting opportunities to grow your career with us
          </Typography>

          <Box 
            sx={{ 
              mb: 8,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -20,
                left: -20,
                right: -20,
                bottom: -20,
                background: 'linear-gradient(45deg, rgba(29, 28, 63, 0.05) 0%, rgba(42, 41, 87, 0.05) 100%)',
                borderRadius: '16px',
                zIndex: 0,
              }
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search jobs by title, department, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#1D1C3F' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(29, 28, 63, 0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(29, 28, 63, 0.2)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1D1C3F',
                  },
                },
              }}
            />
          </Box>

          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            }}
          >
            {filteredJobs.map((job) => (
              <Box key={job.id}>
                <JobCard job={job} />
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
} 