import { useState } from 'react';
import './Play.css'
// import Cube from './images/dice_1.png'

function Play(){
      const [score, setScore] = useState(0);

      const [selectedNumber, setSelectedNumber] = useState(null);
      const [selectedDice, setSelectedDice] = useState(null);

      const [isNumberSelected, setIsNumberSelected] = useState(false);
      const [isDiceSelected, setIsDiceSelected] = useState(false);

      const [cube, setCube] = useState('images/dice_1.png');
      
      let diceArray = ['dice_1', 'dice_2', 'dice_3', 'dice_4', 'dice_5', 'dice_6'];
      
      if(isNumberSelected && isDiceSelected){
            selectedNumber === selectedDice ? setScore(score+selectedDice) : setScore(score-selectedDice);
            //setIsNumberSelected(false);
            setIsDiceSelected(false);
      }
      const handleChange = (event) => {
            setSelectedNumber(parseInt(event.target.value));
            setIsNumberSelected(true);
      }

      const getDice = (index) => {
            let imgPath = 'images/' + diceArray[index] + '.png';
            return imgPath;
      }

      const rollDice = () => {
            if(isNumberSelected === false){
                  alert("Select a number first");
            } else {
                  let randomIndex = Math.floor(Math.random() * 6);
                  setCube(getDice(randomIndex));
                  setSelectedDice(randomIndex + 1);
                  setIsDiceSelected(true);
            }
      }

      const resetScore = () => {
            setScore(0);
      }
      return(
            <div className="container1">
                  <div className="header">
                        <div className="score">
                              <h1>{score}</h1>
                              <p>Total Score</p>
                        </div>
                        <div className="select-number">
                              <div className="buttons">
                                    <input type="radio" name="selected-number" value="1" id="one" onChange={handleChange}/>
                                    <label htmlFor="one">1</label>
                                    <input type="radio" name="selected-number" value="2" id="two" onChange={handleChange}/>
                                    <label htmlFor="two">2</label>
                                    <input type="radio" name="selected-number" value="3" id="three" onChange={handleChange}/>
                                    <label htmlFor="three">3</label>
                                    <input type="radio" name="selected-number" value="4" id="four" onChange={handleChange}/>
                                    <label htmlFor="four">4</label>
                                    <input type="radio" name="selected-number" value="5" id="five" onChange={handleChange}/>
                                    <label htmlFor="five">5</label>
                                    <input type="radio" name="selected-number" value="6" id="six" onChange={handleChange}/>
                                    <label htmlFor="six">6</label>
                              </div>
                              <h3>Select Number</h3>
                        </div>
                  </div>
                  <div className="roll-dice">
                        <h3>{selectedNumber ? "Selected Number: " + selectedNumber : "Please select a Number" } </h3>
                        <img src={cube} alt="Cube" onClick={rollDice}/>
                        <h3>Click on Dice to Roll</h3>
                        <button id="reset" onClick={resetScore}>Reset Score</button>
                        <button id="rules">Show Rules</button>
                  </div>
            </div>
      );
}

export default Play;