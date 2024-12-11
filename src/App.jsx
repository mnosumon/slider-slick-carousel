import React from "react";
import MultiItemCarousel from "./componets/MultiItemCarosel";
import Testimonial from "./componets/testMonial/TestMonial";
import BootstrapMultiCarousel from "./componets/bootstrapMultiCarousel/BootstrapMultiCarousel";
import Carousel from "./componets/carousel/Carousel";

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
      <div className="multiSlide">
        <Carousel />
      </div>
    </div>
  );
};

export default App;
