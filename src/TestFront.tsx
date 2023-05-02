import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TextApp from "./AppItems/TextApp";

const App: React.FC = () => {
  return (
    <div>
    <DndProvider backend={HTML5Backend}>
    <TextApp />
    </DndProvider>
    </div>
  );
};

export default App;