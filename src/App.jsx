import { useState } from "react";
import styles from "./App.module.css";
import Buttons from "./Components/Buttons";
import Heading from "./Components/Heading";
import Input from "./Components/Input";

function App() {
  const [calVal, setCalVal] = useState("");
  const onbuttonClicked = (btnText) => {
      if(btnText === "c"){
        setCalVal("");
        console.log("c");
      }
     else if(btnText == "="){
        const result = eval(calVal)
        setCalVal(result);
      }
      else{
      const newCalval = calVal+ btnText
      setCalVal(newCalval);
      }
  };
  return (
    <div className={styles.calculator}>
      <Heading></Heading>
      <Input display={calVal}></Input>
      <Buttons onbuttonClicked={onbuttonClicked}></Buttons>
    </div>
  );
}

export default App;
