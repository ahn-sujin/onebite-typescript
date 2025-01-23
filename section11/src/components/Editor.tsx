import { useState } from "react";

interface EditorProps {
  onClickAdd: (text: string) => void;
}

const Editor = ({ onClickAdd }: EditorProps) => {
  const [text, setText] = useState(""); // 제네릭 함수: default 값에 따라 타입이 자동으로 부여

  // 이벤트 객체
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddButton = () => {
    onClickAdd(text);
    setText("");
  };

  return (
    <>
      <input value={text} onChange={onChangeInput} />
      <button onClick={handleAddButton}>추가</button>
    </>
  );
};

export default Editor;
