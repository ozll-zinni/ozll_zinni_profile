import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SelfIntroWrap = styled.div`
    width: var(--default-width);
    margin: 0 auto;
    position: relative;
`;

const Line = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: black;
`;

const Content = styled.div`
    width: 100%;
`;

const TextBox = styled.dl`
    padding: 2rem 0;
    font-size: var(--font-text-large);
    word-break: keep-all;

    dt {
        font-size: 1rem;
        font-weight: var(--font-weight-thin);
        margin-bottom: 4rem;
        opacity: 0;
        transform: translateY(20px);
    }

    dd {
        font-size: var(--font-text);
        line-height: 1.4;
        opacity: 0;
        transform: translateY(20px);

        p {
            margin-bottom: 1rem;
        }
    }
`;

const SelfIntroduction: React.FC = () => {
    const lineRef = useRef<HTMLDivElement>(null);
    const dtRef = useRef<HTMLDListElement>(null);
    const ddRef = useRef<HTMLDListElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: lineRef.current,
                start: 'top 90%',
                end: 'bottom top',
                toggleActions: 'play none none none',
            },
        });

        tl.to(lineRef.current, {
            width: '100%',
            duration: 1.6,
            ease: 'power2.out',
        })
            .to(
                dtRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                },
                '-=0.5'
            )
            .to(ddRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
            });
    }, []);

    return (
        <SelfIntroWrap>
            <Line ref={lineRef} />
            <Content>
                <TextBox>
                    <dt ref={dtRef}> 작은 시작, 큰 연결 </dt>
                    <dd ref={ddRef}>
                        <p className="text-base">
                            프론트엔드 개발자로서, 작은 디테일이 큰 변화를 만든다고 믿습니다. 클릭 한 번, 사소한 UI 개선이 쌓여 서비스의 
                            이미지를 결정하듯, 사용자에게 진심으로 공감하고 섬세하게 구현된 기능들이 큰 변화를 가져온다고 생각합니다. 
                            화면의 섬세한 요소와 직관적인 상호작용을 통해, 더 많은 사람들이 편리하고 즐겁게 사용할 수 있는 서비스를 만들기 위해 
                            끊임없이 고민하고 있습니다. 
                            단순히 디자인을 구현하는 것에서 나아가 기술을 통해 서비스의 사용성을 개선하는 과정을 즐깁니다. 
                            나아가 컴포넌트 설계와 디자인시스템에 관심을 갖고 공부하고 있습니다.
                        </p>
                        
                        <p>
                            타인에게 망설임 없이 추천할 수 있는, 일상 속에 자연스럽게 스며드는 서비스를 개발하는 것을 목표로 합니다.
                            최근 주식과 투자에 대한 관심이 급증하는 반면, 금융 지식이 부족한 상황에서 시작하는 분들을 많이 보았습니다. 
                            특히 학창시절 이론으로만 배운 경제가 현실과 괴리감이 있다는 것을 체감하면서, 학생들이 쉽고 재미있게 경제를 배우며 경험할 수 있는 프로젝트를 진행했습니다. 
                            주식 그래프와 관련 뉴스를 연동해 시장의 흐름을 직관적으로 파악할 수 있도록 구현하며, 
                            실생활의 문제를 기술로 해결하는 과정에서 성장할 수 있었습니다.
                        </p>

                        <p>
                            사용자 피드백을 기반으로 기술을 개선하고, 테스트를 통해 부족한 부분을 보완하며, 점진적으로
                            발전하는 서비스를 만드는 것이 저의 목표입니다. 이렇게 사용자와 팀 모두가 만족할 수 있는
                            결과물을 함께 이루어가고 싶습니다.
                        </p>
                    </dd>
                </TextBox>
            </Content>
        </SelfIntroWrap>
    );
};

export default SelfIntroduction;
