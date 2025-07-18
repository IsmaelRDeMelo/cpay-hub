import React from 'react';
import styled from 'styled-components';
import { Menu, Typography } from 'antd';
import {
  QuestionCircleOutlined,
  ExclamationCircleOutlined,
  LockOutlined,
  SolutionOutlined,
  BugOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const SidebarWrapper = styled.div`
  padding: 24px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  padding: 0 24px 24px 24px;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 8px;
`;

const StyledMenu = styled(Menu)`
  background: transparent;
  border-right: none;

  .ant-menu-item {
    color: #a9aeb3;
    font-weight: 500;
  }

  .ant-menu-item:hover,
  .ant-menu-item-selected {
    background-color: rgba(255, 255, 255, 0.1) !important;
    color: #ffffff !important;
  }

  .ant-menu-item::after {
    border-right: 3px solid #1890ff;
  }
`;

const iconMapping = {
  "O que é o C&A Pay Hub?": <QuestionCircleOutlined />,
  "Perguntas Frequentes": <ExclamationCircleOutlined />,
  "Por que não posso ter acesso a tudo?": <LockOutlined />,
  "Como solicitar acesso": <SolutionOutlined />,
  "Reportar um bug": <BugOutlined />,
};

const AppSidebar = ({ links }) => {
  return (
    <SidebarWrapper>
      <LogoWrapper>
        <Title level={4} style={{ color: '#fff', margin: 0 }}>C&A Pay Hub</Title>
      </LogoWrapper>
      <StyledMenu mode="inline" defaultSelectedKeys={['1']}>
        {links.map((link, index) => (
          <Menu.Item key={String(index + 1)} icon={iconMapping[link]}>
            {link}
          </Menu.Item>
        ))}
      </StyledMenu>
    </SidebarWrapper>
  );
};

export default AppSidebar;