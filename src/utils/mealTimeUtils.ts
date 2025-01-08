// Define meal time ranges (24-hour format)
const MEAL_TIMES = {
  Breakfast: [0, 9],    // 0:00 AM to 9:00 AM
  Lunch: [9, 14],       // 9:00 AM to 2:00 PM
  Dinner: [14, 24],      // 2:00 PM to 24:00 PM
} as const;

export function getCurrentMealTime(): string | null {
  const currentHour = new Date().getHours();
  
  for (const [meal, [start, end]] of Object.entries(MEAL_TIMES)) {
    if (currentHour >= start && currentHour < end) {
      return meal;
    }
  }
  return null;
}

export function getNextMealTime(): string {
  const currentHour = new Date().getHours();
  
  // Find the next meal time
  for (const [meal, [start]] of Object.entries(MEAL_TIMES)) {
    if (currentHour < start) {
      return meal;
    }
  }
  
  // If after dinner time, return breakfast for next day
  return 'Breakfast';
}