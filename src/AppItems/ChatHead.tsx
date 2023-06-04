/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import 'react-tabs/style/react-tabs.css';
import "./TextApp.css";
import "./ChatApp.css";
import ChatBbs from "./ChatApp";
import ChatLine from "./HtmlToHameln/LineApp";
import ChatAniman from "./HtmlToHameln/AnimanApp";
import Cookies from "js-cookie";

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
    const [defItem, setDefItem] = useState<SelectItem[]>([{label: 'LINE風', value: 'line'}]);

    // selectボックスの値が変更された時の処理
    const onChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // selectボックスの値を取得する
        const value = e.target.value;
        const label = e.target.selectedOptions[0].text;
        setItems(value, label);
    };

    const setItems = (value: string, label: string) => {
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

        // defItemを更新する
        const defItem: SelectItem[] = [{label: label, value: value}];
        setDefItem(defItem);
        // selectItemsをcookieに保存する
        Cookies.set('DefItem', JSON.stringify(defItem));
    };

    useEffect(() => {
        // cookieからselectItemsを取得する
        const cookieSelectItems = Cookies.get('DefItem');
        if (cookieSelectItems) {
            const selectItems: SelectItem[] = JSON.parse(cookieSelectItems);
            setDefItem(selectItems);
            setItems(selectItems[0].value, selectItems[0].label);
        }
    }, []);

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
