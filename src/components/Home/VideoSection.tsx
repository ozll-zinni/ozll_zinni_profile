import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoWrapper = styled.div`
    width: 92%;
    height: 45rem;
    margin: 6rem auto 11rem;
    border-radius: var(--default-radius);
    overflow: hidden;
    background: #000;
    transition: width 0.8s ease, height 0.8s ease, border-radius 0.8s ease;

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media only screen and (max-width: 734px) {
        margin: 4rem auto 5rem;
    }
`;

const VideoSection: React.FC = () => {
    const videoRef = useRef<HTMLDivElement>(null);
    const videoElementRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoEl = videoElementRef.current;
        const wrapperEl = videoRef.current;

        if (!videoEl || !wrapperEl) return;

        const adjustVideoSize = () => {
            if (!videoEl.videoWidth || !videoEl.videoHeight) return;

            const naturalAspectRatio = videoEl.videoWidth / videoEl.videoHeight;
            const containerWidth = window.innerWidth * 0.9;
            const newHeight = containerWidth / naturalAspectRatio;

            wrapperEl.style.height = `${newHeight}px`;
        };

        const playVideo = () => {
            videoEl.play().catch((err) => console.warn('Video autoplay blocked by browser:', err));
        };

        videoEl.muted = true;
        videoEl.playsInline = true;
        videoEl.autoplay = true;

        videoEl.addEventListener('loadedmetadata', adjustVideoSize);
        videoEl.addEventListener('canplay', playVideo);
        window.addEventListener('resize', adjustVideoSize);

        const isMobile = window.innerWidth <= 734;
        const trigger = ScrollTrigger.create({
            trigger: wrapperEl,
            start: isMobile ? 'top 90%' : 'top center',
            end: 'bottom center',
            scrub: 1.3,
            onUpdate: (self) => {
                if (wrapperEl) {
                    const isFullSize = self.progress >= 0.5;

                    if (isFullSize) {
                        wrapperEl.style.width = '100%';
                        wrapperEl.style.borderRadius = '0';
                    } else {
                        wrapperEl.style.width = '92%';
                        wrapperEl.style.borderRadius = 'var(--default-radius)';
                    }

                    const naturalAspectRatio = videoEl.videoWidth / videoEl.videoHeight;
                    const containerWidth = window.innerWidth * (isFullSize ? 1 : 0.9);
                    const newHeight = containerWidth / naturalAspectRatio;

                    wrapperEl.style.height = `${newHeight}px`;
                }
            },
            onLeave: () => {
                if (wrapperEl) {
                    wrapperEl.style.width = '100%';
                    wrapperEl.style.borderRadius = '0';
                }
            },
            onEnterBack: () => {
                if (wrapperEl) {
                    wrapperEl.style.width = '92%';
                    wrapperEl.style.borderRadius = 'var(--default-radius)';
                    adjustVideoSize();
                }
            },
        });

        return () => {
            trigger.kill();
            videoEl.removeEventListener('loadedmetadata', adjustVideoSize);
            videoEl.removeEventListener('canplay', playVideo);
            window.removeEventListener('resize', adjustVideoSize);
        };
    }, []);

    return (
        <VideoWrapper ref={videoRef}>
            <video ref={videoElementRef} src="/home/main_video_2.mp4" muted loop playsInline autoPlay></video>
        </VideoWrapper>
    );
};

export default VideoSection;
