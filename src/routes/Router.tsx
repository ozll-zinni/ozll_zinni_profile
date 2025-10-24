import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Project = lazy(() => import('../pages/Project'));
const About = lazy(() => import('../pages/About'));
const ProjectDetail = lazy(() => import('../pages/detail/ProjectDetail'));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{padding: 24}}>Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
