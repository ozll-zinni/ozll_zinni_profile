import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const LogoLink = styled(Link)`
    position: absolute;
    top: 2rem;
    left: calc(6% + 3.75rem);
    width: 2.5rem;
    z-index: 2;

    @media only screen and (max-width: 1348px) {
        left: calc(5% + 3.75rem);
    }

    @media only screen and (max-width: 734px) {
        left: calc(2.5% + 3.75rem);
    }

    img {
        width: 100%;
        height: auto;
    }

    &:hover img {
        animation: rotateLogo 3s linear infinite;
    }
`;

const NavigationLayer = styled.div<{ open: boolean }>`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: row;
    justify-content: space-between;
    z-index: 4;
    background-color: #56dfb4;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 6rem 5% 3rem 5%;
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 1348px) {
        padding: 6rem 1.5rem 3rem 1.5rem;
    }

    @media only screen and (max-width: 734px) {
        padding: 6rem 2.5% 3rem 2.5%;
        justify-content: center;
        align-items: center;
    }
`;

const NavigationSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 65%;
    height: 100%;
`;

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;

    @media only screen and (max-width: 734px) {
        display: none;
    }
`;

const NavigationContainer = styled.div`
    position: relative;
`;

const HamburgerButton = styled.button<{ open: boolean }>`
    position: absolute;
    top: 2rem;
    left: 6%;
    z-index: 202;
    width: 2.5rem;
    height: 2.5rem;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;

    @media only screen and (max-width: 1348px) {
        left: 4%;
    }

    /* @media only screen and (max-width: 734px) {
        left: 2.5%;
    } */

    div {
        position: absolute;
        width: 100%;
        height: 0.125rem;
        background-color: #000;
        transition: all 0.3s ease;
        &:nth-child(1) {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'translateY(-0.625rem)')};
        }
        &:nth-child(2) {
            opacity: ${({ open }) => (open ? 0 : 1)};
        }
        &:nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'translateY(0.625rem)')};
        }
    }
`;

const AnimatedSvg = styled.img`
    position: absolute;
    width: 17.5rem;
    top: 50%;
    left: -0.9375rem;
    transform: translateY(-50%);
    opacity: 0;
    transition: all 0.2s cubic-bezier(0.7, 0, 0.3, 1);

    @keyframes drawCircle {
        0% {
            stroke-dasharray: 157;
            stroke-dashoffset: 157;
            opacity: 0;
        }
        100% {
            stroke-dasharray: 157;
            stroke-dashoffset: 0;
            opacity: 1;
        }
    }

    @media only screen and (max-width: 1348px) {
        width: 13.5rem;
    }

    @media only screen and (max-width: 734px) {
        width: 11.5rem;
    }
`;

const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    opacity: 1;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 734px) {
        align-items: center;
    }
`;

const NavLink = styled(Link)`
    color: #0d0f0f;
    font-family: var(--font-default-eng);
    font-size: var(--font-title);
    text-decoration: none;
    margin: 1.5rem 0;
    position: relative;
    transition: all 0.2s cubic-bezier(0.7, 0, 0.3, 1);

    &:hover > ${AnimatedSvg} {
        opacity: 1;
        animation: drawCircle 0.8s ease-in-out forwards;
    }
`;

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #0d0f0f;
    padding: 1rem 1.25rem;
    border-radius: var(--default-radius);
    margin-top: 1rem;

    &:hover img {
        filter: grayscale(0%);
    }
`;

const ContactLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--font-color);
    margin-bottom: 0.625rem;

    p {
        margin-right: 1.5625rem;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        font-size: var(--font-text-large);
        font-weight: var(--font-weight-bold);
        color: var(--background-color);
    }

    img {
        width: 20rem;
        height: auto;
        object-fit: cover;
        border-radius: var(--default-radius);
        filter: grayscale(100%);
        transition: filter 0.3s ease;
    }
`;

const ContactInfo = styled.div`
    text-align: right;
    color: #0d0f0f;
    width: 25.625rem;
    height: 14.5rem;
    border: 0.0625rem solid #0d0f0f;
    padding: 1.25rem;
    border-radius: var(--default-radius);
    margin-top: 1.25rem;
    position: relative;

    &:hover span {
        animation: rotateLogo 3s linear infinite;
    }

    span {
        position: absolute;
        bottom: 1.25rem;
        left: 0.875rem;
        width: 2.5rem;
        height: 2.5rem;

        img {
            width: 100%;
        }
    }

    @keyframes rotateLogo {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    div {
        position: absolute;
        top: 1.25rem;
        left: 1.25rem;
        margin-right: 0.625rem;
        width: fit-content;

        p {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            font-size: 1.4375rem;
            font-weight: 600;
            color: #0d0f0f;
        }
    }

    ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        li {
            strong {
                font-size: 1.25rem;
                font-weight: 600;
                display: block;
                margin-bottom: 0.5rem;
            }
        }
    }
`;

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch((error) => {
                console.log(
                    '브라우저 정책으로 인해 자동 재생이 차단되었습니다. 클릭 후 호버하면 오디오 재생을 확인할 수 있습니다:',
                    error
                );
            });
        }
    };

    const stopSound = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <>
            <HamburgerButton open={isOpen} onClick={toggleMenu} aria-label="메뉴 버튼">
                <div />
                <div />
                <div />
            </HamburgerButton>
            <LogoLink to="/" onMouseOver={playSound} onMouseOut={stopSound}>
                <img src="/title_logo.webp" alt="사이트 로고" />
            </LogoLink>
            <audio ref={audioRef} src="/assets/audio/hover_sound.mp3" preload="auto"></audio>
            <NavigationLayer open={isOpen}>
                <ContentContainer>
                    <NavigationSection>
                        <NavigationContainer>
                            <NavLinks>
                                <NavLink to="/" className="nav-link">
                                    HOME
                                    <AnimatedSvg src="/assets/svg/straight.svg" className="draw" alt="밑줄 호버효과" />
                                </NavLink>
                                <NavLink to="/project" className="nav-link">
                                    PROJECT
                                    <AnimatedSvg
                                        src="/assets/svg/circle.svg"
                                        className="draw"
                                        alt="동그라미 호버효과"
                                    />
                                </NavLink>
                                <NavLink to="/about" className="nav-link">
                                    ABOUT
                                    <AnimatedSvg src="/assets/svg/wave.svg" className="draw" alt="웨이브 호버효과" />
                                </NavLink>
                            </NavLinks>
                        </NavigationContainer>
                    </NavigationSection>
                    <ContactSection>
                        <ContactContainer>
                            <ContactLink to="/about">
                                <p>ABOUT ME</p>
                                <img src="/about_nav.webp" alt="About 페이지 대표 이미지" />
                            </ContactLink>
                        </ContactContainer>
                        <ContactInfo>
                            <span>
                                <img src="/black_logo.webp" alt="네비게이션 작은 로고" />
                            </span>
                            <div>
                                <p>CONTACT</p>
                            </div>
                            <ul>
                                <li>
                                    <strong>EMAIL</strong>
                                    <p>dpwls0454@naver.com</p>
                                </li>
                                <li>
                                    <strong>BLOG</strong>
                                    <Link to="https://yejineeee.tistory.com/" aria-label="개발 블로그 구경하기">
                                        yejineeee.tistory 
                                    </Link>
                                </li>
                            </ul>
                        </ContactInfo>
                    </ContactSection>
                </ContentContainer>
            </NavigationLayer>
        </>
    );
};

export default Navigation;
