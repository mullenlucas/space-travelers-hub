import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { cancelRocketReservation } from '../../redux/rocketsSlice';
import { leaveMission } from '../../redux/missionsSlice';
import './profile.css';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.joined);

  const handleCancel = (e) => {
    dispatch(cancelRocketReservation(+e.target.id));
  };

  const handleLeave = (m) => {
    dispatch(leaveMission(m.target.id));
  };

  return (
    <div className="profile-page">
      <div className="profile-sec">
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
      <div className="profile-sec">
        <h2 className="profile-header">My Missions</h2>
        <ul className="profile-list">
          {missions.filter((mission) => mission.joined).length > 0 ? (
            joinedMissions.map((mission) => (
              <li key={mission.id}>
                <a href={mission.wikipedia} target="_blank" rel="noreferrer">{mission.name}</a>
                <Button className="align-self-start" variant="outline-danger" size="sm" id={mission.id} onClick={handleLeave}>
                  Leave Mission
                </Button>
              </li>
            ))) : <p>No missions joined</p>}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
