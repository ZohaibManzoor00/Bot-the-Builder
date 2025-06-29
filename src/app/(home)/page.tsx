import { BotHelloAnimation } from "@/components/ui/bot-wave-animation";
import { ProjectForm } from "@/modules/home/ui/components/project-form";
import { ProjectsList } from "@/modules/home/ui/components/projects-list";

export default function Home() {
  return (
    <div className="flex flex-col max-w-5xl mx-auto w-full">
      <section className="space-y-6 py-[16vh] 2xl:py-48">
        <div className="flex flex-col items-center h-[30px] mb-10 absolute">
          <div className="relative translate-x-109 -translate-y-14">
            <BotHelloAnimation />
          </div>
        </div>
        <div className="mb-28" />
        <h1 className="text-2xl md:text-5xl font-bold text-center">
          Got an idea? Bot can build it
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center">
        Your vision. Our AI. Custom apps and websites, built by Bot the Builder.
        </p>
        <div className="max-w-3xl mx-auto w-full">
          <ProjectForm />
        </div>
      </section>
      <ProjectsList />
    </div>
  );
}
