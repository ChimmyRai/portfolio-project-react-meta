import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack align="start" bg="white" spacing={4} borderRadius="lg">
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="lg"
      />
      <Heading as='h4' size='sm' fontWeight="bold" color="black">
        {title}
      </Heading>
      <Text fontSize='sm' color="grey">{description}</Text>

      <HStack>
        <Text fontSize='sm' color="black">
          See more
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x"  color="black"  />
      </HStack>


    </VStack>
  );
};

export default Card;
