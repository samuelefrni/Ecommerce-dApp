import React from "react";
import { courses } from "../../utils/data";
import { useParams } from "react-router-dom";
import GenericCourse from "../../components/GenericCourse/GenericCourse";

const CourseSection = (): JSX.Element => {
  const { coursename } = useParams();

  const course = courses.find(
    (course) => course.name.toLowerCase().replace(/\s/g, "") === coursename
  );

  if (!course) {
    return (
      <React.StrictMode>
        <div>
          <h2>Course doesn't exist</h2>
        </div>
      </React.StrictMode>
    );
  }

  return (
    <React.StrictMode>
      <GenericCourse
        title={course.name}
        description={course.description}
        image={course.image}
        value={course.value}
      />
    </React.StrictMode>
  );
};

export default CourseSection;
