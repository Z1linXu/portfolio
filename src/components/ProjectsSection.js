import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, stack } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "User Center",
    description:
        "The enterprise's core User Center System is a full-stack project based on Spring Boot for the backend and React for the frontend. It encompasses fundamental functionalities such as user registration, login, and querying. 🔥️",
    getImageSrc: () => require("../images/photo2.jpeg"),
    techStack: "Frontend: React, Ant Design Pro, Umi development framework. Backend: Java, Spring + SpringMVC + SpringBoot Frameworks, MyBatis + MyBatis Plus Data Access Frameworks, MySQL Database, jUnit Unit Testing Library",
    url:"http://user.zilinxu.com/"
  },
  {
    title: "Health Facility Employee Status Tracking System",

    description:
      "The Health Facility Employee Status Tracking System website is primarily built using PHP and MySQL, and it extensively employs various SQL functionalities.",
    getImageSrc: () => require("../images/photo1.png"),
    techStack: "PHP, Bootstrap, MySQL, Html, CSS",
    url:"http://hospital.zilinxu.com/",
  },

  {
    title: "Ristorante con Fusion",
    description:
      "The website for the restaurant \"Ristorante con Fusion\" is primarily constructed as a frontend project using JavaScript and Bootstrap.",
    getImageSrc: () => require("../images/photo2.png"),
    techStack: "JavaScript, Bootstrap, jquery, Html, CSS",
    url:"http://restaurant.zilinxu.com/"
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal website is a frontend project built using React and the Chakra UI framework, which is based on React.",
    getImageSrc: () => require("../images/photo3.png"),
    techStack: "React,chakra-ui, JavaScript, CSS",
    url:"http://www.zilinxu.com/"
  },

];

const ProjectsSection = () => {
  return (
    <FullScreenSection

        backgroundColor="#14532d"
      isDarkBackground
        py={16}
      alignItems="flex-start"
        id="projects-section"
      spacing={8}
    >

      <Heading as="h1" >
        Featured Projects
      </Heading>

      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            url={project.url}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
