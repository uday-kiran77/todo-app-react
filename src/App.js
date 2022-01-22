import React, { useEffect, useState } from "react";

import Card from "./components/UI/Card";
import List from "./components/ListItems/List";
import OpenForm from "./components/Form/OpenForm";
import Form from "./components/Form/Form";

const App = () => {
  const [formState, changeFormState] = useState(false);
  const [list, changeList] = useState([
    {
      name: "learn HTML",
      isCompleted: false,
      key: 4525,
    },
    {
      name: "learn React",
      isCompleted: true,
      key: 451223,
    },
  ]);
  useEffect(() => {
    const localStoredList = localStorage.getItem("todoList");
    if (localStoredList) {
      changeList(JSON.parse(localStoredList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  const formChangeHandler = () => {
    changeFormState((prevState) => {
      return !prevState;
    });
  };

  const itemStateChangeHandler = (key) => {
    changeList((prevState) => {
      const updated = prevState.map((item) => {
        if (item.key === key)
          return { ...item, isCompleted: !item.isCompleted };
        return item;
      });
      return updated;
    });
  };

  const removeItemHandler = (key) => {
    changeList((prevState) => {
      const updatedItems = prevState.filter((item) => item.key !== key);
      return updatedItems;
    });
  };

  const FormHandler = (value) => {
    console.log(value);
    const newItem = {
      name: value,
      isCompleted: false,
      key: Math.random().toString(),
    };
    changeList((prevState) => {
      return [...prevState, newItem];
    });
    changeFormState(false);
    console.log(list);
  };

  return (
    <Card>
      <h1>To-do list</h1>
      <List
        items={list}
        completedHandler={itemStateChangeHandler}
        deleteItemHandler={removeItemHandler}
      />
      <OpenForm onClick={formChangeHandler} />

      {formState && <Form onSubmit={FormHandler} />}
    </Card>
  );
};

export default App;
