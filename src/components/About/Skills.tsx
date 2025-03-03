import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillsWrap = styled.div`
    width: var(--default-width);
    margin: 0 auto;
    padding: 2rem 0;
    position: relative;
    overflow: hidden;

    @media (max-width: 734px) {
        width: 100%;
        padding: 2rem 1rem;
    }
`;

const Line = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: black;
`;

const MainTitle = styled.h2`
    font-size: 1rem;
    font-weight: var(--font-weight-thin);
    margin-bottom: 4rem;
    opacity: 0;
    transform: translateY(1.25rem);

    @media (max-width: 734px) {
        margin-bottom: 3rem;
        opacity: 1;
        transform: translateY(0);
    }
`;

const CardsSection = styled.section`
    position: relative;
    height: 80vh;
    width: 100%;
    overflow: hidden;
    opacity: 0;
    transform: translateY(20px);

    @media (max-width: 734px) {
        height: auto;
        overflow: visible;
        opacity: 1;
        transform: none;
    }
`;

const CardsContainer = styled.div`
    display: flex;
    gap: 2rem;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;

    @media (max-width: 734px) {
        position: relative;
        flex-direction: column;
        height: auto;
        transform: none !important;
    }
`;

const ProcessCard = styled.div`
    flex: 0 0 35rem;
    height: 90%;
    border-radius: var(--default-radius);
    padding: 2rem;
    background: #f0f0f0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0%;
        height: 100%;
        background-color: var(--main-color-green);
        z-index: 0;
        transition: width 0.7s ease-in-out;
    }

    &.fill::after {
        width: var(--fill-percentage, 0%);
    }

    &:first-child::after {
        width: 100%;
    }

    @media (max-width: 734px) {
        flex: none;
        width: 100%;
        height: auto;
        min-height: 300px;
        margin-bottom: 1.5rem;
        padding: 1.5rem;

        &::after {
            width: 0%;
        }
    }
`;

const CardContent = styled.div`
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 3rem;

    @media (max-width: 734px) {
        margin-bottom: 2rem;
    }
`;

const CardTitle = styled.h3`
    font-size: 2.5rem;
    font-weight: bold;

    @media (max-width: 734px) {
        font-size: 1.75rem;
    }
`;

const Number = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 0.125rem solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;

    @media (max-width: 734px) {
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1.25rem;
    }
`;

const SkillsList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: auto;
`;

const SkillItem = styled.li`
    padding: 1rem 0;
    font-size: 1.4rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:last-child {
        border-bottom: none;
    }

    @media (max-width: 734px) {
        font-size: 1rem;
        padding: 0.875rem 0;
    }
`;

const Skills: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const sequentialTl = gsap.timeline({
            scrollTrigger: {
                trigger: lineRef.current,
                start: 'top 90%',
                end: 'bottom top',
                toggleActions: 'play none none none',
            },
        });

        sequentialTl
            .to(lineRef.current, {
                width: '100%',
                duration: 1.6,
                ease: 'power2.out',
            })
            .to(
                titleRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                },
                '-=0.8'
            )
            .to(
                sectionRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                },
                '-=0.4'
            );

        if (containerRef.current && sectionRef.current && window.innerWidth > 734) {
            const totalWidth = containerRef.current.scrollWidth;
            const sectionWidth = sectionRef.current.offsetWidth;

            ScrollTrigger.create({
                trigger: sectionRef.current,
                pin: true,
                start: 'top top',
                end: () => `+=${totalWidth - sectionWidth}`,
                scrub: 1,
                invalidateOnRefresh: true,
                animation: gsap.to(containerRef.current, {
                    x: () => -(totalWidth - sectionWidth),
                    ease: 'none',
                }),
                onUpdate: (self) => {
                    const progress = self.progress;
                    const totalCards = cardsRef.current.length;
                    const progressPerCard = 1 / totalCards;

                    cardsRef.current.forEach((card, index) => {
                        if (!card) return;

                        const cardStartProgress = index * progressPerCard;
                        const cardEndProgress = cardStartProgress + progressPerCard;

                        if (progress >= cardStartProgress && progress < cardEndProgress) {
                            const fillPercentage = ((progress - cardStartProgress) / progressPerCard) * 100;
                            card.style.setProperty('--fill-percentage', `${fillPercentage}%`);
                            card.classList.add('fill');
                        } else if (progress >= cardEndProgress) {
                            card.style.setProperty('--fill-percentage', `100%`);
                        } else {
                            card.style.setProperty('--fill-percentage', `0%`);
                        }

                        if (index > 0) {
                            const previousCard = cardsRef.current[index - 1];
                            if (previousCard && progress >= cardStartProgress) {
                                previousCard.style.setProperty('--fill-percentage', `100%`);
                            }
                        }
                    });
                },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const skillCategories = [
        {
            title: '개발 기술',
            skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Jotai'],
        },
        {
            title: '스타일링 및 마크업',
            skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
        },
        {
            title: '형상 관리',
            skills: ['Git'],
        },
        {
            title: '서비스형 백엔드 및 배포',
            skills: ['Supabase', 'Spring Boot', 'Vercel', 'AWS(EC2, Light Sail)'],
        },
    ];

    return (
        <SkillsWrap>
            <Line ref={lineRef} />
            <MainTitle ref={titleRef}>나의 기술들</MainTitle>
            <CardsSection ref={sectionRef}>
                <CardsContainer ref={containerRef}>
                    {skillCategories.map((category, index) => (
                        <ProcessCard key={index} ref={(el) => (cardsRef.current[index] = el)}>
                            <CardContent>
                                <CardHeader>
                                    <CardTitle>{category.title}</CardTitle>
                                    <Number>{index + 1}</Number>
                                </CardHeader>
                                <SkillsList>
                                    {category.skills.map((skill, skillIndex) => (
                                        <SkillItem key={skillIndex}>{skill}</SkillItem>
                                    ))}
                                </SkillsList>
                            </CardContent>
                        </ProcessCard>
                    ))}
                </CardsContainer>
            </CardsSection>
        </SkillsWrap>
    );
};

export default Skills;
