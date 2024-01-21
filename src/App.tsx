import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CourseSection from "./pages/CourseSection/CourseSection";
import Account from "./pages/Account/Account";

const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:coursename" element={<CourseSection />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </React.StrictMode>
  );
};

export default App;
