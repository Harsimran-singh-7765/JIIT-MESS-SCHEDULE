import { Review, Reviews } from '../types/review';

const REVIEWS_STORAGE_KEY = 'mess-timetable-reviews';

export function getFormattedDate(date: Date = new Date()): string {
  return date.toISOString().split('T')[0];
}

// Use local storage instead of Firebase
function loadFromLocalStorage(): Reviews {
  try {
    const stored = localStorage.getItem(REVIEWS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveToLocalStorage(reviews: Reviews): void {
  localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
}

export async function loadReviews(): Promise<Reviews> {
  return loadFromLocalStorage();
}

export async function saveReviews(reviews: Reviews): Promise<void> {
  saveToLocalStorage(reviews);
}

export async function addReview(
  reviews: Reviews,
  newReview: Omit<Review, 'id' | 'date'>
): Promise<Reviews> {
  const date = getFormattedDate();
  const id = crypto.randomUUID();
  const updatedReviews = {
    ...reviews,
    [date]: [
      ...(reviews[date] || []),
      { ...newReview, id, date }
    ]
  };
  
  saveToLocalStorage(updatedReviews);
  return updatedReviews;
}

export function getTodayReviews(reviews: Reviews): Review[] {
  const today = getFormattedDate();
  return reviews[today] || [];
}