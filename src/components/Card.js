import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return (
        <VStack
            bg="white"
            //p="6"
            borderRadius="lg"
            boxShadow="lg"
            maxW="xl"
            w="full"
            spacing="4"
            align="flex-start" // 将内容靠左对齐

        >
            <Image src={imageSrc}
                   alt={title}
                   borderRadius="lg"
                   objectFit="cover" />
            <Heading
                as="h2"
                size="md"
                color="black"
                p="2"

            >
                {title}
            </Heading>
            <Text fontSize="md" color="dimgrey"  p="2">{description}</Text>
            <HStack spacing="2"  p="2">
                <Text fontSize="sm" color="blue.500">
                    See More
                </Text>
                <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
            </HStack>
        </VStack>
    );
};

export default Card;
