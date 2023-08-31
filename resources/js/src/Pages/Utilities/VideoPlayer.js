import React, { useRef, useEffect, useState } from "react";

function VideoPlayer({theme, firstVideo, secondVideo, themeFirstVideo, themeSecondVideo }) {
    const firstVideoRef = useRef(null);
    const secondVideoRef = useRef(null);
    const [playFirstVideo, setPlayFirstVideo] = useState(false);
    const [playSecondVideo, setPlaySecondVideo] = useState(false);

    useEffect(() => {
        const firstVideoElement = firstVideoRef.current;
        const secondVideoElement = secondVideoRef.current;

        const handleFirstVideoEnd = () => {
            // Hide the first video
            firstVideoElement.style.display = "none";
            // Show and play the second video
            secondVideoElement.style.display = "block";
            secondVideoElement.play();
            setPlaySecondVideo(true);
        };

        // Add event listener to the first video
        firstVideoElement.addEventListener("ended", handleFirstVideoEnd);

        // Start playing the first video when the component mounts
        setPlayFirstVideo(true);
        return () => {
            // Remove event listener when component unmounts
            firstVideoElement.removeEventListener("ended", handleFirstVideoEnd);
        };
    }, []);

    return (
        <div className="videos-container" data-first-default={firstVideo} data-second-default={secondVideo} data-first-theme={themeFirstVideo} data-second-theme={themeSecondVideo}>
            <video
                ref={firstVideoRef}
                muted
                controls={false}
                autoPlay={playFirstVideo}
                playsInline
            >
                <source src={!theme ? firstVideo : themeFirstVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video
                ref={secondVideoRef}
                style={{ display: "none" }}
                controls={false}
                autoPlay={playSecondVideo}
                loop
                muted
                playsInline
            >
                <source src={!theme ? secondVideo : themeSecondVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
