import React from 'react';
import styled from 'styled-components';
import { Layout, Row, Col, Typography, Button, Space, Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
const { Text, Title } = Typography;

const GlassHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: 0 24px;
  background: rgba(42, 44, 48, 0.6);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
`;

const NavButton = styled(Button)`
  background: transparent !important;
  border: none !important;
  color: #a9aeb3 !important;
  font-weight: 500;
  &:hover {
    color: #ffffff !important;
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: right;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

const UserName = styled(Text)`
  color: #ffffff;
  font-weight: 700;
`;

const UserExtra = styled(Text)`
  color: #a9aeb3;
  font-size: 12px;
`;

const SuperSaiyanBadge = styled.span`
  background: linear-gradient(45deg, #f39c12, #f1c40f);
  color: #000;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: bold;
  margin-left: 8px;
`;

const AppHeader = ({ user, onToggleSidebar, sidebarCollapsed }) => {
  return (
    <GlassHeader>
      <Row justify="space-between" align="middle" style={{ width: '100%' }}>
        <Col>
          <Space align="center">
            <Button
              type="text"
              icon={sidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={onToggleSidebar}
              style={{ fontSize: '18px', color: '#fff' }}
            />
            <NavButton icon={<HomeOutlined />}>Início</NavButton>
            <NavButton icon={<UserOutlined />}>Perfil</NavButton>
            <NavButton icon={<SettingOutlined />}>Configurações</NavButton>
          </Space>
        </Col>

        <Col>
          <UserInfoWrapper>
            <UserDetails>
              <UserName>{user.name}</UserName>
              <UserExtra>
                {user.email} | Grupo: 
                <SuperSaiyanBadge>{user.group}</SuperSaiyanBadge>
              </UserExtra>
            </UserDetails>
            <Avatar size={40} style={{ backgroundColor: '#1890ff' }}>
              {user.name.charAt(0)}
            </Avatar>
          </UserInfoWrapper>
        </Col>
      </Row>
    </GlassHeader>
  );
};

export default AppHeader;