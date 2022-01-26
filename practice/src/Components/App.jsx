import React from "react";
import Practice, { Calculator, GetName } from "./Practice";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/greeting" element={<Practice />} />
        <Route path="/calculator" element={<Calculator n1="1" n2="2" />} />
        <Route path="/getName" element={<GetName name="Jawad" />} />
      </Routes>
    </>
  );
};

export default App;
