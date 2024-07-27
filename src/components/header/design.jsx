import React from 'react';
import { Flex, Heading, IconButton, useColorMode, Button, Link as ChakraLink } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Design = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="primary.500"
      color="white" // Mantido como "white" para o texto
      boxShadow="0 2px 4px rgba(0,0,0,0.1)"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      width="100%"
    >
      <Heading as="h1" size="md" mr="4">
        NEGO TUR
      </Heading>
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        size="md"
        mr="4"
      />
      <Button as={ChakraLink} href="/contato" variant="solid" colorScheme="whiteAlpha">
        Contato
      </Button>
    </Flex>
  );
};

export default Design;
