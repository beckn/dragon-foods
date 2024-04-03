import React from 'react';
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Box } from '@chakra-ui/react';
import ImageLoader from "../components/getImagesData";
import { useTranslation } from "react-i18next";

function CourseCard({ product, transactionId }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
     <Card
  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
  display="flex"
  flexDirection={['column', null, 'row']} // Stack items in column on small screens, and in a row on larger screens
  alignItems="center" // Center items vertically
>
  {/* Image on the left side */}
  <ImageLoader
    imageId={product?.image_url}
    alt="Image not available"
    p="10px"
    flex="1" // Allow the image to grow to fill the available space
  />

  {/* Information about the product on the right side */}
  <Box
    flex="1" // Allow the content to grow to fill the available space
    p={4} // Add padding to the right side
  >
    <CardHeader paddingBottom={2}>
      {product?.title && <Heading size="md">{product.title}</Heading>}
    </CardHeader>
    <CardBody paddingTop={2} paddingBottom={1}>
      {product?.provider_name && (
        <Text mt={2}>
          <strong>Published By:</strong> {product.provider_name}
        </Text>
      )}
      {(product?.description || product?.shortDescription) && (
        <Text mt={3}>
          <strong>Description:</strong>{" "}
          {product.shortDescription
            ? product.shortDescription
            : product.description
            ? product.description.substring(0, 100) + "..."
            : ""}
        </Text>
      )}
    </CardBody>
    <CardFooter>
      <Button
        className="custom-button"
        onClick={() => {
          navigate("/details", {
            state: { product: product, transactionId: transactionId },
          });
        }}
      >
        {t('VIEW_DETAILS')}
      </Button>
    </CardFooter>
  </Box>
</Card>

    </>
  )
}

export default CourseCard