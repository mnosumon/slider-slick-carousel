import React from "react";
import MultiItemCarousel from "./componets/MultiItemCarosel";
import Testimonial from "./componets/testMonial/TestMonial";

const App = () => {
  return (
    <div className="conatiner">
      <div className="multiSlide">
        <MultiItemCarousel />
      </div>
      <div className="multiSlide">
        <Testimonial />
      </div>
    </div>
  );
};

export default App;
