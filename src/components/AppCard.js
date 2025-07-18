import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const CardWrapper = styled.div`
  position: relative;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  background: url(${props => props.imageUrl}) no-repeat center center;
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%);
    z-index: 1;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const AppTitle = styled(Title)`
  &.ant-typography {
    color: #ffffff;
    margin: 0 !important;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }
`;

const AccessButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background: rgba(44, 62, 80, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(52, 152, 219, 0.7);
    border-color: rgba(52, 152, 219, 1);
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(5px);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  
  ${CardWrapper}:hover & {
    opacity: 1;
  }
`;

const AppDescription = styled(Paragraph)`
  &.ant-typography {
    color: #e0e0e0;
    text-align: center;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.4s ease 0.1s;
  }

  ${CardWrapper}:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AppCard = ({ title, description, imageUrl }) => {
  return (
    <CardWrapper imageUrl={imageUrl}>
      <CardContent>
        <AppTitle level={3}>{title}</AppTitle>
        <AccessButton>Acessar</AccessButton>
      </CardContent>
      <HoverOverlay>
        <AppDescription>{description}</AppDescription>
      </HoverOverlay>
    </CardWrapper>
  );
};

export default AppCard;