'use client';

import { blogPosts } from '../../../data/blogPosts';
import { notFound } from 'next/navigation';
import BlogPostContent from '../../../components/BlogPostContent';
import { Suspense } from 'react';
import React from 'react';

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

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getBlogPost(slug: string) {
  const post = blogPosts.find((p: BlogPost) => p.slug === slug);
  if (!post) {
    notFound();
  }
  return post;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = React.use(params);
  const post = getBlogPost(resolvedParams.slug);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPostContent post={post} />
    </Suspense>
  );
} 