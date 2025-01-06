export interface MealTime {
  breakfast: string;
  lunch: string;
  dinner: string;
}

export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface WeeklyTimetable {
  [key in DayOfWeek]: MealTime;
}