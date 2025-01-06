import React from 'react';
import { Clock } from 'lucide-react';
import { useCurrentMeal } from '../hooks/useCurrentMeal';

export function TodayHighlight() {
  const { todayMeals, nextMealTime, nextMeal } = useCurrentMeal();

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/20">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-blue-400" />
          <h2 className="text-2xl font-bold text-blue-400">Next Meal</h2>
        </div>
        
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-lg text-slate-400">
              {nextMealTime} at {nextMeal === 'breakfast' ? '8:00 AM' : nextMeal === 'lunch' ? '12:30 PM' : '7:30 PM'}
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4">
            <p className="text-lg text-white whitespace-pre-line">
              {todayMeals[nextMeal]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
