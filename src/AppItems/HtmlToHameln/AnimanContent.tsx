import React, {useEffect} from 'react';
import { itemBodyList } from './AnimanApp';

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

export const Totals: React.FC<TotalsProps> = ({ category, title, removeItem, listUp, setListUp  }) => (
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

const BodysT: React.FC<BodysProps> = ({ res, name, text, fav, col, fon, bol, removeItem, index }) => {
    const renderTexts = (): JSX.Element[] => {
        const paragraphs: string[] = text.split('\n');
        const texts: JSX.Element[] = [];
      
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
          <span>{name} 2X/XX/XX XX:XX:XX</span>
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
      ${listUp.map((body) => Body_H(body.name, body.text, body.res, body.col, body.fav, body.fon, body.bol)).join('')}`;
      setListUp(all);
    }, [title, listUp]);
          return (
          <>
          {Header_H(title, category)}
            {listUp.map((body, index) => (
                <React.Fragment key={index}>
                {Body_H(body.name, body.text, body.res, body.col, body.fav, body.fon, body.bol)}
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
《box:bor0.5,bg#0000ff,inline,overhidden》《center》《opacity:0》\《/opacity》《color:#FFF》TOP《/color》《opacity:0》\《/opacity》《/center》《/box》《box:inline,overhidden》《center》《opacity:0》.《/opacity》≫《opacity:0》\《/opacity》《/center》
《/box》《box:bor0.5,bg#0000ff,inline,overhidden》《center》《opacity:0》\《/opacity》《color:#FFF》${category}《/color》《opacity:0》\《/opacity》《/center》《/box》《box:inline,overhidden》《center》《opacity:0》.《/opacity》≫《opacity:0》\《/opacity》《/center》
《/box》《box:bor0.5,bg#0000ff,inline,overhidden》《center》《opacity:0》\《/opacity》《color:#FFF》${title}《/color》《opacity:0》\《/opacity》《/center》《/box》《box:inline,overhidden》《center》《opacity:0》.《/opacity》≫《opacity:0》\《/opacity》《/center》
《/box》

《text:s1.5》《b》${title}《/b》　《text:s1.5》《color:#ffd700》《b》☆《/b》《/color》《/text》《text:s1.2》《color:#0000ff》《font:u58》り《/font》《/color》《/text》《/text》`
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
《id:r${res}》《bordercolor:#0000ff》《opacity:0》:《/opacity》《text:s1.1》《color:#0000ff》《b》≫${res}《/b》《/color》《/text》《opacity:0》:《/opacity》《/bordercolor》《opacity:0》:《/opacity》《opacity:0》\《/opacity》《text:s1.1》《color:#0000ff》《b》${name}2X/XX/XX XX:XX:XX《/b》《/color》《/text》《opacity:0》\《/opacity》《b》《color:#ffc513》♡ ${fav}《/color》《/b》《opacity:0》\《/opacity》 《text:s1.1》《bgcolor:#8080d2》《color:#fff》《opacity:0》:《/opacity》報告《opacity:0》:《/opacity》《/color》《/bgcolor》《/text》《box:w100%,bo#7c7c88》《/box》《/box》
${setText()}
《id:r${res}e》
`
    }

  // 置換処理
  export const RepTotals = (HCodeBox: string) => {
    // 1:res 3:name 4:favs 5:col 6:size 7:text
    const setRegex = /《id:r([\s\S]+?)》《bordercolor:#0000ff》《opacity:0》:《\/opacity》《text:s1.1》《color:#0000ff》《b》≫([\s\S]+?)《\/b》《\/color》《\/text》《opacity:0》:《\/opacity》《\/bordercolor》《opacity:0》:《\/opacity》《opacity:0》\《\/opacity》《text:s1.1》《color:#0000ff》《b》([\s\S]+?)2X\/XX\/XX XX:XX:XX《\/b》《\/color》《\/text》《opacity:0》\《\/opacity》《b》《color:#ffc513》♡ ([\s\S]+?)《\/color》《\/b》《opacity:0》\《\/opacity》 《text:s1.1》《bgcolor:#8080d2》《color:#fff》《opacity:0》:《\/opacity》報告《opacity:0》:《\/opacity》《\/color》《\/bgcolor》《\/text》《box:w100%,bo#7c7c88》《\/box》《\/box》\n《text:([\s\S]+?),([\s\S]+?)》([\s\S]+?)《\/text》\n《id:r([\s\S]+?)e》/g;
    const allMatches = [...HCodeBox.matchAll(setRegex)];
    console.log(allMatches);

    const bRegex = /《b》([\s\S]+?)《\/b》/g;
  
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
    return list;
  }; 

  export const RepTitles = (HCodeBox: string) => {
    const titleRgex = /《text:s1.5》《b》([\s\S]+?)《\/b》　《text:s1.5》《color:#ffd700》《b》☆《\/b》《\/color》《\/text》《text:s1.2》《color:#0000ff》《font:u58》り《\/font》《\/color》《\/text》《\/text》/g;
    const titleMatch = [...HCodeBox.matchAll(titleRgex)];
    const titles: string= titleMatch ? titleMatch[0][1] : ``;
    return titles;
  }