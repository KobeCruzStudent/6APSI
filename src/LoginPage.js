import React, { useState } from 'react';
import './loginPage.css'

function LoginPage() {
 
  return (
    
    <div className='container'>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
       
      /><br />
      <input
        type="password"
        placeholder="Password"
     
      /><br />
      <button >Login</button>
    </div>
  );
}

export default LoginPage;
