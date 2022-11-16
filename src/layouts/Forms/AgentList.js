import React, { useState } from "react";
import Card from "UI/Card";
import AddAgentForm from "./AddAgentForm";
import styles from "./AgentList.module.css";

const AgentList = () => {
  const list = [
    {
      id: 1,
      name: "mudamuda",
      strategy: "raise",
    },
    {
      id: 2,
      name: "Test",
      strategy: "bet",
    },
  ];

  const [agentLists, setAgentLists] = useState(list);
  const [updateState, setUpdateState] = useState(-1);

  return (
    <div className={styles.agentlist}>
      <div>
        <AddAgentForm setAgentlists={setAgentLists} />
        <Card>
          <form onSubmit={handleSubmit}>
            <table>
              {agentLists.map((current) =>
                updateState === current.id ? (
                  <EditList
                    current={current}
                    agentLists={agentLists}
                    setAgentLists={setAgentLists}
                  />
                ) : (
                  <tr>
                    <td>{current.name}</td>
                    <td>{current.strategy}</td>
                    <td>
                      <button
                        className={styles.buttonedit}
                        onClick={() => handleEdit(current.id)}
                      >
                        Edit
                      </button>
                      <button className={styles.buttondelete}>Delete</button>
                    </td>
                  </tr>
                )
              )}
            </table>
          </form>
        </Card>
      </div>
    </div>
  );

  function handleEdit(id) {
    setUpdateState(id);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const strategy = event.target.elements.strategy.value;
    const newAgentList = agentLists.map((li) =>
      li.id === updateState ? { ...li, name: name, strategy: strategy } : li
    );
    setAgentLists(newAgentList);
    setUpdateState(id);
  }

  function EditList({ current, agentLists, setAgentLists }) {
    function handInputname(event) {
      const value = event.target.value;
      const newAgentList = agentLists.map((li) =>
        li.id === current.id ? { ...li, name: value } : li
      );
      setAgentLists(newAgentList);
    }

    function handInputstrategy(event) {
      const value = event.target.value;
      const newAgentList = agentLists.map((li) =>
        li.id === current.id ? { ...li, strategy: value } : li
      );
      setAgentLists(newAgentList);
    }

    return (
      <tr>
        <td>
          <input
            type="text"
            onChange={handInputname}
            name="name"
            value={current.name}
          />
        </td>
        <td>
          <input
            type="text"
            onChange={handInputstrategy}
            name="strategy"
            value={current.strategy}
          />
        </td>
        <td>
          <button type="submit">Update</button>
        </td>
      </tr>
    );
  }
};

export default AgentList;
