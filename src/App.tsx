import React from "react";
import HomePage from "./pages/HomePage";

import "./App.css";

const App: React.FC = () => {
  return (
    <div data-testid="app">
      <HomePage />
    </div>
  );
};

export default App;
