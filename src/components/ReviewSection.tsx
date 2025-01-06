import React, { useState, useEffect } from 'react';
import { ReviewForm } from './ReviewForm';
import { ReviewList } from './ReviewList';
import { Reviews } from '../types/review';
import { addReview, getTodayReviews, loadReviews } from '../utils/reviewUtils';

export function ReviewSection() {
  const [reviews, setReviews] = useState<Reviews>(() => loadReviews());

  const handleSubmitReview = (reviewData: {
    mealType: string;
    rating: number;
    comment: string;
    author: string;
  }) => {
    setReviews(prev => addReview(prev, reviewData));
  };

  const todayReviews = getTodayReviews(reviews);

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