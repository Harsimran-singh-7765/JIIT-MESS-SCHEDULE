export interface Review {
  id: string;
  date: string;
  mealType: 'breakfast' | 'lunch' | 'dinner';
  rating: number;
  comment: string;
  author: string;
}

export type Reviews = Record<string, Review[]>; // date -> reviews