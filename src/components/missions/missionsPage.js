import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getMissions } from '../../redux/missionsSlice';
import MissionItem from './missionItem';

const MissionPage = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  });

  return (
    <>
      <div className="mission-container container">
        <div className="mission-table table-responsive">
          <Table striped bordered>
            <thead>
              <tr>
                <th scope="col">Mission</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">Join</th>
              </tr>
            </thead>
            <tbody>
              {missions.map((mission) => (
                <MissionItem key={mission.id} mission={mission} />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default MissionPage;
