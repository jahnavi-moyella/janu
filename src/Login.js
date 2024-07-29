 



// import React, { useState } from "react";
// import './Login.css'

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // Implement your login logic here
//     console.log("Logging in with username:", username);
//   };

//   return (
//     <div className="login-form">
//       <h1>Login </h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br></br>
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br></br>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }




// Login.js





// Login.js

// 


// import React, { useState } from 'react';
// import './Login.css'; 
// import pic from './pictures/login.jpg'

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
   
//     console.log('Logging in with email:', email);
//   };

//   return (
//     <body>
//     <div className="container">
      
//       <div className="login-form">
//         <h2>Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br></br>
//         <button onClick={handleLogin}>Login</button>
      
//       </div>
      
     
//       {/* <div className="login">
//         <img src={pic} alt=" " /> */}
        
//       </div>
//       </body>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// import './Login.css';

// const validUsers = [
//   { email: 'sudhakar@gmail.com', password: '12345678' },
//   { email: 'jahnavi@gmail.com', password: '12345678' },
//   { email: 'kiran@gmail.com', password: '12345678' },
//   { email: 'harsha@gmail.com', password: '12345678' },
//   { email: 'trail@gmail.com', password: '12345678' }
// ];

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

   
//     let loggedIn = false;
//     for (let i = 0; i < validUsers.length; i++) {
//       if (email === validUsers[i].email && password === validUsers[i].password) {
//         loggedIn = true;
//         break;
//       }
//     }

//     if (loggedIn) {
//       setMessage('Login successful!');

//     } else {
//       setMessage('Invalid email or password. Please try again.');
//     }
//   };

//   return (
//     <div className="App">
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" value={email}  onChange={(e) => setEmail(e.target.value)} required /> <br/>
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br /><br />
//           <button type="submit">Login</button>
//         </form>
//         <p id="message">{message}</p>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import './Login.css';





// const validUsers = [
//   { email: 'sudhakar@gmail.com', password: '12345678' },
//   { email: 'jahnavi@gmail.com', password: '12345678' },
//   { email: 'kiran@gmail.com', password: '12345678' },
//   { email: 'harsha@gmail.com', password: '12345678' },
//   { email: 'trail@gmail.com', password: '12345678' }
// ];

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let loggedIn = false;
//     for (let i = 0; i < validUsers.length; i++) {
//       if (email === validUsers[i].email && password === validUsers[i].password) {
//         loggedIn = true;
//         break;
//       }
//     }

//     if (loggedIn) {
//       setMessage('Login successful!');
//     } else {
//       setMessage('Invalid email or password. Please try again.');
//     }
//   };

//   return (
//     <div className="App">
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="email">  Email  :</label>
          
         
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
            
          
//           <br /><br />
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           /><br /><br />
//           <button type="submit">Login</button>
//         </form>
//         <p id="message">{message}</p>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React,{useState} from "react";
import './Login.css';
const Login=()=>{
  const[email,setEmail]=useState([]);
  const[password,setPassword]=useState([]);
  const [message, setMessage] = useState('');

    const users=[
      {email:'sudhakar@gmail.com',password:'12345678'},
      {email:'harsha@gmail.com',
        password:'12345678'
      },
      {email:'kiran@gmail.com',
        password:'12345678'
      },
      {email:'jahnavi@gmail.com',
        password:'12345678'
      },
      {email:'trail@gmail.com',
        password:'12345678'
      }
    ];

    const handleLogin=()=>{
      const foundUser=users.find(user=>user.email===email&&user.password===password);

      if(foundUser){
        setMessage('Login successfully');
      }else{
        setMessage('invalid credentials');
      }
    };
    return(
      <body>
      <div className="container">

        <h2>Login</h2>
        <label htmlFor="email">    Email    :</label>
        <input type="text" id="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <label htmlFor="password" >  password :</label>
        <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <button onClick={handleLogin}>Login</button>
       
        <p id="message">{message}</p>
        
      </div>
      </body>
    )
}
export default Login;

