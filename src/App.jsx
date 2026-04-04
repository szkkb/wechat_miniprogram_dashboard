import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MobileTabBar from './components/Common/MobileTabBar';

const Layout = lazy(() => import('./components/Layout/Layout'));
const WebFXLayout = lazy(() => import('./components/WebFXLayout/WebFXLayout'));
const GrowthLoopLayout = lazy(() => import('./components/GrowthLoopLayout/GrowthLoopLayout'));
const LandingPage = lazy(() => import('./pages/LandingPage'));

// Growth Loop Pages
const GrowthLoopOverview = lazy(() => import('./pages/growth-loop/GrowthLoopOverview'));
const GrowthLoopOutline = lazy(() => import('./pages/growth-loop/GrowthLoopOutline'));
const GrowthLoopLifecycle = lazy(() => import('./pages/growth-loop/GrowthLoopLifecycle'));
const GrowthLoopKeywordMap = lazy(() => import('./pages/growth-loop/GrowthLoopKeywordMap'));
const ContentPage = lazy(() => import('./pages/growth-loop/ContentPage'));

// Web FX Pages
const WebFXOverview = lazy(() => import('./pages/web-fx/WebFXOverview'));
const Explore = lazy(() => import('./pages/web-fx/Explore'));
const Gallery = lazy(() => import('./pages/web-fx/Gallery'));
const TypographyDemo = lazy(() => import('./pages/web-fx/TypographyDemo'));
const VisualStyles = lazy(() => import('./pages/web-fx/VisualStyles'));
const IndustryStyles = lazy(() => import('./pages/web-fx/IndustryStyles'));
const WeChatButtonDemo = lazy(() => import('./pages/web-fx/WeChatButtonDemo'));

// Mini Program — Legacy
const ViewContainers = lazy(() => import('./pages/components/ViewContainers'));
const FormElements = lazy(() => import('./pages/components/FormElements'));
const BasicContent = lazy(() => import('./pages/components/BasicContent'));
const SkylineFeatures = lazy(() => import('./pages/advanced/SkylineFeatures'));
const GesturesAndAnimation = lazy(() => import('./pages/advanced/GesturesAndAnimation'));
const InteractiveAPIs = lazy(() => import('./pages/hardware/InteractiveAPIs'));

// Mini Program — V2
const RichtextDemo = lazy(() => import('./pages/ui-components/RichtextDemo'));
const PremiumCardDemo = lazy(() => import('./pages/ui-components/PremiumCardDemo'));
const SwipeTabCardsDemo = lazy(() => import('./pages/ui-components/SwipeTabCardsDemo'));
const TimelineDemo = lazy(() => import('./pages/data-display/TimelineDemo'));
const NavigationLayoutDemo = lazy(() => import('./pages/navigation/NavigationLayoutDemo'));
const CountryPickerDemo = lazy(() => import('./pages/navigation/CountryPickerDemo'));
const AdvancedFormDemo = lazy(() => import('./pages/advanced-form/AdvancedFormDemo'));
const MapLBSDemo = lazy(() => import('./pages/map-lbs/MapLBSDemo'));
const CanvasGraphicDemo = lazy(() => import('./pages/canvas/CanvasGraphicDemo'));
const EcosystemPermissionsDemo = lazy(() => import('./pages/ecosystem/EcosystemPermissionsDemo'));
const FloatingCSDemo = lazy(() => import('./pages/ecosystem/FloatingCSDemo'));
const PerformanceUXDemo = lazy(() => import('./pages/performance/PerformanceUXDemo'));

const loadingShellStyle = {
    minHeight: '40vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    color: '#64748b',
    fontSize: '0.95rem',
};

function RouteFallback() {
    return (
        <div style={loadingShellStyle} role="status" aria-live="polite">
            Loading page...
        </div>
    );
}

function renderLazy(Component, props = {}) {
    return (
        <Suspense fallback={<RouteFallback />}>
            <Component {...props} />
        </Suspense>
    );
}

function App() {
    return (
        <BrowserRouter>
            <MobileTabBar />
            <Routes>
                <Route path="/" element={renderLazy(LandingPage)} />

                {/* Mini Program Lab Domain */}
                <Route path="/mini-program" element={renderLazy(Layout)}>
                    <Route index element={<Navigate to="/mini-program/components/view-containers" replace />} />

                    {/* UI Components */}
                    <Route path="ui-components/rich-text" element={renderLazy(RichtextDemo)} />
                    <Route path="ui-components/premium-cards" element={renderLazy(PremiumCardDemo)} />
                    <Route path="ui-components/swipe-tabs" element={renderLazy(SwipeTabCardsDemo)} />

                    {/* Data & Navigation */}
                    <Route path="data-display/timeline" element={renderLazy(TimelineDemo)} />
                    <Route path="navigation/navbar" element={renderLazy(NavigationLayoutDemo)} />
                    <Route path="navigation/country-picker" element={renderLazy(CountryPickerDemo)} />

                    {/* Advanced Form */}
                    <Route path="advanced-form/captcha" element={renderLazy(AdvancedFormDemo)} />

                    {/* Media & Graphics */}
                    <Route path="map-lbs/markers" element={renderLazy(MapLBSDemo)} />
                    <Route path="canvas/poster" element={renderLazy(CanvasGraphicDemo)} />

                    {/* Ecosystem */}
                    <Route path="ecosystem/login" element={renderLazy(EcosystemPermissionsDemo)} />
                    <Route path="ecosystem/floating-cs" element={renderLazy(FloatingCSDemo)} />
                    <Route path="hardware/interactive-apis" element={renderLazy(InteractiveAPIs)} />

                    {/* Advanced Engine */}
                    <Route path="performance/pull-refresh" element={renderLazy(PerformanceUXDemo)} />
                    <Route path="advanced/skyline-features" element={renderLazy(SkylineFeatures)} />
                    <Route path="advanced/gestures-animation" element={renderLazy(GesturesAndAnimation)} />

                    {/* UI Components (original) */}
                    <Route path="components/view-containers" element={renderLazy(ViewContainers)} />
                    <Route path="components/form-elements" element={renderLazy(FormElements)} />
                    <Route path="components/basic-content" element={renderLazy(BasicContent)} />
                </Route>

                {/* Web FX Dashboard Domain */}
                <Route path="/web-fx" element={renderLazy(WebFXLayout)}>
                    <Route index element={renderLazy(WebFXOverview)} />
                    <Route path="explore" element={renderLazy(Explore)} />
                    <Route path="gallery" element={renderLazy(Gallery)} />
                    <Route path="typography" element={renderLazy(TypographyDemo)} />
                    <Route path="visual-styles" element={renderLazy(VisualStyles)} />
                    <Route path="industry-styles" element={renderLazy(IndustryStyles)} />
                    <Route path="wechat-buttons" element={renderLazy(WeChatButtonDemo)} />
                </Route>

                {/* Growth Loop Learning Domain */}
                <Route path="/growth-loop" element={renderLazy(GrowthLoopLayout)}>
                    <Route index element={renderLazy(GrowthLoopOverview)} />
                    <Route path="outline" element={renderLazy(GrowthLoopOutline)} />
                    <Route path="lifecycle" element={renderLazy(GrowthLoopLifecycle)} />
                    <Route path="keyword-map" element={renderLazy(GrowthLoopKeywordMap)} />
                    <Route path="roadmap" element={renderLazy(ContentPage, { slug: 'roadmap' })} />
                    <Route path="paradigm-shift" element={renderLazy(ContentPage, { slug: 'paradigm-shift' })} />
                    <Route path="loop-anatomy" element={renderLazy(ContentPage, { slug: 'loop-anatomy' })} />
                    <Route path="glossary" element={renderLazy(ContentPage, { slug: 'glossary' })} />
                    <Route path="design-canvas" element={renderLazy(ContentPage, { slug: 'design-canvas' })} />
                    <Route path="business-canvas" element={renderLazy(ContentPage, { slug: 'business-canvas' })} />
                    <Route path="experiment" element={renderLazy(ContentPage, { slug: 'experiment-template' })} />
                    <Route path="prompts-learning" element={renderLazy(ContentPage, { slug: 'prompts-learning' })} />
                    <Route path="prompts-analysis" element={renderLazy(ContentPage, { slug: 'prompts-analysis' })} />
                    <Route path="prompts-practice" element={renderLazy(ContentPage, { slug: 'prompts-practice' })} />
                    <Route path="prompts-reflection" element={renderLazy(ContentPage, { slug: 'prompts-reflection' })} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
