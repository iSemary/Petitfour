import React, { useState } from "react";
import { Card, Badge, Carousel } from "react-bootstrap";

function Project() {
    // const [activeIndex, setActiveIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setActiveIndex(selectedIndex);
    // };

    // return (
    //     <Card className="h-100">
    //         <Carousel
    //             activeIndex={activeIndex}
    //             onSelect={handleSelect}
    //             interval={5000}
    //             controls={false}
    //             indicators={false}
    //         >
    //             {project.images.map((image, index) => (
    //                 <Carousel.Item key={index}>
    //                     <img
    //                         className="d-block w-100"
    //                         src={image.src}
    //                         alt={image.alt}
    //                     />
    //                 </Carousel.Item>
    //             ))}
    //         </Carousel>
    //         <Card.Body>
    //             <Card.Title>{project.title}</Card.Title>
    //             <Card.Text>{project.description}</Card.Text>
    //             <div className="d-flex flex-wrap">
    //                 {project.tags.map((tag, index) => (
    //                     <Badge
    //                         key={index}
    //                         variant="secondary"
    //                         className="mr-2 mb-2"
    //                     >
    //                         {tag}
    //                     </Badge>
    //                 ))}
    //             </div>
    //         </Card.Body>
    //     </Card>
    // );
}

export default Project;
