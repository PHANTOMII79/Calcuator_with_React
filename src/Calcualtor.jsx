
function Calcualtor(){


    return(
        
            <>
            <div className="Display">
                <p>0</p>
            </div>
              <div className="FirstRow">
                <button className="Topoprator">AC</button>
                <button className="Topoprator">+/-</button>
                  <button className="Topoprator">%</button>
                  <button className="Oprator"> / </button>
              </div>
              <div className="SecondRow">
                <button className="Numbers">7</button>
                <button className="Numbers">8</button>
                <button className="Numbers">9</button>
                <button className="Oprator">*</button>
              </div>
              <div className="ThirdRow">
                <button className="Numbers">4</button>
                <button className="Numbers">5</button>
                <button className="Numbers">6</button>
                <button className="Oprator">-</button>
              </div>
              <div className="FourthRow">                
                <button className="Numbers">1</button>
                <button className="Numbers">2</button>
                <button className="Numbers">3</button>
                <button className="Oprator">+</button>
                </div>
              <div className="FifthRow">
               <button className="Numbers" id="Zero" >0</button>
                <button className="Numbers">. </button>
                <button className="Oprator"> = </button>
              </div>
        </>
    );
}

export default Calcualtor