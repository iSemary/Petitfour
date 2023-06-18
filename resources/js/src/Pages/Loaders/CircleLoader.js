import React from "react";
import ContentLoader from "react-content-loader";
import styleVariables from "../../assets/styles/variables/variables.module.scss";

const CircleLoader = ({ size }) => (
    <ContentLoader
        speed={2}
        width={size * 2}
        height={size * 2}
        viewBox={"0 0 " + size * 2 + " " + size * 2}
        backgroundColor={styleVariables.primaryWhite}
        foregroundColor={styleVariables.primaryDark}
    >
        <circle cx={size} cy={size} r={size} />
    </ContentLoader>
);

export default CircleLoader;
