import React from 'react';
import { Button, HStack } from '@chakra-ui/react';  // Importe HStack para alinhar os botões horizontalmente
import { Link as RouterLink } from 'react-router-dom';

const Buttons = () => {
  return (
    <HStack spacing="20">
      <Button as={RouterLink} to="/" variant="ghost" color="white">
        Viagens
      </Button>
      <Button as={RouterLink} to="/sobre" variant="ghost" color="white">
        Galeria
      </Button>
      <Button as={RouterLink} to="/destinos" variant="ghost" color="white">
        Destinos
      </Button>
    </HStack>
  );
};

export default Buttons;
