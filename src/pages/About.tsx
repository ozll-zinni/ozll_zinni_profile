import { useEffect, lazy, Suspense } from 'react';
import styled from 'styled-components';
import GithubBtn from '../components/Common/GithubBtn';
import Intro from '../components/About/Intro';
const SelfIntroduction = lazy(() => import('../components/About/SelfIntroduction'));
const Skills = lazy(() => import('../components/About/Skills'));
const Contact = lazy(() => import('../components/About/Contact'));

const AboutWrap = styled.section`
  width: 100%;
  height: auto;
  position: relative;
`;

const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

  > section {
    content-visibility: auto;
    contain-intrinsic-size: 800px;
  }
`;

const Fallback = () => <div style={{ height: 200, opacity: 0.6 }}>Loading…</div>;

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AboutWrap>
      <GithubBtn />

      <AboutContainer>
        <Intro />

        <Suspense fallback={<Fallback />}>
          <SelfIntroduction />
        </Suspense>

        <Suspense fallback={<Fallback />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<Fallback />}>
          <Contact />
        </Suspense>
      </AboutContainer>
    </AboutWrap>
  );
};

export default About;
