import React from "react";
import "./cards.css";

const Cards = () => {
  return (
    <>
      <div className="main_divs">
        <div className="left_divs">
          <h1>Who uses Liinks? 🌐 </h1>
          <p>Over 10,000 artists, creators, small business owners, and more use Liinks to centralize their online presence.</p>
          <button>More Profiles</button>
        </div>
        <div className="right_divs">
          <div className="content_div">
            <img src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/who-graphic.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
