import React, { useState, useEffect, useRef } from "react";
import "../TextApp.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useModal from '../useModal';
import { replacements, H_replacements, H_code, N_code } from "./RepContent";
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
  const { Modal2, toggleModal2 } = useModal();
  // input text default set
  const [input, setInput] = useState("<h1>HamelnTOP</h1>\n<p>This is some HTML.</p>");
  const [inputB, setInputB] = useState("");
  const [inputH, setInputH] = useState("ハーメルン対応");
  // function key option defalt set
  const [optionItem, setOptionItem] = useState<Code_H[]>(H_code);  
  const [optionItem2, setOptionItem2] = useState<Code_H[]>(N_code);  

  // input
  const selectDivRef = useRef<HTMLDivElement>(null);
  // inputH
  const selectDivRef2 = useRef<HTMLTextAreaElement>(null);

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
    //Cookies.set("code", JSON.stringify(code));
  };

  // funtion key option cookie set up
  useEffect(() => {
    const cookieOptions = Cookies.get("options");
    const cookieTexts = Cookies.get("text");
    //const cookieTexts2 = Cookies.get("text2");
    //const cookieCode = Cookies.get("code");
    if (cookieOptions) {
      const parsedOptions: Code_H[] = JSON.parse(cookieOptions);
      setOptionItem(parsedOptions);
    }
    if (cookieTexts) {
      const parsedText: string = JSON.parse(cookieTexts);
      setInputB(parsedText);
    }
    /*if (cookieTexts2) {
      const parsedText2: string = JSON.parse(cookieTexts2);
      setInput(parsedText2);
    }
    if (cookieCode) {
      const parsedCode: string = JSON.parse(cookieCode);
      setInputH(parsedCode);
    }*/
  }, []);

  useEffect(() => {
    if (selectDivRef.current) {
      selectDivRef.current.scrollTop = selectDivRef.current.scrollHeight;
    }
    if (selectDivRef2.current) {
      selectDivRef2.current.scrollTop = selectDivRef2.current.scrollHeight;
    }
  }, [input, inputH]);

  // Function key用処理
  const btn_return = () =>{
    return (
      <>
      <button onClick={toggleModal}>共通</button>
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

  // ニコニコ専用のFuntion key用処理
  const btn_return2 = () =>{
    return (
      <>
      <button onClick={toggleModal2}>大百科風</button>
            <Modal2>
                <div className="MainCont">
                  <footer>
                    <ul>
                      {optionItem2.map((option) => (
                        <li key={option.index} data-label={option.id} onClick={() => InputPlus(option)}>
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </footer>
                </div>
            </Modal2>
        </>
    )
  }

  // ボタンを押したときにダウンロードする関数
  const handleDownload = () => {
    const element = document.createElement('a');
    element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(inputB);
    element.download = 'satop_特殊タグ.txt';
    element.click();
  }

  // ボタンを押したときに読み込みする関数
  const handleFileRead = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        const contents = event.target?.result as string;
        setInputB(contents);
      };
  
      reader.readAsText(file);
    }
  };
  
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="weapper">
      <div className="main">
      <Tabs>
            <TabList>
              <Tab>View</Tab>
              <Tab>H-Code</Tab>
            </TabList>
            <TabPanel>
            <div className="outBox" dangerouslySetInnerHTML={{ __html: input }} ref={selectDivRef}></div>
            </TabPanel>
            <TabPanel>
            <textarea className="outBox" defaultValue ={inputH} ref={selectDivRef2} />
            </TabPanel>
        </Tabs>
      </div>

      <div className="MainCont">
        <footer>
          <h3>Input TEXT</h3>
          {btn_return()}{btn_return2()}
          <p style={{textAlign:"right", float:"right"}}><input type="file" accept=".txt" ref={fileInputRef} onChange={handleFileRead} style={{ display: "none" }} />
<button onClick={() => fileInputRef.current?.click()}>
  ローカル読込
</button><button onClick={handleDownload}>ローカル保存</button></p>
          <textarea className="box" id="html-content" placeholder={fs} onChange={handleInputChange} defaultValue={inputB} />
        <br></br>
        </footer>
      </div>
    </div>
  );
};

export default PaegTop;