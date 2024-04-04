import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Box, Button, Icon, Card, Input, Text, Image, VStack, Flex, HStack } from '@chakra-ui/react';
import { header, buttonCss } from "../styles/branding";
import onSearch from '../assets/apiJson/on_search.json';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import  SubHeader from '../components/SubHeader';

const Search = () => {
    const { t } = useTranslation();
    const [searchTxt, setSearchTxt] = useState('');
    const [location, setLocation] = useState('');
    const [year, setYear] = useState('2 years');
    const [items, setItems] = useState(onSearch)
    const navigate = useNavigate();

    // useEffect(() => {
    //   }, []);

    const goTodetailPage = (item, items) => {

        navigate("/details", {
            state: { item: item, items: items },
        });
    }
    return (
        <Box>
           <SubHeader  cartItemCount={2} back={false}  />
            <VStack mt={20}>
                <Image
                    height={{ base: '80px', md: '80px' }}
                    width={{ base: '80px', md: '80px' }}
                    src={header?.headerContent?.logoSrc}
                    alt="The house from the offer."
                />

                <Text fontSize={50} fontWeight={700} color={header?.headerContent?.appTitleColor}>
                    {header?.headerContent?.title1}
                </Text>

                <Input
                    boxShadow="0px 4px 20px rgba(0, 0, 0, 0.08)"
                    width='35rem'
                    height='56px'
                    id="searchTxt"
                    type="text"
                    autoComplete="searchTxt"
                    value={searchTxt}
                    placeholder={t('SEARCH_FOR')}
                    p={3}
                    fontSize={15}
                    onChange={(e) => setSearchTxt(e.target.value)}
                />
                <Input
                    boxShadow="0px 4px 20px rgba(0, 0, 0, 0.08)"
                    width='35rem'
                    height='56px'
                    id="location" mt={2}
                    type="text"
                    autoComplete="location"
                    value={location}
                    placeholder={t('ENTER_LOCATION')}
                    p={3}
                    fontSize={15}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <Input
                    boxShadow="0px 4px 20px rgba(0, 0, 0, 0.08)"
                    width='35rem'
                    height='56px'
                    id="year"
                    mt={2}
                    type="text"
                    autoComplete="year"
                    value={year}
                    p={3}
                    fontSize={15}
                    onChange={(e) => setYear(e.target.value)}
                />
                <Button marginTop={5} type="submit" width='35rem' variant="solid" background={buttonCss?.primaryBtnColor} color={buttonCss?.primaryTxtColor}>
                    {t('SEARCH')}
                </Button>
            </VStack>

            <VStack>
                <Text mt={10} mb={2}>
                    {t('FREQUESNTLY_BOUGHT')}
                </Text>

                <HStack>
                    {items?.message?.catalog?.providers[0]?.items.map((item, index) => (

                        <Card background={'#F6F6F6'}
                            display="flex"
                            width={180}
                            height={234}
                            direction={{ base: "column", md: "row" }}
                            overflow="hidden"
                            borderWidth="1px"
                            borderRadius="lg"
                            borderColor="gray.200"
                            minHeight="270px"
                            _hover={{ borderColor: "blue.400" }}
                            cursor="pointer"
                            boxShadow="7px 12px 0px rgba(0, 0, 0, 0.1)"
                            p={4}
                            mb={6}
                            onClick={() => goTodetailPage(item, items)}
                        >

                            <VStack flex={1}>
                                <Box >
                                    <Image
                                        height={{ base: '100px', md: '100px' }}
                                        width={{ base: '100%', md: '100%' }}
                                        src={item?.descriptor?.images[0].url}
                                        alt="The house from the offer."
                                    />
                                </Box>
                                <Box>
                                    <Text fontSize={15} noOfLines={1} fontWeight="bold" mb={2}>{item?.descriptor?.name}</Text>
                                    <HStack>

                                        <Text noOfLines={1} fontSize={12} mb={2}>Provided by: {items?.message?.catalog?.providers[0]?.descriptor?.name}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontSize={12} noOfLines={2} mb={2}>7 years in operation</Text>
                                        <HStack display="flex" alignItems="center">
                                            <Icon as={FaStar} color="#F4B73F" />
                                            <Box fontSize={12} ml={1}>4.2</Box>
                                        </HStack>
                                    </HStack>

                                </Box>
                            </VStack>
                        </Card>))}

                </HStack>
            </VStack>

            </Box>
    );
};

export default Search;
