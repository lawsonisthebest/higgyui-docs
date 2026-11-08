import Link from 'next/link';
import { ArrowDownToLine, ArrowRight, Boxes, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Brand } from '@/components/brand';
import { CopyCommand } from '@/components/copy-command';
import { HomeShowcase } from '@/components/previews/home-showcase';
import { source } from '@/lib/source';

const guides = [
  { title: 'Install HiggyUI', label: '01 / SETUP', icon: ArrowDownToLine, href: '/docs/installation', text: 'Build or download the package, add its stylesheet, and render your first component.' },
  { title: 'Explore components', label: '02 / LIBRARY', icon: Boxes, href: '/docs/components', text: 'Try every component in the browser, then copy an example into your project.' },
  { title: 'Customize the details', label: '03 / STYLING', icon: SlidersHorizontal, href: '/docs/styling', text: 'Adjust sizing, icons, spacing, and state using the props each component exposes.' },
];

export default function HomePage() {
  const count = source.getPages().filter((page) => page.slugs[0] === 'components' && page.slugs.length === 2).length;

  return (
    <div className="site-home">
      <section className="site-hero">
        <div className="site-shell hero-layout">
          <div className="hero-copy">
            <p className="hero-label"><Sparkles size={14} /> REACT COMPONENT LIBRARY</p>
            <h1>Build the interface.<br /><span>Make it yours.</span></h1>
            <p className="hero-description">HiggyUI is a collection of {count} React components for forms, navigation, feedback, and the details that make a product feel finished.</p>
            <div className="hero-actions">
              <Link className="site-button site-button-primary" href="/docs/installation">Get started <ArrowRight size={17} /></Link>
              <Link className="site-button site-button-secondary" href="/docs/components">Browse components</Link>
            </div>
          </div>
          <HomeShowcase />
        </div>
      </section>

      <section className="site-shell guide-section" aria-labelledby="guide-title">
        <div className="section-heading">
          <p className="site-kicker">THE DOCUMENTATION</p>
          <h2 id="guide-title">From install to first render</h2>
        </div>
        <div className="guide-grid">
          {guides.map(({ title, label, icon: Icon, href, text }) => (
            <Link href={href} className="guide-card" key={href}>
              <div className="guide-card-top"><Icon size={21} strokeWidth={1.7} /><span>{label}</span></div>
              <h3>{title} <ArrowRight size={16} /></h3>
              <p>{text}</p>
            </Link>
          ))}
        </div>
        <div className="setup-strip">
          <div>
            <h2>Installing from a checkout?</h2>
            <p>Run this inside the HiggyUI library folder to build a package you can install in another app.</p>
          </div>
          <CopyCommand command="npm pack" />
        </div>
      </section>

      <footer className="site-shell site-footer">
        <Link href="/" aria-label="HiggyUI home"><Brand /></Link>
        <div><Link href="/docs">Documentation</Link><Link href="/docs/components">Components</Link></div>
      </footer>
    </div>
  );
}
