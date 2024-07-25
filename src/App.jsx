import Calcualtor from "./Calcualtor"
import Button from "./Button"
import PropsTypes from 'prop-types'
import React, {useState} from "react"



function App(props) {

  const [display, setDisplay] =useState("0");

  function Click(name){
    if(name ==="AC"){
      setDisplay("0");
    }
    else if (name === "="){
      try {
        setDisplay(eval(display));
      }
      catch (error){
        setDisplay("ERROR!");
      }
    }
    else if (name ==="+/-"){
      if(display === "0"){
        setDisplay("-")
      }
      else{
        setDisplay(eval(display * -1))
      }
    }
    else if (name === "%"){
      setDisplay(eval(display / 100))
    }
    else{
    setDisplay((D) => (D === "0" ? name : D + name));
    }
  }


  

  return (
            <>
               {/* <Calcualtor/>  */}
              <div className="Display">
                <p>{display}</p>
              </div>
              <div className="FirstRow">
                <Button className="Topoprator" name="AC" onClick={Click} />
                <Button className="Topoprator" name="+/-" onClick={Click} />
                <Button className="Topoprator" name="%" onClick={Click} />
                <Button className="Oprator" name="/" onClick={Click} />
              </div>
              <div className="SecondRow">
                <Button className="Numbers" name="7" onClick={Click} />
                <Button className="Numbers" name="8" onClick={Click} />
                <Button className="Numbers" name="9" onClick={Click} />
                <Button className="Oprator" name="*" onClick={Click} />
              </div>
              <div className="ThirdRow">
                  <Button className="Numbers" name="4" onClick={Click} />
                  <Button className="Numbers" name="5" onClick={Click} />
                  <Button className="Numbers" name="6" onClick={Click} />
                  <Button className="Oprator" name="-" onClick={Click} />
              </div>
              <div className="FourthRow">
                <Button className="Numbers" name="1" onClick={Click} />
                <Button className="Numbers" name="2" onClick={Click} />
                <Button className="Numbers" name="3" onClick={Click} />
                <Button className="Oprator" name="+" onClick={Click} />
              </div>
              <div className="FifthRow">
                <Button Id="Zero" className="Numbers" name="0" onClick={Click} />
                <Button className="Numbers" name="." onClick={Click} />
                <Button className="Oprator" name="=" onClick={Click} />
              </div>

            </>
  )
}


export default App