export interface SocialLinkItem {
  id: string
  name: string
  url: string
  username?: string
  iconName: string
  highlight?: boolean
}

export interface SocialLinksConfig {
  github: string
  linkedin: string
  email: string
  phone: string
  resumeUrl: string
}

export const socialLinks: SocialLinksConfig = {
  github: 'https://github.com/Bhuvo',
  linkedin: 'https://www.linkedin.com/in/bhuvaneswaran-s-69195b420/',
  email: 'bhuvaneswarand15@gmail.com',
  phone: '+91 70923 39477',
  resumeUrl: '/bhuvanesh_resume.pdf',
}

export const socialLinksList: SocialLinkItem[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: socialLinks.github,
    username: 'Bhuvo',
    iconName: 'Github',
    highlight: true,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: socialLinks.linkedin,
    username: 'bhuvaneswaran-s-69195b420',
    iconName: 'Linkedin',
    highlight: true,
  },
  {
    id: 'email',
    name: 'Email',
    url: `mailto:${socialLinks.email}`,
    username: socialLinks.email,
    iconName: 'Mail',
  },
  {
    id: 'phone',
    name: 'Phone',
    url: `tel:${socialLinks.phone}`,
    username: socialLinks.phone,
    iconName: 'Phone',
  },
]
