import { MealTime } from '../types/timetable';

const GOOD_DISHES = ['Poori', 'Paneer', 'Egg Curry', 'Rajma', 'Halwa'];

export function findGoodDish(meals: MealTime, mealTime: string): string {
  const mealKey = mealTime.toLowerCase() as keyof MealTime;
  return (
    GOOD_DISHES.find((dish) =>
      meals[mealKey].toLowerCase().includes(dish.toLowerCase())
    ) || meals[mealKey]
  );
}

export function getSpecialItems(meals: MealTime): string[] {
  const specialKeywords = ['Paneer', 'Egg', 'Chicken', 'Fish', 'Special', 'Biryani'];
  const allMeals = [meals.breakfast, meals.lunch, meals.dinner].join(' ');
  
  return specialKeywords.filter(keyword => 
    allMeals.toLowerCase().includes(keyword.toLowerCase())
  );
}