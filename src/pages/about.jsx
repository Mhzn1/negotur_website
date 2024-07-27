// About.js

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function About() {
  return (
    <Box p="4">
      <Heading as="h2" size="xl" mb="4">
        About Page
      </Heading>
      <Text fontSize="lg">
        This is the About page content using Chakra UI for styling.
      </Text>
    </Box>
  );
}

export default About;
