import React, { VFC } from "react";
import "./App.css";
import InputSection from "./components/InputSection";
import ResultSection from "./components/ResultSection";
import Button from "./components/Button";

const App: VFC = () => {
  return (
    <>
      <div>
        <InputSection />
        <ResultSection />
      </div>
      <Button />
    </>
  );
};

export default App;
