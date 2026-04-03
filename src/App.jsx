import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import WebFXLayout from './components/WebFXLayout/WebFXLayout';
import LandingPage from './pages/LandingPage';

// Growth Loop Pages
import GrowthLoopLayout from './components/GrowthLoopLayout/GrowthLoopLayout';
import GrowthLoopOverview from './pages/growth-loop/GrowthLoopOverview';
import GrowthLoopOutline from './pages/growth-loop/GrowthLoopOutline';
import GrowthLoopLifecycle from './pages/growth-loop/GrowthLoopLifecycle';
import GrowthLoopKeywordMap from './pages/growth-loop/GrowthLoopKeywordMap';
import ContentPage from './pages/growth-loop/ContentPage';

// Web FX Pages
import WebFXOverview from './pages/web-fx/WebFXOverview';
import Explore from './pages/web-fx/Explore';
import Gallery from './pages/web-fx/Gallery';
import TypographyDemo from './pages/web-fx/TypographyDemo';
import VisualStyles from './pages/web-fx/VisualStyles';
import IndustryStyles from './pages/web-fx/IndustryStyles';
import WeChatButtonDemo from './pages/web-fx/WeChatButtonDemo';

// Mini Program — Legacy
import ViewContainers from './pages/components/ViewContainers'
import FormElements from './pages/components/FormElements'
import BasicContent from './pages/components/BasicContent'
import SkylineFeatures from './pages/advanced/SkylineFeatures'
import GesturesAndAnimation from './pages/advanced/GesturesAndAnimation'
import InteractiveAPIs from './pages/hardware/InteractiveAPIs'

// Mini Program — V2
import RichtextDemo from './pages/ui-components/RichtextDemo'
import PremiumCardDemo from './pages/ui-components/PremiumCardDemo'
import SwipeTabCardsDemo from './pages/ui-components/SwipeTabCardsDemo'
import TimelineDemo from './pages/data-display/TimelineDemo'
import NavigationLayoutDemo from './pages/navigation/NavigationLayoutDemo'
import CountryPickerDemo from './pages/navigation/CountryPickerDemo'
import AdvancedFormDemo from './pages/advanced-form/AdvancedFormDemo'
import MapLBSDemo from './pages/map-lbs/MapLBSDemo'
import CanvasGraphicDemo from './pages/canvas/CanvasGraphicDemo'
import EcosystemPermissionsDemo from './pages/ecosystem/EcosystemPermissionsDemo'
import FloatingCSDemo from './pages/ecosystem/FloatingCSDemo'
import PerformanceUXDemo from './pages/performance/PerformanceUXDemo'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />

                {/* Mini Program Lab Domain */}
                <Route path="/mini-program" element={<Layout />}>
                    <Route index element={<Navigate to="/mini-program/components/view-containers" replace />} />

                    {/* UI Components */}
                    <Route path="ui-components/rich-text" element={<RichtextDemo />} />
                    <Route path="ui-components/premium-cards" element={<PremiumCardDemo />} />
                    <Route path="ui-components/swipe-tabs" element={<SwipeTabCardsDemo />} />

                    {/* Data & Navigation */}
                    <Route path="data-display/timeline" element={<TimelineDemo />} />
                    <Route path="navigation/navbar" element={<NavigationLayoutDemo />} />
                    <Route path="navigation/country-picker" element={<CountryPickerDemo />} />

                    {/* Advanced Form */}
                    <Route path="advanced-form/captcha" element={<AdvancedFormDemo />} />

                    {/* Media & Graphics */}
                    <Route path="map-lbs/markers" element={<MapLBSDemo />} />
                    <Route path="canvas/poster" element={<CanvasGraphicDemo />} />

                    {/* Ecosystem */}
                    <Route path="ecosystem/login" element={<EcosystemPermissionsDemo />} />
                    <Route path="ecosystem/floating-cs" element={<FloatingCSDemo />} />
                    <Route path="hardware/interactive-apis" element={<InteractiveAPIs />} />

                    {/* Advanced Engine */}
                    <Route path="performance/pull-refresh" element={<PerformanceUXDemo />} />
                    <Route path="advanced/skyline-features" element={<SkylineFeatures />} />
                    <Route path="advanced/gestures-animation" element={<GesturesAndAnimation />} />

                    {/* UI Components (original) */}
                    <Route path="components/view-containers" element={<ViewContainers />} />
                    <Route path="components/form-elements" element={<FormElements />} />
                    <Route path="components/basic-content" element={<BasicContent />} />
                </Route>

                {/* Web FX Dashboard Domain */}
                <Route path="/web-fx" element={<WebFXLayout />}>
                    <Route index element={<WebFXOverview />} />
                    <Route path="explore" element={<Explore />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="typography" element={<TypographyDemo />} />
                    <Route path="visual-styles" element={<VisualStyles />} />
                    <Route path="industry-styles" element={<IndustryStyles />} />
                    <Route path="wechat-buttons" element={<WeChatButtonDemo />} />
                </Route>

                {/* Growth Loop Learning Domain */}
                <Route path="/growth-loop" element={<GrowthLoopLayout />}>
                    <Route index element={<GrowthLoopOverview />} />
                    <Route path="outline" element={<GrowthLoopOutline />} />
                    <Route path="lifecycle" element={<GrowthLoopLifecycle />} />
                    <Route path="keyword-map" element={<GrowthLoopKeywordMap />} />
                    <Route path="roadmap" element={<ContentPage slug="roadmap" />} />
                    <Route path="paradigm-shift" element={<ContentPage slug="paradigm-shift" />} />
                    <Route path="loop-anatomy" element={<ContentPage slug="loop-anatomy" />} />
                    <Route path="glossary" element={<ContentPage slug="glossary" />} />
                    <Route path="design-canvas" element={<ContentPage slug="design-canvas" />} />
                    <Route path="business-canvas" element={<ContentPage slug="business-canvas" />} />
                    <Route path="experiment" element={<ContentPage slug="experiment-template" />} />
                    <Route path="prompts-learning" element={<ContentPage slug="prompts-learning" />} />
                    <Route path="prompts-analysis" element={<ContentPage slug="prompts-analysis" />} />
                    <Route path="prompts-practice" element={<ContentPage slug="prompts-practice" />} />
                    <Route path="prompts-reflection" element={<ContentPage slug="prompts-reflection" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
