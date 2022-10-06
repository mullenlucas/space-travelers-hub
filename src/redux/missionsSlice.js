import axios from 'axios';

const missionsBaseURL = 'https://api.spacexdata.com/v3/missions';

const missionsInitialState = [];

// Actions
const FETCH_MISSION = 'space-travelers-hub/missionsContainer/FETCH_MISSION';
const JOIN_MISSION = 'space-travelers-hub/missionsContainer/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers-hub/missionsContainer/LEAVE_MISSION';

export const fetchMissions = (mission) => ({
  type: FETCH_MISSION,
  payload: mission,
});

export const joinMission = (missionId) => ({
  type: JOIN_MISSION,
  payload: missionId,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const getMissions = () => async (dispatch) => {
  const response = await axios.get(missionsBaseURL);
  const formatMissions = response.data.map((e) => ({
    id: e.mission_id,
    name: e.mission_name,
    description: e.description,
    joined: false,
  }));
  dispatch(fetchMissions(formatMissions));
};

const missions = (state = missionsInitialState, action) => {
  switch (action.type) {
    case FETCH_MISSION:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, joined: true };
        }
        return mission;
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, joined: false };
        }
        return mission;
      });
    default:
      return state;
  }
};

export default missions;
