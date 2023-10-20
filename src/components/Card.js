import {Button, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description,techStack, imageSrc ,url}) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return (
        <VStack
            color="black"
            backgroundColor="white"
            cursor="pointer"
            borderRadius="xl"
            height="100%" /* 新增：设置VStack的高度为100%以填满父元素 */
            justifyContent="space-between" /* 新增：使子元素在垂直方向上平均分布 */

        >
            <Image src={imageSrc}
                   alt={title}
                   borderRadius="lg"
                   objectFit="cover" />
            <VStack spacing={4} p={4} alignItems="flex-start">
                <HStack justifyContent="space-between" alignItems="center">
                    <Heading as="h3" size="md">
                        {title}
                    </Heading>
                </HStack>
                <Text color="#64748b" fontSize="lg">
                    {description}
                </Text>
                <HStack justifyContent="space-between" alignItems="center">
                    <Heading as="h3" size="sm">
                        Technical Selection
                    </Heading>
                </HStack>
                <Text color="#64748b" fontSize="lg">
                    {techStack}
                </Text>
                <HStack spacing={2} alignItems="bottom"  justifyContent="flex-end">
                    <a href={url} target="_blank"style={{ color: 'blue' }}>
                        <Button colorScheme='blue'>See More </Button>
                    </a>

                </HStack>
            </VStack>
        </VStack>
    );
};

export default Card;
