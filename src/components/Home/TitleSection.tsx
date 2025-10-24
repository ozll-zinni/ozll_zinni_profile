import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';

const rotateAndShake = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-3deg);
  }
  75% {
    transform: rotate(1deg);
  }
`;

const floatUpAndDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.625rem);
  }
`;

const shake = keyframes`
    0% {
        transform: scale(1) translateY(0);
    }
    10% {
        transform: scale(0.8, 1.2) translateY(-0.875rem);
    }
    20% {
        transform: scale(1.2, 0.8) translateY(0);
    }
    30% {
        transform: scale(0.95, 1.05) translateY(-0.375rem);
    }
    40% {
        transform: scale(1) translateY(0);
    }
    100% {
        transform: scale(1) translateY(0);
    }
`;

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const TitleContainer = styled.div`
    font-family: var(--font-default-eng);
    font-size: clamp(28px, 7vw, 8.4rem);
    width: var(--default-width);
    line-height: 1.1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3rem auto 6.5rem;

    @media only screen and (max-width: 1348px) {
        font-size: 5.2rem;
        margin: 4rem auto 2rem;
    }

    @media only screen and (max-width: 734px) {
        font-size: 2rem;
        margin: 6.5rem auto 0;
    }
`;

const StyledLine = styled.div<{ alignment: 'flex-start' | 'center' | 'flex-end' }>`
    opacity: 0;
    z-index: 1;
    transform: translateY(2rem);
    margin-top: 1.25rem;
    display: flex;
    flex-wrap: wrap;
    gap: clamp(6px, 1.6vw, 16px);
    align-items: center;
    justify-content: ${({ alignment }) => alignment};

    @media only screen and (max-width: 734px) {
        margin-top: 0.75rem;
    }
`;

const Word = styled.div`
    opacity: 0;
    transform: translateY(1.5rem);
    display: inline-block;
`;

const StyledAnimatedImage1 = styled.img`
    width: 10.37rem;
    height: auto;
    animation: ${rotateAndShake} 2.5s ease-in-out infinite;
    margin-left: 1.25rem;
    position: relative;
    top: 0.625rem;
    opacity: 0;
    transform: translateY(1.25rem);

    @media (max-width: 640px) {
        display: none; /* ✅ 모바일에서 겹침 방지 */
    }
`;

const StyledAnimatedImage2 = styled.img`
    width: 8.37rem;
    height: auto;
    animation: ${floatUpAndDown} 3s ease-in-out infinite;
    margin-left: 1.25rem;
    position: relative;
    top: 0.725rem;
    opacity: 0;
    transform: translateY(1.25rem);
    margin-right: 1.25rem;

    @media only screen and (max-width: 1348px) {
        width: 6.5rem;
    }

    @media only screen and (max-width: 734px) {
        width: 3.57rem;
    }
`;

const StyledCircle = styled.div`
    width: 0.75rem;
    height: 0.75rem;
    background: var(--main-color-green);
    border-radius: 50%;
    position: absolute;
    animation: ${shake} 2s infinite alternate;
    margin: 0 0.438rem;
    opacity: 0;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-0.625rem);
    }

    @media only screen and (max-width: 1348px) {
        width: 0.6rem;
        height: 0.6rem;
    }

    @media only screen and (max-width: 734px) {
        display: none;
    }
`;

const Circle1 = styled(StyledCircle)`
    top: 0.5rem;
    right: -1.6rem;

    @media only screen and (max-width: 1068px) {
        right: 0;
        left: 3rem;
    }
`;

const Circle2 = styled(StyledCircle)`
    top: 0.625rem;
    left: 2.48rem;
`;

const Tooltip = styled.div<{ $position: 'right' | 'left'; $isVisible: boolean }>`
    position: absolute;
    background: var(--main-color-green);
    border-radius: var(--default-radius-small);
    padding: 0.938rem 0.5rem;
    width: 11.375rem;
    box-shadow: 0 0.06rem 0.31rem rgba(0, 0, 0, 0.1);
    z-index: 3;
    visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transition: opacity 0.3s;
    top: -3rem;
    line-height: 1.2;
    ${({ $position }) => ($position === 'right' ? `left: calc(100% + 2.5rem);` : `right: calc(100% - 1.5rem);`)};

    p {
        font-family: 'SUIT';
        font-size: 0.875rem;
        word-break: keep-all;
        letter-spacing: -0.02em;
        margin: 0;
    }

    @media only screen and (max-width: 1068px) {
        top: -2rem;
        ${({ $position }) => ($position === 'right' ? `left: -8rem ;` : `right: -4.5rem;`)};
    }

    @media only screen and (max-width: 734px) {
        display: none;
    }
`;

const ImageContainer = styled.div`
    position: relative;
`;

const ScaleWrapper = styled.div`
  width: 1920px; /* 기준 너비 */
  transform-origin: top center;

  /* 화면이 작아지면 전체를 비율로 축소 */
  @media (max-width: 1920px) {
    transform: scale(calc(100vw / 1920));
  }
`;

const TitleSection = () => {
    const [hoveredCircle1, setHoveredCircle1] = useState(false);
    const [hoveredCircle2, setHoveredCircle2] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: 'power3.out',
                duration: 0.8,
            },
        });

        tl.fromTo(
            'div[data-line]',
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
            }
        )
            .fromTo(
                'div[data-word]',
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                },
                '-=0.5'
            )
            .fromTo(
                'img[data-animated]',
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                },
                '-=0.3'
            )
            .fromTo(
                'div[data-circle]',
                {
                    opacity: 0,
                    scale: 0,
                },
                {
                    opacity: 1,
                    scale: 1,
                    stagger: 0.1,
                },
                '-=0.2'
            );

        return () => {
            tl.kill();
        };
    }, []);

    return (
    <Container ref={containerRef}>
        <ScaleWrapper>
        <TitleContainer>
            <StyledLine alignment="flex-start" data-line>
            <Word data-word>INTUITIVE UI</Word>
            <ImageContainer
                onMouseEnter={() => setHoveredCircle1(true)}
                onMouseLeave={() => setHoveredCircle1(false)}
            >
                <StyledAnimatedImage1 src="/home/main_notebook.webp" alt="노트북 이미지" data-animated />
                <Circle1 data-circle />
                <Tooltip $isVisible={hoveredCircle1} $position="right">
                <p>안녕하세요 프론트엔드 개발자 김예진입니다. 반가워요!</p>
                </Tooltip>
            </ImageContainer>
            </StyledLine>

            <StyledLine alignment="center" data-line>
            <Word data-word>USER ENGAGEMENT</Word>
            </StyledLine>

            <StyledLine alignment="flex-end" data-line>
            <ImageContainer
                onMouseEnter={() => setHoveredCircle2(true)}
                onMouseLeave={() => setHoveredCircle2(false)}
            >
                <StyledAnimatedImage2 src="/home/main_dumbbells.webp" alt="덤벨 이미지" data-animated />
                <Circle2 data-circle />
                <Tooltip $isVisible={hoveredCircle2} $position="left">
                <p>개발은 체력이죠 꾸준히 운동도 하려고 노력합니다.</p>
                </Tooltip>
            </ImageContainer>
            <Word data-word>PERFORMANCE</Word>
            </StyledLine>

            <StyledLine alignment="flex-start" data-line>
            <Word data-word>IMPROVEMENT</Word>
            </StyledLine>
        </TitleContainer>
        </ScaleWrapper>
    </Container>
    );

};

export default TitleSection;
