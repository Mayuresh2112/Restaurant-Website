import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Welcome to My Restaurant, where culinary excellence meets warm hospitality. We're more than just a place to eat; we're a destination for memorable dining experiences.
        </p>
        <br />
        <Typography variant="h4">Our Story</Typography>
        <p>
        Founded with a passion for creating exceptional cuisine and providing outstanding service, My Restaurant has been a cornerstone of our community since [Year Established]. Our journey began with a simple idea: to craft dishes that tantalize the taste buds and create lasting memories for our guests.
        </p>
        <Typography variant="h4">Our Culinary Philosophy</Typography>
        <p>
        We're not just in the business of serving food; we're in the business of making people happy. Our friendly staff is dedicated to ensuring you have an exceptional dining experience every time you visit. From the moment you step through our doors, you'll be greeted with a warm smile and a commitment to exceeding your expectations.
        </p>
        <br />
        <Typography variant="h4">Join Us</Typography>
        <p>
        We invite you to be a part of our story. Whether it's a romantic dinner for two, a celebration with friends and family, or a business gathering, My Restaurant is the perfect setting for any occasion. We can't wait to welcome you and make your visit truly unforgettable.
        <br />
        
        Explore our menu, make a reservation, or contact us today to discover why My Restaurant is more than just a place to eat; it's an experience to savor.
        <br />
        Thank you for choosing My Restaurant. We look forward to serving you soon.
        </p>
      </Box>
    </Layout>
  );
};

export default About;