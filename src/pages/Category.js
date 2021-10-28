import React from "react";
import Mainfeed from "../components/features/Mainfeed";
import Navbar from "../components/reuse/Navbar";
import Footer from "../components/reuse/Footer";

function Category() {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <Mainfeed />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Category;
