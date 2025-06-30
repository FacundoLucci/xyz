import type { Route } from "./+types/home";
import { useEffect } from "react";
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
    image: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=384,h=486,f=auto,dpr=2,fit=contain/f1743863279946x634660162926595100/wtc-425-trucks-march-2020.jpg",
    type: "Bubble App"
  },
  {
    id: 2,
    title: "Neighborhood Social Network", 
    image: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=384,h=437,f=auto,dpr=2,fit=contain/f1743880346577x216604651722887230/metuchen%20market%20photo.png",
    type: "Bubble App"
  },
  {
    id: 3,
    title: "AI social media scheduling for churches",
    image: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=384,h=486,f=auto,dpr=2,fit=contain/f1743956513103x552707822922489800/654589c16c48c3bd19a7046f_solen-feyissa-KWZa42a1kds-unsplash.jpg",
    type: "Bubble App"
  },
  {
    id: 4,
    title: "Local Shows Finder",
    image: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=384,h=437,f=auto,dpr=2,fit=contain/f1743881049130x514460294637654200/Best_Practices_For_Vocal_Mics_On_Stage.webp", 
    type: "Bubble App"
  },
  {
    id: 5,
    title: "Video Sharing Alternative to Loom",
    image: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=384,h=486,f=auto,dpr=2,fit=contain/f1743958826797x342685973380831900/play-button-black-glyph-ui-icon-vector-43339697.jpg",
    type: "Code"
  },
  {
    id: 6,
    title: "Dark Mode for Bubble",
    image: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/f1743881570673x920674253244385700/Color%20Mode%20plugin%20logo.svg",
    type: "Plugin"
  },
  {
    id: 7,
    title: "SPA Navigation", 
    image: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/f1743955475259x323940674476416200/path-nav-plugin-logo.svg",
    type: "Plugin"
  }
];

const techStack = [
  { name: "Bubble", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=2,fit=contain/f1743954355106x232441504701089060/bubble-logo.png" },
  { name: "Cloudflare", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=2,fit=contain/f1743954637429x684379069250060600/cloudflare-workers-logo-png_seeklogo-444232.png" },
  { name: "Discord", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=2,fit=contain/f1743955180164x306016823989893060/discord-logo.png" },
  { name: "Linear", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=2,fit=contain/f1743955247012x603501134911924100/linear-app-icon-logo-png_seeklogo-586481.png" },
  { name: "Next.js", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/f1743954043060x424209555028934200/nextjs-icon-dark-background.svg" },
  { name: "Node.js", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=2,fit=contain/f1743955045542x500418995156826300/node-js-icon-1817x2048-g8tzf91e.png" },
  { name: "React", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/f1743953825930x966293244681417900/React-icon.svg" },
  { name: "Slack", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/f1743953791829x929167476871797600/Slack_icon_2019.svg.png" },
  { name: "TanStack", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/cdn-cgi/image/w=64,h=64,f=auto,dpr=2,fit=contain/f1743953932861x830930911576615000/tanstack_logo.webp" },
  { name: "TypeScript", logo: "https://d58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io/f1743953727293x355020015099832640/Typescript_logo_2020.svg" },
  { name: "Xano", logo: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd58598f532bf88feb4dc126f96ffb5af.cdn.bubble.io%2Ff1743954972895x343601029750799000%2Fxano-logo.avif?w=64&h=64&auto=compress&dpr=2&fit=max" }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 fade-in-up">
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
                href="#" 
                className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
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
              <ProjectCard key={project.id} project={project} />
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
    </div>
  );
}
