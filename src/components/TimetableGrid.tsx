import React from 'react';
import { TimetableCard } from './TimetableCard';
import { timetableData } from '../data/timetable';
import { getCurrentDay, getDateForDay } from '../utils/dateUtils';
import { DayOfWeek } from '../types/timetable';

export function TimetableGrid() {
  const today = getCurrentDay();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Object.entries(timetableData).map(([day, meals]) => (
        <TimetableCard 
          key={day} 
          day={day} 
          meals={meals}
          isToday={day === today}
          date={getDateForDay(day as DayOfWeek)}
        />
      ))}
    </div>
  );
}