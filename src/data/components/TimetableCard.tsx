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
        relative bg-gradient-to-br from-slate-800 to-slate-900 
        rounded-xl p-6 shadow-xl 
        transition-all duration-300 
        border ${isToday ? 'border-blue-500' : 'border-slate-700'}
        ${isToday ? 'scale-105' : 'hover:scale-110'}
        hover:rotate-1 hover:-translate-y-2 hover:shadow-[0px_0px_20px_5px_rgba(0,200,255,0.8)] 
        hover:border-blue-400
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-blue-500 before:via-purple-500 before:to-pink-500 
        before:blur-[50px] before:opacity-0 hover:before:opacity-100 
        before:transition-all before:duration-300 before:z-[-1]
      `}
    >
      <h3
        className={`
          text-2xl font-bold mb-4
          ${
            isToday
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'
              : 'text-white'
          }
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
  );
}
