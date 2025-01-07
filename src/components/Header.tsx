import React from 'react';
import { Clock } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-center mb-12">
      <Clock className="w-12 h-12 text-blue-400 mr-4" />
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Mess Timetable
      </h1>
    </div>
  );
}