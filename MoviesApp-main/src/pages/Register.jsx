import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p className="subtitle">Join Movies Explorer to discover amazing films</p>
        <form className="auth-form">
          <input type="text" placeholder="Full name" className="auth-input" />
          <input type="email" placeholder="Email address" className="auth-input" />
          <input type="password" placeholder="Create password" className="auth-input" />
          <button type="button" className="auth-button">Create Account</button>
        </form>
        <p className="auth-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;