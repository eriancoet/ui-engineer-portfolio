import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Project Management App',
    description: 'Execute any project process, add tasks to projects on one platform.',
    tags: ['React', 'Typescript', 'Tailwindcss'],
    link: 'https://pma-rian.netlify.app/',
    github: 'https://github.com/eriancoet/PMA',
  },
  {
    id: 2,
    title: 'Invoice Generator',
    description: 'Create, edit, and manage invoices with line items, totals, and printable/exportable invoice views.',
    tags: ['Nextjs', 'JavaScript', 'Supabase'],
    link: 'https://invoice-generator-jade-eight.vercel.app/',
    github: 'https://github.com/eriancoet/invoice-generator',
  },
  {
    id: 3,
    title: 'Client Dashboard',
    description: 'Beautiful client dashboard, has dark mode and light mode. Next make it part of an app',
    tags: ['React', 'TailwindCSS', 'Typescript'],
    link: 'https://client-dashboard-ui.netlify.app/',
    github: 'https://github.com/eriancoet/client-dashboard',
  },
  {
    id: 4,
    title: 'AI Email Generator',
    description: 'AI tool to generate professional emails for business needs.',
    tags: ['Next.js', 'API', 'TailwindCSS'],
    link: 'https://ai-email-generator-coral.vercel.app/',
    github: 'https://github.com/eriancoet/AI-email-generator',
  },
];

export default function Projects() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl mb-4">Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            A selection of my recent work showcasing various technologies and design approaches.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors"
            >
              <h3 className="text-2xl mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
