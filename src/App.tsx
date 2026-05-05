import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/common/ScrollToTop';
import { PageTransition } from './components/common/PageTransition';
import { ToastProvider } from './components/ui/Toast';
import { PageSkeleton } from './components/ui/Skeleton';
import { ROUTES, LEGACY_REDIRECTS } from './lib/routes';
import './index.css';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Cases = lazy(() => import('./pages/Cases').then(m => ({ default: m.Cases })));
const Pricing = lazy(() => import('./pages/Pricing').then(m => ({ default: m.Pricing })));
const Resources = lazy(() => import('./pages/Resources').then(m => ({ default: m.Resources })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Soluciones = lazy(() => import('./pages/Soluciones').then(m => ({ default: m.Soluciones })));
const Product = lazy(() => import('./pages/Product').then(m => ({ default: m.Product })));
const Diagnostico = lazy(() => import('./pages/Diagnostico').then(m => ({ default: m.Diagnostico })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

function App() {
    return (
        <Router>
            <ScrollToTop />
            <ToastProvider>
                <Layout>
                    <Suspense fallback={<PageSkeleton />}>
                        <PageTransition>
                            <Routes>
                            <Route path={ROUTES.home} element={<Home />} />
                            <Route path={ROUTES.soluciones} element={<Soluciones />} />
                            <Route path={ROUTES.productos} element={<Product />} />
                            <Route path={ROUTES.servicios} element={<Services />} />
                            <Route path={ROUTES.casos} element={<Cases />} />
                            <Route path={ROUTES.precios} element={<Pricing />} />
                            <Route path={ROUTES.recursos} element={<Resources />} />
                            <Route path={ROUTES.contacto} element={<Contact />} />
                            <Route path={ROUTES.diagnostico} element={<Diagnostico />} />

                            {LEGACY_REDIRECTS.map(([from, to]) => (
                                <Route key={from} path={from} element={<Navigate to={to} replace />} />
                            ))}

                            <Route path="*" element={<NotFound />} />
                            </Routes>
                        </PageTransition>
                    </Suspense>
                </Layout>
            </ToastProvider>
        </Router>
    );
}

export default App;
