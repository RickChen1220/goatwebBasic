import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ListTiltes from "./list/ListTitles";

export default function Drawer({ open, onClose, setDrawerOpen }) {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
    >
      <ListTiltes setDrawerOpen={setDrawerOpen} />
    </SwipeableDrawer>
  );
}
