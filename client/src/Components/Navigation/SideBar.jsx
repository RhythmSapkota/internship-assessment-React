import React from "react";
import SideBarList from "./SideBarList";
import styled from "styled-components";

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideBar = () => {
  return (
    <SidebarContent>
      <h2>Dashboard</h2>
      <SideBarList />
    </SidebarContent>
  );
};

export default SideBar;
