function SignUp() {
  return (
    <div className="SignupPage">
      <div className="loginBox">
        <h3>Login</h3>
        <input placeholder="First name" />
        <input placeholder="Last name" />
        <input placeholder="Date of birth" />
        <input placeholder="Email address" />
        <input placeholder="Create new password" type="password" />
        <input placeholder="Confirm password" type="password" />
        <button>Login</button>

        <p className="clickable-text">Forgot your password?</p>
        <p className="clickable-text">Sign Up</p>
      </div>
    </div>
  );
}

export default SignUp;
