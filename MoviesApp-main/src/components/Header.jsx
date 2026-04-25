import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          Movies Explorer
        </NavLink>
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/login" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Login</NavLink>
          <NavLink to="/register" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Register</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;