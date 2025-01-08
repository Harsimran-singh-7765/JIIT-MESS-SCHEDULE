import React, { Suspense, lazy, useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';

const Header = lazy(() => import('./components/Header').then(module => ({ default: module.Header })));
const SpecialMenu = lazy(() => import('./components/SpecialMenu').then(module => ({ default: module.SpecialMenu })));
const TodayHighlight = lazy(() => import('./components/TodayHighlight').then(module => ({ default: module.TodayHighlight })));
const TimetableGrid = lazy(() => import('./components/TimetableGrid').then(module => ({ default: module.TimetableGrid })));
const Credits = lazy(() => import('./components/Credits').then(module => ({ default: module.Credits })));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure loading screen shows for at least 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="container mx-auto px-4 py-16">
          <Suspense fallback={<LoadingScreen />}>
            <Header />
            <SpecialMenu />
            <TodayHighlight />
            <TimetableGrid />
            <Credits />
          </Suspense>
        </div>
      </div>
    </div>
  );
}