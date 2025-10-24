// Home.tsx
import { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../assets/styles/GlobalStyle';
import TitleSection from '../components/Home/TitleSection';
import OverviewSection from '../components/Home/OverviewSection';

const HomeWrap = styled.section`
  width: 100%;
  position: relative;
`;

const ContentWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 4vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const BASE_W = 1920;

// ⬇️ 전체 스케일 + 예약 높이
const ScaleWrapper = styled.div<{ $scale: number; $h: number }>`
  width: ${BASE_W}px;
  height: ${({ $scale, $h }) => Math.ceil($h * $scale)}px;
  transform: scale(${({ $scale }) => $scale});
  transform-origin: top left;
  margin: 0; 
`;

export default function Home() {
  const [scale, setScale] = useState(1);
  const [naturalH, setNaturalH] = useState(800);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const onResize = () => {
      setScale(Math.min(1, window.innerWidth / BASE_W));
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useLayoutEffect(() => {
    if (contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect();
      setNaturalH(rect.height / (scale || 1));
    }
  }, [scale]);

  return (
    <>
      <GlobalStyle />
      <HomeWrap>
        <ContentWrap>
          <ScaleWrapper $scale={scale} $h={naturalH}>
            <div ref={contentRef}>
              <TitleSection />
            </div>
          </ScaleWrapper>
          <OverviewSection />
        </ContentWrap>
      </HomeWrap>
    </>
  );
}
