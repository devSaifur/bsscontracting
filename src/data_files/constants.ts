import ogImageSrc from '@images/social.png'

export const SITE = {
  title: 'BSS Contracting',
  tagline: 'Top-tier property management services',
  description:
    'BSS Contracting offers top-tier property management services to maintain your property with quality customer support. Trusted by many.',
  description_short:
    'BSS Contracting offers top-tier property management services to maintain your property with quality customer support. Trusted by many.',
  url: 'https://bsscontracting.us',
  author: 'Saifur Rahman'
}

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'en-US',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description
    }
  }
}

export const OG = {
  locale: 'en_US',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: : Property management services`,
  description:
    'Maintain your property with BSS Contracting top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!',
  image: ogImageSrc
}
