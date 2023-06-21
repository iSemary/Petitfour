import React, { useRef } from "react";
import { useTrail, animated } from "react-spring";

const HandwrittenLetters = ({ letters }) => {
    const pathsRefs = useRef([]);
    const [trail, set] = useTrail(letters.length, () => ({
        from: { opacity: 0, strokeDashoffset: 1000 },
        to: {
            opacity: 1,
            strokeDashoffset: 0,
        },
        config: { duration: 200 },
    }));

    const handleMouseEnter = () => {
        set({
            from: { opacity: 0, strokeDashoffset: 1000 },
            to: {
                opacity: 1,
                strokeDashoffset: 0,
            },
            config: { duration: 1000 },
        });
    };

    return (
        <svg
            viewBox="0 0 516.38 112.46"
            className="name-svg"
            onMouseEnter={handleMouseEnter}
        >
            {trail.map((props, index) => (
                <animated.path
                    key={index}
                    ref={(ref) => (pathsRefs.current[index] = ref)}
                    d={letters[index]}
                    strokeWidth="6"
                    style={{
                        ...props,
                        strokeDasharray: pathsRefs.current[index]
                            ? pathsRefs.current[index].getTotalLength()
                            : 0,
                    }}
                />
            ))}
        </svg>
    );
};

export default HandwrittenLetters;
