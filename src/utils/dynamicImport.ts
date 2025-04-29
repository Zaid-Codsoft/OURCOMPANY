import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import type { DynamicOptions, DynamicOptionsLoadingProps } from 'next/dynamic';

// Cache for preloaded components
const preloadedComponents = new Map<string, Promise<any>>();

export function dynamicImport<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: {
    loading?: DynamicOptions['loading'];
    ssr?: boolean;
    suspense?: boolean;
    preload?: boolean;
    cacheKey?: string;
  } = {}
) {
  const { preload, cacheKey, loading, ssr, suspense } = options;

  // If preload is true and we have a cacheKey, store the promise
  if (preload && cacheKey) {
    if (!preloadedComponents.has(cacheKey)) {
      preloadedComponents.set(cacheKey, importFn());
    }
  }

  const dynamicConfig: DynamicOptions<T> = {
    ssr: ssr ?? true,
    suspense: suspense ?? false,
  };

  if (loading) {
    dynamicConfig.loading = (props: DynamicOptionsLoadingProps) => {
      const timeout = setTimeout(() => {
        console.warn('Dynamic import loading timeout');
      }, 5000);
      const result = loading(props);
      clearTimeout(timeout);
      return result;
    };
  }

  return dynamic(importFn, dynamicConfig);
}

// Helper function to preload components
export function preloadComponent<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  cacheKey: string
) {
  if (!preloadedComponents.has(cacheKey)) {
    preloadedComponents.set(cacheKey, importFn());
  }
  return preloadedComponents.get(cacheKey);
} 