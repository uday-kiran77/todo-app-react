import React from "react";

import { Plus } from "react-feather";
import classes from "./OpenForm.module.css";
const OpenForm = (props) => {
  return (
    <button className={classes.openForm} onClick={props.onClick}>
      <Plus />
    </button>
  );
};

export default OpenForm;
