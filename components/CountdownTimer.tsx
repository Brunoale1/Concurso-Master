
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-red-600 text-white py-2 text-center fixed top-0 left-0 right-0 z-[60] shadow-lg animate-pulse">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
        <Clock size={16} className="shrink-0" />
        <p className="text-xs sm:text-sm font-black uppercase tracking-tighter">
          Oferta Especial: Seu desconto expira em 
          <span className="ml-2 bg-white text-red-600 px-2 py-0.5 rounded tabular-nums">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
