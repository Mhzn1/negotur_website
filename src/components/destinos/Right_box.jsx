import React from 'react';
import { Box, Heading, useToken } from '@chakra-ui/react'; // Importe useToken para obter cores do tema

const RightBox = () => {
  const [bgColor] = useToken('colors', ['blackAlpha.600']); // Obtém a cor do tema com 60% de transparência

  const boxStyles = {
    position: 'fixed',
    top: '0',
    right: '0',
    height: '100vh',
    width: '30%',
    backgroundColor: bgColor, // Cor de fundo com 60% de transparência
    backdropFilter: 'blur(8px)', // Aplica um efeito de desfoque
    zIndex: 0, // Coloca o box abaixo do conteúdo principal
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const headingStyles = {
    position: 'absolute',
    top: '25%', // Posição vertical a 35% da altura da viewport
    textAlign: 'center', // Centraliza o texto horizontalmente
    color: 'white',
    zIndex: 1, // Coloca o conteúdo acima do overlay
    width: '100%', // Ajusta a largura para ocupar todo o espaço disponível
  };

  return (
    <Box style={boxStyles}>
      <Heading as="h2" size="2xl" mb="4" style={headingStyles}>
        Conheça os próximos destinos!
      </Heading>
    </Box>
  );
};

export default RightBox;
