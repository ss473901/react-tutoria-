import ReactDOM from "react-dom";

const elem = document.getElementById("portal-root");

const Test = () => {
  return ReactDOM.createPortal(<div>テスト</div>, elem);
};
