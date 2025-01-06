import { Review, Reviews } from '../types/review';

const REVIEWS_STORAGE_KEY = 'mess-timetable-reviews';

export function getFormattedDate(date: Date = new Date()): string {
  return date.toISOString().split('T')[0];
}

export function loadReviews(): Reviews {
  try {
    const savedReviews = localStorage.getItem(REVIEWS_STORAGE_KEY);
    return savedReviews ? JSON.parse(savedReviews) : {};
  } catch (error) {
    console.error('Error loading reviews:', error);
    return {};
  }
}

export function saveReviews(reviews: Reviews): void {
  try {
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
  } catch (error) {
    console.error('Error saving reviews:', error);
  }
}

export function addReview(
  reviews: Reviews,
  newReview: Omit<Review, 'id' | 'date'>
): Reviews {
  const date = getFormattedDate();
  const id = crypto.randomUUID();
  const updatedReviews = {
    ...reviews,
    [date]: [
      ...(reviews[date] || []),
      { ...newReview, id, date }
    ]
  };
  
  // Save to localStorage
  saveReviews(updatedReviews);
  return updatedReviews;
}

export function getTodayReviews(reviews: Reviews): Review[] {
  const today = getFormattedDate();
  return reviews[today] || [];
}