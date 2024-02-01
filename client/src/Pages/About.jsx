// Import necessary libraries
import React from "react";
import styled from "styled-components";
import { FaGlobe, FaUsers, FaHeart, FaCheckCircle } from "react-icons/fa";
import { Typography } from "@mui/material";

// Styled components for your page
const AboutUsContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;
const TeamMember = styled.div`
  margin-bottom: 20px;
`;

const TeamMemberImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const TeamMemberName = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const TeamMemberRole = styled.p`
  font-size: 1rem;
`;

const About = () => {
  return (
    <AboutUsContainer>
      <Section>
        <Title>Our Story</Title>
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
      </Section>

      <Section>
        <Title>Our Mission</Title>
        <IconContainer>
          <FaGlobe />
        </IconContainer>
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
      </Section>

      <Section>
        <Title>Our Team</Title>
        <IconContainer>
          <FaUsers />
        </IconContainer>
        <Typography variant="h6" component="p">
          Meet the heart and soul of InnovateX Solutions, our dedicated team:
        </Typography>

        <TeamMember>
          <TeamMemberImage
            src="https://rapidapi-prod-apis.s3.amazonaws.com/b37f181e-9d2c-488f-9243-b006e07a116b.png"
            alt="Team Member 1"
          />
          <TeamMemberName>Rhythm Sapkota</TeamMemberName>
          <TeamMemberRole>Founder & CEO</TeamMemberRole>
          <Typography variant="h6" component="p">
            As the CEO, Rhythm oversees our technological strategies. With over
            a decade of experience in software development, she brings
            invaluable expertise to the table. Alexandra played a pivotal role
            in developing our flagship product, XStream, contributing
            significantly to its success.
          </Typography>
        </TeamMember>

        <TeamMember>
          <TeamMemberImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiheJJLnIF6lOVnUwXLoiGkL0J0SIMe6Ce-nt8dcMWEvn6jNE_61PgAucxd-U2aOykEI&usqp=CAU"
            alt="Team Member 2"
          />
          <TeamMemberName>Ramesh Jadav</TeamMemberName>
          <TeamMemberRole>CMO</TeamMemberRole>
          <Typography variant="h6" component="p">
            Ramesh Jadav leads our marketing efforts, ensuring our products
            reach the right audience. With a background in digital marketing, he
            has successfully executed campaigns that have elevated our brand
            presence. Ryan's innovative approach played a key role in doubling
            our client base within a year.
          </Typography>
        </TeamMember>
      </Section>
    </AboutUsContainer>
  );
};

export default About;
