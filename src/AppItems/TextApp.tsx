import React, { useState, useEffect } from "react";
import "./TextApp.css";
import { initialOptions } from "./TextOption";
import useModal from './useModal';
import Cookies from "js-cookie";

type Option = {
  id: string;
  index: number;
  label: string;
  value: string;
};

type FuncKeySetProps = {
  optionItem: Option[];
  SetOptionItem: React.Dispatch<React.SetStateAction<Option[]>>; // 追加する
}

const FuncKeySet: React.FC<FuncKeySetProps> = ({ optionItem, SetOptionItem }) => {
  // funtion key option value setup
  const handleOptionValueChange = (index: number, e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newOptionItem = [...optionItem];
    newOptionItem[index].value = e.target.value;
    SetOptionItem(newOptionItem);
    Cookies.set("options", JSON.stringify(newOptionItem));
  };

  const handleOptionValueChange2 = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newOptionItem = [...optionItem];
    newOptionItem[index].label = e.target.value;
    SetOptionItem(newOptionItem);
    Cookies.set("options", JSON.stringify(newOptionItem));
  };
  
  // Function key設定用処理
  const funcKey_set = () =>{
    return (
            <div className="textBox">
              {optionItem.map((option) => (
                <div key={option.index} className="option">
                  <label>{option.label}</label>
                  <input type="text"
                    defaultValue={option.label}
                    onBlur={(e) =>{ handleOptionValueChange2(option.index, e)}}
                  />
                  <br></br>
                  <textarea
                    className="aft"
                    defaultValue={option.value}
                    onBlur={(e) =>{ handleOptionValueChange(option.index, e)}}
                  />
                </div>
              ))}
            </div>
    );
  }

  return <>{funcKey_set()}</>;
};

const App: React.FC = () => {
  // function key modal
  const { Modal, toggleModal } = useModal();
  const { Modal2, toggleModal2 } = useModal();
  // input text default set
  const [input, setInput] = useState("<h1>Hello, world!</h1>\n<p>This is some HTML.</p>");
  // function key option defalt set
  const [optionItem, setOptionItem] = useState<Option[]>(initialOptions);  

  // Input textarea function key item Plus SetUp
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
  
  // Input textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    Cookies.set("text", JSON.stringify(e.target.value));
  };

  // funtion key option cookie set up
  useEffect(() => {
    const cookieOptions = Cookies.get("options");
    const cookieTexts = Cookies.get("text");
    if (cookieOptions) {
      const parsedOptions: Option[] = JSON.parse(cookieOptions);
      setOptionItem(parsedOptions);
    }
    if (cookieTexts) {
      const parsedText: string = JSON.parse(cookieTexts);
      setInput(parsedText);
    }
  }, []);

  // Function key用処理
  const btn_return = () =>{
    return (
      <>
      <button onClick={toggleModal}>Function Key</button>
            <Modal>
                <div className="MainCont">
                  <footer>
                    <ul>
                      {optionItem.map((option) => (
                        <li key={option.index} data-label={option.id} onClick={() => InputPlus(option)}>
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </footer>
                  <button onClick={toggleModal2}>設定</button>
                    <Modal2>
                        <div id="overlay">
                          <div className="main">
                            <div id="content">
                            <div id="mini_cnt">
                              <h3>キー設定</h3>
                              制作画面で使用できる簡易キーを設定できます。<br></br>
                              ※注意※ 改行を行いたい場合、「\n」を挟んでから設定してください。
                              </div>
                          <FuncKeySet
                            optionItem={optionItem}
                            SetOptionItem={setOptionItem}
                          />
                          <button onClick={toggleModal2}>完了</button>
                            </div>
                          </div>
                        </div>
                    </Modal2>
                </div>
            </Modal>
        </>
    )
  }

  return (
    <div>
      <div className="main">
        <h3>Output</h3>
        <div className="outBox" dangerouslySetInnerHTML={{ __html: input }}></div>
      </div>

      <div className="MainCont">
        <footer>
          <h3>Input HTML</h3>
            {btn_return()}
            <br></br>
          <textarea className="box" id="html-content" onChange={handleInputChange} value={input} />
        <br></br>
        </footer>
      </div>
    </div>
  );
};

export default App;