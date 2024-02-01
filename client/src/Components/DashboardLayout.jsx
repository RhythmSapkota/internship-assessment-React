import React from "react";
import SideBar from "./Navigation/SideBar";
import { Outlet } from "react-router-dom";
import { AppBar, Typography, Container } from "@mui/material";

const DashboardLayout = () => {
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        margin: "0px",
      }}
    >
      <AppBar color="secondary">
        <Typography variant="h4" textAlign="center" padding="10px">
          InnovateX Solutions
        </Typography>
      </AppBar>
      <Container
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Container
          component="div"
          sx={{
            display: "flex",
            minHeight: "92vh",
            // "@media (min-width: 1200px)": {
            //   maxWidth: "200px",
            // },
          }}
        >
          <Container
            component="aside"
            sx={{
              maxWidth: "200px",
              borderRight: "solid 1px",
              borderColor: "GrayText",
              "@media (min-width: 1200px)": {
                maxWidth: "200px",
              },
            }}
          >
            <SideBar />
          </Container>
          <Container
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <Outlet />
          </Container>
        </Container>
      </Container>
      <Container
        component="footer"
        sx={{
          backgroundColor: "#333",
          padding: "10px",
          textAlign: "center",
          color: "#fff",
          marginTop: "auto",
          flexShrink: 0, // Ensure the footer doesn't shrink
        }}
      >
        <p>Internship Assessment: Rhythm Sapkota</p>
        <p>LogicaBeans</p>
      </Container>
    </Container>
  );
};

export default DashboardLayout;
