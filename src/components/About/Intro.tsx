import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';

const IntroContainer = styled.div`
    width: var(--default-width);
    padding: 6rem 0 4rem;
    margin: 0 auto;
    position: relative;
`;

const Title = styled.h2`
    font-family: var(--font-default-eng);
    font-size: var(--font-title);
    margin-bottom: 3rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s ease-out;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    &.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;

const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.2rem;
    width: 100%;

    @media (max-width: 1348px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 734px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.6rem;
    }
`;

const ImageWrapper = styled.div<{ delay: number }>`
    position: relative;
    width: 100%;
    aspect-ratio: 259 / 172;
    border-radius: var(--default-radius);
    overflow: hidden !important;
    opacity: 0;
    transform: scale(0.95);
    transition: all 0.5s ease-out;
    transition-delay: ${(props) => props.delay}ms;

    &.visible {
        opacity: 1;
        transform: scale(1);
    }

    &:nth-child(10n + 2) {
        grid-column: 3 / 4;
    }

    &:nth-child(10n + 4),
    &:nth-child(10n + 10) {
        grid-column: 6 / 7;
    }

    &:nth-child(10n + 5) {
        grid-column: 2 / 3;
    }

    &:nth-child(10n + 7) {
        grid-column: 5 / 6;
    }

    &:nth-child(10n + 1),
    &:nth-child(10n + 8) {
        grid-column: 1 / 2;
    }

    &:nth-child(10n + 9) {
        grid-column: 4 / 5;
    }

    @media (max-width: 1348px) {
        grid-column: auto !important;

        &:nth-child(6n + 2) {
            grid-column: 2 / 3;
        }

        &:nth-child(6n + 3) {
            grid-column: 3 / 4;
        }

        &:nth-child(6n + 4),
        &:nth-child(6n + 6) {
            grid-column: 1 / 2;
        }

        &:nth-child(6n + 5) {
            grid-column: 2 / 3;
        }
    }

    @media (max-width: 734px) {
        grid-column: auto !important;
    }

    &:hover {
        cursor: url(${(props) => props.theme.cursor}), auto;
    }
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: 0.45s opacity cubic-bezier(0.55, 0, 0.1, 1);

    &.Ldd {
        opacity: 1;
    }
`;

const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--default-radius);
    opacity: 0;
    transition: 0.45s opacity cubic-bezier(0.55, 0, 0.1, 1);

    &.Ldd {
        opacity: 1;
    }
`;

const AboutImageWrapper = styled.div`
    width: 6.4rem;
    height: auto;

    img {
        width: 100%;
        height: auto;
        display: block;
    }
`;

const Intro: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleImages, setVisibleImages] = useState<number[]>([]);
    const [cursor, setCursor] = useState<string>('auto');

    const emojiCursors = useMemo(() => {
        const emojis = ['🌙', '🎙️', '📈', '🎇', '⚾️', '📸', '🎈', '🐤', '😎'];
        return emojis.map((emoji) => {
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.font = '28px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(emoji, 16, 16);
            }
            return canvas.toDataURL();
        });
    }, []);

    useEffect(() => {
        setIsVisible(true);

        const totalImages = 9;
        let currentIndex = -1;

        const intervalId = setInterval(() => {
            setVisibleImages((prev) => {
                return prev.includes(currentIndex) ? prev : [...prev, currentIndex];
            });
            currentIndex++;
            if (currentIndex >= totalImages) {
                clearInterval(intervalId);
            }
        }, 200);

        return () => clearInterval(intervalId);
    }, []);

    const handleMouseEnter = (index: number) => {
        setCursor(emojiCursors[index % emojiCursors.length]);
    };

    const handleMouseLeave = () => {
        setCursor('auto');
    };

    return (
        <IntroContainer>
            <Title className={isVisible ? 'visible' : ''}>
                About
                <AboutImageWrapper>
                    <img src="/about/about_book.webp" alt="About Book" />
                </AboutImageWrapper>
            </Title>

            <ImageGrid>
                {Array.from({ length: 9 }).map((_, index) => (
                    <ImageWrapper
                        key={index}
                        delay={index * 200}
                        className={visibleImages.includes(index) ? 'visible' : ''}
                        theme={{ cursor }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {index === 3 || index === 8 ? (
                            <Video
                                src={`/about/intro_${index + 1}.mp4`}
                                className={visibleImages.includes(index) ? 'Ldd' : ''}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        ) : (
                            <Image
                                src={`/about/intro_${index + 1}.webp`}
                                alt={`나의 기록 이미지 ${index + 1}`}
                                className={visibleImages.includes(index) ? 'Ldd' : ''}
                            />
                        )}
                    </ImageWrapper>
                ))}
            </ImageGrid>
        </IntroContainer>
    );
};

export default Intro;
