import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./TextApp.css";

const App: React.FC = () => {
  const [input, updateInput] = useState("<h1>Hello, world!</h1>\n<p>This is some HTML.</p>");

  return (
    <div>
      <h3>Input HTML</h3>
      <textarea className="box"
        id="html-content"
        onChange={(e: any) => {
          updateInput(e.target.value);
        }}
        value={input}
      />
<DndProvider backend={HTML5Backend}>
      <h3>Output</h3>
      <div className="outBox" dangerouslySetInnerHTML={{__html: input}} ></div>
      </DndProvider>
    </div>
  );
};

export default App;