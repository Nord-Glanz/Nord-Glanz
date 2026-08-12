import { useEffect } from 'react';
import { generateLocalBusinessSchema, COMPANY_INFO } from '../data/company';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
}

export function SEOHead({ title, description, path }: SEOHeadProps) {
  useEffect(() => {
    // Title
    const fullTitle = `${title} | Nord Glanz Barmstedt`;
    document.title = fullTitle;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // OpenGraph
    const ogTags = [
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${COMPANY_INFO.website}${path}` },
      { property: 'og:site_name', content: COMPANY_INFO.legalName }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Schema JSON-LD
    let scriptSchema = document.getElementById('local-business-schema');
    if (!scriptSchema) {
      scriptSchema = document.createElement('script');
      scriptSchema.id = 'local-business-schema';
      scriptSchema.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptSchema);
    }
    scriptSchema.textContent = generateLocalBusinessSchema();

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, path]);

  return null;
}
