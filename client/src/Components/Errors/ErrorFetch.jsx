import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "../../assets/Internal-Server-Error.png";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: 900,
    marginBottom: 20,
  },
  errorMessage: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
};

const ErrorFetch = () => {
  return (
    <Container style={styles.container}>
      <Box>
        <img src={Image} alt="Error" style={styles.image} />
        <Typography variant="body1" style={styles.errorMessage}>
          Oops! Something went wrong while fetching the data.
        </Typography>
      </Box>
    </Container>
  );
};

export default ErrorFetch;
