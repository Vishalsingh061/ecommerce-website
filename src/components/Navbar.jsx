import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { tablet } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" , marginTop:"10px", alignItems:"center"})}
  ${tablet(`
    // Add your tablet-specific styles here
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  `)}
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "0px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const SearchInput = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "14px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div``;

const StyledLink = styled(Link)`

  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: inherit;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <SearchInput placeholder="Search" size="small" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>TOTALITY CORP.</Logo>
        </Center>
        <Right>
         <MenuItem>
            <StyledLink to="/register">REGISTER</StyledLink>
         </MenuItem>
         <MenuItem><StyledLink to="/login">SIGN IN</StyledLink></MenuItem>
          <MenuItem><StyledLink to="/cart">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge></StyledLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
