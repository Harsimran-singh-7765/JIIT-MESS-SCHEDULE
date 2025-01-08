import React from 'react';
import { MealTime } from '../types/timetable';
import { Coffee, Sun, Moon } from 'lucide-react';

interface TimetableCardProps {
  day: string;
  meals: MealTime;
  isToday: boolean;
}

export function TimetableCard({ day, meals, isToday }: TimetableCardProps) {
  return (
    <div
      className={`
        group
        relative bg-gradient-to-br from-slate-800 to-slate-900 
        rounded-xl p-6 shadow-xl 
        transform transition-all duration-300 ease-out
        border ${isToday ? 'border-blue-500 scale-105' : 'border-slate-700'}
        hover:scale-105 hover:-translate-y-2 
        hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
        hover:border-blue-400
        cursor-pointer
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <h3
          className={`
            text-2xl font-bold mb-4
            ${isToday ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500' : 'text-white'}
          `}
        >
          {day}
          {isToday && <span className="ml-2 text-sm text-blue-400">(Today)</span>}
        </h3>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Coffee className="w-5 h-5 text-yellow-400" />
            <div>
              <p className="text-sm text-slate-400">Breakfast</p>
              <p className="text-white">{meals.breakfast}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Sun className="w-5 h-5 text-orange-400" />
            <div>
              <p className="text-sm text-slate-400">Lunch</p>
              <p className="text-white">{meals.lunch}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Moon className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-slate-400">Dinner</p>
              <p className="text-white">{meals.dinner}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}