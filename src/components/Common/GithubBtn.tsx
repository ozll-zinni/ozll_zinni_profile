import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const GitHubButton = styled.a`
    position: absolute;
    top: 2rem;
    right: 6%;
    padding: 0.7rem 1rem;
    background-color: #f989b3;
    color: #000;
    text-decoration: none;
    font-family: 'Exo 2', sans-serif;
    font-weight: 400;
    font-size: 14px;
    border-radius: 20px;
    display: inline-flex;
    z-index: 3;
    gap: 2px;

    @media only screen and (max-width: 1348px) {
        right: 4%;
    }

    /* @media only screen and (max-width: 734px) {
        right: 2.5%;
    } */

    &::before {
        content: '';
        z-index: 1;
        opacity: 0.1;
        pointer-events: none;
        mix-blend-mode: exclusion;
        background-image: url('/texture_background.webp');
        background-position: 0 0;
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
    }

    &:hover {
        background-color: var(--main-color-pink-hover);
    }

    span {
        display: inline-block;
        transform-origin: center;
    }
`;

const GithubBtn: React.FC = () => {
    const buttonRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        if (!buttonRef.current) return;

        const chars = buttonRef.current.querySelectorAll('span');

        const tl = gsap.timeline({ paused: true });

        tl.to(chars, {
            duration: 1,
            rotationY: 360,
            ease: 'power1.inOut',
            stagger: 0.07,
        });

        const handleMouseEnter = () => tl.play();
        const handleMouseLeave = () => tl.reverse();

        const buttonElement = buttonRef.current;
        if (buttonElement) {
            buttonElement.addEventListener('mouseenter', handleMouseEnter);
            buttonElement.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (buttonElement) {
                buttonElement.removeEventListener('mouseenter', handleMouseEnter);
                buttonElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <GitHubButton href="https://github.com/ozll-zinni" target="_blank" ref={buttonRef}>
            <span>S</span>
            <span>e</span>
            <span>e</span>
            <span> </span>
            <span>o</span>
            <span>n</span>
            <span> </span>
            <span>G</span>
            <span>i</span>
            <span>t</span>
            <span>H</span>
            <span>u</span>
            <span>b</span>
        </GitHubButton>
    );
};

export default GithubBtn;
