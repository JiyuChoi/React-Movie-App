import Button from "./Button";
import styles from "./App.module.css"

import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]); // keyword가 변할 때만 실행됨
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]); // counter가 변할 때만 실행됨
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes.");
  }, [keyword, counter]); // 두 중 하나의 state가 변할 때
  return (
    <div>
      <input type="text" value={keyword} onChange={onChange} placeholder='Search here...'></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
