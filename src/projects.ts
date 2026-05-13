export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  demoUrl: string;
  repoUrl?: string;
  imageUrl?: string;
  technologies?: string[];
  features?: string[];
  year?: number;
};

const projects: Project[] = [
  {
    id: 'library',
    title: 'Library Management System',
      shortDescription: 'Modern library platform for seamless book management',
      description: 'A robust Library Management System enabling efficient book inventory, user management, and real-time borrowing workflows. Features intuitive dashboards for staff and students, automated due-date reminders, and bulk data handling via CSV. Prioritizes accessibility and responsive design, resulting in streamlined library operations and improved user satisfaction.',
      demoUrl: '/library-demo.html',
      repoUrl: "https://github.com/Solomon-hi/library-app",
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1470&auto=format&fit=crop',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'SQLite'],
    features: ['Role-based access', 'Inventory search & filters', 'CSV import/export', 'Borrow/return workflows', 'Responsive staff & student dashboards'],
    year: 2024
  },
  {
    id: 'weather',
    title: 'Weather Dashboard',
      shortDescription: 'Live weather insights with interactive forecasts',
      description: 'A visually engaging Weather Dashboard delivering real-time conditions, hourly and weekly forecasts, and interactive precipitation maps. Integrates public APIs, offline caching, and smart error handling. Features location search with autocomplete and a mobile-first, high-performance UI for fast, reliable weather updates anywhere.',
      demoUrl: '/weather-demo.html',
      repoUrl: "https://github.com/Solomon-hi/weather-app",
    imageUrl: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?q=80&w=1470&auto=format&fit=crop',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'OpenWeatherMap API'],
    features: ['Current conditions', 'Hourly & 7-day forecasts', 'Search autocomplete', 'Offline caching', 'Small, fast bundle'],
    year: 2023
  },
  {
    id: 'task-tracker',
    title: 'Task Tracker Tool',
      shortDescription: 'Minimalist productivity app for efficient task management',
      description: 'A distraction-free Task Tracker designed for rapid task entry, organization, and completion. Supports intuitive drag-and-drop, keyboard shortcuts, persistent storage, and smart filtering by status or due date. Built for speed and simplicity, empowering users to stay organized and productive with minimal effort.',
      demoUrl: '/task-tracker-demo.html',
      repoUrl: "https://github.com/Solomon-hi/task-tracker",
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop',
    technologies: ['Vanilla JS', 'LocalStorage', 'HTML5', 'CSS3'],
    features: ['Add / edit / delete tasks', 'Filter by status', 'Drag & drop reorder', 'Persistent state (LocalStorage)', 'Keyboard shortcuts'],
    year: 2022
  }
];

export default projects;
