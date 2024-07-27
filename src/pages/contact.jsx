// contact.js

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Contact() {
  return (
    <Box p="4">
      <Heading as="h2" size="xl" mb="4">
        Contact Page
      </Heading>
      <Text fontSize="lg">
        Contact us at contact@example.com using Chakra UI for styling.
      </Text>
    </Box>
  );
}

export default Contact;
