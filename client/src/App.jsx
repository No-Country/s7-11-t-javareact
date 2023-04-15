import React, { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <AppRoutes isAuthenticated={isAuthenticated} />
    </div>
  );
};

export default App;
