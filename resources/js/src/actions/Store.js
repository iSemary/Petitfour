import { configureStore } from "@reduxjs/toolkit";
import getSkills from "./skillsSlice";
import getBlogs from "./blogsSlice";
import getProjects from "./projectsSlice";

export default configureStore({
    reducer: {
        skills: getSkills,
        blogs: getBlogs,
        projects: getProjects,
    },
});
