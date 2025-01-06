import React, { useState } from 'react';
import { MessageSquarePlus, Star } from 'lucide-react';
import { filterHarmfulContent } from '../utils/filterUtils';

interface ReviewFormProps {
  onSubmit: (review: { mealType: string; rating: number; comment: string; author: string }) => void;
}

export function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [formData, setFormData] = useState({
    mealType: 'breakfast',
    rating: 5,
    comment: '',
    author: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredComment = filterHarmfulContent(formData.comment);
    onSubmit({ ...formData, comment: filteredComment });
    setFormData(prev => ({ ...prev, comment: '', author: '' }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-slate-800/50 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquarePlus className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Add Your Review</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">Meal</label>
          <select
            value={formData.mealType}
            onChange={e => setFormData(prev => ({ ...prev, mealType: e.target.value }))}
            className="w-full bg-slate-700 rounded px-3 py-2 text-white"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-1">Rating</label>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                className="focus:outline-none"
              >
                <Star
                  className={`w-6 h-6 ${
                    star <= formData.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-1">Your Name</label>
        <input
          type="text"
          value={formData.author}
          onChange={e => setFormData(prev => ({ ...prev, author: e.target.value }))}
          className="w-full bg-slate-700 rounded px-3 py-2 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-1">Comment</label>
        <textarea
          value={formData.comment}
          onChange={e => setFormData(prev => ({ ...prev, comment: e.target.value }))}
          className="w-full bg-slate-700 rounded px-3 py-2 text-white h-24"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded py-2 transition-colors"
      >
        Submit Review
      </button>
    </form>
  );
}