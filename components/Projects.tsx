import Link from "next/link";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "QuickTime Player",
    description: "Revolutionized digital media playback on personal computers.",
    link: "/projects/quicktime-player",
  },
  {
    title: "Worked Directly with Jeff Bezos",
    description: "Revolutionized financial trading.",
    link: "/projects/de-shaw",
  },
  {
    title: "Sold a startup to Yahoo",
    description:
      "Revolutionized internet shopping and subscription search feeds.",
    link: "/projects/yahoo-startup",
  },
  {
    title: "Intuit",
    description: "Revolutionized accounting software.",
    link: "/projects/intuit",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#dcdcdc]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Notable Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link href={project.link} key={index} className="block">
              <div className="bg-[#fff] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-[#333]">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p>{project.description}</p>
                <div className="mt-4 text-sm text-[#333] underline">
                  Learn more
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
