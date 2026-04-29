import './login.scss';

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="bakery-title"> Bloom Bakery</h1>
        <h2>Welcome Back</h2>

        <form>
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Login</button>

          <p className="signup-text">
            Don’t have an account? <span>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;