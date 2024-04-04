import React from "react";
import { Box, Flex, Image, Text, Icon, Link } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ product }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      padding="20px"
      borderRadius="10px"
      boxShadow="0px 20px 25px 0px rgba(0, 0, 0, 0.1), 0px 8px 10px 0px rgba(0, 0, 0, 0.1)"
      backgroundColor="#ffffff"
      marginBottom="20px"
    >
      <Image
        flex="1"
        maxWidth="100px"
        height="100px"
        src={product.descriptor.images[0]?.url || "path/to/dummy-image.jpg"}
        alt={product.descriptor.name}
        borderRadius="10px"
        marginRight="20px"
      />
      <Flex flex="2" flexDirection="column">
        <Text
          fontSize="15px"
          fontWeight="600"
          lineHeight="22.5px"
          textAlign="left"
          marginBottom="10px"
        >
          {product.descriptor.name}
        </Text>
        <Text
          fontSize="12px"
          fontWeight="400"
          lineHeight="18px"
          marginBottom="10px"
          dangerouslySetInnerHTML={{ __html: product.descriptor.short_desc }}
        />
        <Text
          fontSize="12px"
          marginBottom="10px"
          fontWeight="600"
          lineHeight="18px"
        >
          Provided by: {product.descriptor.name}
        </Text>
        <Flex alignItems="center" justifyContent="space-between" marginBottom="10px">
          <Text
            fontSize="12px"
            fontWeight="400"
            lineHeight="18px"
            marginRight="10px"
          >
            License: Proprietary | 7 years in operation
          </Text>
          <Flex alignItems="center">
            <Icon as={FaStar} color="yellow.400" />
            <Text fontSize="12px" fontWeight="400" lineHeight="18px" marginLeft="5px">
              {product.rating || "4.5"}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CourseCard;
