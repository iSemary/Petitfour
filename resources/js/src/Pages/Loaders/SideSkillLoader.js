import React from "react"
import ContentLoader from "react-content-loader"
import styleVariables from "../../assets/styles/variables/variables.module.scss";

const SideSkillLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={440}
    height={70}
    viewBox="0 0 440 70"
    backgroundColor={styleVariables.primaryWhite}
    foregroundColor={styleVariables.primaryDark}
    {...props}
  >
    <circle cx="34" cy="34" r="34" /> 
    <rect x="85" y="17" rx="0" ry="0" width="129" height="9" /> 
    <rect x="85" y="35" rx="0" ry="0" width="260" height="5" /> 
    <rect x="85" y="45" rx="0" ry="0" width="169" height="5" />
  </ContentLoader>
)

export default SideSkillLoader

