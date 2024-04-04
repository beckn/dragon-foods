import React from 'react';
import { useState } from "react";
import { Box, Button, Icon, Card, Input, Text, Image, VStack, Flex, HStack, Checkbox, FormControl, FormLabel, } from '@chakra-ui/react';
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';
import dataList from '../assets/apiJson/checkoutForm.json';
import { header, buttonCss } from "../styles/branding";
import { useNavigate } from 'react-router-dom';

const SuccessPayment = (item, items) => {
    const { t } = useTranslation();
    const location = useLocation();
    const state = location?.state;
    const navigate = useNavigate();

  return (
   <>
   </>
  );
};

export default SuccessPayment;
