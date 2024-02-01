import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/not-found.svg";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const styles = {
  wrapper: {
    minHeight: "100vh",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "90vw",
    maxWidth: 600,
    display: "block",
    marginBottom: "2rem",
    marginTop: "-3rem",
  },
  heading: {
    marginBottom: "0.5rem",
  },
  text: {
    lineHeight: 1.5,
    marginTop: "0.5rem",
    marginBottom: "1rem",
    color: "var(--text-secondary-color)",
  },
  link: {
    textDecoration: "none",
    color: "black",
    textTransform: "capitalize",
    "&:hover": {
      color: "blue",
      transform: "scale(1.9)",
    },
  },
};

const Error = () => {
  return (
    <Container style={styles.wrapper}>
      <Box>
        <img src={img} alt="not_found" style={styles.image} />
        <Typography variant="h5" style={styles.heading}>
          Ohh! Page Not Found
        </Typography>
        <Typography variant="body1" style={styles.text}>
          We cannot seem to find the page you are looking for
        </Typography>
        <Link to="/" style={styles.link}>
          <Button variant="contained" color="primary">
            Back Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Error;
