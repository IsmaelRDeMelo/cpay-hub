import React from 'react';
import styled from 'styled-components';
import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

const StyledFooter = styled(Footer)`
  text-align: center;
  background: transparent;
  padding: 20px 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const AppFooter = () => {
  return (
    <StyledFooter>
      <Text style={{ color: '#a9aeb3' }}>
        © {new Date().getFullYear()} C&A Modas. Todos os direitos reservados. Uma plataforma C&A Pay Hub.
      </Text>
    </StyledFooter>
  );
};

export default AppFooter;