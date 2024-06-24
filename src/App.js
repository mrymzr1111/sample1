

import { useState } from 'react';
import './App.css';

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

function App() {
  const [type, setType] = useState("password");
  const [value, setValue] = useState(<AiFillEye />);

  const handleClick = () => {
    if (type === 'password') {
      setType('text');
      setValue(<AiFillEyeInvisible />);
    } else {
      setType('password');
      setValue(<AiFillEye />);
    }
  }

  return (
   
    <div className="wrapper">
     <label for="staticEmail" class="col-sm-2 col-form-label">Enter your password:</label>
      <div className='input-fields'>

        <input type={type} />
        <h4 onClick={handleClick}>{value}</h4>
      
      </div>
    
    </div>
   
  );
}

export default App;