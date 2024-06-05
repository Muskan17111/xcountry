import React from "react";
import Card from "./component/card";

function App() {
  return (
    <div className="App">
      <Card fetchEndpoint="https://restcountries.com/v3.1/all"/>
    </div>
  );
}

export default App;

