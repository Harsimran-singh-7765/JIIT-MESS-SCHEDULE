import React, { Suspense, lazy, useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { saveDataToCache, loadDataFromCache, isOnline } from './utils/offlineStorage';

const Header = lazy(() => import('./components/Header').then(module => ({ default: module.Header })));
const SpecialMenu = lazy(() => import('./components/SpecialMenu').then(module => ({ default: module.SpecialMenu })));
const TodayHighlight = lazy(() => import('./components/TodayHighlight').then(module => ({ default: module.TodayHighlight })));
const TimetableGrid = lazy(() => import('./components/TimetableGrid').then(module => ({ default: module.TimetableGrid })));
const Mess128Schedule = lazy(() => import('./components/Mess128Schedule').then(module => ({ default: module.Mess128Schedule })));
const Credits = lazy(() => import('./components/Credits').then(module => ({ default: module.Credits })));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(!isOnline());

  useEffect(() => {
    // Save data to cache when online
    if (isOnline()) {
      saveDataToCache();
    }

    // Handle online/offline status
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {isOffline && (
        <div className="bg-yellow-600/20 text-yellow-200 px-4 py-2 text-center">
          You are currently offline. Showing cached schedule.
        </div>
      )}
      <div className="bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="container mx-auto px-4 py-16">
          <Suspense fallback={<LoadingScreen />}>
            <Header />
            <SpecialMenu />
            <TodayHighlight />
            <div id="jiit-62" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                JIIT Mess Schedule
              </h2>
              <TimetableGrid />
            </div>
            <Mess128Schedule />
            <Credits />
          </Suspense>
        </div>
      </div>
    </div>
  );
}