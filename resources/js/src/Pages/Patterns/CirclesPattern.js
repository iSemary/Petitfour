export default function CirclesPattern({
    width = "50px",
    height = "50px",
    fill = "#fff",
    stroke = "#fff",
    bottom = "0%",
    right = "0%",
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 93.16 90.69"
            className="circles-pattern"
            style={{
                width: width,
                height: height,
                position: "absolute",
                bottom: bottom,
                right: right,
            }}
        >
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_4" data-name="Layer 4">
                    <g id="Layer_5" data-name="Layer 5">
                        <circle
                            className="cls-1"
                            fill={fill}
                            cx="20.03"
                            cy="20.03"
                            r="20.03"
                            transform="translate(-4.1 34.88) rotate(-76.6)"
                        />
                        <circle
                            className="cls-2"
                            cx="33.02"
                            stroke={stroke}
                            cy="33.02"
                            r="20.03"
                            transform="translate(-6.65 57.66) rotate(-76.83)"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
}
