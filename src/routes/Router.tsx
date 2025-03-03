import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Project from '../pages/Project';
import ProjectDetail from '../pages/detail/ProjectDetail';
import About from '../pages/About';
import Layout from './Layout';

export default function Router() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/project/:category" element={<Project />} />
                    <Route path="/project/:category/:id" element={<ProjectDetail />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
