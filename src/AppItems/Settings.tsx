import React, { useState } from "react";
import "./TextApp.css";

const App: React.FC = () => {
  const [input, updateInput] = useState("<h1>Hello, world!</h1>\n<p>This is some HTML.</p>");

  return (
    <div>
    <div className="main">
      <h3>※　開発中です　※</h3>
    </div>
    </div>
  );
};

export default App;