// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react';
import Header from './pages/header';
import Footer from './pages/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Destino from './pages/destinos'; // Importar o componente Destino
import { mode } from '@chakra-ui/theme-tools'; // Importar mode do theme-tools

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
      500: '#D72E32',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.50', 'gray.800')(props),
        color: mode('gray.800', 'white')(props),
      },
    }),
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <Container maxW="container.xl" mt="4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/destinos" element={<Destino />} /> {/* Rota para Destino */}
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
