import React from "react";

export default function ZigZagPattern({
    top,
    right,
    rotate = "45",
    fill = "#fff",
    width = "15px",
}) {
    return (
        <svg
            viewBox={`0 0 ${width*3} ${width*3}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="zigzag-svg"
            style={{
                position: "absolute",
                top: top,
                right: right,
                transform: `rotate(${rotate}deg)`,
                width: width + "px",
            }}
        >
            <g data-name="Layer 2">
                <path
                    class="cls-1"
                    fill={fill}
                    d="M80.1,107.1a11.87,11.87,0,0,1-3.21-5.79l-4.56-20a2.75,2.75,0,0,0-2-2l-20-4.56a12,12,0,0,1-9-9l-4.56-20a2.72,2.72,0,0,0-2-2l-20-4.56a12,12,0,0,1-9-9L.12,5.64a4.61,4.61,0,0,1,9-2L14.7,28.07a2.72,2.72,0,0,0,2.05,2.05l20,4.56a12,12,0,0,1,9,9l4.56,20a2.74,2.74,0,0,0,2.05,2.06l20,4.56a12,12,0,0,1,9,9l4.56,20a2.75,2.75,0,0,0,2.05,2l24.49,5.59a4.61,4.61,0,0,1-2,9l-24.49-5.58A12,12,0,0,1,80.1,107.1Z"
                />
            </g>
        </svg>
    );
}
