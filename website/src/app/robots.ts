import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
  },
  sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
})

export default robots
