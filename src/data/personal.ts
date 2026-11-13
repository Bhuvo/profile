export interface PersonalInfo {
  name: string
  preferredName: string
  title: string
  tagline: string
  heroSupportingStatement: string
  heroDescriptionAlt: string
  location: string
  email: string
  resumeUrl: string
  aboutStory: {
    heading: string
    subheading: string
    paragraphs: string[]
  }
  roles: string[]
  profileImage: string
}

export const personalData: PersonalInfo = {
  name: "Hemalatha P.",
  preferredName: "Hemalatha",
  title: "Python Developer | AI / ML Engineer | Generative AI Enthusiast",
  tagline: "WHERE INTELLIGENCE MEETS IMAGINATION.",
  heroSupportingStatement:
    "I transform ideas into intelligent applications through Python, Artificial Intelligence, Machine Learning, and Generative AI.",
  heroDescriptionAlt:
    "Passionate about building intelligent systems, exploring emerging AI technologies, and developing scalable software solutions that create meaningful impact.",
  location: "Chennai, India",
  email: "hemalathaofficial1124@gmail.com",
  resumeUrl: "/resume.pdf",
  aboutStory: {
    heading: "THE MIND BEHIND THE MACHINE",
    subheading: "Curiosity drives innovation. Learning transforms possibility into reality.",
    paragraphs: [
      "I'm Hemalatha, a Python Developer with a strong interest in Artificial Intelligence, Machine Learning, and Generative AI.",
      "My journey in technology began with software development and application engineering. Through internships and professional development experience, I gained exposure to Python backend systems, Flutter applications, REST APIs, data visualization, and software development workflows.",
      "Currently pursuing my M.Tech in Artificial Intelligence at SRM Institute of Science and Technology, I am expanding my understanding of intelligent systems, machine learning, and modern AI architectures.",
      "I enjoy exploring how technology can solve real-world challenges and building applications that combine practical software engineering with emerging AI capabilities.",
    ],
  },
  roles: [
    "Python Developer",
    "AI / Machine Learning Developer",
    "Generative AI Enthusiast",
    "Backend API Developer",
    "Software Developer",
  ],
  profileImage: "/images/hema_profile.png",
}

