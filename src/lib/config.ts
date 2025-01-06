import { Chivo, Montserrat } from 'next/font/google'

export const fontHeading = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading'
})

export const fontBody = Chivo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '400', '700'],
  variable: '--font-body'
})

export const siteConfig = {
  name: 'Ututo Linux',
  url: 'https://ututo.ar/',
  ogImage: 'https://ututo.emirchus.ar/og.png',
  description: 'Ututo es una distribución de Linux Argentina, hecha por la comunidad.',
  links: {
    twitter: 'https://x.com/UtutoLinux',
    github: 'https://github.com/ututolinux'
  }
}

export type SiteConfig = typeof siteConfig
