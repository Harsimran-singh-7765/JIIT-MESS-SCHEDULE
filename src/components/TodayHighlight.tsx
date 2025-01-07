import React from 'react';
import { timetableData } from '../data/timetable';
import { getCurrentDay } from '../utils/dateUtils';
import { getCurrentMealTime, getNextMealTime } from '../utils/mealTimeUtils';
import { findGoodDish } from '../utils/menuUtils';

export function TodayHighlight() {
  const currentDay = getCurrentDay();
  const todayMeals = timetableData[currentDay];
  const currentMealTime = getCurrentMealTime();
  const nextMealTime = currentMealTime || getNextMealTime();
  const nextMeal = todayMeals[nextMealTime.toLowerCase() as keyof typeof todayMeals];

  return (
    <div className="max-w-md mx-auto mb-12 text-center">
      <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
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
  );
}