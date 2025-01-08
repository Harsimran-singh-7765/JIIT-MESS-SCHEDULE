import React from 'react';
import { timetableData } from '../data/timetable';
import { timetable128Data } from '../data/timetable128';
import { getCurrentDay } from '../utils/dateUtils';
import { getCurrentMealTime, getNextMealTime } from '../utils/mealTimeUtils';

export function TodayHighlight() {
  const currentDay = getCurrentDay();
  const todayMeals = timetableData[currentDay];
  const currentMealTime = getCurrentMealTime();
  const nextMealTime = currentMealTime || getNextMealTime();
  const nextMeal = todayMeals[nextMealTime.toLowerCase() as keyof typeof todayMeals];
  
  const isLunchTime = new Date().getHours() >= 9 && new Date().getHours() < 14;
  const lunch128 = currentDay !== 'Sunday' ? timetable128Data[currentDay] : null;

  return (
    <div className="max-w-3xl mx-auto mb-12 space-y-4">
      <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
        <p className="text-blue-400 mb-2">Next Meal at JIIT-62</p>
        <p className="text-xl font-semibold">
          {nextMeal}{' '}
          <span className="text-sm text-slate-400">({nextMealTime})</span>
        </p>
      </div>
      
      {isLunchTime && lunch128 && (
        <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
          <p className="text-purple-400 mb-2">Today's Lunch at JIIT-128</p>
          <p className="text-xl font-semibold">{lunch128}</p>
        </div>
      )}
    </div>
  );
}