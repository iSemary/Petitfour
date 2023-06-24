export default function HalfCirclePattern({
    width = "50",
    height = "50",
    stroke = "#fff",
    bottom = "0%",
    right = "0%",
    left = "0%",
    strokeWidth = "50px",
    rotate = "180",
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={"0 0 170 300"}
            className="half-circle-pattern"
            style={{
                width: width + "px",
                height: height + "px",
                position: "absolute",
                bottom: bottom,
                right: right,
                left: left,
                transform: `rotate(${rotate}deg)`,
            }}
        >
            <path
                d="M312.36,481.85a130.14,130.14,0,1,1,0-260.27"
                style={{
                    stroke: stroke,
                    fill: "none",
                    strokeWidth: strokeWidth,
                }}
                transform="translate(-137.22 -176.58)"
            />
        </svg>
    );
}
