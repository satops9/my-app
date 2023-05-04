/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./TextApp.css";
import "./ChatApp.css";
import useModal from './useModal';
import { C_FuncKeySet } from './ChatModal';
import Cookies from "js-cookie";
import { generateRandomString, submitBbsSetChange, 
         handleNumbChange, handleIdChange, handleTextChange} from './ChatSub';


// 掲示板風の表現・演出を制作するジェネレーター
// 本体
const App: React.FC = () => {
    // setする投稿内容をヘッダー付きで表示したもの
    const [inputViewAll, setInputViewAll] = useState("");
    // setする投稿内容のみをまとめたもの
    const [inputViewItem, setInputViewItem] = useState("");
    // set COde Input State
    const [inputCodeAll, setInputCodeAll] = useState("");
    const [inputCodeItem, setInputCodeItem] = useState("");
    // Chat state
    const [chatNum,   setChatNum] = useState(1);
    const [chatTitle, setChatTitle] = useState("デフォルト掲示板名無し");
    const [chatId,    setChatId] = useState(generateRandomString(10));
    const [chatText,  setChatText] = useState("");

    // setting item
    const [optionColor, SetOptionColor]  = useState("");
    const [optionName , SetOptionNames]  = useState("デフォルトスレ主,デフォルト掲示板ななし");
    
    const [optionId   , SetOptionId]     = useState<boolean>(true);

    // setting modal
    const { Modal2, toggleModal2 } = useModal();
    const { Modal, toggleModal } = useModal();
    const { Modal3, toggleModal3 } = useModal();

    const selectDivRef = useRef<HTMLDivElement>(null);

    // Itemp Input
    const handleInputChange = (chat: string, code:string ) => {
        setInputViewAll(chat);
        setInputCodeAll(code);
        Cookies.set("ChatText", JSON.stringify(chat));
        Cookies.set("ChatCode", JSON.stringify(code));
    };

    // 投稿ボタン押下処理
    const submitNameChange = () => {  
      submitBbsSetChange(
        inputViewItem, inputCodeItem, 
        optionColor, optionId, 
        chatNum, chatTitle, chatId, chatText, 
        setChatNum, setChatId, setChatText,
        handleInputChange, setInputViewItem, setInputCodeItem);
  };

    // 投稿主選択ボックスの設定
    const titleOptions = Array.from(new Set(optionName.split(",")));
    const optionsTitleSet = titleOptions.map((c) => ({
      value: c,
      label: c,
    }));
    // 投稿主選択ボックスの変更処理
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
        setInputViewAll(parsedText);
      }
      if (cookieCodes) {
        const parsedText: string = JSON.parse(cookieCodes);
        setInputCodeAll(parsedText);
      }
    }, []);

    useEffect(() => {
      if (selectDivRef.current) {
        selectDivRef.current.scrollTop = selectDivRef.current.scrollHeight;
      }
    }, [inputViewAll, inputCodeAll]);
    
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
                <div className="btnMain">
                <button onClick={toggleModal2}>完了</button>
                </div>
                  </div>
                </div>
              </div>
          </Modal2>
        </>
    )
  }

  const copyModal = () =>{
    navigator.clipboard.writeText(inputCodeAll);
    return (
      <>
      <button onClick={toggleModal}>コピー</button>
            <Modal>
                <div id="overlay">
                  <div className="mod_main">
                  <div id="content">
                  <div id="mini_cnt">
                    <h3>コピー完了</h3>
                  </div>
                  <br></br>
                  <div className="btnMain">
                  <button onClick={toggleModal}>終了</button>
                  </div>
                    </div>
                  </div>
                </div>
            </Modal>
        </>
    )
  }

  // リセット処理
  const resetCode = () =>{
    Cookies.remove("ChatText");
    Cookies.remove("ChatCode");
    setInputViewAll("");
    setInputViewItem("");
    setInputCodeAll("");
    setInputCodeItem("");
    setChatNum(1);
    setChatId(generateRandomString(10));
    setChatText("");
  };

  const rsetModal = () =>{
    const handleReset = () => {
      resetCode();
      toggleModal3();
    };
    return (
      <>
      <button onClick={toggleModal3}>リセット</button>
            <Modal3>
                <div id="overlay">
                  <div className="mod_main">
                  <div id="content">
                  <div id="mini_cnt">
                    <h3>リセット処理</h3>
                    <p>行う場合は「実行」</p>
                    <p>行わない場合は「終了」を押してください。</p>
                    <p>※1度実行すると修復できませんのでご注意ください。</p>
                  </div>
                  <br></br>
                  <div className="btnMain">
                  <div id="setBtn">
                  <button id="setBtn_r" onClick={handleReset}>実行</button> 
                  </div>
                  <div id="setBtn">
                  <button onClick={toggleModal3}>終了</button>
                  </div>
                  </div>
                    </div>
                  </div>
                </div>
            </Modal3>
        </>
    )
  }

    // Main
    return(
        <div className="weapper">
        <div className="main">
        <Tabs>
            <TabList>
              <Tab>View</Tab>
              <Tab>H-Code</Tab>
            </TabList>
            <TabPanel>
            <div className="outBox" id="views" dangerouslySetInnerHTML={{ __html: inputViewAll }} ref={selectDivRef} />
            </TabPanel>
            <TabPanel>
            <div className="outBox" id="h_code" ref={selectDivRef}><pre>{inputCodeAll}</pre></div>
            </TabPanel>
        </Tabs>
        </div>

        <div className="MainCont">
        <footer>
          <br></br>
          {btn_return()} {copyModal()} {rsetModal()}
          <div className="C_menu">
          <input type="text" id="C_numb"   onChange={(e) => handleNumbChange(e, setChatNum)}  value={chatNum}/>:
          <select
            id="C_title"
            onChange={handleChange}
            defaultValue={titleOptions[0]} >
            {optionsTitleSet.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <input type="text" id="C_id" onChange={(e) => handleIdChange(e, setChatId)}    value={chatId}/>
          </div>
          <textarea className="box" id="html-content" onChange={(e) => handleTextChange(e, setChatText)} value={chatText} />
          <button id="sub_Btn" onClick={submitNameChange}>投稿</button>
        </footer>
      </div>
        </div>
    );
}

export default App;