import React from "react";
import ContentLoader from "react-content-loader";
const SkillLoader = (props) => (
    <ContentLoader
        speed={2}
        width={460}
        height={160}
        viewBox="0 0 460 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="193" y="43" rx="3" ry="3" width="195" height="8" />
        <rect x="193" y="73" rx="3" ry="3" width="230" height="8" />
        <circle cx="122" cy="45" r="26" />
        <rect x="193" y="56" rx="3" ry="3" width="120" height="8" />
        <rect x="193" y="86" rx="3" ry="3" width="230" height="8" />
        <rect x="193" y="99" rx="3" ry="3" width="168" height="8" />
        <circle cx="47" cy="61" r="26" />
        <circle cx="108" cy="113" r="26" />
        <circle cx="204" cy="125" r="11" />
        <circle cx="231" cy="125" r="11" />
        <circle cx="260" cy="125" r="11" />
    </ContentLoader>
);
export default SkillLoader;
