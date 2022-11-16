import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";

export default function ListTitles({ setDrawerOpen }) {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const titles = [
    {
      name: "Agent",
      icon: <HomeIcon />,
      url: "http://localhost:5000/titles/agent", //Testing if could get the url props
    },
    {
      name: "My Strategies",
      icon: <HomeIcon />,
      url: "http://localhost:5000/titles/mystrategies",
    },
    {
      name: "XXX",
      icon: <HomeIcon />,
      url: "http://localhost:5000/titles/xxx",
    },
  ];

  const getAgentapi = async (titles) => {
    setIsLoading(true);

    await axios
      .get(`${titles.url}`)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <List>
      {titles.map((titles) => (
        <ListItem key={titles.name}>
          <ListItemButton
            onClick={() => {
              setDrawerOpen(false);
              getAgentapi(titles);
              navigate(`/${titles.name}`);
            }}
          >
            <ListItemIcon> {titles.icon} </ListItemIcon>
            <ListItemText primary={titles.name} />
          </ListItemButton>
          {isLoading && <p>Loading...</p>}
        </ListItem>
      ))}
    </List>
  );
}
