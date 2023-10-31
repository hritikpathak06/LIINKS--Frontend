import React from "react";
import "./custom.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import LadOut from "./LadOut";

const CustomLayouts = () => {
  return (
    <>
      <div className="divmain">
        <div className="left_div_main">
         <Carousel
         className="courasel"
         autoPlay={true}
         interval={2000}
         infiniteLoop={true}
         showThumbs={false}
         showArrows={false}
         showIndicators={false}
         >
            <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/feature-instagram-1.png" alt="" />
            <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/feature-instagram-2.png" alt="" />
            <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/feature-instagram-3.png" alt="" />
            <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/feature-instagram-3.png" alt="" />
         </Carousel>
        </div>
        <div className="right_div_main">
            <h1>Auto-publish 📷 from Instagram</h1>
            <p>Automatically add links from the captions of new Instagram posts. Never again worry about your followers having to manually type a link in their browser.</p>
            <button>More Features</button>
        </div>
      </div>
    </>
  );
};

export default CustomLayouts;
