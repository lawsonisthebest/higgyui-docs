import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { publicPath } from '@/lib/shared';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.PAGES_ORIGIN || 'http://localhost:3000'),
  title: { default: 'HiggyUI — React component library', template: '%s | HiggyUI' },
  description: 'Explore HiggyUI’s React components, try live examples, and copy the code into your app.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col antialiased">
        <RootProvider search={{ options: { type: 'static', api: publicPath('/api/search.json') } }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
