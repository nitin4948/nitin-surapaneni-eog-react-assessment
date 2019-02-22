import * as actions from "../actions";

const initialState = {
  loading: false,
  data: []
};

const fetchDroneData = (state, action) => {
  return { ...state, loading: true };
};

const droneDataReceived = (state, action) => {
  return { ...state, data: action.data, loading: false };
};

const handlers = {
  [actions.DRONE_DATA_RECEIVED]: droneDataReceived,
  [actions.FETCH_DRONE_DATA]: fetchDroneData
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
