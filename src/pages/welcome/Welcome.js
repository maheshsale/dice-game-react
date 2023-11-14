import './Welcome.css';
import Image from './images/dice1.png'
import { useNavigate } from 'react-router-dom';

function Welcome(){
      const navigate = useNavigate();
      return(
            <div className='container'>
                  <div className="dice1">
                        <img src={Image} alt="dice1" />
                  </div>
                  <div className="title">
                        <h1>DICE GAME</h1>
                        <button className='play-btn' onClick={() => navigate("/play")}>Play Now</button>
                  </div>
            </div>
      );
}

export default Welcome;