import React from "react";
import  '../cssComponents/SignIn.css'
function SignIn() {
  return (
    <div className="page">
      <div className="signUpForm">
        <h1>Register</h1>
        <form>
          <div className="formContentBox">
            <label htmlFor="name">name</label> <br />
            <input type="text" placeholder="example" id="name" />
          </div>

           <div className="formContentBox">
            <label htmlFor="email">Email</label> <br />
            <input type="email" placeholder="example@gmail.com" id="email" />
          </div>

           <div className="formContentBox">
            <label htmlFor="password">Password</label> <br />
            <input type="password" placeholder="min 6 characters" id="password" />
          </div>

          <button>Register</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
