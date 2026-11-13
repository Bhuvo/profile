export interface SocialLink {
  name: string
  url: string
  label: string
  icon: string
  primary?: boolean
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/hema-official",
    label: "github.com/hema-official",
    icon: "github",
    primary: true,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hemalatha-p-837462424/",
    label: "linkedin.com/in/hemalatha-p",
    icon: "linkedin",
    primary: true,
  },
  {
    name: "Email",
    url: "mailto:hemalathaofficial1124@gmail.com",
    label: "hemalathaofficial1124@gmail.com",
    icon: "mail",
    primary: true,
  },
]

