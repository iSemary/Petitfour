import React, { useRef, useEffect, useState } from "react";

function VideoPlayer({ firstVideo, secondVideo }) {
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
        <div>
            <video
                ref={firstVideoRef}
                muted
                controls={false}
                autoPlay={playFirstVideo}
                playsinline
                poster
            >
                <source src={firstVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video
                ref={secondVideoRef}
                style={{ display: "none" }}
                controls={false}
                autoPlay={playSecondVideo}
                loop
                muted
                playsinline
                poster
            >
                <source src={secondVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
