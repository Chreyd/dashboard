import React from 'react'
import styled from 'styled-components'
import Badge from "./Badge"
import {cardShadow, hoverEffect} from "../utils";
import AvatarImage from "../assets/avatarImage5.jpg";
import AvatarImage2 from "../assets/avatarImage6.jpg";

function Invoices() {
  return (
    <InvoicesContainer>
        <CardContent>
            <Invoice>
                <Info>
                    <Avatar>
                        <img src={AvatarImage} alt="Avatar" />
                    </Avatar>
                    <TextContainer>
                        <Title>Fleudry MAPEBA</Title>
                        <SubTitle>ABC Holding</SubTitle>
                    </TextContainer>
                </Info>
                <Container>
                    <Badge content="Paid" paid />
                    <Price>$ 1,200.87</Price>
                </Container>
            </Invoice>
            <Invoice>
                <Info>
                    <Avatar>
                        <img src={AvatarImage2} alt="Avatar" />
                    </Avatar>
                    <TextContainer>
                        <Title>Nils NELSON</Title>
                        <SubTitle>Inchor Associates</SubTitle>
                    </TextContainer>
                </Info>
                <Container>
                    <Badge content="Late" late />
                    <Price>$ 3,890.02</Price>
                </Container>
            </Invoice>
        </CardContent>
    </InvoicesContainer>
  )
}

const InvoicesContainer= styled.div`
    width: 35rem;
    border-radius: 1rem;
    margin-top: 1rem;
    background-color: white;
    height: 140%;
    box-shadow: ${cardShadow};
    transition: 0.4s ease-in-out;
    &:hover{
        box-shadow: ${hoverEffect};
    }
    @media screen and (min-width: 320px) and (max-width: 1080px){
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
  }
`;
const CardContent= styled.div`
      @media screen and (min-width: 320px) and (max-width: 1080px){
        margin: 2rem 0;
  }
`;
const Invoice= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0.4rem;
    padding-top: 0.6rem;
    @media screen and (min-width: 320px) and (max-width: 1080px){
        flex-direction: column;
        gap: 1rem;
  }
`;
const Info= styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    @media screen and (min-width: 320px) and (max-width: 1080px){
        flex-direction: column;
        width: 100%;
        align-items: center;
  }
`;
const Avatar= styled.div`
    img{
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 3.5rem;
    }
`;
const TextContainer= styled.div`
    margin-left: 1rem;
`;
const Title= styled.h4`

`;
const SubTitle= styled.h5`
    font-weight: 400;
`;
const Price= styled.div`

`;
const Container= styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
    align-items: center;
    @media screen and (min-width: 320px) and (max-width: 1080px){
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;

export default Invoices