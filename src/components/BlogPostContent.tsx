'use client';

import { Container, Typography, Box, Avatar, Chip } from '@mui/material';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  author: string;
  readTime: string;
  content: string;
}

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Chip
            label={post.category}
            sx={{
              mb: 2,
              backgroundColor: '#1D1C3F',
              color: 'white',
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 3,
            }}
          >
            {post.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <Avatar 
              sx={{ 
                width: 40, 
                height: 40,
                backgroundColor: '#1D1C3F',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              {getInitials(post.author)}
            </Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {post.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.date} · {post.readTime}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Featured Image */}
        <Box
          sx={{
            position: 'relative',
            height: { xs: 300, md: 500 },
            mb: 6,
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>

        {/* Content */}
        <Box sx={{ typography: 'body1', lineHeight: 1.8 }}>
          <Typography paragraph>
            {post.content}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
} 