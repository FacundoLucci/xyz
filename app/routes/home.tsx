import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Facundo - Full Stack Developer" },
    { name: "description", content: "I love building things. From music to no-code to full-stack development." },
    { property: "og:title", content: "Facundo - Full Stack Developer" },
    { property: "og:description", content: "I love building things. From music to no-code to full-stack development." },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE || "Hello from Cloudflare Workers!" };
}

const projects = [
  {
    id: 1,
    title: "Enterprise Logistics Scheduling",
    subtitle: "The Patton Logistics Group",
    image: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=384,h=486,f=auto,dpr=2,fit=contain/f1743863279946x634660162926595100/wtc-425-trucks-march-2020.jpg",
    type: "Bubble App",
    liveUrl: "https://app.thepattonlogisticsgroup.com/",
    role: "Sole Developer / Designer",
    outcome: "The Patton Logistics groups manages a fleet of 1000 trucks and even more staff. Leveraging bubble's no-code platform has allowed them to save over $100,000 in traditional development costs. This project includes five apps built to manage bookings, reserve warehouses, track shipments, process support tickets, and submit work orders for maintenance. The ticketing system includes inbound email parsing allowing unified multichannel communication."
  },
  {
    id: 2,
    title: "Neighborhood Social Network",
    subtitle: "Common Agency LLC",
    image: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=384,h=437,f=auto,dpr=2,fit=contain/f1743880346577x216604651722887230/metuchen%20market%20photo.png",
    type: "Bubble App",
    liveUrl: "",
    role: "Sole Developer",
    outcome: "Stone Soup Neighbors is a neighborhood networking app designed to engage residents, create connections, and use technology to encourage real-world relationships between neighbors. My client quickly outgrew their original system, featuring Airtable and Twilio, and now uses bubble to quickly iterate on user features and feedback. Stone Soup Neighbors currently has four cities onboarded, with recruitment for additional communities underway. The app is available on the web, iOS and Android, and is in active development."
  },
  {
    id: 3,
    title: "AI social media scheduling for churches",
    subtitle: "ChurchSocial",
    image: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=384,h=486,f=auto,dpr=2,fit=contain/f1743956513103x552707822922489800/654589c16c48c3bd19a7046f_solen-feyissa-KWZa42a1kds-unsplash.jpg",
    type: "Bubble App",
    liveUrl: "https://www.churchsocial.ai/",
    role: "Project Manager / Developer",
    outcome: "During my time with Revido, a Gold Tier bubble agency, I was the PM and developer for Discipls.io — a full social media scheduling solution. With built-in AI generation, content creation was made accessible to users new to social media. Since handover, the client has successful rebranded, expanded clientele and feature set, and has received multiple VC offers."
  },
  {
    id: 4,
    title: "Local Shows Finder",
    subtitle: "MrKnowShows",
    image: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=384,h=437,f=auto,dpr=2,fit=contain/f1743881049130x514460294637654200/Best_Practices_For_Vocal_Mics_On_Stage.webp",
    type: "Bubble App",
    liveUrl: "https://mrknowshows.com/",
    role: "Developer",
    outcome: "This event discovery app was created to simplify finding local music and comedy shows on any given night. Provided with a Figma file and CSV data from a scraper, I integrated the Spotify API to deliver song previews of featured artists. Built exclusively for mobile and faithfully replicating the original designs, the app remains in active operation."
  },
  {
    id: 5,
    title: "Video Sharing Alternative to Loom",
    subtitle: "WATCHLINK",
    image: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=384,h=486,f=auto,dpr=2,fit=contain/f1743958826797x342685973380831900/play-button-black-glyph-ui-icon-vector-43339697.jpg",
    type: "Code",
    liveUrl: "https://watchl.ink",
    role: "Developer / Founder",
    outcome: "Watchlink is a free video hosting solution designed to challenge Loom's pricing model. By introducing an expiration date for each video, users can upload as many videos as needed without worrying about quotas. It features built-in AI transcription and auto-subtitle generation, and is built on TanStack Start with deployment on Vercel."
  },
  {
    id: 6,
    title: "Dark Mode for Bubble",
    subtitle: "Color Mode Plugin",
    image: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/f1743881570673x920674253244385700/Color%20Mode%20plugin%20logo.svg",
    type: "Plugin",
    liveUrl: "",
    role: "Plugin Developer",
    outcome: "The most popular dark mode solution for Bubble applications. Supports automatic theme switching, custom color schemes, and seamless integration. Downloaded by over 1,000 developers and implemented across hundreds of Bubble apps worldwide."
  },
  {
    id: 7,
    title: "SPA Navigation",
    subtitle: "Path Navigation Plugin",
    image: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/f1743955475259x323940674476416200/path-nav-plugin-logo.svg",
    type: "Plugin",
    liveUrl: "",
    role: "Plugin Developer / UX Designer",
    outcome: "Revolutionary single-page application navigation for Bubble apps. Enables instant page transitions without refreshes, improving user experience dramatically. Used by enterprise clients to create app-like experiences within their Bubble applications."
  }
];

const techStack = [
  { name: "TanStack", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=2,fit=contain/f1743953932861x830930911576615000/tanstack_logo.webp" },
  { name: "TypeScript", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/f1743953727293x355020015099832640/Typescript_logo_2020.svg" },
  { name: "React", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/f1743953825930x966293244681417900/React-icon.svg" },
  { name: "Bubble", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=2,fit=contain/f1743954355106x232441504701089060/bubble-logo.png" },
  { name: "Cloudflare", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=2,fit=contain/f1743954637429x684379069250060600/cloudflare-workers-logo-png_seeklogo-444232.png" },
  { name: "Next.js", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/f1743954043060x424209555028934200/nextjs-icon-dark-background.svg" },
  { name: "Node.js", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=2,fit=contain/f1743955045542x500418995156826300/node-js-icon-1817x2048-g8tzf91e.png" },
  { name: "Xano", logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io%2Ff1743954972895x343601029750799000%2Fxano-logo.avif?w=64&h=64&auto=compress&dpr=2&fit=max" },
  { name: "Discord", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=2,fit=contain/f1743955180164x306016823989893060/discord-logo.png" },
  { name: "Linear", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=2,fit=contain/f1743955247012x603501134911924100/linear-app-icon-logo-png_seeklogo-586481.png" },
  { name: "Slack", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/f1743953791829x929167476871797600/Slack_icon_2019.svg.png" },
];

function ProjectCard({ project, onClick }: { project: typeof projects[0], onClick: () => void }) {
  return (
    <div 
      className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 fade-in-up cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[4/5] relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Faded blur overlay - matches original design */}
        <div className="absolute inset-0 faded-blur" />
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="flex justify-start">
            <span className="bg-white/80 text-black font-semibold px-3 pt-1.5 pb-[5px] rounded-xl text-[16px]/tight backdrop-blur-sm backdrop-brightness-150 backdrop-saturate-200">
              {project.type}
            </span>
          </div>
          <div>
            <p className="text-white/80 font-medium text-[16px]/tight mb-1">
              {project.subtitle}
            </p>
            <h4 className="text-white font-bold text-[28px]/tight">
              {project.title}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechItem({ tech }: { tech: typeof techStack[0] }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
      <img 
        src={tech.logo} 
        alt={tech.name}
        className="w-14 h-14 rounded-lg object-contain"
      />
      <span className="font-bold text-lg text-gray-900">{tech.name}</span>
    </div>
  );
}

function ProjectModal({ project, isOpen, onClose }: { 
  project: typeof projects[0] | null, 
  isOpen: boolean, 
  onClose: () => void 
}) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Project image */}
        <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project content */}
        <div className="space-y-6">
          <div>
            <p className="text-gray-600 font-medium mb-2">{project.subtitle}</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
            
            {/* Live project button - only show if URL exists and is not placeholder */}
            {project.liveUrl && project.liveUrl !== "#" && project.liveUrl !== "" && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Go to live project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>

          {/* Role */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">My role</h3>
            <p className="text-gray-700">{project.role}</p>
          </div>

          {/* Outcome */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Outcome</h3>
            <p className="text-gray-700 leading-relaxed">{project.outcome}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"quick"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <Cal 
      namespace="quick"
      calLink="facundolucci/quick"
      style={{width:"100%",height:"100%",overflow:"scroll"}}
      config={{"layout":"month_view"}}
    />
  );
}



export default function Home({ loaderData }: Route.ComponentProps) {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          {/* Profile Image */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-3xl">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg shadow-rose-300/50">
                <img 
                  src="https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=384,h=535,f=auto,dpr=2,fit=cover/f1743960916665x935507394094287500/IMG_0406.PNG"
                  alt="Facundo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Bio */}
          <div className="lg:w-2/3 bg-white rounded-3xl p-8">
                         <h1 className="text-[44px]/8 font-bold text-gray-900 mb-6">I'm <span className="gradient-text">Facundo</span></h1>
            <div className="text-2xl/snug font-bold text-neutral-500  mb-8 space-y-2">
              <p>
                <span className="font-bold text-gray-900">I love building</span> things. I started creating music as a teen. 
                Graduated from <span className="font-bold text-gray-900">Peabody</span>. Landed in the family food business. 
                Got into <span className="font-bold text-gray-900">Whole Foods Market</span>. Built apps to manage the business. 
                Launched a no-code <span className="font-bold text-gray-900">development agency</span>. Became a{" "}
                <span className="font-bold text-gray-900">husband and father</span>.{" "}
                <span className="font-bold text-gray-900">Learned to code</span> while rocking my baby to sleep.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://x.com/facundolucci" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/facundolucci/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => openProjectModal(project)}
              />
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="relative bg-gray-100 rounded-3xl p-8 mb-16 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Ccircle cx='22' cy='22' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center',
              boxShadow: 'rgb(240, 240, 240) 0px 0px 64px 56px inset'
            }}
          />
          <div className="relative">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">My tech stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {techStack.map((tech) => (
                <TechItem key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Let's chat!</h2>
          <div className="bg-gray-50 rounded-2xl p-6 min-h-[500px]">
            <CalendarEmbed />
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  );
}
