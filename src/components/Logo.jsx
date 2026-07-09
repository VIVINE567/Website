'use client';

import { useEffect, useRef } from 'react';

const Logo = ({ className = "h-16 md:h-20" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div
      data-component="Logo"
      className={`flex items-center justify-center overflow-hidden ${className}`}
    >
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/wiofsjuh/video/upload/v1783595431/WhatsApp_Video_2026-07-09_at_4.39.10_PM_typsfg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-auto max-w-[220px] object-contain"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Logo;