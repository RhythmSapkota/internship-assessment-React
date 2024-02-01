import React from "react";
import SideBar from "./Navigation/SideBar";
import { Outlet } from "react-router-dom";
import { AppBar, Typography, Container } from "@mui/material";
import TemporaryDrawer from "./Navigation/Drawer";

const DashboardLayout = () => {
  return (
    <>
      <AppBar color="secondary">
        <Container
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            "@media (min-width: 600px)": {
              maxWidth: "600px",
            },
          }}
          fixed
        >
          <Container
            component={"div"}
            sx={{
              "@media (min-width: 780px)": {
                display: "none",
              },
            }}
          >
            <TemporaryDrawer />
          </Container>

          <Typography variant="h4">InnovateX Solutions</Typography>
        </Container>
      </AppBar>

      <Container
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          "@media (min-width: 1200px)": {
            maxWidth: "200vmax",
            paddingLeft: "0px",
          },
        }}
      >
        <Container
          component="main"
          sx={{
            display: "flex",
            flexDirection: "row", // Changed flexDirection to "row"
            flex: 1,
            "@media (min-width: 1200px)": {
              maxWidth: "200vmax",
            },
          }}
        >
          <Container
            component="aside"
            sx={{
              maxWidth: "200px",
              borderRight: "solid 1px",
              borderColor: "GrayText",
              marginLeft: "20px",
              "@media (max-width: 785px)": {
                display: "none",
              },
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
              alignItems: "center",
              marginTop: "30px",
              "@media (max-width: 785px)": {
                marginTop: "90px",
              },
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
          "@media (min-width: 1200px)": {
            maxWidth: "200vmax",
          },
        }}
      >
        <Typography variant="span">
          Internship Assessment: Rhythm Sapkota
        </Typography>
        <Typography variant="span" style={{ marginLeft: "5px" }}>
          (LogicaBeans)
        </Typography>
      </Container>
    </>
  );
};

export default DashboardLayout;
