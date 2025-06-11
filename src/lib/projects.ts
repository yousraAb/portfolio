export type Project = {
  title: string;
  slug: string;
  description: string;
  content: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Appointment Calendar System",
    slug: "appointment-calendar-system",
    description:
      "A real-time appointment app with role-based access and WebSocket updates.",
    content:
      `This system enables call center agents to book appointments for field agents.
Supervisors must confirm them, and WebSockets allow live updates across users.
It uses FullCalendar, Laravel API, and role-based authentication.`,
    tech: ["Laravel", "ReactJS", "WebSockets", "MySQL"],
  },
  {
    title: "Appliance Repair Management System",
    slug: "appliance-repair-system",
    description:
      "Backend system to manage repair tickets and technician schedules.",
    content:
      `Built with Laravel and MySQL.
Features include lifecycle tracking, customer repair history, and email notifications.`,
    tech: ["Laravel", "MySQL"],
  },
  {
    title: "Home Assistance Service Management",
    slug: "home-assistance-service",
    description:
      "Track and assign home care services with secure roles and Redux state.",
    content:
      `The system supports agent roles and live task updates for services like elderly care.
Global state is managed with Redux, and API integration ensures fast communication.`,
    tech: ["ReactJS", "Redux", "REST API"],
  },
  {
    title: "Hotel Complaint Management System",
    slug: "hotel-complaint-system",
    description:
      "Manage guest complaints with fast response and tracking in real time.",
    content:
      `Created using Vue.js, Laravel, and AJAX.
Improved resolution speed by 50%, featuring dynamic interfaces for admins.`,
    tech: ["Laravel", "Vue.js", "AJAX"],
  },
  {
    title: "WordPress Theme Integration",
    slug: "wordpress-theme-agency",
    description:
      "Converted a Figma design into an accessible, fast-loading WordPress theme.",
    content:
      `Used PHP and custom JS for theme development.
Included SEO optimization and WCAG accessibility. Client project without a public link.`,
    tech: ["WordPress", "PHP", "JavaScript", "CSS"],
  },
];
