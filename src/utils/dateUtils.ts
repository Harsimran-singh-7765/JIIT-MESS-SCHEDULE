import { DayOfWeek } from '../types/timetable';

export function getCurrentDay(): DayOfWeek {
  const day = new Date().toLocaleDateString('en-US', { weekday: 'long' }) as DayOfWeek;
  return day;
}