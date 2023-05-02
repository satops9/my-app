import React, { useState } from "react";
import "./TextApp.css";

type Option = {
  label: string;
  value: string;
};
const options: Option[] = [
  { label: "html", value: '<!DOCTYPE html>\n<html lang="ja">\n<head>\n\n<title>TITLE</title>\n</head>\n<body>\n\n<body/>\n</html>' },
  { label: "br", value: "<br>" },
  { label: "H", value: "<h1>text</h1>" },
  { label: "P", value: "<p>Paragraph</p>" },
  { label: "div", value: "<div>item</div>" },
  { label: "Link", value: "<a href='#'>Link</a>" },
];

const App: React.FC = () => {
  const [input, setInput] = useState("<h1>Hello, world!</h1>\n<p>This is some HTML.</p>");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const InputPlus = (options: Option) => {
    const textarea = document.getElementById("html-content") as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const after = text.substring(end, text.length);
    textarea.value = before + options.value + after;
    textarea.selectionStart = start + options.value.length;
    textarea.selectionEnd = start + options.value.length;
    setInput(textarea.value);
  };
  

  return (
    <div>
      <div className="main">
        <h3>Output</h3>
        <div className="outBox" dangerouslySetInnerHTML={{ __html: input }}></div>
      </div>

      <div className="MainCont">
        <footer>
          <h3>Input HTML</h3>
          <textarea className="box" id="html-content" onChange={handleInputChange} value={input} />
          <ul>
          {options.map((option) => (
          <li key={option.value} onClick={() => InputPlus(option)}>
            {option.label}
          </li>
        ))}
      </ul>
        </footer>
      </div>
    </div>
  );
};

export default App;