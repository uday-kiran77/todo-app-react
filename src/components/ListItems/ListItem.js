import React from "react";

import { Trash2 } from "react-feather";
import classes from "./List.module.css";

const ListItem = (props) => {
  const changeItemState = () => {
    props.onComplete(props.id);
  };

  const DeleteItem = () => {
    props.onDelete(props.id);
  };
  const isStriked = props.taskState ? classes.strikedText : null;

  return (
    <li key={props.id}>
      <p className={isStriked}>{props.name}</p>

      <div className={classes.listControls}>
        <button
          className={classes.deleteItem}
          onClick={DeleteItem}
          title="Delete Item"
        >
          <Trash2 />
        </button>

        <input
          type="checkbox"
          className={classes.checkbox}
          name="checkbox-checked"
          onClick={changeItemState}
          defaultChecked={props.taskState}
          title="Mark Completed"
        />
      </div>
    </li>
  );
};

export default ListItem;
