import React, { useState, useEffect } from "react";

const Skill = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("your-api-endpoint");
                const json = await response.json();
                setData(json.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const { skill, projects, blogs } = data;

    return (
        <div>
            <h1>{skill.name}</h1>
            <img src={skill.icon} alt="Skill Icon" />
            <p>Start Date: {skill.start_date}</p>

            <h2>Projects</h2>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>Start Date: {project.start_date}</p>
                    <p>End Date: {project.end_date}</p>
                </div>
            ))}

            <h2>Experiences</h2>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>Start Date: {project.start_date}</p>
                    <p>End Date: {project.end_date}</p>
                </div>
            ))}

            <h2>Blogs</h2>
            {blogs.map((blog, index) => (
                <div key={index}>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    <img src={blog.image} alt="Blog Image" />
                    <p>Published At: {blog.published_at}</p>
                </div>
            ))}
        </div>
    );
};

export default Skill;
