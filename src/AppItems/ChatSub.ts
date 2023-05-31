// IDに使用する乱数生成
export function generateRandomString(length: number): string {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@+-";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }
    return result;
  }

// number set
export const handleNumbChange = (e: React.ChangeEvent<HTMLInputElement>
                                ,setChatNum: (title: number) => void) => {
    setChatNum(Number(e.target.value));
};

// Id set
export const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>
                                ,setChatId: (title: string) => void) => {
    setChatId(e.target.value);
};

export const handleIdsChange = (e: React.ChangeEvent<HTMLSelectElement>
                                ,setChatId: (title: string) => void) => {
    setChatId(e.target.value);
};

// text set
export const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>
                                ,setChatText: (title: string) => void) => {
    setChatText(e.target.value);
};

export function submitBbsSetChange(
    inputViewItem: string, 
    inputCodeItem: string, 
    optionColor: string, 
    optionId: boolean, 
    chatNum: number, 
    chatTitle: string, 
    chatId: string, 
    chatText: string,
    selectIds: string,
    setChatNum: (num: number) => void,
    setChatId: (id: string) => void,
    setChatText: (id: string) => void,
    handleInputChange: (inputViewItem: string, inputCodeItem: string, textItem: string, codeItem: string) => void, 
    setOptionsIdSet: React.Dispatch<React.SetStateAction<{ value: string; label: string; }[]>>,
    setInputViewItem: (inputViewItem: string) => void,
    setInputCodeItem: (inputCodeItem: string) => void) {
    var textItems = "";
    var codeItems = "";  
    // submitNameChangeの中身のコード
    console.log(`押されたタイミング:${inputViewItem}`)
      // View Mode
      const viewCss = {
        'background-Color':optionColor,
        'font-Size': '15px',
        padding: '5px'
    }
    const inputViewMode = () => {
        const cssString = Object.keys(viewCss).map(key => `${key}:${viewCss[key as keyof typeof viewCss]}`).join(';');
        const heder = `<div style="${cssString}">`;
        const footer = `</div>`;

        let text = "";
        if(optionId === true){
            text = `
            <p>${chatNum}: ${chatTitle} ID:${chatId}</p>
            <p>${chatText}</p>
            `;
        }else{
            text = `
            <p>${chatNum}: ${chatTitle}</p>
            <p>${chatText}</p>
            `;
        }
        const main = inputViewItem + text;
        textItems = main;
        setInputViewItem(main);
        const All = `${heder}
                     ${main}
                     ${footer}`;
        return ( All )
    }

    // H-Code Mode
    const inputH_CodeMode =() => {
        const bcCol_A = 
`《boxbgcolor:${optionColor}》
《box:p0.5》`;
        const bcCol_B = 
`《/box》
《/boxbgcolor》`;
        const id_A = `《id:r${chatNum}》`; 
        const id_B = `《id:r${chatNum}e》`; 
        let textItem = "";

        if(optionId === true){
            textItem = 
`${id_A}${chatNum}: ${chatTitle} ID:${chatId}
${chatText}

${id_B} 
`;
        }else{
          textItem = 
`${id_A}${chatNum}: ${chatTitle}
${chatText}

${id_B} 
`;
        }

        const main = inputCodeItem + textItem;
        codeItems = main;
        setInputCodeItem(main);
        const All = 
`${bcCol_A}
${main}
${bcCol_B}`;
        return ( All )
    }

    var num = chatNum+1;
    setChatNum(num);
    const ids = generateRandomString(10);
    setChatId(ids);
    setChatText("");
    const texts = ids + "," + selectIds;
    const idsOptions = Array.from(new Set(texts.split(",")));
    const optionsIdsSet = idsOptions.map((c) => ({
      value: c,
      label: c,
    }));
    setOptionsIdSet(optionsIdsSet);
    handleInputChange(inputViewMode(),inputH_CodeMode(), textItems, codeItems)
  }

  export function submitLineSetChange(
    header: string,
    footer: string,
    inputViewItem: string, 
    inputCodeItem: string, 
    chatTitle: string, // LINEの名前
    chatName: string, // 相手の名前
    chatText: string, // LINEのテキスト
    chatNotion: boolean, // LINEの既読有無
    setChatText: (id: string) => void,
    handleInputChange: (inputViewItem: string, inputCodeItem: string, textItem: string, codeItem: string) => void, 
    setInputViewItem: (inputViewItem: string) => void,
    setInputCodeItem: (inputCodeItem: string) => void) {
    var textItems = "";
    var codeItems = "";

      // View Mode
      const inputViewMode = () => {
        
      }
    };

    const test = (id:string) => {
      let bodys = ``;

      return bodys;
    }