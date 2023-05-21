import React, { useState, useEffect } from "react";
import "../TextApp.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useModal from '../useModal';
import { replacements, H_replacements, H_code } from "./RepContent";
import Cookies from "js-cookie";

type Code_H = {
  id: string; // id
  index: number; // index
  label: string; // ラベル
  value: string; // コード
}

const fs: string = `!注意!
ハーメルン対応の特殊タグを利用する場合は、上部にある「特殊タグ」ボタンから設定してください。

テキストエリアにハーメルンの特殊タグをそのまま使用した場合、「View」エリアには正しく表示されません。

※「H-Code」エリアにはタグが表示されます。
`;

const PaegTop: React.FC = () => {
  // function key modal
  const { Modal, toggleModal } = useModal();
  // input text default set
  const [input, setInput] = useState("<h1>HamelnTOP</h1>\n<p>This is some HTML.</p>");
  const [inputB, setInputB] = useState("");
  const [inputH, setInputH] = useState("ハーメルン対応");
  // function key option defalt set
  const [optionItem, setOptionItem] = useState<Code_H[]>(H_code);  

  // Input textarea function key item Plus SetUp
  const InputPlus = (options: Code_H) => {
    const textarea = document.getElementById("html-content") as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const after = text.substring(end, text.length);
    textarea.value = before + options.value + after;
    textarea.selectionStart = start + options.value.length;
    textarea.selectionEnd = start + options.value.length;
    setInputB(textarea.value);
  };

  // Input textarea function key item Plus SetUp
  // 特殊タグをリアルタイムで変換するための関数
  function replaceContent(inputs: string): string {
    let output = inputs;
    replacements.forEach(({ search, replace }) => {
      output = output.replace(new RegExp(search, 'g'), replace);
    });
    return output;
  }
  // ハーメルン用
  function H_replaceContent(inputs: string): string {
    let output = inputs;
    H_replacements.forEach(({ search, replace }) => {
      output = output.replace(new RegExp(search, 'g'), replace);
    });
    return output;
  }
  
  // Input textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputB(e.target.value);
    let text = replaceContent(e.target.value);
    let code = H_replaceContent(e.target.value);
    setInput(text);
    setInputH(code);
    Cookies.set("text", JSON.stringify(e.target.value));
    Cookies.set("text2", JSON.stringify(text));
    Cookies.set("code", JSON.stringify(code));
  };

  // funtion key option cookie set up
  useEffect(() => {
    const cookieOptions = Cookies.get("options");
    const cookieTexts = Cookies.get("text");
    const cookieTexts2 = Cookies.get("text2");
    const cookieCode = Cookies.get("code");
    if (cookieOptions) {
      const parsedOptions: Code_H[] = JSON.parse(cookieOptions);
      setOptionItem(parsedOptions);
    }
    if (cookieTexts) {
      const parsedText: string = JSON.parse(cookieTexts);
      setInputB(parsedText);
    }
    if (cookieTexts2) {
      const parsedText2: string = JSON.parse(cookieTexts2);
      setInput(parsedText2);
    }
    if (cookieCode) {
      const parsedCode: string = JSON.parse(cookieCode);
      setInputH(parsedCode);
    }
  }, []);

  // Function key用処理
  const btn_return = () =>{
    return (
      <>
      <button onClick={toggleModal}>特殊タグ</button>
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
                </div>
            </Modal>
        </>
    )
  }

  return (
    <div className="weapper">
      <div className="main">
      <Tabs>
            <TabList>
              <Tab>View</Tab>
              <Tab>H-Code</Tab>
            </TabList>
            <TabPanel>
            <div className="outBox" dangerouslySetInnerHTML={{ __html: input }}></div>
            </TabPanel>
            <TabPanel>
            <textarea className="outBox" value ={inputH} />
            </TabPanel>
        </Tabs>
      </div>

      <div className="MainCont">
        <footer>
          <h3>Input TEXT</h3>
            {btn_return()}
            <br></br>
          <textarea className="box" id="html-content" placeholder={fs} onChange={handleInputChange} value={inputB} />
        <br></br>
        </footer>
      </div>
    </div>
  );
};

export default PaegTop;