import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import WebFXLayout from './components/WebFXLayout/WebFXLayout';
import LandingPage from './pages/LandingPage';

// Web FX Pages
import Explore from './pages/web-fx/Explore';
import Gallery from './pages/web-fx/Gallery';
import Collections from './pages/web-fx/Collections';
import TypographyDemo from './pages/web-fx/TypographyDemo';

// We will create these pages in subsequent steps
import ViewContainers from './pages/components/ViewContainers'
import FormElements from './pages/components/FormElements'
import BasicContent from './pages/components/BasicContent'
import SkylineFeatures from './pages/advanced/SkylineFeatures'
import GesturesAndAnimation from './pages/advanced/GesturesAndAnimation'
import InteractiveAPIs from './pages/hardware/InteractiveAPIs'

// V2 Standard Components
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

                    {/* 1. UI Components */}
                    <Route path="ui-components/rich-text" element={<RichtextDemo />} />
                    <Route path="ui-components/premium-cards" element={<PremiumCardDemo />} />
                    <Route path="ui-components/swipe-tabs" element={<SwipeTabCardsDemo />} />

                    {/* 2. Data Display & Feedback */}
                    <Route path="data-display/timeline" element={<TimelineDemo />} />

                    {/* 3. Navigation & Layout */}
                    <Route path="navigation/navbar" element={<NavigationLayoutDemo />} />
                    <Route path="navigation/country-picker" element={<CountryPickerDemo />} />

                    {/* 4. Advanced Form & Controls */}
                    <Route path="advanced-form/captcha" element={<AdvancedFormDemo />} />

                    {/* 5. Map & LBS */}
                    <Route path="map-lbs/markers" element={<MapLBSDemo />} />

                    {/* 6. Canvas & Graphic */}
                    <Route path="canvas/poster" element={<CanvasGraphicDemo />} />

                    {/* 7. Ecosystem & Permissions */}
                    <Route path="ecosystem/login" element={<EcosystemPermissionsDemo />} />
                    <Route path="ecosystem/floating-cs" element={<FloatingCSDemo />} />

                    {/* 8. Performance & UX Patterns */}
                    <Route path="performance/pull-refresh" element={<PerformanceUXDemo />} />

                    {/* Legacy routes for now to keep them working until refactored */}
                    <Route path="components/view-containers" element={<ViewContainers />} />
                    <Route path="components/form-elements" element={<FormElements />} />
                    <Route path="components/basic-content" element={<BasicContent />} />
                    <Route path="advanced/skyline-features" element={<SkylineFeatures />} />
                    <Route path="advanced/gestures-animation" element={<GesturesAndAnimation />} />
                    <Route path="hardware/interactive-apis" element={<InteractiveAPIs />} />
                </Route>
                
                {/* Web FX Gallery Domain */}
                <Route path="/web-fx" element={<WebFXLayout />}>
                    <Route index element={<Navigate to="/web-fx/explore" replace />} />
                    <Route path="explore" element={<Explore />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="collections" element={<Collections />} />
                    <Route path="typography" element={<TypographyDemo />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
