// Define meal time ranges
const MEAL_TIMES = {
  Breakfast: [0, 9],    // 12:00 AM to 9:00 AM
  Lunch: [9, 14],       // 9:00 AM to 2:00 PM
  Dinner: [14, 22],     // 2:00 PM to 10:00 PM
  NextBreakfast: [22, 24] // 10:00 PM to 12:00 AM
} as const;

export function getCurrentMealTime(): string | null {
  const currentHour = new Date().getHours();
  
  if (currentHour >= 22) {
    return 'Breakfast'; // Show next day's breakfast
  }
  
  for (const [meal, [start, end]] of Object.entries(MEAL_TIMES)) {
    if (currentHour >= start && currentHour < end) return meal;
  }
  return null;
}

export function getNextMealTime(): string {
  const currentHour = new Date().getHours();
  
  if (currentHour >= 22) {
    return 'Breakfast';
  }
  
  if (currentHour >= 14 && currentHour < 22) {
    return 'Breakfast';
  }
  
  if (currentHour >= 9 && currentHour < 14) {
    return 'Dinner';
  }
  
  if (currentHour >= 0 && currentHour < 9) {
    return 'Lunch';
  }
  
  return 'Breakfast';
}
