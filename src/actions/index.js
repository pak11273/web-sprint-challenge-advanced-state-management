// types
export const FETCH_SMURFS = "FETCH_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_FAIL = "SMURF_FETCH_FAIL";

// actions
export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_SMURFS,
    });

    setTimeout(() => {
      dispatch({
        type: SMURF_FETCH_SUCCESS,
      });
    }, 3000);
  };
};

export const addSmurf = (smurf) => {
  return {
    type: ADD_SMURF,
    payload: smurf,
  };
};

export const setError = () => {
  return {
    type: SET_ERROR,
    error: "This is an error",
  };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
