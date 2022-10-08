import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';
import logo from '../assets/planet.png';

function Nav({ title, routes }) {
  return (
    <header className="container">
      <Link className="header-logo" to="/">
        <img src={logo} alt="logo space travelers" className="logo-img" />
        <h1>{title}</h1>
      </Link>
      <nav>
        <ul>
          {routes.map(({ name, path }) => (
            <li key={path}>
              <NavLink className="nav-link text-primary" to={path} end>
                { name }
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Nav;
