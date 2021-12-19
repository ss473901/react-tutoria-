export const App = () => {
  return <h1>簡単メモアプリ</h1>;
};


import { ChangeEvent, userState, FC } from "react";
import styled from "styled-components";

export const App: FC = () => { 
  //テキストボックスState
  const [text, setText] = useState<string>("");
  //メモ一覧State
  const [memos, setMemos] = useState<string[]>([]);

  //テキストボックスに入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement) =>
  setText(e.target.value);
}


//[追加]ボタン押下時
const onClickAdd = () => { 
  //State変更を正常に検知させるため新たな配列を生成
   const newMemos = [...memos] ;
  //テキストボックスの入力内容をメモ配列に追加
  newMemos.push(text);
}