"use client";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    slug: "MoneyVill",
    title: "경제 교육 시뮬레이션",
    date: "2024.11. - 2024.12.",
    image: "/images/moneyvill.png",
  },
  {
    slug: "uTrip",
    title: "유튜버의 여행을 그대로 따라 갈 수 있도록 정보를 제공하는 서비스",
    date: "2024.05. - 2024.06.",
    image: "/images/utrip.png",
  },
  {
    slug: "O:D",
    title: "사용자 맞춤 오디오북 서비스",
    date: "2024.05. - 2024.06.",
    image: "/images/O:D.png",
  },
  {
    slug: "Traveler",
    title: "여행 계획 스케줄링 및 후기 공유 커뮤니티",
    date: "2023.03. - 2023.07.",
    image: "/images/traveler.png",
  },
];

// 배열을 2개씩 묶는 함수
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function Home() {
  const chunkedProjects = chunkArray(projects, 2);
  return (
    <main className="snap-y snap-mandatory overflow-y-auto h-screen w-full">
      {/* 첫 번째 섹션 */}
      <section className="snap-start h-screen relative flex flex-col">
        {/* 중앙 타이틀 */}
        <div className="flex flex-1 items-center justify-center px-8">
          <h1 className="text-[8rem] font-bold leading-none tracking-tighter">
            ozll_zinni portfolio
          </h1>
        </div>

        {/* 스크롤 다운 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="scroll-down-10 mb-2" />
          <span className="text-sm">scroll down</span>
        </div>

        {/* 오른쪽 하단 정보 */}
        <div className="absolute bottom-8 right-8">
          <div className="flex gap-8">
            <div className="flex flex-col items-end gap-2">
              <span className="text-lg font-bold">김예진</span>
              <span>interests</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="font-bold">FrontEnd Developer</span>
              <span>web interaction</span>
              <span>user experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      {chunkedProjects.map((group, groupIdx) => (
        <section
          key={groupIdx}
          className="snap-start h-screen flex flex-col py-20 space-y-28"
        >
          {group.map((project, idx) => (
            <div
              key={project.slug}
              className={`flex w-full items-end px-10 ${
                idx % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* 짝수 프로젝트(텍스트 왼쪽) */}
              {idx % 2 === 1 && (
                <div className="pr-6 mb-2 text-right">
                  <h2 className="text-lg font-bold">{project.title}</h2>
                  <p className="mt-1 text-gray-600">{project.date}</p>
                </div>
              )}
              {/* 프로젝트 이미지 */}
              <div className="max-w-[37%]">
                <Link href={`/projects/${project.slug}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={600}
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </Link>
              </div>
              {/* 홀수 프로젝트(텍스트 오른쪽) */}
              {idx % 2 === 0 && (
                <div className="pl-6 mb-2">
                  <h2 className="text-lg font-bold">{project.title}</h2>
                  <p className="mt-1 text-gray-600">{project.date}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
