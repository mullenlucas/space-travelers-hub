import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { cancelRocketReservation } from '../../redux/rocketsSlice';
import './profile.css';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const handleCancel = (e) => {
    dispatch(cancelRocketReservation(+e.target.id));
  };

  return (
    <div className="profile-page">
      <div>
        <h2 className="profile-header">My Rockets</h2>
        <ul className="profile-list">
          {rockets.filter((rocket) => rocket.reserved).length > 0 ? (
            reservedRockets.map((rocket) => (
              <li key={rocket.id}>
                <a href={rocket.wikipedia} target="_blank" rel="noreferrer">{rocket.rocketName}</a>
                <Button className="align-self-start" variant="outline-danger" size="sm" id={rocket.id} onClick={handleCancel}>
                  Cancel Reservation
                </Button>
              </li>
            ))) : <p>No rockets reserved</p>}
        </ul>
      </div>
      <div>
        <h2>My Missions</h2>
      </div>
    </div>
  );
};

export default ProfilePage;
