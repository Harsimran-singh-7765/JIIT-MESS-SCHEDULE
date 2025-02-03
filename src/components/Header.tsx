import React, { useState } from 'react';
import { Clock, ChevronDown, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(true);

  const scrollToMess = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <Clock className="w-12 h-12 text-blue-400 mr-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          MESS SCHEDULE
        </h1>
      </div>
      
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
        >
          Quick Navigation
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-slate-700 z-50">
            <button
              onClick={() => scrollToMess('jiit-62')}
              className="w-full text-left px-4 py-2 hover:bg-slate-700 rounded-t-lg"
            >
              JIIT-62 Schedule
            </button>
            <button
              onClick={() => scrollToMess('jiit-128')}
              className="w-full text-left px-4 py-2 hover:bg-slate-700 rounded-b-lg"
            >
              JIIT-128 Schedule
            </button>
          </div>
        )}
      </div>

      {/* Floating Suggestion Box */}
      {showSuggestion && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-purple-900 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <span>Refresh Please (specially  on Mondays)</span>
            <button onClick={() => setShowSuggestion(false)} className="text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
