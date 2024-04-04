import React from 'react';
import { Box, Flex, IconButton, Badge, Text } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi'; // Assuming you have these icons imported
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const SubHeader = ({ title, cartItemCount, back= true }) => {
    const navigate = useNavigate();


    const handleGoBack = () => {
        navigate(-1)
    };

    return (
        <Box boxShadow="md" zIndex="sticky" width="100%">
            <Flex align="center" justify="space-between">
                {/* Back button */}
               { back &&  <IconButton
                    aria-label="Go back"
                    icon={<ChevronLeftIcon />}
                    fontSize={30}
                    variant="ghost"
                    onClick={handleGoBack}
                />
               }

                {/* Title */}
                <Text fontSize="lg" fontWeight="bold">{title}</Text>

                {/* Cart icon with badge */}
                <IconButton
                    aria-label="Cart"
                    icon={<FiShoppingCart />}
                    variant="ghost"
                    onClick={() => {
                        // Handle cart button click action
                    }}
                />
                {/* <Badge colorScheme="red" borderRadius="full" px={2} ml={2}>{cartItemCount}</Badge> */}
            </Flex>
        </Box>
    );
};

export default SubHeader;
