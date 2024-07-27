// Home.js

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Home() {
  return (
    <Box p="4" bg="black" color="white" minHeight="100vh"> {/* Define o fundo preto e a cor do texto branco */}
      <Heading as="h2" size="xl" mb="4">
        Home Page
      </Heading>
      <Text fontSize="lg">
        Welcome to the Home page using Chakra UI for styling.
      </Text>
    </Box>
  );
}

export default Home;
