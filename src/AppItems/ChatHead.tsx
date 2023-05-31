/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import "./TextApp.css";
import "./ChatApp.css";
import ChatBbs from "./ChatApp";
import ChatLine from "./HtmlToHameln/LineApp";
import ChatAniman from "./HtmlToHameln/AnimanApp";

// selectItem types
interface SelectItem {
    label: string;
    value: string;
}
// 掲示板風の表現・演出を制作するジェネレーター
// 本体
const App: React.FC = () => {
    const [renderContent, setRenderContent] = useState<React.ReactNode>(<ChatLine />);
    const [selectItems, setSelectItems] 
    = useState<SelectItem[]>([{label: '掲示板風', value: 'bbs'}, {label: 'LINE風', value: 'line'}, {label: 'あにまん掲示板', value: 'animans'}]);

    // selectボックスの値が変更された時の処理
    const onChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // selectボックスの値を取得する
        const value = e.target.value;

        switch (value) {
            case 'bbs':
                setRenderContent(<ChatBbs />);
                break;
            case 'line':
                setRenderContent(<ChatLine />);
                break;
            case 'animans':
                setRenderContent(<ChatAniman />);
                break;
            default:
                setRenderContent(<ChatLine />);
                break;
        }
    };

    // Main
    return (
        <div className="weapper">
            <div className="main">
              <select id="C_title" onChange={onChanges}>
                {selectItems.map((item) => (
                    <option key={item.value} value={item.value} selected={item.value === selectItems[1].value}>
                        {item.label}
                    </option>
                ))}
              </select>
            </div>
            {renderContent}
        </div>
    );
}

export default App;
