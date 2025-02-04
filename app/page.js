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

export default function Home() {
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
      <section className="snap-start py-16 px-4 sm:px-8 md:px-16">
        {projects.map((project, idx) => (
          <div key={project.slug} className="mb-16 md:mb-32">
            <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* 이미지 */}
              <div className="w-full md:w-1/3 sm:w-full">
                <Link href={`/projects/${project.slug}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </Link>
              </div>

              {/* 텍스트 */}
              <div className={`w-full md:w-1/2 flex flex-col justify-end ${
                idx % 2 === 0 ? 'md:pl-8 items-start' : 'md:pr-8 items-end text-right'
              }`}>
                <h2 className="text-lg font-bold mt-4 md:mt-0">{project.title}</h2>
                <p className="mt-1 text-gray-600">{project.date}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}