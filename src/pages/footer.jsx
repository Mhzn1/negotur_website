import React from 'react';
import { Flex, Text, IconButton, Link as ChakraLink } from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      width="100%"
      height="6rem"
      bg="linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%)" // Gradiente de preto para transparente
      color="white"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      zIndex="999"
      px="4"
    >
      <Flex align="center">
        <Text>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</Text>
      </Flex>
      <Flex align="center">
        <IconButton
          as={ChakraLink}
          href="https://github.com/seu-usuario"
          aria-label="GitHub"
          icon={<FaGithub />}
          variant="ghost"
          size="lg"
          colorScheme="whiteAlpha"
          mr="2"
        />
        <IconButton
          as={ChakraLink}
          href="https://twitter.com/seu-usuario"
          aria-label="Twitter"
          icon={<FaTwitter />}
          variant="ghost"
          size="lg"
          colorScheme="whiteAlpha"
          mr="2"
        />
        <IconButton
          as={ChakraLink}
          href="https://www.linkedin.com/in/seu-usuario"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          variant="ghost"
          size="lg"
          colorScheme="whiteAlpha"
        />
      </Flex>
    </Flex>
  );
};

export default Footer;
