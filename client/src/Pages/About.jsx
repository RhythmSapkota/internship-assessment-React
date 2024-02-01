import React from "react";
import { Typography, Box, Avatar, Container, Grid } from "@mui/material";
import { FaGlobe, FaUsers, FaBook } from "react-icons/fa";

const About = () => {
  return (
    <Container sx={{ padding: "20px", textAlign: "center", marginTop: "25px" }}>
      <Box sx={{ marginBottom: "30px" }}>
        <Typography
          variant="h2"
          sx={{ fontSize: "2rem", marginBottom: "20px" }}
        >
          Our Story
          <FaBook style={{ marginLeft: "5px" }} />
        </Typography>
        <Typography variant="h6" component="p">
          Welcome to InnovateX Solutions, where innovation meets passion to
          create a lasting impact. Founded in 2015, our journey began with a
          vision to revolutionize tech solutions. The challenges we faced early
          on only fueled our determination to make a difference. Overcoming
          hurdles such as market uncertainties and resource limitations, we have
          emerged as a resilient force in the software development sector.
          Milestones achieved along the way include securing partnerships with
          leading industry players, showcasing our commitment to excellence.
          Today, we stand tall as a testament to the unwavering spirit that
          drives us to push boundaries and redefine possibilities.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: "30px" }}>
        <Typography
          variant="h2"
          sx={{ fontSize: "2rem", marginBottom: "20px" }}
        >
          Our Mission
          <FaGlobe style={{ marginLeft: "5px" }} />
        </Typography>
        <Typography variant="h6" component="p">
          At InnovateX Solutions, our mission is to empower businesses through
          cutting-edge technology. We believe in integrity, collaboration, and
          continuous improvement, and our work is guided by the commitment to
          delivering top-notch software solutions. By addressing the evolving
          needs of our clients, we aim to drive digital transformation and
          foster sustainable growth. Every product, service, or initiative is a
          step towards fulfilling this mission, ensuring that our journey is not
          just about business but making a positive contribution to the world
          around us.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: "30px" }}>
        <Typography
          variant="h2"
          sx={{ fontSize: "2rem", marginBottom: "20px" }}
        >
          Our Team
          <FaUsers style={{ marginLeft: "5px" }} />
        </Typography>
        <Typography variant="h6" component="p">
          Meet the heart and soul of InnovateX Solutions, our dedicated team:
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "20px",
                marginTop: "20px",
                padding: "20px",
                border: "inset",
                boxShadow: "10px 10px lightgrey",
              }}
            >
              <Avatar
                src="https://rapidapi-prod-apis.s3.amazonaws.com/b37f181e-9d2c-488f-9243-b006e07a116b.png"
                alt="Team Member 1"
                sx={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "10px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h4"
                sx={{ fontSize: "1.5rem", marginBottom: "5px" }}
              >
                Rhythm Sapkota
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                Founder & CEO
              </Typography>
              <Typography variant="h6" component="p">
                As the CEO, Rhythm oversees our technological strategies. With
                over a decade of experience in software development, she brings
                invaluable expertise to the table. Alexandra played a pivotal
                role in developing our flagship product, XStream, contributing
                significantly to its success.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "justify",
                marginBottom: "20px",
                marginTop: "20px",
                padding: "20px",
                border: "inset",
                boxShadow: "10px 10px lightgrey",
              }}
            >
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiheJJLnIF6lOVnUwXLoiGkL0J0SIMe6Ce-nt8dcMWEvn6jNE_61PgAucxd-U2aOykEI&usqp=CAU"
                alt="Team Member 2"
                sx={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "10px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h4"
                sx={{ fontSize: "1.5rem", marginBottom: "5px" }}
              >
                Ramesh Jadav
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                CMO
              </Typography>
              <Typography variant="h6" component="p">
                Ramesh Jadav leads our marketing efforts, ensuring our products
                reach the right audience. With a background in digital
                marketing, he has successfully executed campaigns that have
                elevated our brand presence. Ryan's innovative approach played a
                key role in doubling our client base within a year.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
