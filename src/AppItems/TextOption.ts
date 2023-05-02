type Option = {
    index: number;
    label: string;
    value: string;
  };
  
export const initialOptions: Option[] = [
  { index: 0, label: "html", value: '<!DOCTYPE html>\n<html lang="ja">\n<head>\n\n<title>TITLE</title>\n</head>\n<body>\n\n<body/>\n</html>' },
  { index: 1, label: "br", value: "<br></br>" },
  { index: 2, label: "H", value: "<h1>text</h1>" },
  { index: 3, label: "P", value: "<p>Paragraph</p>" },
  { index: 4, label: "div", value: "<div>item</div>" },
  { index: 5, label: "Link", value: "<a href='#'>Link</a>" },
];