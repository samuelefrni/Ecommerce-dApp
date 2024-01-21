import React from "react";
import { courses } from "../../components/Products/data";
import { useParams } from "react-router-dom";
import GenericCourse from "../../components/GenericCourse/GenericCourse";

const CourseSection = (): JSX.Element | undefined => {
  const { coursename } = useParams();

  if (coursename == "tactilepainting")
    return (
      <React.StrictMode>
        <GenericCourse
          title={courses[0].name}
          description={courses[0].description}
          image={courses[0].image}
          value={courses[0].value}
        />
      </React.StrictMode>
    );

  if (coursename == "musicmovement")
    return (
      <React.StrictMode>
        <GenericCourse
          title={courses[1].name}
          description={courses[1].description}
          image={courses[1].image}
          value={courses[1].value}
        />
      </React.StrictMode>
    );

  if (coursename == "inclusivetheatre")
    return (
      <React.StrictMode>
        <GenericCourse
          title={courses[2].name}
          description={courses[2].description}
          image={courses[2].image}
          value={courses[2].value}
        />
      </React.StrictMode>
    );

  if (coursename == "inclusivephotography")
    return (
      <React.StrictMode>
        <GenericCourse
          title={courses[3].name}
          description={courses[3].description}
          image={courses[3].image}
          value={courses[3].value}
        />
      </React.StrictMode>
    );

  if (coursename == "therapeuticarts")
    return (
      <React.StrictMode>
        <GenericCourse
          title={courses[4].name}
          description={courses[4].description}
          image={courses[4].image}
          value={courses[4].value}
        />
      </React.StrictMode>
    );

  if (coursename == "accessiblesculpture")
    return (
      <React.StrictMode>
        <GenericCourse
          title={courses[5].name}
          description={courses[5].description}
          image={courses[5].image}
          value={courses[5].value}
        />
      </React.StrictMode>
    );
};

export default CourseSection;
