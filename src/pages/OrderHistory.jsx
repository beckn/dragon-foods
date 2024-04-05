import React, { useState } from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import SubHeader from "../components/SubHeader";
import { useTranslation } from "react-i18next";
import onConfirm from "../assets/apiJson/on_confirm.json";

const OrderHistory = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState(onConfirm.message.order.items);
  console.log(onConfirm.message.order.items);

  return (
    <Box>
      <SubHeader title={t("Order History")} cartItemCount={2} />
      <Box maxWidth="1200px" mx="auto" px={4}>
        {items.map((item, index) => (
          <h1 key={index}>{item.descriptor.name}</h1>
        ))}
        <Box
          boxShadow="0px 20px 25px 0px rgba(0, 0, 0, 0.1), 0px 8px 10px 0px rgba(0, 0, 0, 0.1)"
          p={6}
          borderRadius="md"
          bg="white"
          width="100%"
          my={4}
          px={4}
        >
          <Heading as="h2" size="md" mb={4} fontSize={15} fontWeight={600}>
            Flood Prediction Service{" "}
          </Heading>
          <Flex direction="column">
            <Text fontSize={12} fontWeight={400} mb={2}>
              Provided by Sky Analytics
            </Text>
            <Text fontSize={12} fontWeight={400} mb={2}>
              2 year historical data set covering temporal, spatial, and metric
              coverage for floods Bhutan.
            </Text>
            <Text fontSize={12} fontWeight={400}>
              Placed at 21st Jun 2021, 3.30 pm
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderHistory;
