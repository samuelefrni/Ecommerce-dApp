import React from "react";
import HomeCSS from "./Home.module.css";
import Image from "../../assets/wp7961688-dark-violet-wallpapers.jpg";
import { courses } from "../../components/Products/data";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = (): JSX.Element => {
  return (
    <React.StrictMode>
      <Helmet>
        <title>Gianni's Web3 Shop</title>
        <meta name="description" content={`Gianni's Web3 shop`} />
      </Helmet>
      <div className={HomeCSS.containerAllProducts}>
        {courses.map((course) => (
          <div className={HomeCSS.containerCourse}>
            <img className={HomeCSS.abstractIMG} src={Image} alt="" />
            <h2>{course.name}</h2>
            <div className={HomeCSS.containerIMG}>
              <img src={course.image} alt={course.name} />
            </div>
            <p>
              <strong>Price: {course.value} ETH</strong>
            </p>
            <Link
              to={`/course/${course.name.toLowerCase().replace(/\s/g, "")}`}
            >
              <button>View</button>
            </Link>
          </div>
        ))}
      </div>
    </React.StrictMode>
  );
};

export default Home;
