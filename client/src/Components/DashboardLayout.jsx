import React from 'react';
import styled from 'styled-components';
import SideBar from './Navigation/SideBar';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden; /* To prevent content overflow */
`;

const Sidebar = styled.aside`
  width: 10%;
  min-width: 200px; /* Set a minimum width for the sidebar */
  background-color: #eee;
  padding: 20px;
  
  @media (max-width: 768px) {
    min-width: 0;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const DashboardLayout = () => {
  return (
    
    <Container>
      <Header>
        <h1>Internship-Assessment</h1>
      </Header>
      <MainWrapper>
        <Sidebar>
        <SideBar/>
        </Sidebar>
        <Main>
            <Outlet/>
        </Main>
      </MainWrapper>
      <Footer>
        <p>Rhythm Sapkota</p>
      </Footer>
    </Container>
  );
};

export default DashboardLayout;
