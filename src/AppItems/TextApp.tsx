import React, { useState } from "react";
import "./TextApp.css";

const App: React.FC = () => {
  const [input, updateInput] = useState("<h1>Hello, world!</h1>\n<p>This is some HTML.</p>");

  return (
    <div>
    <div className="main">
      <h3>Output</h3>
      <div className="outBox" dangerouslySetInnerHTML={{__html: input}} ></div>
      </div>
      
    <div className="MainCont">
      <footer>
      <h3>Input HTML</h3>
      <textarea className="box"
        id="html-content"
        onChange={(e: any) => {
          updateInput(e.target.value);
        }}
        value={input}
      />
      </footer>
    </div>
    </div>
  );
};

export default App;