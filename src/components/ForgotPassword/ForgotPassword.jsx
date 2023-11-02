import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming AuthService.sendResetPasswordEmail is a function that sends an email to the user with a reset link
      await AuthService.sendResetPasswordEmail(email);
      setMessage('Password reset email sent. Check your inbox.');
    } catch (error) {
      setMessage('Error sending reset email. Please try again.');
    }
  };

  return (
    <div className="forgot-password">
      <h2 className="forgot-password__h2">Forgot Password</h2>
      <form className="forgot-password__form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="forgot-password__input"
          />
        </label>
        <button type="submit" className="forgot-password__button">
          Reset Password
        </button>
      </form>
      <p className="forgot-password__p">{message}</p>
    </div>
  );
};

export default ForgotPassword;
