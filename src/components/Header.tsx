import { useState, useEffect } from "react";

export default function Header() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      // Target is midnight of the current day (start of the next day)
      const tomorrow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0,
        0,
        0,
        0
      );

      const difference = tomorrow.getTime() - now.getTime();

      const totalSeconds = Math.max(0, Math.floor(difference / 1000));
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ hours, minutes, seconds });
    };

    // Calculate immediately
    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div
      id="top-urgency-header"
      className="bg-[#c22e2e] text-white text-center py-2 px-4 text-xs md:text-sm font-semibold tracking-wider transition-colors duration-300 shadow-md sticky top-0 z-50 flex justify-center items-center gap-1.5"
    >
      <span id="urgency-text">Esta página sairá do ar em:</span>
      <span
        id="urgency-timer"
        className="font-mono bg-black/20 px-2 py-0.5 rounded text-white border border-white/10"
      >
        {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:
        {formatNumber(timeLeft.seconds)}
      </span>
    </div>
  );
}
