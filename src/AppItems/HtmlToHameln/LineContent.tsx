import React, {useEffect} from 'react';
import { itemBodyList } from './LineApp';

export interface TotalsProps {
  title: string;
  removeItem: (index: number) => void;
  listUp: itemBodyList[];
  // stringのuseStateを使う
  setListUp: React.Dispatch<React.SetStateAction<string>>;
}

interface BodysProps {
  name: string;
  text: string;
  flag: boolean;
  removeItem: (index: number) => void;
  index: number;
}

export interface RepTotalsProps {
  HCodeBox: string;
  removeItem: (index: number) => void;
}

// 既読表記するかどうかのflag
const flags = (hFlag:number, f: boolean) => {
  return f ? (
    <p style={{ textAlign: `right`, float: `right`, height: `0.5em`, color: `#ffffff`, fontSize: `0.7em`, margin: `0.2em` }}>既読</p>
  ) : (null);
}; 

export const Totals: React.FC<TotalsProps> = ({ title, removeItem, listUp }) => {
  return (
      <div style={{ boxSizing: 'border-box', whiteSpace: 'normal', width: '100%', maxWidth: '100%', backgroundColor: '#273246', color: '#202020', border: '1px solid #273246', overflow: 'auto' }}>
        <p></p>
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: 'white' }}>{title}</span>
        </div>
        <p></p>
        <div style={{ boxSizing: 'border-box', whiteSpace: 'normal', width: '100%', maxWidth: '100%', backgroundColor: '#7494c0', color: '#202020', padding: '0.5em', overflow: 'hidden'}}>
          <table style={{ width: '100%', maxWidth: `100%` }}>
            <tbody>
            {listUp.map((body, index) => (
                <React.Fragment key={index}>
                <BodysT name={body.name} text={body.text} flag={body.flag} removeItem={() => removeItem(index)} index={index} />
                </React.Fragment>
            ))}
            </tbody>
          </table>
        </div>
        <p></p>
        <div style={{ boxSizing: 'border-box', whiteSpace: 'normal', width: '100%', maxWidth: '100%', backgroundColor: '#ffffff', color: '#202020', padding: '0.5em', overflow: 'auto' }}>
          <div style={{ textAlign: 'left', float: 'left' }}>
            <span style={{ display: 'inline-block', fontSize: '1em', backgroundColor: '#ffffff' }} data-option="s1,bg#ffffff">
              <span style={{ fontFamily: 'f-9', fontSize: '1.2em', margin: '5px' }}>+</span>
            </span>
          </div>
          <div style={{ backgroundColor: '#e6e6fa' }}>　</div>
        </div>
        <p></p>
      </div>
    );
  };

  const BodysT: React.FC<BodysProps> = ({ name, text, flag, removeItem, index }) => {
    const renderTexts = (): JSX.Element[] => {
      const paragraphs: string[] = text.split('\n');
      const texts: JSX.Element[] = [];
    
      paragraphs.forEach((paragraph: string, index: number) => {
        if (paragraph.trim() !== '') {
          texts.push(
            <p key={index} style={{ overflowWrap: `break-word`,margin: '0em 0.2em', textAlign: `left`}}>
              {paragraph}
            </p>
          );
        } else if (index !== paragraphs.length - 1) {
          texts.push(<br key={index} />);
        }
      });
    
      return texts;
    };
    const h = flag ? "3em" : "2em";
    if (name === "あなた") {
      return (
        <>
          {/* ここから自分のターン */}
          <tr>
            <td style={{ wordWrap: `break-word`, position: `relative`, height: h, textAlign: "right" }}>
              <button 
            style={{backgroundColor: `red`, position: `absolute`, top: `0`, right: `-0.5em`, padding: `0.5px`}}
            onClick={() => removeItem(index)}>×</button>
            <div style = {{wordWrap: `break-word`,maxWidth: `100%`, display:`inner-flex`, float: 'right',}}>
            <div style={{ wordWrap: `break-word`, maxWidth: `80%`,float: 'right', backgroundColor: '#8de055', borderRadius: '0.5em', padding: '2px 10px' }}>
  {renderTexts()}</div>
  <div style={{marginTop: `auto`, textAlign: `right`, float: `right`}}>{flags(1,flag)}</div>
  </div>
            </td>
          </tr>
          {/* ここまで自分のターン */}
        </>
      );
    } else {
      return (
        <>
          {/* ここに相手のターン */}
          <tr>
            <td style={{ position: `relative`, height: "3.5em", textAlign: "left"}}>
            <button style={{backgroundColor: `red`, position: `absolute`, top: `1.5em`, left: `-0.5em`, padding: `0.5px`}}
            onClick={() => removeItem(index)}>×</button>
              <span
                style={{display: `inline-block`, paddingBottom: `15px`, height: `0.8em`, color:`#ffffff`, fontSize: `0.8em`}}
              >
                {name}
              </span>
              <br></br>
              <div style={{float: "left", backgroundColor: `#ffffff`, borderRadius: `0.5em`, padding: `2px 10px`}}>{renderTexts()}</div>
              <br />
            </td>
          </tr>
          {/* ここまで相手のターン */}
        </>
      );
    }
  };  

export const Totals_H: React.FC<TotalsProps> = ({ title, listUp, setListUp }) => {
  useEffect(() => {
    const all = `${Header_H(title)}
    ${listUp.map((body) => Body_H(body.name, body.text, body.flag)).join('')}
    ${Footer_H}`;
    setListUp(all);
  }, [title, listUp]);

        return (
        <>
        {Header_H(title)}
          {listUp.map((body, index) => (
              <React.Fragment key={index}>
              {Body_H(body.name, body.text, body.flag)}
              </React.Fragment>
          ))}
        {Footer_H}
        </>)
      }

// H_Code用
const Header_H = (title: string) =>{ 
    return `《box:w100%,bg#273246,bo#273246》
《center》《white》${title}《/white》《/center》
《box:w100%,bg#7494c0,p0.5》`
};

const Footer_H: string = `《/box》
《box:w100%,bg#ffffff,p0.5》《left》《text:s1,bg#ffffff》《font:9》＋《/font》《/text》《/left》 《boxbgcolor:#e6e6fa》　《/boxbgcolor》《/box》
《/box》`;

// H_Code用のBody部分
const Body_H = (name: string, text: string, flag: boolean)=>{
    const flag_t = flag ?
                    `
《right》《text:s0.7》《white》既読《/white》《/text》《/right》`
                    : ``;

const isJapanese = /[ぁ-んァ-ヶ亜-熙々]/.test(text);
const language = isJapanese ? 'Japanese' : 'English';
    
    // 0 でMyUser | 1 でFriendUser
    if(name == "あなた"){
      // languageがEnglishだった場合
      if(language === "English"){
        if(text.length > 31){
          return `《right》《box:w30%,inline,p0.2,m0.2,bg#8de055,bor0.5》《box:w100%,inline》${text}《/box》《/box》《/right》${flag_t}
`;
        }else{
          return `《right》《box:p0.2,m0.2,bg#8de055,bor0.5》${text}《/box》《/right》${flag_t}
`;
        }
      }else{
        return `《right》《box:p0.2,m0.2,bg#8de055,bor0.5》${text}《/box》《/right》${flag_t}
`;
      }
        
    }else{
      if(language === "English"){
        return `《left》《box:w30%,inline,p0.2,m0.2,bg#ffffff,bor0.5》《box:w100%,inline》${text}《/box》《/box》《/left》
`;
      }else{
        return `《left》《box:m0.2》《text:s0.7》《white》${name}《/white》《/text》《/box》《/left》
《left》《box:p0.2,bg#ffffff,bor0.5》${text}《/box》《/left》
`;
      }
    }
}

  // 置換処理
  export const RepTotals = (HCodeBox: string) => {
    const boxRegex = /《(left|right)》《box:(.*?),bor0.5》([\s\S]+?)《\/box》《\/(left|right)》/g;
    console.log(`boxRegex:${boxRegex}`);
    const textRegex = /《text:(.+?)》([\s\S]+?)《\/text》/g;
    const youBase = /《left》《box:m0.2》《text:s0.7》《white》([\s\S]+?)《\/white》《\/text》《\/box》《\/left》/g;
    const flagsBase = /《right》《text:s0.7》《white》既読《\/white》《\/text》《\/right》/;
  
    const boxMatches = [...HCodeBox.matchAll(boxRegex)];
    const textMatches = [...HCodeBox.matchAll(textRegex)];
    const youMatches = [...HCodeBox.matchAll(youBase)];
    const flags = HCodeBox.match(flagsBase);
  
    console.log(`boxMatches:${boxMatches}`);
    console.log(`textMatches:${textMatches}`);
    console.log(`youMatches:${youMatches}`);
  
    const list: itemBodyList[] = [];
    const myName = "あなた";
    const you = youMatches.length > 0 ? youMatches[0][1] : "";
    console.log(`you:${you}`);
    const flagsRep = flags ? true : false;
  
    for (const match of boxMatches) {
      const alignment = match[1];
      const content = match[3];
      console.log(`match1:${match[1]},match2:${match[2]},match3:${match[3]},match4:${match[4]}`);
  
      if (alignment === "right") {
        list.push({ name: myName, text: content, flag: flagsRep });
      } else if (alignment === "left") {
        list.push({ name: you, text: content, flag: false });
      }
    }
  
    return list;
  };  
  