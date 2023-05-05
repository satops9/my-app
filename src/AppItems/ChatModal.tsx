import React, { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import "./TextApp.css";
import "./ChatApp.css";
import Cookies from "js-cookie";
import { ColorResult, SketchPicker } from 'react-color';
import { generateRandomString } from "./ChatSub";
  
  type C_FuncKeySetProps = {
    optionColors: string;
    optionNames: string;
    optionIds   : boolean;
    selectIdText: string;
    SetOptionColor: React.Dispatch<React.SetStateAction<string>>;
    SetOptionNames: React.Dispatch<React.SetStateAction<string>>;
    SetOptionId   : React.Dispatch<React.SetStateAction<boolean>>;
    SetIdsText: React.Dispatch<React.SetStateAction<string>>;
  }

  export const C_FuncKeySet: React.FC<C_FuncKeySetProps> = ({ 
    optionColors, optionNames, optionIds, selectIdText, 
    SetOptionColor, SetOptionNames, SetOptionId, SetIdsText }) => {
    const [optionColor, setOptionColor]  = useState<string>(optionColors);
    const [optionName , setOptionNames]  = useState<string>(optionNames);
    const [optionId   , setOptionId]     = useState<boolean>(optionIds);
    const [selectIdsText  , setIdsText]    = useState<string>(selectIdText);
    
    // funtion key option value setup
    const handleOptionNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOptionNames(e.target.value);
        SetOptionNames(e.target.value);
        Cookies.set("optionName", JSON.stringify(e.target.value));
    };

    const handleOptionIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        var values = true;
        if(e.target.checked === true){
            values = true;
        }else{
            values = false;
        }
        setOptionId(values);
        SetOptionId(values);
        Cookies.set("optionId", JSON.stringify(e.target.checked));
    };

    const changeTextColor = (color: ColorResult) => {
        setOptionColor(color.hex);
        SetOptionColor(color.hex);
        Cookies.set("optionColor", JSON.stringify(color.hex));
      }

    const handleSelectIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIdsText(e.target.value);
        SetIdsText(e.target.value);
        Cookies.set("selectIds", JSON.stringify(e.target.value));
    };
    
    // Function key設定用処理
    const funcKey_set = () =>{
      return (
              <div className="textBox">
                <div className="setBox">
                <label>背景色：</label>
                    <SketchPicker
                        onChange={changeTextColor}
                        color={optionColors} />
                </div>
                <div className="setBox">
                    <label>名前(※)：</label>
                    <input type="text" 
                           onBlur={handleOptionNameChange} 
                           defaultValue={optionName} />
                </div>
                <div className="setBox">
                <label>ID表示：</label>
                    <input type="checkbox" 
                           className="C_chx"
                           checked={optionId}
                           onChange={handleOptionIdChange} />
                    <input type="text" 
                           defaultValue={selectIdsText}
                           onBlur={handleSelectIdChange} />
                </div>
              </div>
      );
    }
  
    return <>{funcKey_set()}</>;
  };