import React from 'react';
import { Box, Flex, Icon, Button } from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md'; // Importa o ícone de localização
import { Link } from 'react-router-dom'; // Importa o Link do React Router
import destino1Image from './imagens/pantanal.jpg'; // Importa a imagem destino1

const Destino1 = () => {
  const boxStyles = {
    backgroundImage: `url(${destino1Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '30vh', // Altura inicial reduzida para 30% da viewport
    width: '12vw', // Largura inicial reduzida para 7% da viewport
    margin: '10px', // Espaçamento entre as caixas
    flexShrink: 0, // Evita que a imagem diminua em tamanho
    position: 'absolute',
    top: '65vh', // Posicionamento vertical inicial a 65% da altura da viewport
    left: '68%', // Posicionamento horizontal inicial a 68% da largura da viewport
    transform: 'translate(-50%, -50%)', // Centraliza a imagem corretamente
    zIndex: 999, // Coloca a imagem acima de tudo
    border: '10px solid white', // Borda branca com 10 pixels de espessura
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave
    borderRadius: '40px', // Borda arredondada com 40 pixels de raio
    padding: '10px', // Espaçamento interno
    color: 'white', // Cor do texto
    transition: 'transform 0.2s ease-in-out', // Efeito de transição suave
    cursor: 'pointer', // Muda o cursor para indicar que é clicável
  };

  const textStyles = {
    position: 'absolute',
    bottom: '10px', // Distância do texto ao fundo
    left: '10px', // Distância do texto à esquerda
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyles = {
    marginRight: '8px', // Espaçamento à direita do ícone
  };

  // Media queries para ajustar o tamanho da imagem e a posição conforme o tamanho da tela
  const mediaQueryStyles = {
    '@media (max-width: 1024px)': {
      height: '40vh',
      width: '25vw',
      top: '50vh',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '@media (max-width: 768px)': {
      height: '50vh',
      width: '30vw',
      top: '45vh',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '@media (max-width: 480px)': {
      height: '60vh',
      width: '40vw',
      top: '40vh',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Link to="/pantanal" style={{ textDecoration: 'none' }}>
      <Box
        style={{ ...boxStyles, ...mediaQueryStyles }}
      >
        <Flex style={textStyles}>
          <Icon as={MdLocationOn} boxSize={6} style={iconStyles} />
          <span>Pantanal</span>
        </Flex>
      </Box>
    </Link>
  );
};

export default Destino1;
