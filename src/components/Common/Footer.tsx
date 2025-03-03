import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import VisuallyHidden from '../Common/VisuallyHidden';

const FooterWrap = styled.footer`
    width: 100%;
    padding: 2rem 1rem;
    position: relative;
`;

const Line = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: black;
`;

const Container = styled.div`
    max-width: var(--default-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const SocialLink = styled.a`
    position: relative;
    text-decoration: none;
    font-size: 1rem;
    color: black;
    display: inline-block;
    padding: 2px 0;

    &:hover {
        text-decoration: underline;
    }
`;

const MenuLink = styled(Link)`
    position: relative;
    text-decoration: none;
    font-size: 1rem;
    color: black;
    display: inline-flex;
    align-items: center;
    padding: 2px 0;

    span.emoji {
        margin-right: 0.5rem;
        line-height: 1;
    }

    .text-container {
        display: inline-block;
        position: relative;
        height: 1.2em;
        overflow: hidden;
    }

    .text {
        position: relative;
        display: inline-block;
        transform: translateY(0);
        transition: transform 0.55s ease;
        line-height: 1.2;
    }

    &:hover .text {
        transform: translateY(-100%);
    }

    .text::after {
        content: attr(data-hover);
        position: absolute;
        left: 0;
        top: 100%;
        line-height: 1.2;
    }
`;

const MenuContainer = styled.nav`
    display: flex;
    gap: 1rem;
    text-align: right;
    align-items: center;

    @media only screen and (max-width: 734px) {
        margin-top: 1rem;
    }
`;

const FooterBottom = styled.div`
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-end;

    p {
        font-size: var(--font-text-small);
        color: #666;
        margin: 0;
    }

    @media only screen and (max-width: 734px) {
        margin-top: 2rem;
        justify-content: flex-start;
    }
`;

const Footer: React.FC = () => {
    return (
        <FooterWrap>
            <Line />
            <VisuallyHidden>푸터영역</VisuallyHidden>
            <Container>
                <SocialContainer>
                    <SocialLink href="mailto:dpwls0454@naver.com" aria-label="이메일 주소: dpwls0454@naver.com">
                        dpwls0454@naver.com
                    </SocialLink>
                    <SocialLink
                        href="https://github.com/ozll-zinni"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="깃허브 주소: https://github.com/ozll-zinni"
                    >
                        https://github.com/ozll-zinni
                    </SocialLink>
                </SocialContainer>
                <MenuContainer aria-label="각페이지 링크들">
                    <MenuLink to="/" aria-label="Home으로 이동">
                        <span className="emoji">🏠</span>
                        <span className="text-container">
                            <span className="text" data-hover="Home">
                                Home
                            </span>
                        </span>
                    </MenuLink>
                    <MenuLink to="/project" aria-label="Project로 이동">
                        <span className="emoji">📂</span>
                        <span className="text-container">
                            <span className="text" data-hover="Project">
                                Project
                            </span>
                        </span>
                    </MenuLink>
                    <MenuLink to="/about" aria-label="About으로 이동">
                        <span className="emoji">🎁</span>
                        <span className="text-container">
                            <span className="text" data-hover="About">
                                About
                            </span>
                        </span>
                    </MenuLink>
                </MenuContainer>
                <FooterBottom>
                    <p>©2025 yejin. All Rights Reserved.</p>
                </FooterBottom>
            </Container>
        </FooterWrap>
    );
};

export default Footer;
