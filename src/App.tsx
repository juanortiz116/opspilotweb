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
const Soluciones = lazy(() => import('./pages/Soluciones').then(m => ({ default: m.Soluciones })));
const Product = lazy(() => import('./pages/Product').then(m => ({ default: m.Product })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Suspense fallback={null}>
                    <Routes>
                        {/* Rutas canónicas en español */}
                        <Route path="/" element={<Home />} />
                        <Route path="/soluciones" element={<Soluciones />} />
                        <Route path="/servicios" element={<Services />} />
                        <Route path="/productos" element={<Product />} />
                        <Route path="/casos" element={<Cases />} />
                        <Route path="/precios" element={<Pricing />} />
                        <Route path="/recursos" element={<Resources />} />
                        <Route path="/contacto" element={<Contact />} />

                        {/* Redirects desde URLs antiguas en inglés (red de seguridad client-side) */}
                        <Route path="/services" element={<Navigate to="/servicios" replace />} />
                        <Route path="/cases" element={<Navigate to="/casos" replace />} />
                        <Route path="/pricing" element={<Navigate to="/precios" replace />} />
                        <Route path="/resources" element={<Navigate to="/recursos" replace />} />
                        <Route path="/contact" element={<Navigate to="/contacto" replace />} />
                        <Route path="/product" element={<Navigate to="/productos" replace />} />
                        <Route path="/demo" element={<Navigate to="/contacto" replace />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Layout>
        </Router>
    );
}

export default App;
