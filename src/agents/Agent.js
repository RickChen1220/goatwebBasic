import React from "react";
import DashboardLayout from "layouts/DashboardLayout";
import { useParams } from "react-router-dom";
import AddAgentForm from "layouts/Forms/AddAgentForm";
import AgentList from "layouts/Forms/AgentList";

export default function Agent() {
  const { name } = useParams();

  return (
    <DashboardLayout>
      <h1>Welcom to {name} </h1>
      <AgentList />
    </DashboardLayout>
  );
}
