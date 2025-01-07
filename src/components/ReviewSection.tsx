import React, { useState, useEffect } from 'react';
import { ReviewForm } from './ReviewForm';
import { ReviewList } from './ReviewList';
import { Reviews } from '../types/review';
import { addReview, getTodayReviews, loadReviews } from '../utils/reviewUtils';

export function ReviewSection() {
  const [reviews, setReviews] = useState<Reviews>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const loadedReviews = await loadReviews();
      setReviews(loadedReviews);
      setIsLoading(false);
    };
    fetchReviews();
  }, []);

  const handleSubmitReview = async (reviewData: {
    mealType: string;
    rating: number;
    comment: string;
    author: string;
  }) => {
    const updatedReviews = await addReview(reviews, reviewData);
    setReviews(updatedReviews);
  };

  const todayReviews = getTodayReviews(reviews);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="mt-12 space-y-8">
      <div className="max-w-2xl mx-auto">
        <ReviewForm onSubmit={handleSubmitReview} />
      </div>
      <div className="mt-8 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Today's Reviews</h2>
        <ReviewList reviews={todayReviews} />
      </div>
    </div>
  );
}