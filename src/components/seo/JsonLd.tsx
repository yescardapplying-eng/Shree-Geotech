import React from 'react';
import { siteConfig, servicesData } from '@/data/siteConfig';

export function JsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.domain}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description:
      'Professional Geotechnical Engineering & Soil Testing Services in Dombivli, Kalyan, Thane, Navi Mumbai, and Mumbai Metropolitan Region.',
    url: siteConfig.domain,
    telephone: siteConfig.phoneRaw,
    image: `${siteConfig.domain}${siteConfig.brandAssets.logo}`,
    logo: `${siteConfig.domain}${siteConfig.brandAssets.logo}`,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.line1,
      addressLocality: 'Dombivli East',
      addressRegion: 'Maharashtra',
      postalCode: siteConfig.address.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.address.geo.latitude,
      longitude: siteConfig.address.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '16:00',
      },
    ],
    areaServed: siteConfig.locations.map((loc) => ({
      '@type': 'AdministrativeArea',
      name: loc.name,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Geotechnical Engineering & Soil Testing Services',
      itemListElement: servicesData.map((svc, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: svc.title,
          description: svc.shortDesc,
          url: `${siteConfig.domain}/services#${svc.slug}`,
        },
        position: index + 1,
      })),
    },
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.domain,
    publisher: {
      '@id': `${siteConfig.domain}/#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
