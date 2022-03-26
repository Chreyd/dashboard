import React from 'react'
import styled from 'styled-components'
import Badge from "./Badge"
import {cardShadow, hoverEffect} from "../utils";
import AvatarImage from "../assets/avatarImage4.jpg";

function ProjectRecommendation() {
  return (
    <RecommendProject>
        <CardContent>
            <Detail>
                <InfoContainer>
                    <Avatar>
                        <img src={AvatarImage} alt="Avatar" />
                    </Avatar>
                    <Info>
                        <InfoName>Chreyd LOLANGOY</InfoName>
                        <InfoUpdate>Updated 1h ago</InfoUpdate>
                    </Info>
                </InfoContainer>
                <Badge content="Design"/>
            </Detail>
            <Title>I need a designer for branding essentials for my business.</Title>
            <ProjectInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi. Possimus iure facere adipisci, nisi mollitia vero. At, facilis eligendi!</ProjectInfo>
            <PriceContainer>
                <Price>$7800/month</Price>
                <Badge content="Full Time" clean/>
            </PriceContainer>
        </CardContent>
    </RecommendProject>
  )
}

const RecommendProject= styled.div`
    border-radius: 1rem;
    height: 130%;
    padding:1rem;
    background-color: white;
    width: 27.vw;
    box-shadow: ${cardShadow};
    transition: 0.4s ease-in-out;
    &:hover{
        box-shadow: ${hoverEffect};
    }
    @media screen and (min-width: 320px) and (max-width: 1080px){
    width: 80%;
    height: max-content;
    margin: 2rem 0;
  }
`;
const CardContent= styled.div`
    margin: 0.4rem;
`;
const Detail= styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (min-width: 320px) and (max-width: 1080px){
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 1rem;
    
  }
`;
const InfoContainer= styled.div`
    display: flex;
    align-items: center;
`;
const Avatar= styled.div`
    margin-right: 1rem;
    img{
        height: 5rem;
        border-radius: 5rem;
    }
`;
const Info= styled.div`

`;
const InfoName= styled.h3`
    font-weight: 500;
`;
const InfoUpdate= styled.h5`
    font-weight: 300;
`;
const Title= styled.h4`
    font-weight: 500;
`;
const ProjectInfo= styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
    color: #3b3b3b;
    margin-bottom: 0.5rem;
`;
const PriceContainer= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    background-color: rgba(146, 166, 255, 0.3);
    @media screen and (min-width: 320px) and (max-width: 1080px){
    flex-direction: column;
    gap: 0.4rem;
  }
`;
const Price= styled.div`

`;

export default ProjectRecommendation