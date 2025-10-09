import { ProjectForm } from "@/modules/home/ui/components/project-form";
import { ProjectsList } from "@/modules/home/ui/components/projects-list";
import { HeroText } from "@/modules/home/ui/components/hero-text";
import { Boxes } from "@/components/ui/bg-boxes";

export default function Home() {
  return (
    <>
      <div className="h-160 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-none">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="absolute -mt-50 flex items-center justify-center z-20">
          <HeroText />
        </div>
      </div>

      <div className="max-w-3xl h-100 -mt-90 mx-auto w-full z-20 px-4">
        <ProjectForm />
      </div>
      <div className="max-w-5xl mx-auto flex justify-center px-4">
        <ProjectsList />
      </div>
      <div className="h-14" />
    </>
  );
}
