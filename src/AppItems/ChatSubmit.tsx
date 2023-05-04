import React, { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import "./TextApp.css";
import "./ChatApp.css";

type ChatSubmitSystem = {
    numb: string;// スレNo
    name: string;// 投稿主
    ids : string;// ID
    text: string;// 投稿内容
    bcCol:string;// 背景色
    idsHd:boolean;// id表示有無
    inputViewItem: string;//main textのみ
    inputCodeItem: string;//main codeのみ
    SetInputViewItem: React.Dispatch<React.SetStateAction<string>>;
    SetInputCodeItem: React.Dispatch<React.SetStateAction<string>>;
    HandleInputChange: (chat: string, code:string) => void;
  }

const SubmitChat: React.FC<ChatSubmitSystem> = ({ 
    numb, name, ids, text, bcCol, idsHd,
    inputViewItem, inputCodeItem, 
    SetInputViewItem, SetInputCodeItem, HandleInputChange }) => {
        console.log("TEST")
        // View Mode
        const viewCss = {
            backgroundColor:bcCol,
            fontSize: '20px',
            padding: '5px'
        }
        const inputViewMode = () => {
            const heder = `<div style="${viewCss}">`;
            const footer = `</div>`;

            let text = "";
            if(idsHd === true){
                text = `
                <p>${numb}: ${name} ID:${ids}</p>
                <p>${text}</p>
                `;
            }else{
                text = `
                <p>${numb}: ${name}</p>
                <p>${text}</p>
                `;
            }
            const main = inputCodeItem + text;
            SetInputViewItem(text);
            const All = heder +"\n\n"+main+"\n\n"+footer;
            return ( All )
        }

        // H-Code Mode
        const inputH_CodeMode =() => {
            const bcCol_A = `《bgcolor:${bcCol}》`;
            const bcCol_B = `《/bgcolor》`;
            const id_A = `《id:r"${ids}》`; 
            const id_B = `《id:r"${ids}"e》`; 
            let textItem = "";

            if(idsHd === true){
                textItem = 
                id_A +
                {numb} +": "+ {name} + " ID:" + {ids} + "\n\n" + {text}
                + "\n\n" + id_B;
            }else{
                textItem = 
                id_A +
                {numb} +": "+ {name} + "\n\n" + {text}
                + "\n\n" + id_B;
            }

            const main = inputViewItem + textItem;
            SetInputCodeItem(main);
            const All = bcCol_A + "\n\n" + main + "\n\n" + bcCol_B;
            return ( All )
        }

        HandleInputChange(inputViewMode(),inputH_CodeMode())
        return(<><div>TEST</div></>)
    };

    export default SubmitChat;