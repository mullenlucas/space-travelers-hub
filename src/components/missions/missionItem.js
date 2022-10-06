import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missionsSlice';

const MissionItem = ({ mission }) => {
  const {
    id, name, description, joined,
  } = mission;
  const dispatch = useDispatch();
  return (
    <>
      <tr key={id} id={`ID_${id}`}>
        <th scope="row">{name}</th>
        <td className="w-20">{description}</td>
        <td>
          {
        joined
          ? <Badge bg="primary">Active Member</Badge>
          : <Badge bg="secondary">NOT A MEMBER</Badge>
          }
        </td>
        <td>
          {
            joined
              ? (
                <Button
                  variant="outline-danger"
                  onClick={() => dispatch(leaveMission(id))}
                >
                  Leave Mission
                </Button>
              )
              : (
                <Button
                  variant="outline-success"
                  onClick={() => dispatch(joinMission(id))}
                >
                  Join Mission
                </Button>
              )
          }
        </td>
      </tr>
    </>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MissionItem;
