import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#D72E32',       
    secondary: '#E35E33',     
    background: '#FFFFFF',    
    details: '#DA3F44',       
  },
  styles: {
    global: {
      body: {
        bg: 'background',
        color: 'details',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '8px',   
        fontWeight: 'bold',
      },
      variants: {
        primary: {
          bg: 'primary',
          color: 'white',
          _hover: {
            bg: 'secondary',
          },
        },
      },
    },
  },
});

export default theme;
