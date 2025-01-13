import { timetableData } from '../data/timetable';
import { timetable128Data } from '../data/timetable128';

const STORAGE_KEY = 'mess-schedule-data';
const LAST_UPDATED_KEY = 'mess-schedule-last-updated';

interface CachedData {
  timetableData: typeof timetableData;
  timetable128Data: typeof timetable128Data;
  lastUpdated: string;
  version: string;
}

const CURRENT_VERSION = '1.0.0';

export function saveDataToCache(): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const data: CachedData = {
        timetableData,
        timetable128Data,
        lastUpdated: new Date().toISOString(),
        version: CURRENT_VERSION
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      localStorage.setItem(LAST_UPDATED_KEY, new Date().toISOString());
      resolve();
    } catch (error) {
      console.error('Error saving data to cache:', error);
      reject(error);
    }
  });
}

export function loadDataFromCache(): CachedData | null {
  try {
    const cachedData = localStorage.getItem(STORAGE_KEY);
    if (cachedData) {
      const data = JSON.parse(cachedData) as CachedData;
      // Check if cached data is from current version
      if (data.version === CURRENT_VERSION) {
        return data;
      }
    }
  } catch (error) {
    console.error('Error loading data from cache:', error);
  }
  return null;
}

export function isOnline(): boolean {
  return navigator.onLine;
}

export function clearCache() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(LAST_UPDATED_KEY);
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
}