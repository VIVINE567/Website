'use client';

import { useEffect, useRef } from 'react';

const Logo = ({ className = "h-16 md:h-20" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow speed
    }
  }, []);

  return (
    <div data-component="Logo" className={`flex items-center ${className}`}>
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/wiofsjuh/video/upload/v1783593131/WhatsApp_Video_2026-07-09_at_11.48.41_AM_vmsr6f.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-[170px] mt-2 md:w-[180px] lg:w-[240px] h-auto object-contain !max-w-none"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Logo;