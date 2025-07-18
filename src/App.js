import React, { useState } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import AppHeader from './components/AppHeader';
import AppSidebar from './components/AppSidebar';
import AppContent from './components/AppContent';
import AppFooter from './components/AppFooter';
import GlobalStyle from './styles/GlobalStyle';
import { userData, appData, sidebarLinks } from './mocks/data';

const { Sider, Content } = Layout;

// Styled Layout to prevent Ant Design overrides on the root
const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background: transparent; // The GlobalStyle will handle the background
`;

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <>
      <GlobalStyle />
      <StyledLayout>
        <Sider
          trigger={null}
          collapsible
          collapsed={sidebarCollapsed}
          collapsedWidth={0} // Oculta completamente quando recolhida
          width={250}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 1001, // Garante que fique sobre o conteúdo
            background: 'rgba(27, 29, 32, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <AppSidebar links={sidebarLinks} />
        </Sider>
        <Layout style={{ 
          marginLeft: sidebarCollapsed ? 0 : 250, 
          transition: 'margin-left 0.2s',
          background: 'transparent'
        }}>
          <AppHeader
            user={userData}
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
            sidebarCollapsed={sidebarCollapsed}
          />
          <Content style={{ margin: '0 16px', overflow: 'initial' }}>
            <AppContent apps={appData} />
          </Content>
          <AppFooter />
        </Layout>
      </StyledLayout>
    </>
  );
}

export default App;