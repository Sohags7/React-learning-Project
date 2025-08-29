import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, onClick }) => {
  const imgRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isInView ? src : 'https://via.placeholder.com/150'} 
      alt={alt}
      className="w-full h-auto rounded-lg cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
      onClick={onClick}
    />
  );
};

export default LazyImage;
