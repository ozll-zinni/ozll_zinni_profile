// app/projects/[slug]/page.js
import Image from "next/image";

const dummyProjects = [
  {
    slug: "Moneyvill",
    title: "캐스퍼 신차 출시 이벤트",
    date: "2024.07. - 2024.08.",
    image: "/images/casper.png",
    description: "자세한 내용...",
  },
  // ...
];

export default function ProjectDetail({ params }) {
  const project = dummyProjects.find((p) => p.slug === params.slug);
  if (!project) {
    return <div className="p-8">해당 프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600">{project.date}</p>
      <div className="my-6">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={600}
        />
      </div>
      <p>{project.description}</p>
    </div>
  );
}
