import React from 'react'
import styled from 'styled-components'
import IntroImage from '../img/introImage.png'
import LottieAnimation from "../Lottie"
import home from "../animation/Parking_Animation_Gradient_Blue.json"
import '../../src/components/intro.css'
import { PopupButton } from '@typeform/embed-react'
import "./navbar.css"

const Container = styled.div`
    height: calc(100vh - 50px);
    display:flex;
    padding: 20px;
    @media only screen and (max-width:480px){
        flex-direction: column;
    }
 `;
const Left = styled.div`
    width: 60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Title = styled.h1`
    font-size:50px;
    width:60%;
    @media only screen and (max-width:480px){
        width: 100%;
        font-size: 30px;
        margin-top: 20px;
    }
`;
const Desc = styled.p`
    width:60%;
    font-size:15px;
    margin-top:10px;
    @media only screen and (max-width:480px){
        width: 100%;
        font-size:15px;
    }
`;

const Info = styled.div`
    width:60%;
    margin-top:50px;
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media only screen and (max-width:480px){
        width: 100%;
        
        
    }
`;
const InfoButton = styled.button`
    padding:15px;
    background-color:#3264fc;
    font-weight:bold;
    color:white; 
    border:none;
    background-image: linear-gradient(to right top, #7604fe, #6333ff, #5048ff, #3f58ff, #3264fc);
    box-shadow: 5px;
    cursor: pointer;
`;

const Contact = styled.div`
   display:flex;
   flex-direction:column; 
`;

const Phone = styled.span`
    color:crimson;
`;
const ContactText = styled.span`
    color:grey;
`;

const Right = styled.div`
    width:500px;
    height:500px;
    justify-content: center;
    margin-top:150px;
    align-content: center;
    @media only screen and (max-width:480px){
        margin-top:30px;
        width:340px;
        height:340px;
    }
`;

const Input = styled.input`

    font-size: 10px;
    color: #3264fc

`;

const Image = styled.img`
    width:100%;
    height:100%; 

    @media only screen and (max-width:480px){
        width:50px;
        height:50px;
    }
`;

export const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Centralized Parking System</Title>
                <Desc>Enabling Parking Operators with a one-stop operating system, ParketOS, to eliminate their reliance on network of services. For users, introducing Parket Mobile App for all their parking needs anytime, anywhere.</Desc>
                <Info>
                    <PopupButton id="b2N6V0XD" className="contactusButton">
                        Join Our Mailing List
                    </PopupButton>
                </Info>
            </Left>
            <Right><LottieAnimation lotti={home} /></Right>
        </Container >
    )
}

export default Intro;
