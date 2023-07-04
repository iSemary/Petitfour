import React from "react";

export default function TrianglePattern({
    top,
    right,
    rotate = "45",
    color = "#fff",
    width = "15",
}) {
    return (
        <svg
            viewBox={"0 0 24 24"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stars-svg"
            style={{
                top: top,
                right: right,
                position: "absolute",
                transform: `rotate(${rotate}deg)`,
                width: width,
            }}
        >
            <path d="M21,21H3L12,3Z" fill={color} />
        </svg>
    );
}
