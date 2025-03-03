import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Common/Navigation';
import GithubBtn from '../components/Common/GithubBtn';
import Footer from '../components/Common/Footer';

const Layout: React.FC = () => {
    return (
        <>
            <Navigation />
            <GithubBtn />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
