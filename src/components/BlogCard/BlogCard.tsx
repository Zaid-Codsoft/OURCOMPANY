'use client';

import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
          },
        }}
      >
        <Box sx={{ position: 'relative', height: 200 }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: 'cover',
            }}
            priority={false}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Chip
            label={post.category}
            size="small"
            sx={{
              mb: 1,
              backgroundColor: '#1D1C3F',
              color: 'white',
            }}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 600,
              mb: 1,
              color: 'text.primary',
            }}
          >
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            {post.excerpt}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {post.readTime}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard; 