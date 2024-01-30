import React, { useState,useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const internal_links = [
  {
    text: "Projects",
    urlID: "#projects-section",
  },
  {
    text: "Contact Me",
    urlID: "#contactme-section",
  },
 
];

const SocialLinks = () => {
  

  return (
    <HStack spacing="4">
      {socials.map((social, index) => (
        <a key={index} href={social.url} >
          <FontAwesomeIcon icon={social.icon}  size="2x"  />
        </a>
      ))}
    </HStack>
  );
};

const InternalLinks=()=>{
  return (
    <HStack spacing="4">
      {internal_links.map((link, index) => (
        <a key={index} href={link.urlID} >
         {link.text}
        </a>
      ))}
    </HStack>
  );
  <h1>sadfasdf</h1>

};

const Header = () => {
  const navRef = useRef(null);


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  

  
  useEffect(() => {
    const handleScroll=()=>{
      const navElement = navRef.current;
      if (navElement) {
        if (window.scrollY > 200) {
          // Hide the navigation bar when scrolled down
          navElement.style.display = "none";
        } else {
          // Show the navigation bar when scrolled up
          navElement.style.display = "block";
        }
      }

    };

    window.addEventListener('scroll',handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navRef]);
  

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={navRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <SocialLinks/>
          </nav>
          <nav>
           
             <InternalLinks/>
           
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
