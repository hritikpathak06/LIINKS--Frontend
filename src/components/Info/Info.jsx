import React from "react";
import "./info.css";

const Info = () => {
  return (
    <>
      <div className="main_div">
        <div className="left_div">
          <h1>Why is Liinks the best? ⭐</h1>
          <p>With our robust customization options and powerful block types, your profile will stand out from the noise. We're also more affordable than the competition, and a great choice for teams.</p>
          <button>Get Started</button>
        </div>
        <div className="right_div">
          <div className="content first">
            <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/compare-grid-customize.png" alt="" />
            <h2>More customizable</h2>
            <p>More options to design your page, and have it match your brand</p>
          </div>
          <div className="content second">
            <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/compare-grid-powerful.png" alt="" />
            <h2>More Powerful</h2>
            <p>Greater variety of block layouts and more options for organization</p>
          </div>
          <div className="content third">
            <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/compare-grid-affordable.png" alt="" />
            <h2>More affrodable</h2>
            <p>More options to design your page, and have it match your brand</p>
          </div>
          <div className="content fourth">
            <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/compare-grid-team.png" alt="" />
            <h2>Great For Teams</h2>
            <p>More options to design your page, and have it match your brand</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
