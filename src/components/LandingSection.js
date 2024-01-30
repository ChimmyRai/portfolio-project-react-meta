import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar name='Pete' src=' https://i.pravatar.cc/150?img=7' size="xl" />
      <Heading as='h3' size='sm'>
        Hello, I am Pete!
      </Heading>
      <Heading as='h3' size='lg'>
        A frontend developer 
      </Heading>
      <Heading as='h3' size='lg'>
        specialised in React
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
