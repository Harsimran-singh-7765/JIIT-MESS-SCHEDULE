// Define meal time ranges
const MEAL_TIMES = {
  Breakfast: [21, 9], // 9:00 PM to 9:00 AM
  Lunch: [9, 14], // 10:00 AM to 2:00 PM
  Dinner: [15, 21], // 3:00 PM to 9:00 PM
} as const;

export function getCurrentMealTime(): string | null {
  const currentHour = new Date().getHours();
  for (const [meal, [start, end]] of Object.entries(MEAL_TIMES)) {
    if (currentHour >= start && currentHour < end) return meal;
  }
  return null; // Return null if current time is outside meal ranges
}

export function getNextMealTime(): string {
  const currentHour = new Date().getHours();
  const meals = Object.entries(MEAL_TIMES).filter(
    ([, [start]]) => currentHour < start
  );

  return meals.length > 0 ? meals[0][0] : 'Breakfast'; // Return Breakfast for next day
}
