import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: black;
  text-decoration: none;
`;

const LinkContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;
`;
const LogoTitle = styled.h1`
  font-size: 25px;
  color: Red;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <LogoTitle>🐱Pizza Cat🐱</LogoTitle>
      <LinkContainer>
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/pizza">Order</StyledLink>
      </LinkContainer>
    </NavbarContainer>
  );
}