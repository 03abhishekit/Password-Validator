
import { useState } from 'react';
import './App.css'
import validator from 'validator';



function App() {
  const[errorMessage, setErrorMessage] = useState("");
  const[message, setMessage] = useState("");

  

  const validate = () =>{

    if(validator.isStrongPassword(message ,{
      minLength :8, minLowercase:1,
      minUppercase:1, minNumbers:1,
      minSymbols:1
    })){
      setErrorMessage( "Password Accepted");
    }else{
      setErrorMessage("Password must contain minimum 8 length ");
    }
  }

  return (
    <>
      <div className='validator'>
        <h3>Password Validator</h3>
        <label style={{ fontSize: "20px", fontFamily: "monospace" }}>
          Enter Password:
          <input
            type="text"
            placeholder="Enter your Password"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <br /><br />
        <button style={{ backgroundColor: "gray", padding: "8px 15px", cursor: "pointer" }} onClick={()=>{validate(), setMessage("")}}>
          Submit
        </button>
        
        {errorMessage && <p style={{ color: errorMessage.includes("Accepted") ? "green" : "red" }}>{errorMessage}</p>}
      </div>
      
    </>
  )
}

export default App
