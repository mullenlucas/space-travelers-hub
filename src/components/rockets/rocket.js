/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const {
    id, rocketName, description, rocketImages, reserved,
  } = rocket;

  return (
    <div className="rocket-card">
      <img src={rocketImages[0]} alt="rocket" className="rocket-img" />
      <div className=" card-body">
        <h4>{rocketName}</h4>
        <p>
          {reserved ? <span>Reserved</span> : ''}
          {description}
        </p>
        <button type="button" id={id}>
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rocketImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
