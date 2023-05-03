type Option = {
    id: string;
    index: number;
    label: string;
    value: string;
  };
  
  export const initialOptions: Option[] = [
    { id: "opt-00", index: 0, label: "html", value: '<!DOCTYPE html>\n<html lang="ja">\n<head>\n\n<title>TITLE</title>\n</head>\n<body>\n\n<body/>\n</html>' },
    { id: "opt-01", index: 1, label: "br",   value: "<br></br>" },
    { id: "opt-02", index: 2, label: "H",    value: "<h1>text</h1>" },
    { id: "opt-03", index: 3, label: "P",    value: "<p>Paragraph</p>" },
    { id: "opt-04", index: 4, label: "div",  value: "<div>item</div>" },
    { id: "opt-05", index: 5, label: "Link", value: "<a href='#'>Link</a>" },
  ];
  