export interface WeeklyTimetable {
  [key: string]: {
    breakfast?: string;
    lunch?: string;
    dinner?: string;
  };
}

export const timetableData: WeeklyTimetable = {};