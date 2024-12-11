import React from "react";
import MultiItemCarousel from "./componets/MultiItemCarosel";
import Testimonial from "./componets/testMonial/TestMonial";
import BootstrapMultiCarousel from "./componets/bootstrapMultiCarousel/BootstrapMultiCarousel";

const App = () => {
  return (
    <div className="conatiner">
      <div className="multiSlide">
        <MultiItemCarousel />
      </div>
      <div className="multiSlide">
        <Testimonial />
      </div>
      <div className="multiSlide">
        <BootstrapMultiCarousel />
      </div>
    </div>
  );
};

export default App;
