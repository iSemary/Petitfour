import React from "react";

export default function StarPattern({ top, right, rotate = "45", fill = "#fff", width= "15px" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stars-svg"
            style={{
                top: top,
                right: right,
                transform: `rotate(${rotate}deg)`,
                width: width,
            }}
        >
            <g>
                <path
                    d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
                    strokeWidth="1.5"
                    fill={fill}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </g>
        </svg>
    );
}
