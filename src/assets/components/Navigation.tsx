import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();  
  return (
    <>
        <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">RecipeShare</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav custom-navbar-spacing">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current={location.pathname === '/' ? 'page' : undefined} to="/">Log In</Link>
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current={location.pathname === '/' ? 'page' : undefined} to="/settings">Settings</Link>
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current={location.pathname === '/' ? 'page' : undefined} to="/dashboard">Dashboard</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
