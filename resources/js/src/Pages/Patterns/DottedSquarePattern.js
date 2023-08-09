import React from "react";

export default function DottedSquarePattern({
    top,
    right,
    rotate = "45",
    fill = "#fff",
    stroke = "#fff",
    width = "15px",
    secondFill = "none",
    zIndex = "1",
}) {
    return (
        <svg
            viewBox={`0 0 150 150`}
            xmlns="http://www.w3.org/2000/svg"
            className="dotted-square-svg"
            style={{
                position: "absolute",
                top: top,
                right: right,
                transform: `rotate(${rotate}deg)`,
                width: width + "px",
                zIndex:zIndex
            }}
        >
            <g id="Layer_2-2" data-name="Layer 2">
                <path
                    class="cls-1" fill={fill}
                    d="M1.84,39.84a.92.92,0,0,1-1.84,0,.93.93,0,0,1,.92-.93A.93.93,0,0,1,1.84,39.84Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M7.73,39.84a.92.92,0,1,1-.92-.93A.92.92,0,0,1,7.73,39.84Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M13.62,39.84a.92.92,0,1,1-.92-.93A.92.92,0,0,1,13.62,39.84Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M19.51,39.84a.92.92,0,1,1-.92-.93A.92.92,0,0,1,19.51,39.84Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M25.4,39.84a.92.92,0,1,1-.92-.93A.92.92,0,0,1,25.4,39.84Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M31.29,39.84a.92.92,0,1,1-.92-.93A.92.92,0,0,1,31.29,39.84Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M37.18,39.84a.92.92,0,1,1-.92-.93A.92.92,0,0,1,37.18,39.84Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M43.07,39.84a.92.92,0,1,1-.92-.93A.92.92,0,0,1,43.07,39.84Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M1.84,34.28a.92.92,0,1,1-.92-.92A.92.92,0,0,1,1.84,34.28Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M7.73,34.28a.92.92,0,1,1-.92-.92A.92.92,0,0,1,7.73,34.28Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M13.62,34.28a.92.92,0,1,1-.92-.92A.92.92,0,0,1,13.62,34.28Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M19.51,34.28a.92.92,0,1,1-.92-.92A.92.92,0,0,1,19.51,34.28Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M25.4,34.28a.92.92,0,1,1-.92-.92A.92.92,0,0,1,25.4,34.28Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M31.29,34.28a.92.92,0,1,1-.92-.92A.92.92,0,0,1,31.29,34.28Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M37.18,34.28a.92.92,0,1,1-.92-.92A.92.92,0,0,1,37.18,34.28Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M43.07,34.28a.92.92,0,1,1-.92-.92A.92.92,0,0,1,43.07,34.28Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M1.84,28.72a.92.92,0,1,1-.92-.92A.92.92,0,0,1,1.84,28.72Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M7.73,28.72a.92.92,0,1,1-.92-.92A.92.92,0,0,1,7.73,28.72Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M13.62,28.72a.92.92,0,1,1-.92-.92A.92.92,0,0,1,13.62,28.72Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M19.51,28.72a.92.92,0,1,1-.92-.92A.92.92,0,0,1,19.51,28.72Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M25.4,28.72a.92.92,0,1,1-.92-.92A.92.92,0,0,1,25.4,28.72Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M31.29,28.72a.92.92,0,1,1-.92-.92A.92.92,0,0,1,31.29,28.72Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M37.18,28.72a.92.92,0,1,1-.92-.92A.92.92,0,0,1,37.18,28.72Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M43.07,28.72a.92.92,0,1,1-.92-.92A.92.92,0,0,1,43.07,28.72Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M1.84,23.16a.92.92,0,1,1-.92-.92A.92.92,0,0,1,1.84,23.16Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M7.73,23.16a.92.92,0,1,1-.92-.92A.92.92,0,0,1,7.73,23.16Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M13.62,23.16a.92.92,0,1,1-.92-.92A.92.92,0,0,1,13.62,23.16Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M19.51,23.16a.92.92,0,1,1-.92-.92A.92.92,0,0,1,19.51,23.16Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M25.4,23.16a.92.92,0,1,1-.92-.92A.92.92,0,0,1,25.4,23.16Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M31.29,23.16a.92.92,0,1,1-.92-.92A.92.92,0,0,1,31.29,23.16Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M37.18,23.16a.92.92,0,1,1-.92-.92A.92.92,0,0,1,37.18,23.16Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M43.07,23.16a.92.92,0,1,1-.92-.92A.92.92,0,0,1,43.07,23.16Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M1.84,17.6a.92.92,0,1,1-.92-.92A.92.92,0,0,1,1.84,17.6Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M7.73,17.6a.92.92,0,1,1-.92-.92A.92.92,0,0,1,7.73,17.6Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M13.62,17.6a.92.92,0,1,1-.92-.92A.92.92,0,0,1,13.62,17.6Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M19.51,17.6a.92.92,0,1,1-.92-.92A.92.92,0,0,1,19.51,17.6Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M25.4,17.6a.92.92,0,1,1-.92-.92A.92.92,0,0,1,25.4,17.6Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M31.29,17.6a.92.92,0,1,1-.92-.92A.92.92,0,0,1,31.29,17.6Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M37.18,17.6a.92.92,0,1,1-.92-.92A.92.92,0,0,1,37.18,17.6Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M43.07,17.6a.92.92,0,1,1-.92-.92A.92.92,0,0,1,43.07,17.6Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M1.84,12a.92.92,0,1,1-.92-.92A.92.92,0,0,1,1.84,12Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M7.73,12a.92.92,0,1,1-.92-.92A.92.92,0,0,1,7.73,12Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M13.62,12a.92.92,0,1,1-.92-.92A.92.92,0,0,1,13.62,12Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M19.51,12a.92.92,0,1,1-.92-.92A.92.92,0,0,1,19.51,12Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M25.4,12a.92.92,0,1,1-.92-.92A.92.92,0,0,1,25.4,12Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M31.29,12a.92.92,0,1,1-.92-.92A.92.92,0,0,1,31.29,12Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M37.18,12a.92.92,0,1,1-.92-.92A.92.92,0,0,1,37.18,12Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M43.07,12a.92.92,0,1,1-.92-.92A.92.92,0,0,1,43.07,12Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M1.84,6.48a.92.92,0,1,1-.92-.92A.92.92,0,0,1,1.84,6.48Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M7.73,6.48a.92.92,0,1,1-.92-.92A.92.92,0,0,1,7.73,6.48Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M13.62,6.48a.92.92,0,1,1-.92-.92A.92.92,0,0,1,13.62,6.48Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M19.51,6.48a.92.92,0,1,1-.92-.92A.92.92,0,0,1,19.51,6.48Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M25.4,6.48a.92.92,0,1,1-.92-.92A.92.92,0,0,1,25.4,6.48Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M31.29,6.48a.92.92,0,1,1-.92-.92A.92.92,0,0,1,31.29,6.48Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M37.18,6.48a.92.92,0,1,1-.92-.92A.92.92,0,0,1,37.18,6.48Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M43.07,6.48a.92.92,0,1,1-.92-.92A.92.92,0,0,1,43.07,6.48Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M1.84.92A.92.92,0,1,1,.92,0,.92.92,0,0,1,1.84.92Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M7.73.92A.92.92,0,1,1,6.81,0,.92.92,0,0,1,7.73.92Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M13.62.92A.92.92,0,1,1,12.7,0,.92.92,0,0,1,13.62.92Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M19.51.92A.92.92,0,1,1,18.59,0,.92.92,0,0,1,19.51.92Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M25.4.92A.92.92,0,1,1,24.48,0,.92.92,0,0,1,25.4.92Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M31.29.92A.92.92,0,1,1,30.37,0,.92.92,0,0,1,31.29.92Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M37.18.92A.92.92,0,1,1,36.26,0,.92.92,0,0,1,37.18.92Z"
                />
                <path
                    class="cls-1" fill={fill}
                    d="M43.07.92A.92.92,0,1,1,42.15,0,.92.92,0,0,1,43.07.92Z"
                />
                <rect
                    class="cls-2"
                    x="20.63"
                    stroke={stroke}
                    fill={secondFill}
                    y="19.42"
                    width="40.9"
                    height="40.9"
                    rx="1.63"
                />
            </g>
        </svg>
    );
}
