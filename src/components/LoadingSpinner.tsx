import React from 'react';
import { Utensils } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        {/* Glowing background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-20 animate-pulse" />
        
        {/* Main icon */}
        <div className="relative">
          <Utensils className="w-16 h-16 text-blue-500 animate-bounce" />
        </div>
      </div>
      
      {/* Loading text */}
      <div className="mt-6">
        <p className="text-xl font-medium bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text animate-pulse">
          Loading your menu
        </p>
        <div className="mt-2 flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-500"
              style={{
                animation: `bounce 1s ease-in-out ${i * 0.2}s infinite`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}