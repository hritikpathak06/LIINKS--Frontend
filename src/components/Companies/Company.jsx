import React from "react";
import "./company.css";

const Company = () => {
  const row1 = [
    {
      id: 1,
      name: "Rich Selection Of Box 📤",
    },
    {
      id: 2,
      name: "Go Live In Minutes 🕧",
    },
    {
      id: 3,
      name: "Simple And Easy 👌",
    },
  ];
  return (
    <div>
      <div className="marque">
      <div className="marqueGroup">
      {row1.map((r) => (
        <p>{r.name}</p>
      ))}
      </div>
      <div className="marqueGroup">
      {row1.map((r) => (
        <p>{r.name}</p>
      ))}
      </div>
      </div>
    </div>
  );
};

export default Company;
