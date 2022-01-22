import React, { useState, useEffect } from "react";

import classes from "./Form.module.css";
const Form = (props) => {
  const [value, updateValue] = useState("");
  const [isFormValid, setFormValid] = useState(false);
  const updateinputValue = (event) => {
    updateValue(event.target.value);

    if (event.target.value.length >= 2) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };
  useEffect(() => {}, [isFormValid]);

  const formSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(value);
  };
  return (
    <form className={classes.form} onSubmit={formSubmit}>
      <input
        type="text"
        value={value}
        onChange={updateinputValue}
        minLength="4"
        maxLength="20"
        placeholder="#to-do"
      />
      <button disabled={!isFormValid}>Add</button>
    </form>
  );
};

export default Form;
