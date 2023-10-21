import React, { useEffect } from "react";
import "./styles.css";
import { AutoBatchEventHandler } from "./components/AutoBatchEventHandler";
import { AutoBatchOther } from "./components/AutoBatchOther";
import { Transition } from "./components/Transition";
import { ReactQuery } from "./components/ReactQuery";

export default function App() {
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <ReactQuery />
    </div>
  );
}

export default App;
