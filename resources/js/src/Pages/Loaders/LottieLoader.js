import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieLoader = ({jsonPath, loop = true}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load the animation JSON file
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: loop,
      autoplay: true,
      path: jsonPath,
    });

    // Cleanup function
    return () => {
      animation.destroy();
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default LottieLoader;