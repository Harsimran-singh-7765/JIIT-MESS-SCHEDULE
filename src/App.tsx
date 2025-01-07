import React from 'react';
import { Header } from './components/Header';
import { SpecialMenu } from './components/SpecialMenu';
import { TodayHighlight } from './components/TodayHighlight';
import { TimetableGrid } from './components/TimetableGrid';
import { ReviewSection } from './components/ReviewSection';
import { Credits } from './components/Credits';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="container mx-auto px-4 py-16">
          <Header />
          <SpecialMenu />
          <TodayHighlight />
          <TimetableGrid />
          <ReviewSection />
          <Credits />
        </div>
      </div>
    </div>
  );
}