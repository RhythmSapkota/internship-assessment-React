import React from "react";
import SideBarList from "./SideBarList";
import { Box, Typography } from "@mui/material";

const SideBar = () => {
  return (
    <Box>
      <Typography variant="h2" fontSize={"28px"} marginTop={"70px"}>
        Dashboard
      </Typography>

      <hr />
      <SideBarList />
    </Box>
  );
};

export default SideBar;
