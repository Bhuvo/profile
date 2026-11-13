export interface CertificationItem {
  id: string
  title: string
  domain: string
  skillsCovered: string[]
  certificateImage?: string
  verificationUrl?: string
}

export const certifications: CertificationItem[] = [
  {
    id: 'cert-java',
    title: 'Full Stack Java Development',
    domain: 'Software Architecture & Enterprise Java',
    skillsCovered: ['Java SE/EE', 'OOP Design', 'Database Connectivity', 'Backend Architecture'],
    certificateImage: '/images/certificates/java_fullstack.png',
  },
  {
    id: 'cert-web',
    title: 'Web Development — HTML, CSS, JavaScript, Node.js',
    domain: 'Full Stack Web Engineering',
    skillsCovered: ['HTML5', 'CSS3', 'Modern JavaScript', 'Node.js Backend'],
    certificateImage: '/images/certificates/web_development.png',
  },
  {
    id: 'cert-dotnet',
    title: 'Web Designing & .NET Development',
    domain: 'Web Interface Design & .NET Ecosystem',
    skillsCovered: ['Responsive UI', 'C# / .NET', 'Web Form Architecture', 'Component Styling'],
    certificateImage: '/images/certificates/dotnet_web.png',
  },
]

