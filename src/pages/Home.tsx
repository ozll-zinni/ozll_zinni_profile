import styled from 'styled-components';
import GlobalStyle from '../assets/styles/GlobalStyle';
import TitleSection from '../components/Home/TitleSection';
// import VideoSection from '../components/Home/VideoSection';
import OverviewSection from '../components/Home/OverviewSection';

const HomeWrap = styled.section`
    width: 100%;
    height: auto;
    position: relative;
`;

const ContentWrap = styled.section`
    width: 100%;
    min-height: 100vh;
    padding-top: 4vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Home: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <HomeWrap>
                <ContentWrap>
                    <TitleSection />
                    {/* <VideoSection /> */}
                    <OverviewSection />
                </ContentWrap>
            </HomeWrap>
        </>
    );
};

export default Home;
