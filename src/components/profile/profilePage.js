import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

const ProfilePage = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <div>
        <h2>My Rockets</h2>
        <ul>
          {rockets.filter((rocket) => rocket.reserved).length > 0 ? (
            reservedRockets.map((rocket) => (
              <li key={rocket.id}>
                <span>{rocket.rocketName}</span>
                <Button className="align-self-start" variant="outline-danger" size="sm">
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
