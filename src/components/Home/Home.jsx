import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container-fluid main_container">
        <div className="left_container">
          <h1>Centralize your online presence with Liinks</h1>
          <p>
            Gather all your links, social media, music, videos, and more in one
            place. Create a page that matches your style and never worry about
            changing your bio link again
          </p>
          <h2>Hello wolrd</h2>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="www.links.//com"
              aria-label="Search"
            />
            <button className="btn" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="right_container">
          <img
            src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/hero-graphic.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
