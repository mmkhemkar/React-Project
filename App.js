import React from "react";
import ReactDOM from "react-dom/client";
import Hedaer from "./components/Header";
import ResturantCard from "./components/ResturantCard";
import Body from "./components/Body";


const AppLayout = () => {
  return (
    <div className="app">
      <Hedaer />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
