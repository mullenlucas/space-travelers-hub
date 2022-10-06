import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { cancelRocketReservation } from '../../redux/rocketsSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const handleCancel = (e) => {
    dispatch(cancelRocketReservation(+e.target.id));
  };

  return (
    <div>
      <div>
        <h2>My Rockets</h2>
        <ul>
          {rockets.filter((rocket) => rocket.reserved).length > 0 ? (
            reservedRockets.map((rocket) => (
              <li key={rocket.id}>
                <span>{rocket.rocketName}</span>
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
