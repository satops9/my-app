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
    setChatNum: (num: number) => void,
    setChatId: (id: string) => void,
    handleInputChange: (inputViewItem: string, inputCodeItem: string) => void, 
    setInputViewItem: (inputViewItem: string) => void,
    setInputCodeItem: (inputCodeItem: string) => void) {  
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
        setInputCodeItem(main);
        const All = 
`${bcCol_A}
${main}
${bcCol_B}`;
        return ( All )
    }

    var num = chatNum+1;
    setChatNum(num);
    setChatId(generateRandomString(10));
    handleInputChange(inputViewMode(),inputH_CodeMode())
  }