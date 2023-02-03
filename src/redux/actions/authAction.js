import axios from "axios";

export const GET_PROFILE = "GET_PROFILE";
export const GET_VERSION = "GET_VERSION";

export const updateProfile = (profile) => {
  return {
    type: GET_PROFILE,
    payload: {
      profile: profile,
    },
  };
};

export const getVersion = () => {
  return async (dispatch) => {
    const resp = await axios.get("https://api.codingthailand.com/api/version");
    dispatch({
      type: GET_VERSION,
      payload: {
        version: resp.data.data.version,
      },
    });
  };
  
  // return {
  //     type: GET_VERSION,
  //     payload:{
  //         version: '1.0.0'
  //     }
  // }
};
