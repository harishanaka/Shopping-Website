import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [currentPage, setCurrentPage] = useState('signIn');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      setErrorMessage('Please enter both email and password to sign in.');
      return;
    }
    // Perform sign-in logic
    // If unsuccessful, setErrorMessage('Incorrect email or password');
  };

  const handleSignUp = () => {
    if (!email || !password || !firstName || !lastName || !gender || !confirmPassword) {
      setErrorMessage('Please fill in all the fields to sign up.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    if(password === confirmPassword) {
      setSuccessMessage('Account created successfully!');
    }
    // Perform sign-up logic
    // If successful, setSuccessMessage('Account created successfully!');
    // If unsuccessful, setErrorMessage('Sign up failed. Please try again.');
  };

  const handleForgotPassword = () => {
    if (!forgotPasswordEmail) {
      setErrorMessage('Please enter your email to reset the password.');
      return;
    }
    // Perform forgot password logic
    // If successful, setSuccessMessage('A reset link is sent to your email.');
    // If unsuccessful, setErrorMessage('Email not found. Please try again.');
  };

  const goToSignIn = () => {
    setCurrentPage('signIn');
    setErrorMessage('');
    setSuccessMessage('');
  };

  const goToSignUp = () => {
    setCurrentPage('signUp');
    setErrorMessage('');
    setSuccessMessage('');
  };

  const goToForgotPassword = () => {
    setCurrentPage('forgotPassword');
    setErrorMessage('');
    setSuccessMessage('');
  };

  return (
    <div className="login-container">
      {currentPage === 'signIn' && (
        <>
          <h2>Sign In</h2>
          <form>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type="button" onClick={handleSignIn}>
              Sign In
            </button>

            <div>
              <button type="button" onClick={goToSignUp}>
                Don't have an account? Sign Up
              </button>
              <button type="button" onClick={goToForgotPassword}>
                Forgot Password?
              </button>
            </div>
          </form>
        </>
      )}

      {currentPage === 'signUp' && (
        <>
          <h2>Sign Up</h2>
          <form>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <label>Gender:</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />
                Female
              </label>
            </div>

            <button type="button" onClick={handleSignUp}>
              Sign Up
            </button>

            <div>
              <button type="button" onClick={goToSignIn}>
                Already have an account? Sign In
              </button>
            </div>
          </form>
        </>
      )}

      {currentPage === 'forgotPassword' && (
        <>
          <h2>Forgot Password</h2>
          <form>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={forgotPasswordEmail}
              onChange={(e) => setForgotPasswordEmail(e.target.value)}
            />

            <button type="button" onClick={handleForgotPassword}>
              Reset Password
            </button>

            <div>
              <button type="button" onClick={goToSignIn}>
                Back to Sign In
              </button>
            </div>
          </form>
        </>
      )}

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default App;
