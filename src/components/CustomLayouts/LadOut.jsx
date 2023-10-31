import React from "react";
import "./custom.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const LadOut = () => {
  return (
    <>
      <div className="divmain">
    <div className="right_div_main">
            <h1>Group blocks 🚷 into a folder</h1>
            <p>Use folders to group relevant blocks and keep your page feeling organized and fresh.</p>
            <button>More Features</button>
        </div>
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
            <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/feature-folder-1.png" alt="" />
            <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/feature-folder-2.png" alt="" />
         </Carousel>
        </div>
        
      </div>
    </>
  );
};

export default LadOut;
