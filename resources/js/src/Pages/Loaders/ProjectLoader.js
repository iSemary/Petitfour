import React from "react";
import ContentLoader from "react-content-loader";
import styleVariables from "../../assets/styles/variables/variables.module.scss";

const ProjectLoader = (props) => (
    <ContentLoader
        speed={2}
        width={360}
        height={360}
        viewBox="0 0 360 360"
        backgroundColor={styleVariables.primaryWhite}
        foregroundColor={styleVariables.primaryDark}
        {...props}
    >
        <rect x="54" y="60" rx="0" ry="0" width="217" height="12" />
        <rect x="32" y="84" rx="0" ry="0" width="265" height="163" />
        <rect x="32" y="275" rx="0" ry="0" width="265" height="7" />
        <rect x="32" y="285" rx="0" ry="0" width="265" height="7" />
        <rect x="32" y="295" rx="0" ry="0" width="191" height="7" />
        <circle cx="45" cy="340" r="14" />
        <circle cx="85" cy="340" r="14" />
        <circle cx="125" cy="340" r="14" />
        <circle cx="160" cy="340" r="14" />
    </ContentLoader>
);

export default ProjectLoader;
