export default function RotatedSquaresPattern({
    width = "50px",
    height = "50px",
    fill = "#fff",
    secondFill = "#000",
    bottom = "0%",
    right = "0%",
    top = "0%",
    left = "0%",
    rotate = "0deg",
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 55.62 105.47"
            className="squares-pattern"
            style={{
                width: width,
                height: height,
                position: "absolute",
                bottom: bottom,
                top: top,
                right: right,
                left: left,
                transform: `rotate(${rotate}deg)`,
            }}
        >
            <g id="Layer_3" data-name="Layer 3">
                <rect
                    className="cls-1"
                    x="8.14"
                    y="8.14"
                    fill={fill}
                    width="39.33"
                    height="39.33"
                    transform="translate(27.81 -11.52) rotate(45)"
                />
                <rect
                    className="cls-1"
                    x="8.14"
                    y="58"
                    fill={fill}
                    width="39.33"
                    height="39.33"
                    transform="translate(63.06 3.09) rotate(45)"
                />
                <rect
                    className="cls-2"
                    x="8.14"
                    y="31.08"
                    fill={secondFill}
                    width="39.33"
                    height="39.33"
                    transform="translate(44.03 -4.8) rotate(45)"
                />
            </g>
        </svg>
    );
}
