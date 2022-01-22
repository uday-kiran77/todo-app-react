import React from "react";

import classes from "./List.module.css";
import ListItem from "./ListItem";

const List = (props) => {
  const items = props.items;
  let areItemsPresent = false;
  if (items.length !== 0) {
    areItemsPresent = true;
  }

  return (
    <ul className={classes.listItems}>
      {!areItemsPresent && (
        <div className={classes.emptyState}>
          <p>No items to show.</p>
          <p>Add a task</p>
        </div>
      )}

      {areItemsPresent &&
        items.map((item) => {
          return (
            <ListItem
              key={item.key}
              id={item.key}
              name={item.name}
              taskState={item.isCompleted}
              onComplete={props.completedHandler}
              onDelete={props.deleteItemHandler}
            />
          );
        })}

      {/* <li>
        <p>Learn Html</p>

        <div className={classes.listControls}>
          <button className={classes.deleteItem}>
            <Trash2 />
          </button>

          <label>
            <input
              type="checkbox"
              className={classes.checkbox}
              name="checkbox-checked"
            />
          </label>
        </div>
      </li>
      <li>
        <p>Learn Html</p>

        <div className={classes.listControls}>
          <button className={classes.deleteItem}>
            <Trash2 />
          </button>

          <label>
            <input
              type="checkbox"
              className={classes.checkbox}
              name="checkbox-checked"
            />
          </label>
        </div>
      </li>{" "}
      <li>
        <p>Learn Html</p>

        <div className={classes.listControls}>
          <button className={classes.deleteItem}>
            <Trash2 />
          </button>

          <label>
            <input
              type="checkbox"
              className={classes.checkbox}
              name="checkbox-checked"
            />
          </label>
        </div>
      </li> */}
    </ul>
  );
};

export default List;
