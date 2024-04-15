import React from 'react';
import './Contact.css';

function Contact() {
  const handleSignInClick = () => {
    // Handle sign-in logic here
    console.log("Sign In clicked");
  };

  return (
    <div className="signin-container">
    <div className="contact-container">
      <div className="form-container">
        <fieldset className="form-fieldset">
          <legend className="form-legend">Sign In</legend>
          <div className="input-container">
            <input type="text" id="email" name="email" placeholder="Email or phone number" className="form-input" /><br /><br />
            <input type="password" id="password" name="password" placeholder="Password" className="form-input" />
            <br /><br />
            <button className="form-button" onClick={handleSignInClick}>Sign IN</button>
          </div>
          <p className="qw">Forgot Password?</p>
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe" className="form-checkbox">Remember me</label>
          <p className='qw' >New to Tridoss? Sign up now.</p>
        </fieldset>
      </div>
    </div>
    </div>
  );
}

export default Contact;
