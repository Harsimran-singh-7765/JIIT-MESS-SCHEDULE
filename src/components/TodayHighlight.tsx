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
  const goodDish = findGoodDish(todayMeals, nextMealTime);

  return (
    <div className="max-w-md mx-auto mb-12 text-center">
      <div
        className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20
              hover:rotate-5 hover:-translate-y-2 hover:shadow-[0px_0px_20px_5px_rgba(0,200,255,0.8)] 
        hover:border-blue-400
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-blue-500 before:via-purple-500 before:to-pink-500 
        before:blur-[50px] before:opacity-0 hover:before:opacity-100 
        before:transition-all before:duration-300 before:z-[-1]
      "
      >
        <p className="text-blue-400 mb-2">Next Meal</p>
        <p className="text-xl font-semibold">
          {goodDish}{' '}
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