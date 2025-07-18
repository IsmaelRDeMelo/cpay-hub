import React from 'react';
import styled from 'styled-components';
import { Row, Col, Typography } from 'antd';
import AppCard from './AppCard';

const { Title, Paragraph } = Typography;

const ContentWrapper = styled.div`
  padding: 24px;
`;

const PageHeader = styled.div`
  margin-bottom: 32px;
`;

const AppGrid = styled(Row)`
  height: calc(100vh - 250px); // Ajuste a altura conforme necessário
  overflow-y: auto;
  padding-right: 15px; // Espaço para a barra de rolagem
`;

const AppContent = ({ apps }) => {
  return (
    <ContentWrapper>
      <PageHeader>
        <Title level={2} style={{ color: '#fff', fontWeight: '700' }}>
          C&A Pay Hub
        </Title>
        <Paragraph style={{ color: '#a9aeb3', fontSize: '16px' }}>
          Uma plataforma feita por associados, para associados.
        </Paragraph>
      </PageHeader>
      <AppGrid gutter={[32, 32]}>
        {apps.map((app, index) => (
          <Col key={index} xs={24} sm={24} md={12} lg={12} xl={12}>
            <AppCard {...app} />
          </Col>
        ))}
      </AppGrid>
    </ContentWrapper>
  );
};

export default AppContent;