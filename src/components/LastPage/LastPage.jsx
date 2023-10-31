import React from "react";
import "./last.css";

const LastPage = () => {
  return (
    <>
      <div className="lastPage">
        <div className="last_left">
          <img
            src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/signup.png"
            alt=""
          />
        </div>
        <div className="last_right">
          <h1>Try 🚩 Liinks now!</h1>
          <form action="#">
            <input type="text" placeholder="links.com//you started" />
            <button>Get Started</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LastPage;
