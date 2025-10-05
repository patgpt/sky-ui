import { pages } from '.velite'
import type { MetadataRoute } from 'next'
import { join } from 'node:path'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sky-ui.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docPages = pages.map((doc) => ({
    url: new URL(join('/docs/', doc.slug), baseUrl).toString(),
  }))

  const sitemapEntries = [{ url: baseUrl }, ...docPages]

  return sitemapEntries
}
