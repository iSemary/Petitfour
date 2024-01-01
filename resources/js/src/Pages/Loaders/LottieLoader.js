import React, { useEffect, useRef } from "react";
import lottie from 'lottie-web/build/player/lottie_light.min.js' // Lightweight source

const LottieLoader = ({ jsonPath, loop = true, autoplay = true, playAnimation, speed = 1 }) => {
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        // Load the animation JSON file
        animationRef.current = lottie.loadAnimation({
          container: containerRef.current,
            renderer: "svg",
            loop: loop,
            autoplay: autoplay,
            path: jsonPath,
        });
        animationRef.current.setSpeed(speed);
        // Cleanup function
        return () => {
          animationRef.current.destroy();
        };
    }, [jsonPath, loop, autoplay, playAnimation, speed]);

    useEffect(() => {
      if (playAnimation) {
        animationRef.current.play();
      }
    }, [playAnimation]);


    return <div ref={containerRef}></div>;
};

export default LottieLoader;
