import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled.div`
  color: #333;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;

  a {
    color: inherit;
    text-decoration: none;
    font-size: 18px;
    font-family: "Arial", sans-serif; /* Example font family */
    letter-spacing: 1px;
    transition: color 0.3s;
    border-radius: 5px;
    padding: 10px;

    &:hover {
      background-color: #ddd;
    }
  }
`;

const SideBarList = () => {
  const pages = [
    {
      title: "Members",
      url: "/",
    },
    {
      title: "Create Member",
      url: "/manage-members",
    },
    {
      title: "About Us",
      url: "/about",
    },
  ];

  return (
    <SidebarLink>
      {pages.map((page, index) => (
        <Link key={index} to={page.url}>
          {page.title}
        </Link>
      ))}
    </SidebarLink>
  );
};

export default SideBarList;
