import React, { useState } from "react";
import { addSmurf, setError } from "../actions";

import { connect } from "react-redux";

const AddForm = (props) => {
  const { error } = props;
  const [state, setState] = useState({
    name: "",
    position: "",
    nickname: "",
    description: "",
  });

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name === "" || state.position === "" || state.nickname === "") {
      //   errorMessage = "Name, position and nickname fields are required.";
      setError("Name, position and nickname fields are required.");
    }
    addSmurf({
      name: "test",
      position: "tester",
      nickname: "testsmurf",
      summary: "none",
    });
  };

  // Make sure to spread state within the handleChange event to insure all form values are saved.
  //   const errorMessage = "";
  const errorMessage = error;

  return (
    <section>
      <h2>Add Smurf</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.name}
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.position}
            name="position"
            id="position"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.nickname}
            name="nickname"
            id="nickname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            onChange={handleChange}
            value={state.description}
            name="description"
            id="description"
          />
        </div>
        {errorMessage && (
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error: {errorMessage}
          </div>
        )}
        <button>Submit Smurf</button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { setError, addSmurf })(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value.
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.
