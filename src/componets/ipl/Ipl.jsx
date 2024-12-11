import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";
import { useEffect } from "react";
import "./ipl.css";
import ButtonBsae from "../utilities/ButtonBsae";

const Ipl = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  return (
    <div>
      {/* <h1>Ipl</h1> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <h1 style={{ fontStyle: "italic" }}>Match Highlights</h1>
        <div style={{ display: "flex" }}>
          <ButtonBsae
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FaArrowLeft />
          </ButtonBsae>
          <ButtonBsae
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FaArrowRight />
          </ButtonBsae>
        </div>
      </div>
      <div style={{ margin: 30 }}>
        <Slider
          dots
          dotsClass="slick-dots line-indicator"
          ref={sliderRef}
          slidesToShow={4}
          slidesToScroll={4}
          customPaging={(i) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "-10px",
                opacity: 0,
              }}
            >
              {i}
            </div>
          )}
        >
          {Array(10)
            .fill("")
            .map(() => (
              <div style={{ margin: 20 }}>
                <img
                  style={{ width: 310, objectFit: "contain", borderRadius: 10 }}
                  src="https://resources.platform.iplt20.com/photo-resources/2021/05/02/25eae35d-5165-4608-b666-a27501622f02/H4pPnjIC.jpg?width=390&height=219"
                  alt=""
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Ipl;
