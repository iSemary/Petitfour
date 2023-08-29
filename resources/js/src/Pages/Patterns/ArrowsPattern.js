import React from "react";

export default function ArrowsPattern({
    top,
    right,
    rotate = "45",
    fill = "#fff",
    width = "15px",
}) {
    return (
        <svg
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrows-svg"
            style={{
                position: "absolute",
                top: top,
                right: right,
                transform: `rotate(${rotate}deg)`,
                width: width + "px",
            }}
        >
            <g id="Layer_2-2" data-name="Layer 2">
                <polygon
                    className="cls-1"
                    fill={fill}
                    points="0 0 9.84 5.68 0 11.36 0 0"
                />
                <polygon
                    className="cls-1"
                    fill={fill}
                    points="14.22 0 24.06 5.68 14.22 11.36 14.22 0"
                />
                <polygon
                    className="cls-1"
                    fill={fill}
                    points="28.44 0 38.28 5.68 28.44 11.36 28.44 0"
                />
                <polygon
                    className="cls-1"
                    fill={fill}
                    points="42.66 0 52.5 5.68 42.66 11.36 42.66 0"
                />
                <polygon
                    className="cls-1"
                    fill={fill}
                    points="56.88 0 66.72 5.68 56.88 11.36 56.88 0"
                />
            </g>
        </svg>
    );
}
