import "isomorphic-fetch";

const fetchDroneData = async id => {
  const response = await fetch(
    `https://react-assessment-api.herokuapp.com/api/drone/`
  );
  if (!response.ok) {
    return { error: { code: response.status } };
  }
  const json = await response.json();
  return { data: json.data };
};

export default fetchDroneData;
