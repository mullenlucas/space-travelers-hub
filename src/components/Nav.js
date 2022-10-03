import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

function Nav({ title, routes }) {
  return (
    <>
      <Link className="header-logo" to="/">
        <img src="logo.png" alt="logo space travelers" />
        <h1>{title}</h1>
      </Link>
      <nav>
        <ul>
          {routes.map(({ name, path }) => (
            <li key={path}>
              <NavLink className="nav-link" to={path} end>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
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
