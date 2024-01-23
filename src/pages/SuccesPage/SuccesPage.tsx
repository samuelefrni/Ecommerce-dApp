import React from "react";
import { SuccesPageI } from "../../utils/interface";
import { Link } from "react-router-dom";
import AbstractIMAGE from "../../../assets/wp7961688-dark-violet-wallpapers.jpg";
import SuccesPageCSS from "./SuccesPage.module.css";

const SuccesPage: React.FC<SuccesPageI> = ({
  title,
  image,
  setPurchaseSuccess,
}) => {
  return (
    <React.StrictMode>
      <div className={SuccesPageCSS.mainContainer}>
        <div className={SuccesPageCSS.showPageContainer}>
          <h2>
            You have purchased <br /> {title}
          </h2>
          <div className={SuccesPageCSS.containerIMG}>
            <img src={image} alt={title} />
          </div>
          <Link to={"/account"}>
            <button onClick={() => setPurchaseSuccess(false)}>
              Check Purchase
            </button>
          </Link>
          <img
            className={SuccesPageCSS.abstractIMG}
            src={AbstractIMAGE}
            alt="Abstract Image"
          />
        </div>
      </div>
    </React.StrictMode>
  );
};

export default SuccesPage;
