import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
`;

const LeftBar = styled(NavLink)``;

const RightBar = styled(NavLink)``;

const NavBar = () => {
  return (
    <NavBarContainer>
      <LeftBar exact to="/">
        엄마, 나 요기 갈래
      </LeftBar>
      <RightBar to="/register">회원가입</RightBar>
    </NavBarContainer>
  );
};

export default NavBar;
