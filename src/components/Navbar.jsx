import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
// import { red } from '@material-ui/core/colors';
import { mobile } from '../responsive'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Container = styled.div`
    height: 60px;
    ${mobile({ "height": "50px" })}
`

const Wrapper = styled.div`
    padding : 10px 20px;
    display: flex;
    align-items : center;
    justify-content: space-between;
    ${mobile({ "padding": "10px 0px" })}
`
const Left = styled.div`
    display: flex;
    flex: 1;
    align-items : center;
`
const Center = styled.div`
    flex: 1;
    text-align:center;
`
const Right = styled.div`
    flex: 1;
    display:flex;
    align-item:center;
    justify-content: flex-end;
    ${mobile({ "flex": 2, "justifyContent": "center" })}

`
const ChageLanguage = styled.span`
    font-size : 14px;
    cursor:pointer;
    ${mobile({ "display": "none" })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left : 25px;
    // padding:2px;
    background-color:white;
    ${mobile({ "display": "none" })}    

`
const Input = styled.input`
    border:none;
    ${mobile({ "display": "none" })}    
`
const Logo = styled.h1`
    font-weight :bold;
    ${mobile({ "font-size": "15px", "margin-left": "-47vw" })}
`
const MenuItem = styled.div`
    font-size : 14px;
    corsor:pointer;
    margin-left : 25px;
    ${mobile({ "font-size": "12px" })}
`


const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    return (
        < Container >
        <Wrapper>
            <Left>
                <ChageLanguage>EN</ChageLanguage>
                <SearchContainer>
                    <Input />
                    <Search style={{ color: "grey", fontSize: "16px" }} />
                </SearchContainer>
            </Left>
            <Center>
                
                <Logo >
                    TIBEBE MEDA
                </Logo>
               
                
            </Center>
            <Right>

                <Link to="/register">
                <MenuItem>REGISTER</MenuItem>
                </Link>
                <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
                </Link>

               
                <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
        </Container >
    );
}

export default Navbar;
