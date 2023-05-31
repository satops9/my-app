import {useState} from 'react';

const Test = () => {
  
const [fontSize, setFontSize] = useState(16); // 初期値として16を設定

const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newFontSize = parseInt(e.target.value);
  setFontSize(newFontSize);
};

return(
  <>
  <input
        type="range"
        min="0"
        max="24"
        step="2"
        value={fontSize}
        onChange={handleFontSizeChange}
      />
      <p style={{ fontSize: `${fontSize}px` }}>テキストの例</p>
  </>
)
}