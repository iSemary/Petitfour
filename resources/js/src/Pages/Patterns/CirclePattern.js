import React from "react";

export default function CirclePattern({
    top,
    right,
    color = "#fff",
    width = "15",
}) {
    return (
        <svg
            viewBox={"0 0 34 34"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stars-svg"
            style={{
                top: top,
                right: right,
                position: "absolute",
                width: width,
            }}
        >
            <circle cx="17" cy="17" r="16" fill={color} />
        </svg>
    );
}
