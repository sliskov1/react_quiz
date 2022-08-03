import './Home.css'
import ReactTypingEffect from './ReactTypingEffectDemo.js'
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <div className="header">
                <ReactTypingEffect/>
            </div>
            <button>
            <Link to="/Name" className="text">Play</Link>
            </button>
        </div>
    );
}

export default Home;