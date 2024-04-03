import React from 'react';
import { useState } from "react";

import { Box, Button, Icon, Card, Input, Text, Image, VStack, Flex, HStack, Checkbox, FormControl, FormLabel, } from '@chakra-ui/react';
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';
import dataList from '../assets/apiJson/checkoutForm.json';

const SubDetail = (item, items) => {
    const { t } = useTranslation();
    const location = useLocation();
    const state = location?.state;
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (option) => {
        setSelectedOptions((prevSelectedOptions) =>
            prevSelectedOptions.includes(option)
                ? prevSelectedOptions.filter((item) => item !== option)
                : [...prevSelectedOptions, option]
        );

        console.log(selectedOptions);
    };

    return (
        <>
            <Card mt={5} p={5} borderRadius="12px" border="1px solid rgba(191, 191, 191, 1)">
                <Box>
                    <Text fontSize={12} fontWeight={600}>{t('ABOUT')} {state?.items?.message?.catalog?.providers[0]?.descriptor?.name}</Text>
                    <Text fontSize={12} mt={1} >7 years in operation</Text>
                </Box>
                <Box mt={5}>
                    <Text fontSize={12} fontWeight={600}>{t('LICENSE_PROPRIETARY')}</Text>
                    <Text fontSize={12} mt={1}>{state?.item?.descriptor?.short_desc}</Text>
                </Box>
            </Card>

            <Card mt={5} p={5} borderRadius="12px" border="1px solid rgba(191, 191, 191, 1)">
                    {dataList?.list?.map((item, index) => (
                        <Box key={index}  mb={8} >
                            <FormLabel fontSize={12} fontWeight={600}>{item.title}</FormLabel>
                            {item.options.map((option, i) => (
                                <Checkbox fontSize={12} ml={5}
                                    key={i}
                                    isChecked={selectedOptions.includes(option)}
                                    onChange={() => handleCheckboxChange(option)}
                                >
                                    <Text fontSize={12} mt={1}> {option}</Text>
                                </Checkbox>
                            ))}
                        </Box>
                    ))}
            </Card>
        </>
    );
};

export default SubDetail;
