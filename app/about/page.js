'use client';
import React from 'react';

export default function About() {
  return (
    <div className="page page--index">
      <div className="home">
        <div className="home__header pt-8">
          <div className="container mx-auto px-8">
            <div className="space-y-12">
              {/* Title Section */}
              <div className="flex items-baseline">
                <h1 className="text-[15vw] leading-none mr-4">about</h1>
                <span className="text-4xl">ozll_zinni</span>
              </div>

              {/* Description Section */}
              <div className="space-y-0 max-w-3xl">
                <div className="space-y-0"> {/* space-y-0에서 space-y-6으로 변경 */}
                  <div className="group">
                    <p className="text-lg hover:text-gray-600 transition-colors cursor-default">
                      Interactive한 웹을 구축하고 사용자와 개발자 경험을 향상시키는 데에 관심이 많은 프론트엔드 개발자입니다.
                    </p>
                    <div className="overflow-hidden max-h-0 group-hover:max-h-[500px] transition-all duration-300">
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold mb-2">
                          더 나은 UX와 UI에 대해 고민하며, 디테일에 욕심이 있습니다.
                        </p>
                        <p className="text-base">
                          클릭 한 번의 개선이 쌓여 서비스의 완성도를 높인다고 믿기에, 사용자의 관점에서 공감하며 섬세하게 기능을 구현하려 노력합니다. 
                          단순히 디자인을 구현하는 것에서 나아가 기술을 통해 서비스의 사용성을 개선하는 과정을 즐깁니다. 
                          나아가 Three.js를 활용한 3D 인터랙션에 관심을 갖고 공부하고 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <p className="text-lg hover:text-gray-600 transition-colors cursor-default">
                      타인에게 망설임 없이 추천할 수 있는, 일상 속에 자연스럽게 스며드는 서비스를 개발하는 것을 목표로 합니다.                    
                    </p>
                    <div className="overflow-hidden max-h-0 group-hover:max-h-[500px] transition-all duration-300">
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold mb-2">
                          주변에 있는 문제를 찾고 기술적으로 해결해 나가는 과정을 즐거워합니다.
                        </p>
                        <p className="text-base">
                          최근 주식과 투자에 대한 관심이 급증하는 반면, 금융 지식이 부족한 상황에서 시작하는 분들을 많이 보았습니다. 특히 학창시절 이론으로만 배운 경제가 현실과 괴리감이 있다는 것을 체감하면서, 학생들이 쉽고 재미있게 경제를 배우며 경험할 수 있는 프로젝트를 진행했습니다. 주식 그래프와 관련 뉴스를 연동해 시장의 흐름을 직관적으로 파악할 수 있도록 구현하며, 실생활의 문제를 기술로 해결하는 과정에서 성장할 수 있었습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg">
                    반복되는 패턴을 추상화하고 로직 및 UI를 재사용할 수 있도록 설계하는 작업을 좋아합니다.
                  </p>
                </div>

                <div className="pt-5">
                  <p className="text-lg">
                    계속해서 배우고, 성장해나가는 사람이 되겠습니다.
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div 
                className="space-y-4 absolute bottom-20 right-12 select-none"
                style={{ color: 'var(--grey3)' }}
              >
                {/* 첫 번째 줄 */}
                <div className="flex flex-wrap gap-2 justify-end text-sm">
                  <span className="underline cursor-pointer italic"># HTML5</span>
                  <span className="underline cursor-pointer italic"># CSS3</span>
                  <span className="underline cursor-pointer italic"># JavaScript</span>
                  <span className="underline cursor-pointer italic"># TypeScript</span>
                  <span className="underline cursor-pointer italic"># React</span>
                  <span className="underline cursor-pointer italic"># styled-components</span>
                  <span className="underline cursor-pointer italic"># emotion</span>
                </div>

                {/* 두 번째 줄 */}
                <div className="flex flex-wrap gap-2 justify-end text-sm">
                  <span className="underline cursor-pointer italic"># Next.js</span>
                  <span className="underline cursor-pointer italic"># React-Query</span>
                  <span className="underline cursor-pointer italic"># Storybook</span>
                  <span className="underline cursor-pointer italic"># Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}