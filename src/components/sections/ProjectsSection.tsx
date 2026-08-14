import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-white/15">
      <div className="mx-auto w-full max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="Projects" title="Selected work" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className={project.span === "wide" ? "lg:col-span-2" : "lg:col-span-1"}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
