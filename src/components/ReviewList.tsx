import React from 'react';
import { MessageSquare, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '../types/review';

interface ReviewListProps {
  reviews: Review[];
}

export function ReviewList({ reviews }: ReviewListProps) {
  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 320; // Width of one card + gap
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (reviews.length === 0) {
    return (
      <div className="text-center text-slate-400 py-8">
        No reviews yet for today. Be the first to share your thoughts!
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-blue-400" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-blue-400" />
      </button>

      {/* Review Cards Container */}
      <div
        ref={scrollContainer}
        className="flex gap-6 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="min-w-[300px] snap-start bg-slate-800/50 rounded-lg p-4 hover:bg-slate-800/70 transition-colors backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span className="font-medium">{review.author}</span>
              </div>
              <span className="text-sm text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                {review.mealType}
              </span>
            </div>
            
            <p className="text-slate-300 mb-4 min-h-[60px]">{review.comment}</p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-400">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}