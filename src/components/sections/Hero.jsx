import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/Hero.jpg";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  background-color: transparent;

  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;  
  line-height: 68px;
  font-size: 45px; 
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.text_primary};
  margin: 20px 0;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
border: 1px solid ${({ theme }) => theme.primary};
  text-shadow: 0 0 5px #00b894, 0 0 10px #00b894, 0 0 20px #00b894;  
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.6s ease-in-out;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 200px;
  text-align: center;
  padding: 16px 0;
  font-size: 15px;
 

  
  border-radius: 50px;
  font-weight: 600;
  font-size: ;

     &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow:  20px 20px 60px #1F2634,
        color: ${({ theme }) => theme.text_primary};
        filter: brightness(1);
        text-shadow: 0 0 10px #ff6b6b, 0 0 20px #ff6b6b, 0 0 40px #ff6b6b;
        box-shadow: 0 0 10px #ff6b6b, 0 0 20px #ff6b6b, 0 0 40px #ff6b6b;
        border-color: #ff6b6b;
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

const Img = styled.img`
  border-radius: 15%;
  border: none;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.white};
  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                
                  <Img src={HeroImg} alt="Bhargav Ram" />
            
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
