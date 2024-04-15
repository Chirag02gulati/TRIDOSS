import React from 'react';
import './SignUp.css';

function SignUp() {
  const handleSignUpClick = () => {
    // Handle sign-up logic here
    console.log("Sign Up clicked");
  };

  return (
    <div className="signup-container">
    <div className="signup-container">
      <div className="form-container">
        <fieldset className="form-fieldset">
          <legend className="form-legend">Sign Up</legend>
          <div className="input-container">
            <input type="text" id="name" name="name" placeholder="Full Name" className="form-input" /><br /><br />
            <input type="email" id="email" name="email" placeholder="Email Address" className="form-input" /><br /><br />
            <input type="password" id="password" name="password" placeholder="Password" className="form-input" />
            <br /><br />
            <button className="form-button" onClick={handleSignUpClick}>Sign Up</button>
          </div>
          <p style={{ color: 'white' }}>Already have an account? <a href="/signin">Sign In</a></p>
        </fieldset>
      </div>
    </div>
    </div>
  );
}

export default SignUp;
