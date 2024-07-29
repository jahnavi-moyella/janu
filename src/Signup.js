// 



import React, { useState } from "react";
 
 
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phnnum, setPhnnum] = useState("");
  const Signup = () => {
    setUsername('');
    setPassword('');
    setEmail('');
    setPhnnum('');
  };
  const Reset = () => {
    setUsername('');
    setPassword('');
    setEmail('');
    setPhnnum('');
  };
 
 
  return (
    <div className="txt2">
          <div className="box2">
      <h1> Signup</h1>
       <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> <br/>
       <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> <br/>
       <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> <br/>
      <input
        type="text"
        placeholder="phone num"
        value={phnnum}
        onChange={(e) => setPhnnum(e.target.value)}
      /> <br/>
   
      <button onClick={Signup} >Signup</button>
      <button onClick={Reset} >Reset</button>
     
    </div>
    </div>
  );
}
 
 
 