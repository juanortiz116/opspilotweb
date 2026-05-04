import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/common/ScrollToTop';
import './index.css';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Cases = lazy(() => import('./pages/Cases').then(m => ({ default: m.Cases })));
const Pricing = lazy(() => import('./pages/Pricing').then(m => ({ default: m.Pricing })));
const Resources = lazy(() => import('./pages/Resources').then(m => ({ default: m.Resources })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Demo = lazy(() => import('./pages/Demo').then(m => ({ default: m.Demo })));
const Soluciones = lazy(() => import('./pages/Soluciones').then(m => ({ default: m.Soluciones })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Suspense fallback={null}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/soluciones" element={<Soluciones />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/cases" element={<Cases />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/product" element={<Navigate to="/soluciones" replace />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Layout>
        </Router>
    );
}

export default App;
