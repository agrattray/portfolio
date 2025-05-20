export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  imageUrl: string
  technologies: string[]
  liveUrl: string
  codeUrl: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "artesiansteps",
    title: "Artesian Steps",
    description: "An elegant e-commerce platform for stylish footwear with a modern, clean design.",
    longDescription:
      "Artesian Steps is a sophisticated e-commerce website dedicated to selling high-quality, stylish footwear. The site features a clean, modern design with a soothing color palette of beige and light blue tones that creates a calm shopping experience. The website includes intuitive navigation, product showcases, and a streamlined shopping process. The responsive design ensures a seamless experience across all devices, making it easy for customers to browse and purchase products whether they're at home or on the go.",
    imageUrl: "/images/artesiansteps.png",
    technologies: ["E-commerce", "Responsive Design", "JavaScript", "Payment Integration", "Product Catalog"],
    liveUrl: "https://www.artesiansteps.com",
    codeUrl: "https://github.com/yourusername/artesiansteps",
    featured: true,
  },
  {
    id: "purelycakes",
    title: "Purely Cakes",
    description: "A bakery website showcasing delicious treats and cupcakes with an elegant design.",
    longDescription:
      "Purely Cakes is a bakery website that showcases a variety of delicious treats with a focus on cupcakes and cakes. The site features a clean, attractive design with a blue color scheme that complements the mouthwatering imagery of baked goods. The website includes sections for baking experiences, resources, and contact information. It was designed to appeal to cake enthusiasts and potential customers looking for high-quality baked goods.",
    imageUrl: "/images/purelycakes.png",
    technologies: ["HTML", "CSS", "JavaScript", "Web Design"],
    liveUrl: "https://www.purelycakes.com",
    codeUrl: "https://github.com/yourusername/purelycakes",
    featured: true,
  },
  {
    id: "project-1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and inventory management.",
    longDescription:
      "This e-commerce platform provides a complete solution for online stores. It features product listings, shopping cart functionality, secure checkout with Stripe, and an admin dashboard for inventory management. The platform is built with performance and scalability in mind.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    liveUrl: "https://example-ecommerce.com",
    codeUrl: "https://github.com/yourusername/ecommerce-platform",
    featured: false,
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team features.",
    longDescription:
      "This task management application helps teams collaborate effectively. It includes features like task assignment, due dates, priority levels, comments, and real-time updates. The app uses WebSockets for instant notifications and updates across all connected clients.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    liveUrl: "https://example-taskapp.com",
    codeUrl: "https://github.com/yourusername/task-management",
    featured: false,
  },
  {
    id: "project-3",
    title: "AI Content Generator",
    description: "An AI-powered application that generates content based on user prompts.",
    longDescription:
      "This AI content generator uses advanced language models to create high-quality content based on user prompts. It can generate blog posts, product descriptions, social media content, and more. The application includes features like content history, editing tools, and export options.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "OpenAI API", "Node.js", "Express"],
    liveUrl: "https://example-ai-generator.com",
    codeUrl: "https://github.com/yourusername/ai-content-generator",
    featured: false,
  },
  {
    id: "project-4",
    title: "Weather Dashboard",
    description: "A real-time weather dashboard with forecasts and historical data visualization.",
    longDescription:
      "This weather dashboard provides real-time weather information and forecasts for locations worldwide. It features interactive maps, charts for historical data, and customizable alerts. The application uses multiple weather APIs to ensure accurate and reliable data.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue.js", "Chart.js", "Weather API", "Firebase"],
    liveUrl: "https://example-weather.com",
    codeUrl: "https://github.com/yourusername/weather-dashboard",
    featured: false,
  },
  {
    id: "project-5",
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracking application with workout plans and progress analytics.",
    longDescription:
      "This fitness tracker helps users monitor their workouts, track progress, and achieve their fitness goals. It includes features like custom workout plans, exercise libraries with video demonstrations, progress charts, and social sharing. The app also integrates with popular fitness devices and apps.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Redux", "Firebase", "Health APIs"],
    liveUrl: "https://example-fitness.com",
    codeUrl: "https://github.com/yourusername/fitness-tracker",
    featured: false,
  },
  {
    id: "project-6",
    title: "Recipe Sharing Platform",
    description: "A community-driven platform for sharing and discovering recipes.",
    longDescription:
      "This recipe sharing platform allows users to discover, share, and save recipes. It features search functionality with filters for dietary restrictions, ingredient-based search, meal planning tools, and a social community aspect with comments and ratings. The platform is designed to be responsive and accessible on all devices.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    technologies: ["Angular", "Node.js", "MongoDB", "AWS S3"],
    liveUrl: "https://example-recipes.com",
    codeUrl: "https://github.com/yourusername/recipe-platform",
    featured: false,
  },
]
