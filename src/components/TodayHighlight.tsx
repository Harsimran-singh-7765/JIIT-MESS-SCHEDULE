import React from 'react';
import { timetableData } from '../data/timetable';
import { getCurrentDay } from '../utils/dateUtils';
import { getCurrentMealTime, getNextMealTime } from '../utils/mealTimeUtils';

export function TodayHighlight() {
  const currentDay = getCurrentDay();
  const todayMeals = timetableData[currentDay];
  const currentMealTime = getCurrentMealTime();
  const nextMealTime = currentMealTime || getNextMealTime();
  const nextMeal = todayMeals[nextMealTime.toLowerCase() as keyof typeof todayMeals];

  return (
    <div className="max-w-md mx-auto mb-12 text-center">
      <div className="group relative bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <p className="text-blue-400 mb-2">Next Meal</p>
          <p className="text-xl font-semibold">
            {nextMeal}{' '}
            <span className="text-sm text-slate-400">({nextMealTime})</span>
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Served during{' '}
            <span className="text-blue-300">{nextMealTime.toLowerCase()}</span>{' '}
            time!
          </p>
        </div>
      </div>
    </div>
  );
}