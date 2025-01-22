import { timetableData } from '../data/timetable';
import { getCurrentDay } from './dateUtils';
import { getCurrentMealTime, getNextMealTime } from './mealTimeUtils';

const VAPID_PUBLIC_KEY = 'BLBz-HxAZskyK0KsE2biQgPUZqUbfFxfFBTYwQKkLhh_U5bPNF9xGGw1KzHdr1hL36YrL9BQ_CKqpGxbD8kxHGo';

export async function registerForPushNotifications() {
  try {
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications');
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.log('Notification permission denied');
      return;
    }

    await setupNotificationSchedule();
  } catch (error) {
    console.error('Error registering for push notifications:', error);
  }
}

export function scheduleLocalNotification(title: string, options: NotificationOptions) {
  if (!('Notification' in window)) return;

  if (Notification.permission === 'granted') {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification(title, options);
    });
  }
}

function getNextMealInfo() {
  const currentDay = getCurrentDay();
  const currentMealTime = getCurrentMealTime();
  const nextMealTime = currentMealTime || getNextMealTime();
  const meals = timetableData[currentDay];
  const nextMeal = meals[nextMealTime.toLowerCase() as keyof typeof meals];

  return {
    mealTime: nextMealTime,
    meal: nextMeal
  };
}

async function setupNotificationSchedule() {
  // Initial notification when site opens
  const { mealTime, meal } = getNextMealInfo();
  scheduleLocalNotification('JIIT Mess Schedule', {
    body: `Next meal (${mealTime}): ${meal}`,
    icon: '/logo.jpg',
    badge: '/logo.jpg',
    tag: 'mess-schedule',
    renotify: true
  });

  // Set up hourly notifications
  setInterval(() => {
    const { mealTime, meal } = getNextMealInfo();
    scheduleLocalNotification('JIIT Mess Schedule Update', {
      body: `Next meal (${mealTime}): ${meal}`,
      icon: '/logo.jpg',
      badge: '/logo.jpg',
      tag: 'mess-schedule',
      renotify: true
    });
  }, 60 * 60 * 1000); // Every hour
}