import { servicesContent } from '../../../config/services';
import { notFound } from 'next/navigation';
import ServiceContent from '../../../components/ServiceContent';
import { Suspense } from 'react';
import React from 'react';

interface ServiceContent {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  process: {
    title: string;
    description: string;
  }[];
  heroImage?: string;
  heroBackgroundImage?: string;
  overviewImage?: string;
  featureImages?: string[];
  backgroundPattern?: string;
  featureDescriptions?: string[];
}

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getServiceContent(slug: string) {
  const content = servicesContent[slug as keyof typeof servicesContent] as ServiceContent;
  if (!content) {
    notFound();
  }
  return content;
}

export default function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = React.use(params);
  const serviceContent = getServiceContent(resolvedParams.slug);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceContent content={serviceContent} />
    </Suspense>
  );
} 