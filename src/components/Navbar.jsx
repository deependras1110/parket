import React from 'react'
import styled from 'styled-components'
import { PopupButton } from '@typeform/embed-react'
import "./navbar.css"

const Container = styled.div`
    height:50px;
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-item: center;
    justify-content: space-between;
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content:space-between;
`;
const Logo = styled.h1`

    font-weight: bold;
    text-decoration: underline #3264fc;
`;
const Menu = styled.ul`
    display: flex;
    list-style: none;
    @media only screen and (max-width:480 px){
        display:none;
    }
    @media only screen and(max-widh:480px){
        display: none;
    }


`;

const MenuItem = styled.li`
    margin-right: 30px; 
    font-weight: bold;
    color: grey;
`;


const Button = styled.button`
    
`;

export const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Logo>parket</Logo>
                    <Menu>
                        <MenuItem></MenuItem>
                        {/* <MenuItem>For Operators</MenuItem>
                        <MenuItem>For Users</MenuItem>
                        <MenuItem>Contact Us</MenuItem> */}
                    </Menu>
                </Left>
                <PopupButton id="F6PEM1Rq" className="contactusButton">
                    Contact Us
                </PopupButton>
            </Wrapper>
        </Container>
    )
}

export default Navbar
