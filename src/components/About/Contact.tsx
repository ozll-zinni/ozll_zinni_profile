import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: var(--default-width);
    margin: 0 auto;
    gap: 2rem;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin-bottom: 6rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const ContactInfo = styled.a`
    font-family: var(--font-default-eng);
    font-size: var(--font-sub-title);
    letter-spacing: -0.09rem;
    width: 100%;
    height: 21rem;
    border: 1px solid black;
    border-radius: 2rem;
    position: relative;
    transition: border-radius 0.5s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ImageContainer = styled.div`
    width: 240px;
    height: 135px;
    overflow: hidden;
    margin-bottom: 1.3rem;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const Contact: React.FC = () => {
    const contactInfoRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: contactInfoRef.current,
                start: 'top 90%',
                end: 'bottom 10%',
                toggleActions: 'play none reverse none',
            },
        });

        timeline
            .to(
                contactInfoRef.current,
                {
                    borderRadius: '0%',
                    duration: 1,
                    ease: 'power2.inOut',
                },
                '-=0.5'
            )
            .to(
                contactInfoRef.current,
                {
                    borderRadius: '2rem',
                    duration: 1,
                    ease: 'power2.inOut',
                },
                '+=1'
            );
    }, []);

    return (
        <ContactContainer>
            <ContactInfo ref={contactInfoRef} href="mailto:dpwls0454@naver.com">
                <ImageContainer>
                    <Image src="/about/letter.gif" alt="Letter" />
                </ImageContainer>
                Connect with Me <br />
            </ContactInfo>
        </ContactContainer>
    );
};

export default Contact;
