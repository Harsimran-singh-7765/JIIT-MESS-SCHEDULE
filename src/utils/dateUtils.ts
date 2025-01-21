import { DayOfWeek } from '../types/timetable';

export function getCurrentDay(): DayOfWeek {
  const day = new Date().toLocaleDateString('en-US', { weekday: 'long' }) as DayOfWeek;
  return day;
}

export function getDateForDay(day: DayOfWeek): string {
  const today = new Date();
  const currentDay = today.getDay();
  const targetDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(day);
  
  // Calculate the difference in days
  let diff = targetDay - currentDay;
  if (diff < 0) diff += 7; // If the target day is earlier in the week
  
  // Create new date for target day
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + diff);
  
  // Format date as "DD MMM" (e.g., "15 Mar")
  return targetDate.toLocaleDateString('en-US', { 
    day: 'numeric',
    month: 'short'
  });
}