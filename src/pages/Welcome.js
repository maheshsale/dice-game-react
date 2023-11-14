import './Welcome.css';
import Image from '../images/dice1.png'

function Welcome(){
      return(
            <div className='container'>
                  <div className="dice1">
                        <img src={Image} alt="dice1" />
                  </div>
                  <div className="title">
                        <h1>DICE GAME</h1>
                        <button className='play-btn'>Play Now</button>
                  </div>
            </div>
      );
}

export default Welcome;