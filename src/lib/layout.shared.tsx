import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Brand } from '@/components/brand';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: { title: <Brand /> },
    githubUrl: 'https://github.com/lawsonisthebest/higgyui',
    links: [
      { text: 'Get started', url: '/docs/installation' },
      { text: 'Components', url: '/docs/components', active: 'nested-url' },
    ],
  };
}
