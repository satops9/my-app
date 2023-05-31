/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../TextApp.css";
import "../ChatApp.css";
import "./all.css";
import useModal from '../useModal';
import Cookies from "js-cookie";
import { Totals, Totals_H, RepTotals } from "./LineContent";

// itemBody のname、text､flagをsetするinterface
export interface itemBodyList {
  name: string;
  text: string;
  flag: boolean;
}

// 掲示板風の表現・演出を制作するジェネレーター
// 本体
const App: React.FC = () => {
// コードのうち、header,footerを除いたbody部分のみを格納するstate | view/H-Code双方に対応
const [itemBody, setItemBody] = useState<itemBodyList[]>([]);
// コード全体を格納するstate | H-Codeにのみ
const [itemAll_H, setItemAll_H] = useState("");

/* コンポーネント:Totals,Totals_H に格納する部分state */

// title state | LINEのTitle
const [titles, setTitles] = useState("");
// name state | selectBoxにセットするカンマ区切りの文字列(初期値は"あなた"固定)
const [names, setNames] = useState("あなた,相手");
// selected name | selectBoxで選択されたname
const [selectName, setSelectName] = useState("");
// text state | textareaのvalueにセットするテキストボックス
const [texts, setTexts] = useState("");
// read state | "既読"表示を行うかどうかのboolean値(初期値は"ture")
const [reads, setReads] = useState(true);

/* setting tab で操作した際のstate */

// optionNames | name stateに関する変更を適用
const nameOptions = Array.from(new Set(names.split(",")));
const option = nameOptions.map((c) => ({
      value: c,
      label: c,
    }))
const [optionNames, setOptionNames] = useState(option);

// setting modal
const { Modal2, toggleModal2 } = useModal();
const { Modal3, toggleModal3 } = useModal();

const selectDivRef = useRef<HTMLDivElement>(null);

// tabの切り替え
const [activeTabIndex, setActiveTabIndex] = useState(0);

/* handle操作 */

// name state selectBox | selectBoxの選択が変更された場合に発火
const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      console.log(event.target.value);
      const selected = event.target.value;
      setSelectName(selected);
};

// text state inputItem | onChangeによって発火
const textHandleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      let text= event.target.value;
      setTexts(text);
    };

// read state checkBox | onChangeによって発火
const readHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      let read= event.target.checked;
      setReads(read);
    };

// title state inputItem | onChangeによって発火
const titleNameHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  let title = event.target.value;
  setTitles(title);
};

// option name state inputItem | onChangeによって発火
const optionNameHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setNames(event.target.value);
};

// item内で選択されたitemを削除 | Totals,Totals_H の引数として渡す
const removeItem = (index: number) => {
  const updatedItemBody = [...itemBody];
  updatedItemBody.splice(index, 1);
  setItemBody(updatedItemBody);
}

// submit処理 | onClickで発火
const submit = () => {
      // 入力内容をチェック
      if(texts === ""){
        const alertText = `⚠ テキストを入力してください ⚠
未入力のまま特殊タグを生成することはできません`;
        return alert(alertText);
      }

      // 入力・設定内容を成形するため、itemBodyに必要情報をset
      const bodyItem = [...itemBody, {name: selectName, text: texts, flag: reads}];
      setItemBody(bodyItem);
      // cookie保存
      Cookies.set("Linebody", JSON.stringify(bodyItem));

			// textareaのstateをリセット
			setTexts("");
}

// itemBody, itemAll_H に変更があった際に発火
useEffect(() => {
if (selectDivRef.current) {
  selectDivRef.current.scrollTop = selectDivRef.current.scrollHeight;
}
}, [itemBody, itemAll_H]);

// 画面が表示された際に発火
useEffect(() => {
  // selectBox内の選択肢を初期値に設定する
  setSelectName(optionNames[0].value);
  // cookieから読み込み
  const cookieBody = Cookies.get("Linebody");
  if (cookieBody) {
    const item : itemBodyList[] = JSON.parse(cookieBody);
    setItemBody(item);
  }
}, []);

// namesが変更された際に発火
useEffect(() => {
  // selectBox内のオプション再更新
  setOptionNames(option);
}, [names]);

// modal
// Function key用処理
const btn_return = () =>{
return (
<>
<button onClick={toggleModal2}>設定</button>
    <Modal2>
        <div>
        <p style={{fontSize:"0.8em"}}>※注意※ 「名前」には複数設定できます。</p>
            <p style={{fontSize:"0.8em"}}>複数設定する場合は、「,」で区切ってください。</p>
        <div className="C_menu2">
        宛先<input type="text" id="C_title2" onBlur={(e) => optionNameHandleChange(e)} defaultValue={names}/>
        </div>
        <div className="C_menu2">
            タイトル<input type="text" id="C_title2" onBlur={(e) => titleNameHandleChange(e)} defaultValue={titles} /><br></br>
        </div>
        </div>
    </Modal2>
  </>
)
}

const copyModal = () => {
  const handleCopy = async () => {
    // tabをH_Codeに切り替えて表示
    setActiveTabIndex(1);
    try {
        await navigator.clipboard.writeText(itemAll_H);
        alert("コピーしました");
    } catch (error) {
      console.error("コピーに失敗しました", error);
      alert(`コピーに失敗しました\n${error}`);
    }
  };

  return <button onClick={handleCopy}>コピー</button>;
};

  // リセット処理
  const resetCode = () =>{
    setItemBody([]);
    setItemAll_H("");
    setTexts("");
    setTitles("");
    setNames("あなた,相手");
    Cookies.remove("Linebody");
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

  // ボタンを押した時にDLする関数
  const pushDownLoad = () => {
    return (
      <>
      <input type="file" accept=".txt" ref={fileInputRef} onChange={handleFileRead} style={{ display: "none" }} />
<button onClick={() => fileInputRef.current?.click()}>読込</button>
      </>
    )
  }

  // ボタンを押した時にUPする関数
  const pushUpLoad = () => {
    return (
      <>
      <button onClick={handleDownload}>保存</button>
      </>
    )
  }

  // ボタンを押したときにダウンロードする関数
  const handleDownload = () => {
    setActiveTabIndex(1);
    const element = document.createElement('a');
    element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(itemAll_H);
    element.download = 'satop_特殊タグ_LINE.txt';
    element.click();
  }

  // ボタンを押したときに読み込みする関数
  const handleFileRead = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // ファイル選択をリセットする
    }

    console.log(file);
    if (file) {
      const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (event) => {
        const contents = event.target?.result as string;
        const repText = RepTotals(contents);
        setItemBody(repText);
        // cookie保存
        Cookies.set("Linebody", JSON.stringify(repText));
      };
    }
  };

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  return (
  <div className="weapper">
          <div className="main2">
          <Tabs selectedIndex={activeTabIndex} onSelect={index => setActiveTabIndex(index)}>
              <TabList>
                <Tab>View</Tab>
                <Tab>H-Code</Tab>
              </TabList>
              <TabPanel>
              <div className="outBox_L" id="views" ref={selectDivRef}>
              <Totals title={titles} removeItem={removeItem} listUp={itemBody} setListUp={setItemAll_H}/>
              </div>
              </TabPanel>
              <TabPanel>
              <div className="outBox_L" id="view_H" ref={selectDivRef}>
              <Totals_H title={titles} removeItem={removeItem} listUp={itemBody} setListUp={setItemAll_H}/>
              </div>
              </TabPanel>
          </Tabs>
          </div>
  
          <div className="MainCont">
          <footer>
            <br></br>
            {btn_return()} {copyModal()} {rsetModal()} {pushDownLoad()} {pushUpLoad()} <button style={{background: "#4ae09a", color: "#000"}} onClick={submit}>投稿</button>
            <div className="C_menu">
            <select
              id="C_title"
              onChange={handleChange}>
              {optionNames.map((options) => (
                <option key={options.value} value={options.value} selected={options.value === optionNames[0].value}>
                  {options.label}
                </option>
              ))}
            </select>
            <input type="checkbox" className="C_chx" id="C_ids" checked={reads} onChange={readHandleChange} /><label htmlFor="C_ids">既読</label>
            </div>
            <textarea className="box_L" id="html-content" onChange={(e) => textHandleChange(e)} value={texts} />
            <button id="sub_Btn" style={{background: "#4ae09a", color: "#000"}} onClick={submit}>投稿</button>
          </footer>
        </div>
          </div>
  )
  }

export default App;