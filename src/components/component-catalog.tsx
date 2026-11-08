import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { componentGroups } from '@/lib/component-groups';
import { source } from '@/lib/source';

export function ComponentCatalog() {
  return (
    <div className="component-catalog not-prose">
      {componentGroups.map((group) => (
        <section key={group.title}>
          <h2>{group.title}</h2>
          <p>{group.description}</p>
          <div className="catalog-grid">
            {group.slugs.map((slug) => {
              const page = source.getPage(['components', slug]);
              if (!page) return null;

              return (
                <Link href={page.url} key={slug} className="catalog-card">
                  <h3>{page.data.title} <ArrowUpRight size={16} /></h3>
                  <p>{page.data.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
