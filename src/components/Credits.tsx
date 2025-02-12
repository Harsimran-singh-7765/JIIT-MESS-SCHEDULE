import React from 'react';
import { Heart } from 'lucide-react';

export function Credits() {
  return (
    <div className="text-center py-4 text-slate-400">
      <p className="flex items-center justify-center gap-1">
        Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" /> by{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Harsimran Singh
        </span>
      </p>
  
      <p className="flex items-center justify-center gap-1">
        
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
         Disclaimer: The menu is subject to change and may not always be updated due to unavoidable circumstances.


      </p>
    </div>
  );
}
