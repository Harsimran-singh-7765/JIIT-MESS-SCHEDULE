import React from 'react';
import { Utensils } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
      <div className="relative flex flex-col items-center">
        {/* Animated rings */}
        <div className="absolute">
          <div className="w-32 h-32 border-4 border-blue-500/20 rounded-full animate-[ping_3s_linear_infinite]" />
          <div className="absolute inset-0 w-32 h-32 border-4 border-purple-500/20 rounded-full animate-[ping_3s_linear_infinite_1s]" />
          <div className="absolute inset-0 w-32 h-32 border-4 border-cyan-500/20 rounded-full animate-[ping_3s_linear_infinite_2s]" />
        </div>

        {/* Center icon with glow */}
        <div className="relative z-10">
          <Utensils className="w-16 h-16 text-blue-500 animate-pulse" />
          <div className="absolute inset-0 bg-blue-500/20 blur-xl animate-pulse" />
        </div>

        {/* Text and dots */}
        <div className="mt-12 space-y-4 relative z-10">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient">
            JIIT MESS SCHEDULE
          </div>
          
          {/* Loading dots */}
          <div className="flex justify-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-[bounce_1s_infinite_-0.3s]" />
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-[bounce_1s_infinite_-0.15s]" />
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-[spin_1s_infinite]" />
          </div>
        </div>

        {/* Decorative lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 border border-blue-500/10 rounded-full animate-spin-slow" />
          <div className="absolute w-40 h-40 border border-purple-500/10 rounded-full animate-spin-reverse" />
        </div>
      </div>
    </div>
  );
}