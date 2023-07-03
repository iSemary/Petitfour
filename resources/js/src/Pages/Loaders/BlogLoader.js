import React from "react"
import ContentLoader from "react-content-loader"
import styleVariables from "../../assets/styles/variables/variables.module.scss";

const BlogLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={350}
    height={480}
    viewBox="0 0 350 480"
    backgroundColor={styleVariables.primaryWhite}
    foregroundColor={styleVariables.primaryDark}
    {...props}
  >
    <rect x="2" y="229" rx="0" ry="0" width="345" height="12" /> 
    <rect x="2" y="5" rx="5" ry="5" width="345" height="215" /> 
    <rect x="2" y="255" rx="0" ry="0" width="345" height="7" /> 
    <rect x="2" y="265" rx="0" ry="0" width="345" height="7" /> 
    <rect x="2" y="275" rx="0" ry="0" width="243" height="7" /> 
    <circle cx="15" cy="320" r="14" /> 
    <circle cx="55" cy="320" r="14" /> 
    <circle cx="95" cy="320" r="14" /> 
    <circle cx="135" cy="320" r="14" />
  </ContentLoader>
)

export default BlogLoader

