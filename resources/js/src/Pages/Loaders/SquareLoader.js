import React from "react";
import ContentLoader from "react-content-loader";
import styleVariables from "../../assets/styles/variables/variables.module.scss";

const SquareLoader = ({ width, height, radius, speed = 2 }) => (
    <ContentLoader
        speed={speed}
        width={width}
        height={height}
        viewBox={"0 0 " + width + " " + height}
        backgroundColor={styleVariables.primaryWhite}
        foregroundColor={styleVariables.primaryDark}
    >
        <rect
            x="0"
            y="0"
            rx={radius}
            ry={radius}
            width={width}
            height={height}
        />
    </ContentLoader>
);

export default SquareLoader;
