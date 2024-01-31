import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/not-found.svg";
import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:-200px;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
  }
  a {
    text-decoration: none;
    color: black;
    text-transform: capitalize;
  
    &:hover {
      color: blue;
      transform: scale(1.9);
    }
  }
  
`;

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <Wrapper>
      <div>
        <img src={img} alt="not_found" />
        <h3>Ohh! Page Not Found </h3>
        <p>We cannot seem to find the page you are looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
