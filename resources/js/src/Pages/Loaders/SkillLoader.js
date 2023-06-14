import React from "react";
import ContentLoader from "react-content-loader";
import styleVariables from "../../assets/styles/variables/variables.module.scss";

const SkillLoader = (props) => (
    <div className="skills-loader-canvas" >
        <ContentLoader
            speed={2}
            width={750}
            height={225}
            viewBox="0 0 750 225"
            backgroundColor={styleVariables.primaryWhite}
            foregroundColor={styleVariables.primaryDark}
            {...props}
        >
            <rect x="300" y="74" rx="3" ry="3" width="103" height="7" />
            <rect x="300" y="95" rx="3" ry="3" width="61" height="7" />
            <rect x="301" y="110" rx="3" ry="3" width="480" height="7" />
            <rect x="301" y="129" rx="3" ry="3" width="445" height="7" />
            <rect x="301" y="148" rx="3" ry="3" width="208" height="7" />
            <circle cx="48" cy="65" r="30" />
            <circle cx="191" cy="65" r="30" />
            <circle cx="126" cy="166" r="30" />

            <circle cx="310" cy="178" r="13" />
            <circle cx="350" cy="178" r="13" />
            <circle cx="390" cy="178" r="13" />
        </ContentLoader>
    </div>
);
export default SkillLoader;
