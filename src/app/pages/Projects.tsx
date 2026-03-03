import { ExternalLink, Github } from 'lucide-react';
import { Download } from 'lucide-react';

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
        <div className="mt-6">
  <a
    href="/rian-cv.pdf"           // ← change to your filename
    download="Rian-Coetzee-CV.pdf"             // ← what name user sees when downloading
    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5" 
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
    Download CV
  </a>
</div>
        
        </div>
      </div>
    </div>
  );
}
