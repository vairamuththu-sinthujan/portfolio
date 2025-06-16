'use client'
import React, { useEffect, useState } from 'react'

const NotFound = () => {
  const [countdown, setCountdown] = useState(6);

  useEffect(() => {
    // Start countdown immediately
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // Navigate to home when countdown reaches 0
          clearInterval(timer);
          if (typeof window !== 'undefined') {
            window.location.href = '/';
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-6 px-4 py-8'>
      {/* 404 Title */}
      <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold opacity-80 text-center font-sans text-red-500'>
        404 - Page Not Found
      </h1>
      
      {/* GIF Container - Responsive */}
      <div className='w-full max-w-[656px] flex justify-center'>
        <img 
          src='/thanos.gif' 
          alt='Thanos snap meme'
          className='w-full h-auto max-w-[656px] max-h-[250px] object-contain'
          style={{ aspectRatio: '656/250' }}
        />
      </div>
      {/* Countdown */}
      <p className='text-sm sm:text-base opacity-80 text-center'>
        Redirecting to home in {countdown} second{countdown !== 1 ? 's' : ''}...
      </p>
    </div>
  );
};

export default NotFound;