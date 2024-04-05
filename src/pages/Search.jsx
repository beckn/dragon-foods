import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Box, Button, Icon, Card, Input, Text, Image, VStack, Flex, HStack, Select } from '@chakra-ui/react';
import { header, buttonCss } from "../styles/branding";
import onSearch from '../assets/apiJson/on_search.json';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import mapIcon from '../assets/images/map.svg';
import Footer from '../components/Footer';


const Search = () => {
    const { t } = useTranslation();
    const [searchTxt, setSearchTxt] = useState('');
    const [location, setLocation] = useState('');
    const [year, setYear] = useState('2 years');
    const [items, setItems] = useState(onSearch)
    const navigate = useNavigate();

    const cityLocations = [
        "Balaganj",
        "Beanibazar",
        "Bishwanath",
        "Companiganj",
        "Fenchuganj",
        "Gopalganj",
        "Gowanighat",
        "Jaintiapur",
        "Kanaighat",
        "Sylhetsardar",
        "Zakiganj",
        "Dakshinsurma",
        "Osmaninagar"
    ];

    const searchData = async () => {
        console.log(searchTxt + ' - ' + year + ' - ' + location);
        navigate("/home", {
            state: { searchTxt: searchTxt, year: year, locationitems: location },
        });
    }

    const goTodetailPage = (item) => {
        navigate("/details", {
            state: { item: item },
        });
    }

    return (
        <Box>
            <SubHeader cartItemCount={2} back={false} />
            <VStack mt={20}>
                <Image
                    height='153px'
                    width='333px'
                    src={header?.headerContent?.logoSrc}
                    alt="The house from the offer."
                    mb={5}
                />
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
                <Select
                    boxShadow="0px 4px 20px rgba(0, 0, 0, 0.08)"
                    width='36.5rem'
                    height='56px'
                    id="location"
                    mt={2}
                    autoComplete="location"
                    value={location}
                    placeholder={t('ENTER_LOCATION')}
                    p={3}
                    fontSize={15}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    {/* Placeholder option */}
                    <option value="" disabled hidden>{t('ENTER_LOCATION')}</option>
                    {cityLocations.map(city => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </Select>

                <Select
                    boxShadow="0px 4px 20px rgba(0, 0, 0, 0.08)"
                    width='36.5rem'
                    height='56px'
                    id="year"
                    mt={2}
                    autoComplete="year"
                    value={year}
                    p={3}
                    fontSize={15}
                    onChange={(e) => setYear(e.target.value)}
                >
                    {/* Generate options from 1 to 10 years */}
                    {[...Array(10)].map((_, index) => (
                        <option key={index + 1} value={index + 1}>{index + 1} year{index !== 0 && 's'}</option>
                    ))}
                </Select>
                <Button marginTop={5} onClick={searchData} type="submit" width='35rem' variant="solid" background={buttonCss?.primaryBtnColor} color={buttonCss?.primaryTxtColor}>
                    {t('SEARCH')}
                </Button>
            </VStack>

            <VStack>
                <Text mt={10} mb={2}>
                    {t('FREQUESNTLY_BOUGHT')}
                </Text>

                <HStack>
                    {items?.message?.catalog?.providers.map((item, index) => (

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
                            mb={6}
                            onClick={() => goTodetailPage(item)}
                        >

                            <VStack flex={1}>
                                <Box height='132px' >
                                    <Image
                                        mt={5}
                                        height='100px'
                                        width='130px'
                                        src={item?.descriptor?.images[0].url}
                                        alt="The house from the offer."
                                    />
                                </Box>
                                <Box bg={'#FFF'} borderRadius="lg" height='132px'>
                                    <Box p={2}>

                                        <Text fontSize={15} noOfLines={1} fontWeight="bold" mb={2}>{item?.items[0]?.descriptor?.name}</Text>
                                        <HStack>

                                            <Text noOfLines={1} fontSize={12} mb={2}> {t('PROVIDED_BY')}: {item?.descriptor?.name}</Text>
                                        </HStack>
                                        <HStack>
                                            <Text fontSize={12} noOfLines={1} mt={2} mb={2}> {item?.tags[0]?.list[1]?.value} {t('YEARS_IN_OPERATION')}</Text>
                                            <HStack display="flex" alignItems="center">
                                                <Icon as={FaStar} color="#F4B73F" />
                                                <Box fontSize={12} ml={1}>4.2</Box>
                                            </HStack>
                                        </HStack>
                                    </Box>

                                </Box>
                            </VStack>
                        </Card>))}

                </HStack>
            </VStack>
            <Box mt={100}> <Footer /> </Box>
        </Box>

    );
};

export default Search;
