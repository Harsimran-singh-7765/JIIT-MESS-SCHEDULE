import React from 'react';
import { timetableData } from '../data/sampleTimetable'; // Assuming your timetable data is here
import { getCurrentDay } from '../utils/dateUtils';

const GOOD_DISHES = ['Poori', 'Paneer', 'Egg Curry', 'Rajma', 'Halwa'];

// Define meal time ranges
const MEAL_TIMES = {
  Breakfast: [6, 10], // 6:00 AM to 10:00 AM
  Lunch: [10, 15], // 10:00 AM to 3:00 PM
  Dinner: [15, 21], // 3:00 PM to 9:00 PM
};

function getCurrentMealTime(): string | null {
  const currentHour = new Date().getHours();
  for (const [meal, [start, end]] of Object.entries(MEAL_TIMES)) {
    if (currentHour >= start && currentHour < end) return meal;
  }
  return null; // Return null if current time is outside meal ranges
}

function getNextMealTime(): string {
  const currentHour = new Date().getHours();
  const meals = Object.entries(MEAL_TIMES).filter(
    ([, [start]]) => currentHour < start
  );

  return meals.length > 0 ? meals[0][0] : 'Breakfast'; // Return Breakfast for next day
}

export function TodayHighlight() {
  const currentDay = getCurrentDay(); // Get current day (e.g., 'Monday')
  const todayMeals = timetableData[currentDay]; // Fetch today's meals
  const currentMealTime = getCurrentMealTime();
  const nextMealTime = currentMealTime || getNextMealTime();

  // Find good dishes only for the next meal
  const goodDish =
    GOOD_DISHES.find((dish) =>
      todayMeals[nextMealTime.toLowerCase() as keyof typeof todayMeals]
        .toLowerCase()
        .includes(dish.toLowerCase())
    ) || todayMeals[nextMealTime.toLowerCase() as keyof typeof todayMeals];

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
