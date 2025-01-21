import React from 'react';
import { timetable128Data } from '../data/timetable128';
import { getCurrentDay } from '../utils/dateUtils';

export function Mess128Schedule() {
  const currentDay = getCurrentDay();

  return (
    <div id="jiit-128" className="mt-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        JIIT-128 Mess Schedule
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.entries(timetable128Data).map(([day, menu]) => (
          <div
            key={day}
            className={`
              relative bg-gradient-to-br from-slate-800 to-slate-900 
              rounded-xl p-6 shadow-xl transition-all duration-300
              border ${day === currentDay ? 'border-purple-500 scale-105' : 'border-slate-700'}
              hover:scale-105 hover:-translate-y-2 
              hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]
              hover:border-purple-400
            `}
          >
            <h3 className={`
              text-xl font-bold mb-4
              ${day === currentDay ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500' : 'text-white'}
            `}>
              {day}
              {day === currentDay && <span className="ml-2 text-sm text-purple-400">(Today)</span>}
            </h3>
            
            <div className="space-y-2">
              <p className="text-sm text-purple-400">Lunch (9:00 AM - 2:00 PM)</p>
              <p className="text-white">{menu}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}