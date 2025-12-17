import React, { useRef, useState, useEffect } from 'react';

interface VideoPlayerProps {
  videoSrc: string; 
  posterSrc?: string; 
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const Video: React.FC<VideoPlayerProps> = ({ 
  videoSrc, 
  posterSrc, 
  controls = true, 
  loop = false, 
  muted = true, 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoClasses = "w-full h-auto max-w-5xl rounded-lg shadow-xl border-4";
  const containerClasses = "flex justify-center min-h-[300px]"; // Tambah min-height agar layout tidak 'melompat'

  useEffect(() => {
    // Pastikan ref ada dan didukung di environment
    if (!videoContainerRef.current || typeof IntersectionObserver === 'undefined') {
      // Jika browser tidak mendukung IntersectionObserver, render langsung (fallback)
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Jika container terlihat, set isVisible menjadi true
            setIsVisible(true);
            // Hentikan pengamatan setelah terlihat
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // rootMargin: '200px' berarti mulai memuat 200px sebelum elemen masuk viewport
        rootMargin: '200px', 
        threshold: 0.1, // Mulai terlihat saat 10% elemen masuk viewport
      }
    );

    observer.observe(videoContainerRef.current);

    // Cleanup function: Hentikan pengamatan saat komponen di-unmount
    return () => {
      if (videoContainerRef.current) {
        // Penting untuk menghindari memory leak
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []); // Efek hanya berjalan sekali saat komponen di-mount

  return (
    <div ref={videoContainerRef} className={containerClasses}>
      {/* 💡 Hanya render elemen <video> jika isVisible adalah TRUE */}
      {isVisible ? (
        <video 
          className={videoClasses}
          controls={controls}
          loop={loop}
          // autoPlay akan aktif karena isVisible true dan muted
          autoPlay 
          muted={muted} 
          poster={posterSrc}
          // Tambahkan preload="auto" atau preload="metadata" 
          // untuk mengontrol proses pemuatan setelah isVisible true
          preload="auto" 
        >
          {/* DRY: Menggunakan videoSrc dari props */}
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback */}
          Maaf, browser Anda tidak mendukung pemutaran video HTML5.
        </video>
      ) : (
        // Tampilkan placeholder atau poster saat video belum dimuat (belum terlihat)
        <div className={videoClasses + " bg-gray-200 flex items-center justify-center"}>
          {posterSrc ? (
            <img 
              src={posterSrc} 
              alt="Video Placeholder" 
              className="w-full h-full object-cover" 
            />
          ) : (
            <span className="text-gray-500 text-lg">Memuat Video...</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Video;