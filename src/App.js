import React from "react";
import "./App.css";
import StickyScroller from "./StickyScroller";

function App() {
  return (
    <div className="App">
      <StickyScroller
        items={[
          <div
            style={{
              height: "40px",
              width: "40px",
              backgroundColor: "Aquamarine",
            }}
          />,
          <div
            style={{ height: "40px", width: "40px", backgroundColor: "Coral" }}
          />,
          <div
            style={{
              height: "40px",
              width: "40px",
              backgroundColor: "GreenYellow",
            }}
          />,
        ]}
      />
    </div>
  );
}

export default App;
