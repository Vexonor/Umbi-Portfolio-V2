import { headers } from "next/headers";
import Image from "next/image";

async function getProject() {
  const header = headers();
  const protocol = (await header).get("x-forwarded-proto") ?? "http";
  const host = (await header).get("host");
  const response = await fetch(`${protocol}://${host}/data/project-data.json`, {
    cache: "no-store"
  });
  if (!response.ok) throw new Error("Failed fetch data");
  return response.json();
}




export default async function ProjectDetail({ params }) {
  const id = Number(params.id);
  const projects = await getProject();
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <div className="w-dvw h-max bg-charcoal box-border overflow-x-hidden p-4 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 size-full">
        <div className="col-span-1 md:col-span-1 w-full md:h-dvh flex flex-col justify-between">

          <div className="md:flex-2">
            <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl text-white font-semibold">{project.title}</h1>
            <p className="text-sm xl:text-base text-white ">{project.description}</p>
          </div>

          <div className="flex-1 hidden md:block">
            <span className="text-sm xl:text-base text-white font-medium w-max">{project.type}</span>
            <h1 className="text-xl sm:text-3xl lg:text-5xl xl:text-7xl text-white font-semibold">{project.topic}</h1>
          </div>

        </div>

        <div className="col-span-1 md:col-span-1 flex flex-col gap-4 bg-white p-10">
          <Image
            src={project.secondImg}
            alt={project.title}
            width={200}
            height={200}
            className="w-full md:h-auto object-cover"
            priority
          />
          <Image
            src={project.firstImg}
            alt={project.title}
            width={200}
            height={200}
            className="w-full md:h-auto object-cover"
            priority
          />
          <Image
            src={project.thirdImg}
            alt={project.title}
            width={200}
            height={200}
            className="w-full md:h-auto object-cover"
            priority
          />
        </div>

        <div className="col-span-1 md:col-span-1 w-full md:h-dvh md:hidden block">
          <div className="flex-1">
            <span className="text-sm xl:text-base text-white font-medium w-max">{project.type}</span>
            <h1 className="text-xl sm:text-3xl lg:text-5xl xl:text-7xl text-white font-semibold">{project.topic}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}