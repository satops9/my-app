import React, { useState, useEffect } from "react";
import 'react-tabs/style/react-tabs.css';
import "./TextApp.css";
import "./ChatApp.css";
import Cookies from "js-cookie";
import { ColorResult, SketchPicker } from 'react-color';
  
  type FuncKeySetProps = {
    optionColors: string;
    optionNames: string;
    optionIds   : string;
    SetOptionColor: React.Dispatch<React.SetStateAction<string>>;
    SetOptionNames: React.Dispatch<React.SetStateAction<string>>;
    SetOptionId   : React.Dispatch<React.SetStateAction<string>>;
  }

  export const C_FuncKeySet: React.FC<FuncKeySetProps> = ({ 
    optionColors, optionNames, optionIds, SetOptionColor, SetOptionNames, SetOptionId }) => {
    const [optionColor, setOptionColor]  = useState<string>(optionColors);
    const [optionName , setOptionNames]  = useState<string>(optionNames);
    const [optionId   , setOptionId]     = useState<string>(optionIds);
    
    // funtion key option value setup
    const handleOptionNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOptionNames(e.target.value);
        SetOptionNames(e.target.value);
        Cookies.set("optionName", JSON.stringify(e.target.value));
    };

    const handleOptionIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        var values = "";
        if(e.target.checked === true){
            values = "true";
        }else{
            values = "false";
        }
        setOptionId(values);
        SetOptionId(values);
        Cookies.set("optionId", JSON.stringify(e.target.value));
    };

    const changeTextColor = (color: ColorResult) => {
        setOptionColor(color.hex);
        SetOptionColor(color.hex);
        Cookies.set("optionColor", JSON.stringify(color.hex));
      }
    
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
                           onBlur={handleOptionIdChange}
                           value={optionId} />
                </div>
              </div>
      );
    }
  
    return <>{funcKey_set()}</>;
  };