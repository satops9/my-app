import React, {useEffect} from 'react';
import { itemBodyList } from './AnimanApp';
import { replacements, H_replacements, getMatchTexts, Regs } from "./RepContent";

export interface TotalsProps {
    category: string;
    title: string;
    removeItem: (index: number) => void;
    listUp: itemBodyList[];
    // stringのuseStateを使う
    setListUp: React.Dispatch<React.SetStateAction<string>>;
  }

    interface BodysProps {
        res: number;
        name: string;
        text: string;
        fav: number;
        col: string;
        fon: number;
        bol: string;
        removeItem: (index: number) => void;
        index: number;
    }

    const fontSize = (numFon: number | String) => {
        let eFont = ``;
        if(typeof numFon === `number`){
            if(numFon === 18){
                eFont = `s1.2`;
            }
            if(numFon === 19){
                eFont = `s1.3`;
            }
            if(numFon === 20){
                eFont = `s1.4`;
            }
            if(numFon === 16){
                eFont = `s1`;
            }
        }else{
            const fon = String(numFon);
            if(fon === `s1.2`){
                eFont = `18`;
            }
            if(fon === `s1.3`){
                eFont = `19`;
            }
            if(fon === `s1.4`){
                eFont = `20`;
            }
            if(fon === `s1`){
                eFont = `16`;
            }
        }
        return eFont;
    }

// Input textarea function key item Plus SetUp
// 特殊タグをリアルタイムで変換するための関数
function replaceContent(inputs: string): string {
    let output = inputs;
    replacements.forEach(({ search, replace }) => {
      output = output.replace(new RegExp(search, 'g'), replace);
    });
  
    console.log(`output:${output}`);
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

// texts を正規表現で置換
const textRegex = (content: string) => {
  const repText = replaceContent(content);
  return repText;
}

// texts を正規表現で置換
const textHRegex = (content: string) => {
  const repText = H_replaceContent(content);
  return repText;
}

export const Totals: React.FC<TotalsProps> = ({ category, title, removeItem, listUp, setListUp  }) => {
    useEffect(() => {
        const all = `${Header_H(title ,category)}
        ${listUp.map((body) => Body_H(body.name, textHRegex(body.text), body.res, body.col, body.fav, body.fon, body.bol)).join('')}`;
        setListUp(all);
      }, [title, listUp]);

    return (
    <>
        <div style={{ boxSizing: 'border-box', whiteSpace: 'normal', position: 'relative', overflow: 'hidden !important', width: '100%', maxWidth: '100%', height: '3em', maxHeight: '100%', lineHeight: '1.6em' }}>
            <div style={{ boxSizing: 'border-box', whiteSpace: 'normal', position: 'absolute', left: '0em', top: '0em', width: '100%', maxWidth: '100%', lineHeight: '2em', overflow: 'hidden' }}>
                <span style={{ display: 'inline-block', fontSize: '2em' }}>
                    <span style={{ color: '#0000ff' }}>あにまん掲示板</span>
                </span>
            </div>
            <div style={{ boxSizing: 'border-box', whiteSpace: 'normal', position: 'absolute', left: '0em', top: '1.7em', width: '100%', maxWidth: '100%', lineHeight: '1.7em', overflow: 'hidden' }}>
                <span style={{ color: '#0000ff' }}>animan bbs＠二次元オンリー</span>
            </div>
            <div style={{ boxSizing: 'border-box', whiteSpace: 'normal', position: 'absolute', left: '0em', top: '0.5em', width: '100%', maxWidth: '100%', lineHeight: '2em', overflow: 'hidden' }}>
                <div style={{ textAlign: 'right', float: 'right' }}>
                    <span style={{ borderColor: '#a9a9a9' }}>
                        <span style={{ filter: 'opacity(0.0)' }} data-num="0">\</span>
                        三<span style={{ filter: 'opacity(0.0)' }} data-num="0">\</span>
                    </span>
                </div>
            </div>
        </div>
        <hr />

        <div style={{ boxSizing: 'border-box', whiteSpace: 'normal', borderRadius: '0.5em', backgroundColor: '#0000ff', color: '#202020', display: 'inline-block', overflow: 'hidden' }}>
            <div style={{ textAlign: 'center' }}>
                <span style={{ filter: 'opacity(0.0)' }} data-num="0">\</span><span style={{ color: '#FFF' }}>TOP</span><span style={{ filter: 'opacity(0.0)' }} data-num="0">\</span>
            </div>
        </div>
        <div style={{ boxSizing: 'border-box', whiteSpace: 'normal', display: 'inline-block', overflow: 'hidden' }}>
            <div style={{ textAlign: 'center' }}>
                <span style={{ filter: 'opacity(0.0)' }} data-num="0">.</span>≫<span style={{ filter: 'opacity(0.0)' }} data-num="0">\</span>
            </div>
        </div>

        <div style={{ boxSizing: 'border-box', whiteSpace: 'normal', borderRadius: '0.5em', backgroundColor: '#0000ff', color: '#202020', display: 'inline-block', overflow: 'hidden' }}>
            <div style={{ textAlign: 'center' }}>
                <span style={{ filter: 'opacity(0.0)' }} data-num="0">\</span><span style={{ color: '#FFF' }}>{category}</span><span style={{ filter: 'opacity(0.0)' }} data-num="0">\</span>
            </div>
        </div>
        <div style={{ boxSizing: 'border-box', whiteSpace: 'normal', display: 'inline-block', overflow: 'hidden' }}>
            <div style={{ textAlign: 'center' }}>
                <span style={{ filter: 'opacity(0.0)' }} data-num="0">.</span>≫<span style={{ filter: 'opacity(0.0)' }} data-num="0">\</span>
            </div>
        </div>

        <div style={{ boxSizing: 'border-box', whiteSpace: 'normal', borderRadius: '0.5em', backgroundColor: '#0000ff', color: '#202020', display: 'inline-block', overflow: 'hidden' }}>
            <div style={{ textAlign: 'center' }}>
                <span style={{ filter: 'opacity(0.0)' }} data-num="0">\</span><span style={{ color: '#FFF' }}>{title}</span><span style={{ filter: 'opacity(0.0)' }} data-num="0">\</span>
            </div>
        </div>
        <div style={{ boxSizing: 'border-box', whiteSpace: 'normal', display: 'inline-block', overflow: 'hidden' }}>
            <div style={{ textAlign: 'center' }}>
                <span style={{ filter: 'opacity(0.0)' }} data-num="0">.</span>≫<span style={{ filter: 'opacity(0.0)' }} data-num="0">\</span>
            </div>
        </div>
        <div>
            <span style={{ filter: 'opacity(0.0)' }} data-num="0"></span>
            <span style={{ display: 'inline-block', fontSize: '1.5em' }}>
                <span>{title}</span>
                <span style={{ display: 'inline-block', fontSize: '1.5em' }}>
                    <span style={{ color: '#ffd700' }}>
                        <span>☆</span>
                    </span>
                </span>
                <span style={{ display: 'inline-block', fontSize: '1.2em' }}>
                    <span style={{ color: '#0000ff' }}>
                        <span>∽</span>
                    </span>
                </span>
            </span>
        </div>

        {listUp.map((body, index) => (
            <React.Fragment key={index}>
                <BodysT 
                res={body.res} name={body.name} text={body.text}
                fav={body.fav} col={body.col} fon={body.fon} bol={body.bol}
                removeItem={() => removeItem(index)} index={index} />
            </React.Fragment>
        ))}
    </>
    )
        }

const BodysT: React.FC<BodysProps> = ({ res, name, text, fav, col, fon, bol, removeItem, index }) => {
    const renderTexts = (): JSX.Element[] => {
        const paragraphs: string[] = text.split('\n');
        let paragraphs2: string[] = [];
        const texts: JSX.Element[] = [];
        let texts2: string = ``;
        // getMatchTextsを使用する 引数にはtextとregsを渡す
        if(text === ``){
            console.log(`error${text}`);
            return texts;
        }
        const matchTexts = getMatchTexts(text, Regs.map((reg) => reg.reg));
        console.log(`matchTexts:${matchTexts}`)
        if(matchTexts.length < 0 || matchTexts === null || matchTexts === undefined){
            paragraphs.forEach((paragraph: string, index: number) => {
                if (paragraph.trim() !== '') {
                  texts.push(
                    <p key={index} style={{ margin: '0em 0.5em', fontSize: fon, fontWeight: bol, color: col }}>
                      {paragraph}
                    </p>
                  );
                } else if (index !== paragraphs.length - 1) {
                  texts.push(<br key={index} />);
                }
              });
        }else{
            paragraphs2 = matchTexts[0].split('\n');
            texts2 = matchTexts[1][0] === undefined ? matchTexts[0]: matchTexts[1][0];
            console.log(`texts2:${texts2}`)
            console.log(`matchTexts[0][0]:${matchTexts[1][0]}`)
            const codes = textRegex(texts2);
            console.log(`codes:${codes}`)

            paragraphs2.forEach((paragraph2: string, index: number) => {
                if (paragraph2.trim() !== '') {
                  texts.push(
                    <p key={index} style={{ margin: '0em 0.5em', fontSize: fon, fontWeight: bol, color: col }}>
                      {paragraph2}
                    </p>
                  );
                } else if (index !== paragraphs.length - 1) {
                  texts.push(<br key={index} />);
                }
              });

              if(matchTexts[1][0] !== undefined){
                // stringからJSX.Elementを生成するための処理
                const jsxElement = <div dangerouslySetInnerHTML={{ __html: codes }} />;
                texts.push(jsxElement);
              }
        }
      
        return texts;
      };
      
    return(
        <>
    <div style={{ display:"flex", boxSizing: 'border-box', whiteSpace: 'normal', position: 'relative', overflow: 'hidden !important', width: '100%', maxWidth: '100%', maxHeight: '100vh', lineHeight: '1.7em'}}>
      <div style={{display: `inline-flex`, maxHeight: `1.5em`, border: 'solid 1px #0000ff', fontSize: '1em', color: '#0000ff'}}>
      ≫{res}
      </div>
      <span style={{ filter: 'opacity(0.0)' }} data-num="0">\</span>
      <span style={{ display: 'inline-block', fontSize: '1em' }}>
        <span style={{ color: '#0000ff' }}>
          <span style={{fontSize: `12pt`}}>{name} 2X/XX/XX XX:XX:XX</span>
          <span style={{ color: '#ffc513', margin: `0 15px 0 10px` }}>♡ {fav}</span>
          <div style={{display: `inline-flex`}}>
          <span style={{ backgroundColor: '#8080d2' }}>
            <span style={{ color: '#fff' }}>
              <span style={{ filter: 'opacity(0.0)' }} data-num="0">:</span>
              報告
              <span style={{ filter: 'opacity(0.0)' }} data-num="0">:</span>
            </span>
          </span>
        </div>
        <span 
            style={{borderRadius:`0em`, backgroundColor: `#ffadad`, color:`#000`, padding: `2px`, margin: `0 10px`}}
            onClick={() => removeItem(index)}>削除</span>
        </span>
      </span>
    </div>
    <hr />
    {renderTexts()}
    <p></p>
        </>
    )
}

export const Totals_H: React.FC<TotalsProps> = ({ category, title, listUp, setListUp }) => {
    useEffect(() => {
      const all = `${Header_H(title ,category)}
      ${listUp.map((body) => Body_H(body.name, textHRegex(body.text), body.res, body.col, body.fav, body.fon, body.bol)).join('')}`;
      setListUp(all);
    }, [title, listUp]);
          return (
          <>
          {Header_H(title, category)}
            {listUp.map((body, index) => (
                <React.Fragment key={index}>
                {Body_H(body.name, textHRegex(body.text), body.res, body.col, body.fav, body.fon, body.bol)}
                </React.Fragment>
            ))}
          </>)
        }

// H_Code用
const Header_H = (title: string, category: string) =>{ 
    return `《box:relative,w100%,h3,lh1.6,overhidden》
《box:absolute(0/0),w100%,lh2,overhidden》
《text:s2》《color:#0000ff》あにまん掲示板《/color》《/text》
《/box》
《box:absolute(0/1.7),w100%,lh1.7,overhidden》
《color:#0000ff》animan bbs＠二次元オンリー《/color》
《/box》
《box:absolute(0/0.5),w100%,lh2,overhidden》
《right》
《text:s1.5》
《color:#a9a9a9》
《bordercolor:#a9a9a9》《opacity:0》\《/opacity》三《opacity:0》\《/opacity》《/bordercolor》《/color》
《/text》《/right》
《/box》
《/box》
《hr》
《box:bor0.5,bg#0000ff,inline,overhidden》《center》《opacity:0》:《/opacity》《color:#FFF》TOP《/color》《opacity:0》:《/opacity》《/center》《/box》《box:inline,overhidden》《center》《opacity:0》.《/opacity》≫《opacity:0》\《/opacity》《/center》
《/box》《box:bor0.5,bg#0000ff,inline,overhidden》《center》《opacity:0》:《/opacity》《color:#FFF》${category}《/color》《opacity:0》:《/opacity》《/center》《/box》《box:inline,overhidden》《center》《opacity:0》.《/opacity》≫《opacity:0》:《/opacity》《/center》
《/box》《box:bor0.5,bg#0000ff,inline,overhidden》《center》《opacity:0》;《/opacity》《color:#FFF》${title}《/color》《opacity:0》;《/opacity》《/center》《/box》《box:inline,overhidden》《center》《opacity:0》.《/opacity》≫《opacity:0》;《/opacity》《/center》
《/box》

《text:s1.5》《b》${title}《/b》　《text:s1.5》《color:#ffd700》《b》☆《/b》《/color》《/text》《text:s1.2》《color:#0000ff》《font:u58》り《/font》《/color》《/text》《/text》
`
};

// H_Code用のBody部分
const Body_H = (name: string, text: string, res: number, col:string, fav: number, fon: number, bol: string)=>{
    const setText = () => {
        let pText = ``;
    const eFont = fontSize(fon);

    if(bol === `normal`){
        pText = `《text:${col},${eFont}》${text}《/text》`;
    }else{
        
        pText = `《text:${col},${eFont}》《b》${text}《/b》《/text》`;
    }

    return pText;
    }

    return `
《box》
《id:r${res}》《bordercolor:#0000ff》《opacity:0》:《/opacity》《text:s1.1》《color:#0000ff》《b》≫${res}《/b》《/color》《/text》《opacity:0》:《/opacity》《/bordercolor》《opacity:0》:《/opacity》《opacity:0》:《/opacity》《text:s0.8》《color:#0000ff》《b》${name}2X/XX/XX XX:XX:XX《/b》《/color》《/text》《opacity:0》:《/opacity》《b》《color:#ffc513》♡ ${fav}《/color》《/b》《opacity:0》:《/opacity》 《text:s1.1》《bgcolor:#8080d2》《color:#fff》《opacity:0》:《/opacity》報告《opacity:0》:《/opacity》《/color》《/bgcolor》《/text》《box:w100%,bo#7c7c88》《/box》《/box》
${setText()}
《id:r${res}e》
`
    }

  // 置換処理
  export const RepTotals = (HCodeBox: string) => {
    console.log(`HCodeBox:${HCodeBox}`);
    // 1:res 3:name 4:favs 5:col 6:size 7:text
    const setRegex = /《id:r([\s\S]+?)》《bordercolor:#0000ff》《opacity:0》:《\/opacity》《text:s1.1》《color:#0000ff》《b》≫([\s\S]+?)《\/b》《\/color》《\/text》《opacity:0》:《\/opacity》《\/bordercolor》《opacity:0》:《\/opacity》《opacity:0》:《\/opacity》《text:s0.8》《color:#0000ff》《b》([\s\S]+?)2X\/XX\/XX XX:XX:XX《\/b》《\/color》《\/text》《opacity:0》:《\/opacity》《b》《color:#ffc513》♡ ([\s\S]+?)《\/color》《\/b》《opacity:0》:《\/opacity》 《text:s1.1》《bgcolor:#8080d2》《color:#fff》《opacity:0》:《\/opacity》報告《opacity:0》:《\/opacity》《\/color》《\/bgcolor》《\/text》《box:w100%,bo#7c7c88》《\/box》《\/box》\n《text:([\s\S]+?),([\s\S]+?)》([\s\S]+?)《\/text》\n《id:r([\s\S]+?)e》/g;
    const testRegex = /《box》\n《id:r([\s\S]+?)》《bordercolor:#0000ff》/g;
    console.log(setRegex);

    const resRegex = /《box》\n《id:r([\s\S]+?)》《bordercolor:#0000ff》《opacity:0》:《\/opacity》/g;
    const nameRegex = /《text:s0.8》《color:#0000ff》《b》([\s\S]+?)2X\/XX\/XX XX:XX:XX《\/b》《\/color》《\/text》/g;
    const favRegex = /《b》《color:#ffc513》♡ ([\s\S]+?)《\/color》《\/b》/g;
    const textRegex = /《\/box》\n《text:(.*?),(.*?)》([\s\S]+?)《\/text》\n《id:r(.*?)e》/g;

    const resMatches = [...HCodeBox.matchAll(resRegex)];
    const nameMatches = [...HCodeBox.matchAll(nameRegex)];
    const favMatches = [...HCodeBox.matchAll(favRegex)];
    const textMatches = [...HCodeBox.matchAll(textRegex)];
    console.log(resMatches);
    console.log(nameMatches);
    console.log(favMatches);
    console.log(textMatches);

    // resMatches, nameMatches, favMatches, textMatchesのいずれかが空の場合はexit
    // resMatches の場合は「レス番号にエラーがありました」｜ nameMatches の場合は「名前にエラーがありました」｜ favMatches の場合は「いいねにエラーがありました」｜ textMatches の場合は「本文にエラーがありました」
    // というエラーを返す
    if(resMatches.length === 0){
        return `レス番号にエラーがありました`;
    }
    if(nameMatches.length === 0){
        return `名前にエラーがありました`;
    }
    if(favMatches.length === 0){
        return `いいねにエラーがありました`;
    }
    if(textMatches.length === 0){
        return `本文にエラーがありました`;
    }

    const listBox: itemBodyList[] = [];
    const bRegex = /《b》([\s\S]+?)《\/b》/g;

    for(let i = 0; i < resMatches.length; i++){
        const res = resMatches[i][1];
        const name = nameMatches[i][1];
        const fav = favMatches[i][1];
        const col = textMatches[i][1];
        const fon = fontSize(textMatches[i][2]);
        const text = textMatches[i][3];
        const textRegex = [...text.matchAll(bRegex)];
        const textRep = textRegex.length > 0 ? textRegex[0][1] : text;
        const bol = textRegex.length > 0 ? 'bold' : 'normal';
        console.log(`res:${res},name:${name},fav:${fav},col:${col},fon:${fon},text:${textRep},bol:${bol}`);
        listBox.push({ res: Number(res), name: name, text: String(textRep), fav: Number(fav), col: col, fon: Number(fon), bol: bol });
    }

    const allMatches = [...HCodeBox.matchAll(setRegex)];
    const testMatches = [...HCodeBox.matchAll(testRegex)];
    console.log(allMatches);
    console.log(testMatches);
  
    const list: itemBodyList[] = [];
  
    for (const match of allMatches) {
    const res = match[1];
    const name = match[3];
    const fav = match[4];
    const col = match[5];
    const fon = fontSize(match[6]);
    const text = match[7];
    // match1:1,match2:1,match3:二次元好きの匿名さん,match4:0,match5:#000000,match6:s1,match7:test
    console.log(`match1:${match[1]},match2:${match[2]},match3:${match[3]},match4:${match[4]},match5:${match[5]},match6:${match[6]},match7:${match[7]}`);
    const textRegex = [...text.matchAll(bRegex)];
    const textRep = textRegex.length > 0 ? textRegex[0][1] : text;
    const bol = textRegex.length > 0 ? 'bold' : 'normal';
  
    list.push({ res: Number(res), name: name, text: String(textRep), fav: Number(fav), col: col, fon: Number(fon), bol: bol });
    }
    return listBox;
  }; 

  export const RepTitles = (HCodeBox: string) => {
    const titleRgex = /《text:s1.5》《b》([\s\S]+?)《\/b》　《text:s1.5》《color:#ffd700》《b》☆《\/b》《\/color》《\/text》《text:s1.2》《color:#0000ff》《font:u58》り《\/font》《\/color》《\/text》《\/text》/g;
    const titleMatch = [...HCodeBox.matchAll(titleRgex)];
    const titles: string= titleMatch ? titleMatch[0][1] : ``;
    return titles;
  }

  export const RepCategory = (HCodeBox: string) => {
    const categoryRgex = /《box:bor0.5,bg#0000ff,inline,overhidden》《center》《opacity:0》:《\/opacity》《color:#FFF》([\s\S]+?)《\/color》《opacity:0》:《\/opacity》《\/center》《\/box》/g;
    const categoryMatch = [...HCodeBox.matchAll(categoryRgex)];
    const category: string= categoryMatch ? categoryMatch[1][1] : `その他`;
    return category;
  }