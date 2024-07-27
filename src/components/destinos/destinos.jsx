import React from 'react';
import { Box, Heading, Text, Flex, Icon, Button } from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md'; // Importar o ícone de localização
import backgroundImage from './imagens/balneario.jpg'; // Importar a imagem de fundo

const Destino = () => {
  const bgStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`, // Gradiente escuro sobre a imagem
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Altura total da viewport
    width: '100vw', // Largura total da viewport
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1, // Colocar atrás do conteúdo principal
  };

  const headingStyles = {
    position: 'absolute',
    top: '30vh',  // 30% da altura da viewport
    left: '15vw', // 15% da largura da viewport
    color: 'white',
    fontSize: '5rem', // Tamanho da fonte aumentado
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Sombra de texto para melhor contraste
  };

  const locationStyles = {
    position: 'absolute',
    top: '70vh', // 70% da altura da viewport
    left: '15vw', // 15% da largura da viewport
    color: 'white',
    fontSize: '1.5rem', // Tamanho da fonte menor para "Balneário Camboriú"
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyles = {
    marginRight: '8px', // Espaçamento à direita do ícone
  };

  const buttonStyles = {
    position: 'absolute',
    top: '75vh', // 75% da altura da viewport
    left: '15vw', // 15% da largura da viewport
  };

  return (
    <Box p="4" style={bgStyles}>
      <Heading as="h2" size="xl" style={headingStyles}>
        EXCURSÕES
      </Heading>
      <Flex style={locationStyles}>
        <Icon as={MdLocationOn} boxSize={8} style={iconStyles} />
        <Text>Balneário Camboriú</Text>
      </Flex>
      <Button style={buttonStyles} colorScheme="whiteAlpha" variant="solid">
        Saiba mais
      </Button>
    </Box>
  );
};

export default Destino;
