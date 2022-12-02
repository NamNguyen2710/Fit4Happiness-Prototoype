function Login() {
  return (
    <div className="LoginPage">
      <div className="loginBox">
        <h3>Login</h3>
        <input placeholder="USERNAME" />
        <input placeholder="PASSWORD" type="password" />
        <button>Login</button>
        
        <p className="clickable-text">Forgot your password?</p>
        <p className="clickable-text">Sign Up</p>
      </div>
    </div>
  );
}

export default Login;