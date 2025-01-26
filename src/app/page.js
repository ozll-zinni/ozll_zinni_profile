export default function Home() {
  return (
    <main className="relative flex h-screen w-full flex-col overflow-hidden">
      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-[5rem] font-bold leading-none tracking-tighter">
          ozll_zinni portfolio
        </h1>
      </div>

      {/* 오른쪽 하단 정보 (절대 위치) */}
      <div className="absolute bottom-8 right-8 text-right">
          <div className="flex gap-8">
            {/* 왼쪽 열: 이름, interests */}
            <div className="flex flex-col items-end gap-2">
              <span className="text-lg font-medium">김예진</span>
              <span>interests</span>
            </div>

            {/* 오른쪽 열: 직무, 세부 키워드 */}
            <div className="flex flex-col items-start gap-2">
              <span className="font-semibold">FrontEnd Developer</span>
              <span>web interaction</span>
              <span>user experience</span>
            </div>
          </div>
        </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="scroll-down-10 mb-2" />
        <span className="text-sm">scroll down</span>
      </div>
    </main>
  );
}
