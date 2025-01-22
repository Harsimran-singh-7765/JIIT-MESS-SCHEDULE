import React, { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';

export function NotificationPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      setShowPrompt(true);
    }
  }, []);

  const handleEnable = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        setShowPrompt(false);
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-purple-500 text-white p-4 rounded-lg shadow-lg flex items-center justify-between">
      <p className="flex-1">Enable notifications to get meal updates!</p>
      <button
        onClick={handleEnable}
        className="flex items-center gap-2 bg-white text-purple-500 px-4 py-2 rounded-md hover:bg-purple-50 transition-colors"
      >
        <Bell className="w-4 h-4" />
        Enable
      </button>
    </div>
  );
}