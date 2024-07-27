import React from 'react';
import { Flex, useColorMode, IconButton, Link as ChakraLink, Button } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../components/header/logo.jsx';
import Buttons from '../components/header/buttons';


const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%)" // Gradiente de preto para transparente
      color="white" // Cor do texto

      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      width="100%"
    >
      <Logo />
      <Buttons />

      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        size="md"
        mr="1"
      />
      <Button as={ChakraLink} href="/contato" variant="solid" colorScheme="whiteAlpha">
        Contato
      </Button>
    </Flex>
  );
};

export default Header;
