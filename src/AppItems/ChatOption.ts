type Option = {
    id: string;
    index: number;
    label: string;
    value: string;
  };
  
  export const initialOptions: Option[] = [
    { id: "opt-00", index: 0, label: "背景色", value: "#FFFFFF" },
    { id: "opt-01", index: 1, label: "名前(※)",   value: "スレ主,第三者ななし" },
    { id: "opt-02", index: 2, label: "ID",    value: "true" },
  ];