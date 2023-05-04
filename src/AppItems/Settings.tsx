import React, { useState, useEffect } from "react";
import "./TextApp.css";
import { initialOptions } from "./TextOption";
import Cookies from "js-cookie";

type Option = {
  id: string;
  index: number;
  label: string;
  value: string;
};

const App: React.FC = () => {
  const [optionItem, setOptionItem] = useState<Option[]>(initialOptions);

  useEffect(() => {
    const cookieOptions = Cookies.get("options");
    if (cookieOptions) {
      const parsedOptions: Option[] = JSON.parse(cookieOptions);
      setOptionItem(parsedOptions);
    }
  }, []);

  const handleOptionValueChange = (index: number, e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newOptionItem = [...optionItem];
    newOptionItem[index].value = e.target.value;
    setOptionItem(newOptionItem);
    Cookies.set("options", JSON.stringify(newOptionItem));
  };

  const handleOptionValueChange2 = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newOptionItem = [...optionItem];
    newOptionItem[index].label = e.target.value;
    setOptionItem(newOptionItem);
    Cookies.set("options", JSON.stringify(newOptionItem));
  };

  return (
    <div className="weapper">
      <div className="main">
        <h3>キー設定</h3>
        制作画面で使用できる簡易キーを設定できます。<br></br>
        ※注意※ 改行を行いたい場合、「\n」を挟んでから設定してください。
        <div className="textBox">
          {optionItem.map((option) => (
            <div key={option.index} className="option">
              <label>{option.label}</label>
              <input type="text"
                defaultValue={option.label}
                data-label={option.index}
                onBlur={(e) => handleOptionValueChange2(option.index, e)}
              />
              <br></br>
              <textarea
                className="aft"
                defaultValue={option.value}
                data-label={option.index}
                onBlur={(e) => handleOptionValueChange(option.index, e)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;