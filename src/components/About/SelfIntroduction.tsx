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
  height: 2px;
  width: 100%;
  background-color: black;
  transform-origin: left center;
  transform: scaleX(0);
  will-change: transform, opacity;
`;

const Content = styled.div`
  width: 100%;
`;

const TextBox = styled.dl`
  padding: 2rem 0;
  font-size: var(--font-text-large);
  word-break: keep-all;

  dt, dd {
    opacity: 0;
    transform: translateY(16px);
    will-change: opacity, transform;
  }

  dt {
    font-size: 1rem;
    font-weight: var(--font-weight-thin);
    margin-bottom: 4rem;
  }

  dd {
    font-size: var(--font-text);
    line-height: 1.4;

    p { margin-bottom: 1rem; }
  }
`;

const SelfIntroduction: React.FC = () => {
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const lineRef = useRef<HTMLDivElement | null>(null);
    const dtRef = useRef<HTMLElement | null>(null);
    const ddRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      wrapRef.current,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top 95%',
          once: true,
        },
      }
    );

    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: {
        trigger: lineRef.current,
        start: 'top 95%',
        once: true,
      },
    });

    tl.to(lineRef.current, { scaleX: 1, duration: 0.45 })
      .to(dtRef.current, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')
      .to(ddRef.current, { opacity: 1, y: 0, duration: 0.4 }, '-=0.1');

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <SelfIntroWrap ref={wrapRef}>
      <Line ref={lineRef} />
      <Content>
        <TextBox>
          <dt ref={dtRef}>작은 시작, 큰 연결</dt>
          <dd ref={ddRef}>
            <p className="text-base"> 
                클릭 한 번, 색상 하나의 변화가 서비스의 인상을 좌우한다고 믿으며, 작은 개선이 모여 사용자 경험의 큰 차이를 만든다고 생각합니다. 
                단순히 보이는 화면을 구현하는 것을 넘어, 생각을 구조화하고 이를 코드로 구현하는 과정에서 즐거움을 느껴왔습니다. 
                대학과 전문 교육 과정을 통해 탄탄한 CS 기초와 웹 개발 역량을 쌓았으며, React를 중심으로 UI/UX 구현과 서비스 최적화 경험을 다져왔습니다.
            </p> 
            <p> 
                포트폴리오 프로젝트에서는 useMemo와 useCallback을 활용해 불필요한 렌더링을 최소화하고, 이미지 리소스를 WebP로 최적화하여 초기 로딩 속도를 약 40% 단축시켰습니다. 
                또한 KAIST 정글 과정에서는 금융 데이터를 기반으로 한 경제 시뮬레이션 서비스를 개발하며 차트 렌더링 구조를 개선해 프레임 드랍 없이 매끄러운 시각화를 구현했고, Lighthouse 성능 점수를 64 → 93으로 향상시켰습니다. 
                이를 통해 사용자 체감 속도와 서비스 안정성을 동시에 개선할 수 있었습니다.   
            </p> 
            <p> 
                저는 문제를 객관적으로 분석하고, 팀과 함께 더 나은 방향을 모색하는 것을 중요하게 생각합니다. 
                코드 리뷰와 문서화를 습관화해 팀의 생산성을 높였으며, UI툴과 협업 툴을 적극적으로 활용하여 효율적인 커뮤니케이션 환경을 만들어왔습니다. 
                프로젝트 리드를 맡으며 기술적 완성도뿐 아니라 팀원들의 성장과 협업의 조화를 이끄는 과정의 중요성을 배웠습니다. 
                앞으로는 성능 최적화와 사용자 경험을 아우르는 프론트엔드 전문가로 성장해, 신뢰받는 동료이자 팀의 성과를 견인하는 개발자가 되겠습니다.
            </p>
          </dd>
        </TextBox>
      </Content>
    </SelfIntroWrap>
  );
};

export default SelfIntroduction;
