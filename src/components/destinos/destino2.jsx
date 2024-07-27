// src/components/destinos/Destino2.js

import React from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md'; // Importa o ícone de localização
import destino2Image from './imagens/gramado.jpg'; // Importa a imagem destino2

const Destino2 = () => {
    const boxStyles = {
      backgroundImage: `url(${destino2Image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '25vh', // Altura reduzida para 30% da viewport
      width: '10vw', // Largura reduzida para 7% da viewport
      margin: '10px', // Espaçamento entre as caixas
      flexShrink: 0, // Evita que a imagem diminua em tamanho
      position: 'absolute',
      top: '65vh', // Posicionamento vertical a 60% da altura da viewport
      left: '82%', // Posicionamento horizontal a 65% da largura da viewport
      transform: 'translate(-50%, -50%)', // Centraliza a imagem corretamente
      zIndex: 999, // Coloca a imagem acima de tudo
      border: '10px solid white', // Borda branca com 2 pixels de espessura
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave
      borderRadius: '40px', // Borda arredondada com 8 pixels de raio
      color: 'white', // Cor do texto
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
    
      return (
        <Box style={boxStyles}>
          <Flex style={textStyles}>
            <Icon as={MdLocationOn} boxSize={6} style={iconStyles} />
            <span>Gramado</span>
          </Flex>
        </Box>
      );
    };
  
  export default Destino2;
