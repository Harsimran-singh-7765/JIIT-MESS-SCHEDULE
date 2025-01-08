import React from 'react';
import { Star } from 'lucide-react';
import { timetableData } from '../data/timetable';
import { getCurrentDay } from '../utils/dateUtils';
import { getSpecialItems } from '../utils/menuUtils';

export function SpecialMenu() {
  const currentDay = getCurrentDay();
  const todayMeals = timetableData[currentDay];
  
  const findMealType = (item: string) => {
    if (todayMeals.breakfast.includes(item)) return 'Breakfast';
    if (todayMeals.lunch.includes(item)) return 'Lunch';
    if (todayMeals.dinner.includes(item)) return 'Dinner';
    return '';
  };

  const specialItems = getSpecialItems(todayMeals).map(item => ({
    item,
    mealType: findMealType(item)
  }));

  if (specialItems.length === 0) return null;

  return (
    <div className="max-w-md mx-auto mb-8 text-center">
      <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-lg p-4 border border-yellow-500/20">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <p className="text-yellow-400 font-semibold">Today's Specials</p>
        </div>
        <div className="space-y-1">
          {specialItems.map((special, index) => (
            <p key={index} className="text-lg font-medium text-white">
              {special.item}{' '}
              <span className="text-sm text-yellow-400">({special.mealType})</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}