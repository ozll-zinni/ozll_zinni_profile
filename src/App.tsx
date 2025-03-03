import React from 'react';
import Router from './routes/Router';
import GlobalStyle from './assets/styles/GlobalStyle';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
};

export default App;
