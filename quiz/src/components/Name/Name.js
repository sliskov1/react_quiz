import './Name.css';
import { useState } from 'react';
import {Navigate} from 'react-router-dom'
function Name(props) {

    const [username, setUserName] = useState('');
    const [toNext, setToNext] = useState(false)

    const handleSubmit = (e) => {
       e.preventDefault();
       setToNext(true);
      }
    
    return (
        <div>
            <h1 className="header">Before we begin, what is your name?</h1>
            <form className="position" onSubmit={handleSubmit}>
                <label>
                    <input type="text" name={username} onChange={e => setUserName(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
                {toNext ? <Navigate to="/Questions" /> : null}
            </form>
        </div>
    );
}

export default Name;