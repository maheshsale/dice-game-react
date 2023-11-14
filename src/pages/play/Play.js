import './Play.css'
import Cube from './images/cubes_gambling.png'

function Play(){
      return(
            <div className="container1">
                  <div className="header">
                        <div className="score">
                              <h1>0</h1>
                              <p>Total Score</p>
                        </div>
                        <div className="select-number">
                              <div className="buttons">
                                    <input type="radio" name="selected-number" value="1" id="one" />
                                    <label htmlFor="one">1</label>
                                    <input type="radio" name="selected-number" value="2" id="two" />
                                    <label htmlFor="two">2</label>
                                    <input type="radio" name="selected-number" value="3" id="three" />
                                    <label htmlFor="three">3</label>
                                    <input type="radio" name="selected-number" value="4" id="four" />
                                    <label htmlFor="four">4</label>
                                    <input type="radio" name="selected-number" value="5" id="five" />
                                    <label htmlFor="five">5</label>
                                    <input type="radio" name="selected-number" value="6" id="six" />
                                    <label htmlFor="six">6</label>
                              </div>
                              <h3>Select Number</h3>
                        </div>
                  </div>
                  <div className="roll-dice">
                        <img src={Cube} alt="Cube" />
                        <h3>Click on Dice to Roll</h3>
                        <button id="reset">Reset Score</button>
                        <button id="rules">Show Rules</button>
                  </div>
            </div>
      );
}

export default Play;