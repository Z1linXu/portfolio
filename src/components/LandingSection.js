import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Zilin Xu!";
const bio1 = "A Full Stack developer";
const bio2 = "Specialised in React and Spring Boot";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} align="center">
      <Avatar size="xl" name="Zilin Xu" src="url_to_your_avatar_image" />
      <Heading as="h1" size="sm" color="white"mb={4}>
        {greeting}
      </Heading>
      <Heading as="h2" size="xl" color="white" >
        {bio1}
      </Heading>
      <Heading as="h2" size="xl" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
