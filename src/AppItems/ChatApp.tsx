import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./TextApp.css";
import "./ChatApp.css";
import useModal from './useModal';
import { C_FuncKeySet } from './ChatModal';
import Cookies from "js-cookie";

// 掲示板風の表現・演出を制作するジェネレーター

// 掲示板の設定(背景や全体の文字など、掲示板全体に関する設定)
// modal
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


// IDに使用する乱数生成
function generateRandomString(length: number): string {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@+-";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }
  return result;
}

// 本体
const App: React.FC = () => {
    // set Itemp Input state
    const [inputView, setInputView] = useState("");
    // set COde Input State
    const [inputCode, setInputCode] = useState("");
    // Chat state
    const [chatNum, setChatNum] = useState("1");
    const [chatTitle, setChatTitle] = useState("デフォルト掲示板名無し");
    const [chatId, setChatId] = useState(generateRandomString(10));

    // setting item
    const [optionColor, SetOptionColor]  = useState("");
    const [optionName , SetOptionNames]  = useState("");
    const [optionId   , SetOptionId]     = useState("");
    

    // setting modal
    const { Modal2, toggleModal2 } = useModal();

    // Itemp Input
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputView(e.target.value);
        Cookies.set("ChatText", JSON.stringify(e.target.value));
    };

    const handleNumbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChatNum(e.target.value);
        //Cookies.set("ChatText", JSON.stringify(e.target.value));
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChatTitle(e.target.value);
        //Cookies.set("ChatText", JSON.stringify(e.target.value));
    };

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChatId(e.target.value);
        //Cookies.set("ChatText", JSON.stringify(e.target.value));
    };

    
    const titleOptions = Array.from(new Set(optionName.split(",")));

    const optionsTitleSet = titleOptions.map((c) => ({
      value: c,
      label: c,
    }));

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selected = event.target.value;
      setChatTitle(selected);
    };

    // funtion key option cookie set up
    useEffect(() => {
      const cookieTexts = Cookies.get("ChatText");
      const cookieCodes = Cookies.get("ChatCode");
      if (cookieTexts) {
        const parsedText: string = JSON.parse(cookieTexts);
        setInputView(parsedText);
      }
      if (cookieCodes) {
        const parsedText: string = JSON.parse(cookieCodes);
        setInputCode(parsedText);
      }
    }, []);
    
    // modal
    // Function key用処理
  const btn_return = () =>{
    return (
      <>
      <button onClick={toggleModal2}>設定</button>
          <Modal2>
              <div id="overlay">
                <div className="mod_main">
                <div id="content">
                <div id="mini_cnt">
                <h3>キー設定</h3>
                  掲示板全体の設定ができます。<br></br>
                  ※注意※ 「名前」には複数設定できます。<br></br>
                  複数設定する場合は、「,」で区切ってください。
                </div>
                <C_FuncKeySet
                  optionColors   = { optionColor    }
                  optionNames    = { optionName     }
                  optionIds      = { optionId       }
                  SetOptionColor = { SetOptionColor }
                  SetOptionNames = { SetOptionNames }
                  SetOptionId    = { SetOptionId    }
                />
                <button onClick={toggleModal2}>完了</button>
                  </div>
                </div>
              </div>
          </Modal2>
        </>
    )
  }

    // Main
    return(
        <>
        <div className="main">
        <Tabs>
            <TabList>
              <Tab>View</Tab>
              <Tab>H-Code</Tab>
            </TabList>
            <TabPanel>
            <div className="outBox" dangerouslySetInnerHTML={{ __html: inputView }} />
            </TabPanel>
            <TabPanel>
            <div className="outBox" dangerouslySetInnerHTML={{ __html: inputCode }} />
            </TabPanel>
        </Tabs>
        </div>

        <div className="MainCont">
        <footer>
          <h3>Input HTML</h3>
          {btn_return()}
          <div className="C_menu">
          <input type="text" id="C_numb"   onChange={handleNumbChange}  value={chatNum}/>:
          <select
            id="C_title"
            onChange={handleChange}
            defaultValue={titleOptions} >
            {optionsTitleSet.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <input type="text" id="C_id" onChange={handleIdChange}    value={chatId}/>
          </div>
          <textarea className="box" id="html-content" onChange={handleInputChange} />
        </footer>
      </div>
        </>
    );
}

export default App;