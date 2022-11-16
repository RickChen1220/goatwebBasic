import Modal from "UI/Modal";
import React, { useRef } from "react";
import styles from "./AddAgentForm.module.css";

const AddAgentForm = ({ setAgentlists }) => {
  const nameRef = useRef();
  const strategyRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const strategy = event.target.elements.strategy.value;
    const newlist = { id: 3, name, strategy };

    setAgentlists((prevLists) => {
      return prevLists.concat(newlist);
    });
    nameRef.current.value = "";
    strategyRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.information}>
        <label>Agent Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your agent name."
          ref={nameRef}
        />
        <label>Strategy</label>
        <input
          type="text"
          name="strategy"
          placeholder="Enter your strategy"
          ref={strategyRef}
        />
        <button type="submit">Add New Agent</button>
      </div>
    </form>
  );
};

export default AddAgentForm;
