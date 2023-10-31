import React from 'react'
import "./organize.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Organize = () => {
  return (
    <>
        <div className="organize">
            <h1>🖐️</h1>
            <h1>Organize content with pages</h1>
            <p>Use our pages feature to organize all your content, and turn your profile into a mini yet mighty website.</p>
            <div className="image_slider">
            <Carousel
         className="courasel"
         autoPlay={true}
         interval={2000}
         infiniteLoop={true}
         showThumbs={false}
         showArrows={false}
         showIndicators={false}
         >
              <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/feature-pages-5.png" alt="" />
              <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/feature-pages-2.png" alt="" />
              <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/feature-pages-1.png" alt="" />
              <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/feature-pages-3.png" alt="" />
         </Carousel>
         <button>More Feature</button>
            </div>
        </div>
    </>
  )
}

export default Organize
