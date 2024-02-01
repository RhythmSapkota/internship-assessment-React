import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const SideBarList = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          onClick={() => navigate("/")}
          label={"Member"}
          {...a11yProps(0)}
          style={{ fontSize: "18px" }}
        />
        <Tab
          label={"Create"}
          {...a11yProps(1)}
          onClick={() => navigate("/manage-members")}
          style={{ fontSize: "18px" }}
        ></Tab>
        <Tab
          onClick={() => navigate("/about")}
          label={"About"}
          {...a11yProps(2)}
          style={{ fontSize: "18px" }}
        ></Tab>
      </Tabs>
    </Box>
  );
};

export default SideBarList;
