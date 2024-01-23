import React from "react";
import NavbarCSS from "./Navbar.module.css";

import Connectors from "../Connectors/Connectors";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Ethereum-Logo-PNG-HD-Image.png";

const Navbar = (): JSX.Element => {
  return (
    <React.StrictMode>
      <div className={NavbarCSS.main}>
        <div className={NavbarCSS.containerNav}>
          <nav>
            <h1>
              <Link to={"/"} style={{ color: "black" }}>
                <img src={Logo} alt="Ethereum Logo" />
              </Link>
            </h1>
            <Connectors />
          </nav>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Navbar;
