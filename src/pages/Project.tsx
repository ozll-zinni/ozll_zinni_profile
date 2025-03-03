import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import TabNavigation from '../components/Project/TabNavigation';
import FilterButtons from '../components/Project/FilterButtons';
import GridContent from '../components/Project/GridContent';

const Wrap = styled.div`
    width: var(--default-width);
    height: 100%;
    margin: 0 auto;
    min-height: 100vh;
`;

const IntroContainer = styled.div`
    padding: 7rem 0 4.2rem 0;
    display: flex;

    @media only screen and (max-width: 734px) {
        padding: 7rem 0 2.2rem 0;
    }
`;

const Title = styled.h1`
    font-size: var(--font-title);
    font-family: var(--font-default-eng);
`;

const ImageWrapper = styled.div`
    width: 6.4rem;
    position: relative;
`;

const AnimatedImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: rotateAndShake 2.5s ease-in-out infinite;
    position: absolute;
`;

const IntroSubContainer = styled.p`
    font-family: var(--font-default);
    font-size: var(--font-text-large);
    color: #333;
    line-height: 1.3;
    margin-bottom: 3.2rem;
`;

const TabContainer = styled.div`
    margin: 0 auto;
`;

const TabContent = styled.div`
    margin-top: 0.625rem;
    border-radius: 5px;
`;

const contentData = {
    personal: [
        {
            id: '0101',
            title: 'PORTFOLIO',
            description: '리엑트와 타입스크립트로 만든 2024 포트폴리오',
            image: '/project/personal_01.webp',
            staticImage: '/project/personal_01.webp',
            techs: ['React'],
            link: `/project/personal/0101`,
        },
        
    ],
    team: [
        {
            id: '0201',
            title: 'MoneyVill',
            description: '메타버스 경제 시뮬레이션',
            image: '/project/team_01.webp',
            staticImage: '/project/team_01.webp',
            techs: ['React', 'TypeScript'],
            link: `/project/team/0201`,
        },
        {
            id: '0202',
            title: 'YTrip',
            description: '평소 좋아했던 유튜버의 여행을 그대로 따라 갈 수 있도록 정보를 제공하는 서비스',
            image: '/project/team_02.webp',
            staticImage: '/project/team_02.webp',
            techs: ['Next.js', 'TypeScript', 'Spring Boot'],
            link: `/project/team/0202`,
        },
        {
            id: '0203',
            title: 'O:D',
            description: '사용자 맞춤 오디오북 서비스',
            image: '/project/team_03.webp',
            staticImage: '/project/team_03.webp',
            techs: ['HTML', 'BootStrap'],
            link: `/project/team/0203`,
        },
        {
            id: '0204',
            title: 'Traveler',
            description: '여행 계획 스케줄링 및 후기 공유 커뮤니티',
            image: '/project/team_04.webp',
            staticImage: '/project/team_04.webp',
            techs: ['React', 'Spring Boot'],
            link: `/project/team/0204`,
        },
        
    ],
    work: [
        
    ],
};

const techFilters = ['React', 'Next.js', 'TypeScript', 'JavaScript'];

const Project: React.FC = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        setSelectedTechs([]);
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        if (activeTab) {
            gsap.fromTo(contentRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 });
        }
    }, [activeTab, selectedTechs]);

    return (
        <Wrap>
            <TabContainer>
                <IntroContainer>
                    <Title>MY PROJECT</Title>
                    <ImageWrapper>
                        <AnimatedImage src="/home/main_hat.webp" alt=" 이미지" />
                    </ImageWrapper>
                </IntroContainer>
                <IntroSubContainer>
                    다양한 웹 애플리케이션을 
                    <br /> 제작하기 위해 만든 프로젝트입니다.
                </IntroSubContainer>
                <TabNavigation activeTab={activeTab} handleTabChange={handleTabChange} />
                <FilterButtons
                    activeTab={activeTab}
                    contentData={contentData}
                    techFilters={techFilters}
                    selectedTechs={selectedTechs}
                    setSelectedTechs={setSelectedTechs}
                />
                <TabContent ref={contentRef}>
                    <GridContent
                        activeTab={activeTab}
                        contentData={contentData}
                        selectedTechs={selectedTechs}
                        techFilters={techFilters}
                    />
                </TabContent>
            </TabContainer>
        </Wrap>
    );
};

export default Project;
