import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Prakash Kumar',
  description:
    'Prakash Kumar is a product engineer and founder in Singapore, building useful AI systems, developer tools, and startups.',
  href: 'https://tprakashkumar.netlify.app',
  author: 'Prakash Kumar',
  locale: 'en-SG',
  featuredPostCount: 2,
  postsPerPage: 4,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/work',
    label: 'Work',
  },
  {
    href: '/about',
    label: 'About',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/chocoHacks33',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/prakash29/',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:jason@enscribe.dev',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
