import React from "react";
import "./App.scss";
import Header from "../header";
import PresentationBlock from "../presentationBlock";

const App = () => {
  return (
    <div className="body">
      <Header />
      <PresentationBlock />
    </div>
  );
};

export default App;
