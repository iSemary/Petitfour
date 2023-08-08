import React, { useState, useEffect } from 'react';

const ScrollToDown = () => {
  const [scrollerID, setScrollerID] = useState(null);
  const [paused, setPaused] = useState(true);
  const [speed, setSpeed] = useState(2);
  const interval = speed * 5;

  const startScroll = () => {
    const id = setInterval(() => {
      window.scrollBy(0, 2);
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // Reached end of page
        stopScroll();
      }
    }, interval);
    setScrollerID(id);
  };

  const stopScroll = () => {
    clearInterval(scrollerID);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (paused) {
        const id = startScroll();
        setScrollerID(id);
        setPaused(false);
      } else {
        stopScroll();
        setPaused(true);
      }
    }
  };

  useEffect(() => {
    document.body.addEventListener('keypress', handleKeyPress, true);

    return () => {
      document.body.removeEventListener('keypress', handleKeyPress, true);
      stopScroll();
    };
  }, [paused]);

  return (
    <div>
      <p>Press Enter to {paused ? 'start' : 'stop'} scrolling.</p>
      <p>Scroll speed: {speed}</p>
      <button onClick={() => setSpeed(1)}>Fast</button>
      <button onClick={() => setSpeed(2)}>Medium</button>
      <button onClick={() => setSpeed(3)}>Slow</button>
    </div>
  );
};

export default ScrollToDown;
