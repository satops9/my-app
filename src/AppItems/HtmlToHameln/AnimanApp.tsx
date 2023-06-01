/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../TextApp.css";
import "../ChatApp.css";
import "./all.css"
import useModal from '../useModal';
import Cookies from 'js-cookie';
import { Totals, Totals_H, RepTotals, RepTitles,RepCategory } from './AnimanContent'
import html2canvas from "html2canvas";

export interface itemBodyList {
    res: number;
    name: string;
    text: string;
    fav: number;
    col: string;
    fon: number;
    bol: string;
  }

const App: React.FC = () => {
// コードのうち、header,footerを除いたbody部分のみを格納するstate | view/H-Code双方に対応
const [itemBody, setItemBody] = useState<itemBodyList[]>([]);
// コード全体を格納するstate | H-Codeにのみ
const [itemAll_H, setItemAll_H] = useState("");

/* コンポーネント:Totals,Totals_H に格納する部分state */

// title state | sredのTitle
const [titles, setTitles] = useState("");
// category state | sredのカテゴリ
const [category, setCategory] = useState("その他");
// res state | "レス"数を格納するstate
const [res, setRes] = useState(1);
// name state | selectBoxにセットするカンマ区切りの文字列(初期値は"二次元好きの匿名さん"固定)
const [names, setNames] = useState("二次元好きの匿名さん,スレ主");
// selected name | selectBoxで選択されたname
const [selectName, setSelectName] = useState("");
// text state | textareaのvalueにセットするテキストボックス
const [texts, setTexts] = useState("");
// fav state | "いいね"数を格納するstate
const [favs, setFavs] = useState(0);
// color state | "いいね"の色を格納するstate
const [cols, setCols] = useState("");
// font-size state | "いいね"のフォントサイズを格納するstate | 初期値は16
const [fonts, setFonts] = useState(16);
// b state | "いいね"の太字を格納するstate | 初期値はnormal
const [bolds, setBolds] = useState("normal");

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

// res state inputItem | onChangeによって発火
const resHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let res = Number(event.target.value);
        setRes(res);
};

// title state inputItem | onChangeによって発火
const titleNameHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  let title = event.target.value;
  setTitles(title);
};

// category state inputItem | onChangeによって発火
const categoryHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let category = event.target.value;
    setCategory(category);
};

// option name state inputItem | onChangeによって発火
const optionNameHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setNames(event.target.value);
};

// favs state inputItem | onChangeによって発火
// favsの値が変更されたとき、colsの値と、font-sizeの値、boldsの値を変更する
const favsHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let fav = Number(event.target.value);
    setFavs(fav);
    changeFavsSet(fav);
}

const handleFavsBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFavs = parseInt(e.target.value);
    setFavs(newFavs);
    changeFavsSet(newFavs);
  };

const changeFavsSet = (fav: number) => {
    // favが10以上の場合、colsの値とfont-size、boldsの値の値を変更する
    if(fav >= 10){
        setCols("#5555ff");
        setFonts(18);
        setBolds("bold");
        }
    if(fav >= 20){
        setCols("#9966ff");
        setFonts(19);
        setBolds("bold");
        }
    if(fav >= 30){
        setCols("#ff9466");
        setFonts(20);
        setBolds("bold");
        }
    if(fav >= 40){
        setCols("#ff6666");
        setFonts(20);
        setBolds("bold");
        }
    // favが1以上10未満の場合、colsの値とfont-sizeの値、boldsの値:boldを変更する
    if(fav >= 5 && fav < 11){
        setCols("");
        setFonts(18);
        setBolds("bold");
        }
    if(fav >=2 && fav < 5){
        setCols("");
        setFonts(16)
        setBolds("bold");
        }
    // favが0の場合、colsの値とfont-sizeの値、boldsの値を変更する
    if(fav < 2){
        setCols("");
        setFonts(16);
        setBolds("normal");
        }
  }


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
    const bodyItem = [...itemBody, {name: selectName, text: texts, fav: favs, col: cols, res: res, fon: fonts, bol: bolds}];
    setItemBody(bodyItem);

    // cookie保存
    Cookies.set("Animanbody", JSON.stringify(bodyItem));
    Cookies.set("AnimanbodyTitle", JSON.stringify(titles));

	// textareaのstateをリセット
	setTexts("");
    // resに+1する
    setRes(res + 1);
    // favs,cols,fonts,boldsをリセット
    setFavs(0);
    setCols("");
    setFonts(16);
    setBolds("normal");
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
  const cookieBody = Cookies.get("Animanbody");
  const cookieBodyTitles = Cookies.get("AnimanbodyTitles");
  if (cookieBody) {
    const item : itemBodyList[] = JSON.parse(cookieBody);
    setItemBody(item);
  }
  if (cookieBodyTitles) {
    const itemTitles : string = JSON.parse(cookieBodyTitles);
    setTitles(itemTitles);
  }
}, []);
    
    // namesが変更された際に発火
useEffect(() => {
  // selectBox内のオプション再更新
  setOptionNames(option);
}, [names]);

  // modal
  // Function key用処理
  const btn_return = () =>(
      <>
          <button onClick={toggleModal2}>設定</button>
          <Modal2>
              <div>
                  <p style={{ fontSize: "0.8em" }}>※注意※ 「名前」には複数設定できます。</p>
                  <p style={{ fontSize: "0.8em" }}>複数設定する場合は、「,」で区切ってください。</p>
                  <div className="C_menu2">
                      名前<input type="text" className="C_title2" onBlur={(e) => optionNameHandleChange(e)} defaultValue={names} />
                  </div>
                  <div className="C_menu2">
                      カテゴリ<input type="text" className="C_title2" onBlur={(e) => categoryHandleChange(e)} defaultValue={category} /><br></br>
                  </div>
                  <div className="C_menu2">
                      スレタイ<input type="text" className="C_title2" onBlur={(e) => titleNameHandleChange(e)} defaultValue={titles} /><br></br>
                  </div>
              </div>
          </Modal2>
      </>
  )
    
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
    setTitles("");
    setCategory("その他");
    setRes(1);
    setNames("二次元好きの匿名さん,スレ主");
    setItemBody([]);
    setItemAll_H("");
    setTexts("");
    setFavs(0);
    setCols("");
    setFonts(16);
    setBolds("normal");
    // cookie削除
    Cookies.remove("Animanbody");
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
      <button id="animanP" onClick={handleDownload}>保存</button>
      </>
    )
  }

  // ボタンを押したときにダウンロードする関数
  const handleDownload = () => {
    const element = document.createElement('a');
    element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(itemAll_H);
    element.download = 'satop_特殊タグ_LINE.txt';
    element.click();
  }

  // ボタンを押したときに読み込みする関数
  const handleFileRead = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.readAsText(file);
      reader.onload = (event) => {
        const contents = event.target?.result as string;
        const repText = RepTotals(contents);
        const repTitle = RepTitles(contents);
        const repCategory = RepCategory(contents);
        setItemBody(repText);
        setTitles(repTitle);
        setCategory(repCategory);
        // cookie保存
        Cookies.set("Animanbody", JSON.stringify(repText));
        Cookies.set("AnimanbodyTitle", JSON.stringify(titles));
      };
    }
  };

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const saveAsImage = (uri:string) => {
    const downloadLink = document.createElement("a");
  
    if (typeof downloadLink.download === "string") {
      downloadLink.href = uri;
  
      // ファイル名
      downloadLink.download = "animan.png";
  
      // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
      //document.body.appendChild(downloadLink);
  
      // ダウンロードリンクが設定された a タグをクリック
      downloadLink.click();
  
      // Firefox 対策で追加したリンクを削除しておく
      //document.body.removeChild(downloadLink);
    } else {
      window.open(uri);
    }
  }
  
  const onClickExport = () => {
    // 画像に変換する component の id を指定
    const targetId = "views";
    const target = document.getElementById(targetId);
  
    if (target) {
      html2canvas(target).then(canvas => {
        const targetImgUri = canvas.toDataURL("image/png");
        saveAsImage(targetImgUri);
      });
    } else {
      console.error(`要素ID "${targetId}" が見つかりません。`);
    }
  }
  
  const ExportButton = () => <button onClick={() => onClickExport()}>画像</button>;  
  
    
    return(
        <div className="weapper">
        <div className="main2">
        <Tabs selectedIndex={activeTabIndex} onSelect={index => setActiveTabIndex(index)}>
            <TabList>
              <Tab>View</Tab>
              <Tab>H-Code</Tab>
            </TabList>
            <TabPanel>
            <div className="outBox_L" id="views" ref={selectDivRef}>
            <Totals title={titles} removeItem={removeItem} listUp={itemBody} setListUp={setItemAll_H} category={category} />
            </div>
            </TabPanel>
            <TabPanel>
            <div className="outBox_L" id="view_H" ref={selectDivRef}>
            <Totals_H title={titles} removeItem={removeItem} listUp={itemBody} setListUp={setItemAll_H} category={category} />
            </div>
            </TabPanel>
        </Tabs>
        </div>

        <div className="MainCont">
        <footer>
          <br></br>
          {btn_return()} {copyModal()} {rsetModal()} {pushDownLoad()} {pushUpLoad()} {ExportButton()} <button style={{background: "#4ae09a", color: "#000"}} onClick={submit}>投稿</button>
          <div className="C_menu">
        <input type="number" className="C_numb" onChange={(e) => resHandleChange(e)} value={res} />
          <select
            className="C_title"
            onChange={handleChange}>
            {optionNames.map((options) => (
              <option key={options.value} value={options.value} selected={options.value === optionNames[0].value}>
                {options.label}
              </option>
            ))}
          </select>
          <span style={{fontSize:"16pt", textAlign:"center"}}>♡</span>
          <input type="number" min={0} className="C_numb" style={{fontSize: `16pt`}} onChange={favsHandleChange} value={favs} />
          <div style={{backgroundColor: `#fff`, padding: `2px`}}>
          <span style={{width: `100%`, height: `100%`, fontSize:fonts, color:cols, fontWeight:bolds, textAlign:"center"}}>{favs}</span>
          </div>
          </div>
          <div className="C_menu3">
          <input
        type="range"
        style={{width: `100%`}}
        min="0"
        max="100"
        step="1"
        value={favs}
        onChange={handleFavsBarChange}
      />
          </div>
          <textarea className="box_L" id="html-content" onChange={(e) => textHandleChange(e)} value={texts} />
          <button id="sub_Btn" style={{background: "#4ae09a", color: "#000"}} onClick={submit}>投稿</button>
        </footer>
      </div>
        </div>
    )
}

export default App;