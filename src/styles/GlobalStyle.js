import { createGlobalStyle } from 'styled-components';
import NoiseTexture from '../assets/noise.png'; // Você precisará de uma imagem de ruído

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(160deg, #2a2c30 0%, #1b1d20 100%);
    color: #e0e0e0;

    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-image: url(${NoiseTexture});
      opacity: 0.04;
      pointer-events: none;
      z-index: -1;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: #2a2c30;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4f5257;
    border-radius: 10px;
    border: 2px solid #2a2c30;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #3498db;
  }

  .ant-layout {
    background: transparent !important;
  }
`;

export default GlobalStyle;