/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect, useRef } from "react";
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
    // setする投稿内容をヘッダー付きで表示したもの
    const [inputViewAll, setInputViewAll] = useState("");
    // setする投稿内容のみをまとめたもの
    const [inputViewItem, setInputViewItem] = useState("");
    // set COde Input State
    const [inputCodeAll, setInputCodeAll] = useState("");
    const [inputCodeItem, setInputCodeItem] = useState("");
    // Chat state
    const [chatNum, setChatNum] = useState(1);
    const [chatTitle, setChatTitle] = useState("デフォルト掲示板名無し");
    const [chatId, setChatId] = useState(generateRandomString(10));
    const [chatText, setChatText] = useState("");

    // setting item
    const [optionColor, SetOptionColor]  = useState("");
    const [optionName , SetOptionNames]  = useState("デフォルトスレ主,デフォルト掲示板ななし");
    const [optionId   , SetOptionId]     = useState<boolean>(true);

    // setting modal
    const { Modal2, toggleModal2 } = useModal();

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
      console.log(`押されたタイミング:${inputViewItem}`)    
      // View Mode
      const viewCss = {
        'background-Color':optionColor,
        'font-Size': '15px',
        padding: '5px'
    }
    const inputViewMode = () => {
        const cssString = Object.keys(viewCss).map(key => `${key}:${viewCss[key as keyof typeof viewCss]}`).join(';');
        const heder = `<div style="${cssString}">`;
        const footer = `</div>`;

        let text = "";
        if(optionId === true){
            text = `
            <p>${chatNum}: ${chatTitle} ID:${chatId}</p>
            <p>${chatText}</p>
            `;
        }else{
            text = `
            <p>${chatNum}: ${chatTitle}</p>
            <p>${chatText}</p>
            `;
        }
        const main = inputViewItem + text;
        setInputViewItem(main);
        const All = `${heder}
                     ${main}
                     ${footer}`;
        return ( All )
    }

    // H-Code Mode
    const inputH_CodeMode =() => {
        const bcCol_A = 
`《boxbgcolor:${optionColor}》
《box:p0.5》`;
        const bcCol_B = 
`《/box》
《/boxbgcolor》`;
        const id_A = `《id:r${chatNum}》`; 
        const id_B = `《id:r${chatNum}e》`; 
        let textItem = "";

        if(optionId === true){
            textItem = 
`${id_A}${chatNum}: ${chatTitle} ID:${chatId}
${chatText}

${id_B} 
`;
        }else{
          textItem = 
`${id_A}${chatNum}: ${chatTitle}
${chatText}

${id_B} 
`;
        }

        const main = inputCodeItem + textItem;
        setInputCodeItem(main);
        const All = 
`${bcCol_A}
${main}
${bcCol_B}`;
        return ( All )
    }

    var num = chatNum+1;
    setChatNum(num);
    setChatId(generateRandomString(10));
    handleInputChange(inputViewMode(),inputH_CodeMode())
        //Cookies.set("ChatText", JSON.stringify(e.target.value));
  };

    // number set
    const handleNumbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChatNum(Number(e.target.value));
        //Cookies.set("ChatText", JSON.stringify(e.target.value));
    };

    // Id set
    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChatId(e.target.value);
        //Cookies.set("ChatText", JSON.stringify(e.target.value));
    };
    
    // text set
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setChatText(e.target.value);
        //Cookies.set("ChatText", JSON.stringify(e.target.value));
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
          <textarea className="box" id="html-content" onChange={handleTextChange} />
          <button id="sub_Btn" onClick={submitNameChange}>投稿</button>
        </footer>
      </div>
        </>
    );
}

export default App;