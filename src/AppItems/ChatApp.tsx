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
         handleNumbChange, handleTextChange, handleIdsChange} from './ChatSub';


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

    // setting item 背景色
    const [optionColor, SetOptionColor]  = useState("");
    // setting item 投稿主
    const [optionName , SetOptionNames]  = useState("デフォルトスレ主,デフォルト掲示板ななし");
    // setting item IDの有無
    const [optionId   , SetOptionId]     = useState<boolean>(true);
    // setting item 選択式IDの内容
    const [selectIdText, SetSelectIdText] = useState("testId,TESTid");
    const [optionsIdSet, setOptionsIdSet] = useState<{ value: string; label: string;}[]>([ {value: chatId, label:chatId}, { value: "testId", label: "testId" }, { value: "TESTid", label: "TESTid" } ]);

    // setting modal
    const { Modal2, toggleModal2 } = useModal();
    const { Modal, toggleModal } = useModal();
    const { Modal3, toggleModal3 } = useModal();

    const selectDivRef = useRef<HTMLDivElement>(null);

    // Cookies Itemp set
    const handleInputChange = (chat: string, code:string, textItem: string, codeItem: string ) => {
        // 表示内容の設定を保存
        setInputViewAll(chat);
        setInputCodeAll(code);
        setInputViewItem(textItem);
        setInputCodeItem(codeItem);
        Cookies.set("ChatTexts", JSON.stringify(chat));
        Cookies.set("ChatCodes", JSON.stringify(code));
        Cookies.set("ChatTextsItem", JSON.stringify(textItem));
        Cookies.set("ChatCodesItem", JSON.stringify(codeItem));

        // 入力内容の設定を保存
        Cookies.set("ChatNum", JSON.stringify(chatNum));
        Cookies.set("ChatId", JSON.stringify(chatId));
        Cookies.set("ChatText", JSON.stringify(chatText));
    };

    // 投稿ボタン押下処理
    const submitNameChange = () => {  
      submitBbsSetChange(
        inputViewItem, inputCodeItem, 
        optionColor, optionId, 
        chatNum, chatTitle, chatId, chatText, selectIdText,
        setChatNum, setChatId, setChatText,
        handleInputChange, setOptionsIdSet, setInputViewItem, setInputCodeItem);
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

    useEffect(() => {
      setChatTitle(optionsTitleSet[0].value);
    }, [optionName]);

    // funtion key option cookie set up
    useEffect(() => {
      optionCookieSet();
    }, []);

    // function key option cookie set up
    const optionCookieSet= () =>{
      const cookieTexts = Cookies.get("ChatTexts");
      const cookieCodes = Cookies.get("ChatCodes");
      const cookieTextItem = Cookies.get("ChatTextsItem");
      const cookieCodeItem = Cookies.get("ChatCodesItem");
      if (cookieTexts) {
        const parsedText: string = JSON.parse(cookieTexts);
        setInputViewAll(parsedText);
      }
      if (cookieCodes) {
        const parsedText: string = JSON.parse(cookieCodes);
        setInputCodeAll(parsedText);
      }
      if (cookieTextItem) {
        const parsedText: string = JSON.parse(cookieTextItem);
        setInputViewItem(parsedText);
      }
      if (cookieCodeItem) {
        const parsedText: string = JSON.parse(cookieCodeItem);
        setInputCodeItem(parsedText);
      }

      const cookieNum = Cookies.get("ChatNum");
      const cookieText = Cookies.get("ChatText");
      if (cookieNum) {
        const parsedText: number = JSON.parse(cookieNum);
        setChatNum(parsedText+1);
      }
      if (cookieText) {
        const parsedText: string = JSON.parse(cookieText);
        setChatText(parsedText);
      }
    };

    useEffect(() => {
      if (selectDivRef.current) {
        selectDivRef.current.scrollTop = selectDivRef.current.scrollHeight;
      }
    }, [inputViewAll, inputCodeAll]);

    const selectIdsTexts = Array.from(new Set(selectIdText.split(",")));

    useEffect(() => {
      const optionsIdsSet = selectIdsTexts.map((c) => ({
        value: c,
        label: c,
      }));
      setOptionsIdSet(optionsIdsSet);
    }, [selectIdText]);
    
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
                  selectIdText   = { selectIdText   }
                  SetOptionColor = { SetOptionColor }
                  SetOptionNames = { SetOptionNames }
                  SetOptionId    = { SetOptionId    }
                  SetIdsText     = { SetSelectIdText}
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
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(inputCodeAll);
        return alert("コピーしました");
      } catch (error) {
        console.error("コピーに失敗しました", error);
        return alert(`コピーに失敗しました
  ${error}`);
      }
    };
  return (<button onClick={handleCopy}>コピー</button>)
  }

  // リセット処理
  const resetCode = () =>{
    Cookies.remove("ChatTexts");
    Cookies.remove("ChatCodes");
    Cookies.remove("ChatTextsItem");
    Cookies.remove("ChatCodesItem");
    Cookies.remove("ChatNum");
    setInputViewAll("");
    setInputViewItem("");
    setInputCodeAll("");
    setInputCodeItem("");
    setChatNum(1);
    var ids = generateRandomString(10);
    var text = Array.from(new Set(selectIdText.split(",")));
    setChatId(ids);
    setOptionsIdSet([{value: ids, label:ids}, {value: text[0], label:text[0]}, {value: text[1], label:text[1]}]);
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
        <div className="main2">
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
            onChange={handleChange} >
            {optionsTitleSet.map((option) => (
              <option key={option.value} value={option.value} selected={option.value === optionsTitleSet[0].value}>
                {option.label}
              </option>
            ))}
          </select>
          <select
            id="C_id"
            onChange={(e) => handleIdsChange(e, setChatId)}>
            {optionsIdSet.map((option) => (
              <option key={option.value} value={option.value} selected={option.value === chatId}>
                {option.label}
              </option>
            ))}
          </select>
          </div>
          <textarea className="box_L" id="html-content" onChange={(e) => handleTextChange(e, setChatText)} value={chatText} />
          <button id="sub_Btn" onClick={submitNameChange}>投稿</button>
        </footer>
      </div>
        </div>
    );
}

export default App;