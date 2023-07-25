import { useEffect } from "react";

const ScrollToDown = () => {
  useEffect(() => {
    const scrollHeight = document.body.scrollHeight;
    const screenHeight = window.innerHeight;
    const scrollStep = 1; // Adjust this value to control the scrolling speed (smaller value means slower scrolling)
    const scrollInterval = 200; // Adjust this value to control the delay between each scroll step (in milliseconds)

    let currentScroll = 0;

    const scroll = () => {
      currentScroll += scrollStep;
      if (currentScroll < scrollHeight - screenHeight) {
        window.scrollTo(0, currentScroll);
        setTimeout(scroll, scrollInterval);
      } else {
        window.scrollTo(0, scrollHeight);
      }
    };

    scroll();
  }, []);

  return null;
};

export default ScrollToDown;
