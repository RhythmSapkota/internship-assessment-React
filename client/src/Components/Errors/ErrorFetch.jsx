import React from "react";
import styled from "styled-components";
import img from "../../assets/Internal-Server-Error.png";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

const ErrorImage = styled.img`
  width: 900px;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

const ErrorFetch = () => {
  return (
    <ErrorContainer>
      <ErrorImage src={img} alt="Error" />
      <ErrorMessage>
        Oops! Something went wrong while fetching the data.
      </ErrorMessage>
    </ErrorContainer>
  );
};

export default ErrorFetch;
