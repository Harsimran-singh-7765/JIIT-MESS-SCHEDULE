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
    </div>
      <div className="text-center py-4 text-slate-400">
      <p className="flex items-center justify-center gap-1">
        Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" /> by{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
         Disclaimer: The menue can be changed or not updated under unavoidable circumstances.
        </span>
      </p>
    </div>
  );
}
