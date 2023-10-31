import React from "react";
import "./connections.css";

const Connections = () => {
  const details = [
    {
      id: 1,
      text: "Liinks: thank you so much for allowing us to look better for cheaper. Bye bye Linktree.",
      email: "@ninasoromusic",
      occ: "Musician",
      img: "https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/images/reviews/harrypotterfilmlocations.jpg",
    },
    {
      id: 2,
      text: "I'm simply in love with my new links page made on Liinks. Click the link in my bio to check it out!",
      email: "@outintech",
      occ: "Non-profit",
      img: "https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/images/reviews/outintech.jpg",
    },
    {
      id: 3,
      text: "Out in Tech, has been using Liinks since its inception. We’re proud to be using Liinks on our social media platforms!",
      email: "@summerbedmusic",
      occ: "Summer-band",
      img: "https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/images/reviews/summerbedmusic.jpg",
    },
    {
      id: 4,
      text: "I'm simply in love with my new links page made on Liinks. Click the link in my bio to check it out!",
      email: "@harrypotterfilmlocations",
      occ: "Digital-Creator",
      img: "https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/images/reviews/harrypotterfilmlocations.jpg",
    },
    {
      id: 5,
      text: "lot of links, check out Liinks! They're a Brooklyn company and they",
      email: "@shannonchapmanmusic",
      occ: "Musician",
      img: "https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/images/reviews/shannonchapmanmusic.jpg",
    },
  ];

  return (
    <>
      <div className="main_content">
        <h1>👾</h1>
        <h1>What are people saying about us?</h1>

        <div className="card-info">

          {details.map((d) => (
            <div className="cardDetails">
            <>
              <p>{d.text}</p>
              <div className="userInfo">
                <img src={d.img} alt="" />
                <div className="infoP">
                    <p>{d.email}</p>
                    <span>{d.occ}</span>
                </div>
              </div>
            </> 
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Connections;
