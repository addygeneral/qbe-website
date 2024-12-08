import { lazy } from "react";
import styled from "styled-components";
import IntroContent from "../../content/IntroContent.json";
//import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import WhatweContent from "../../content/WhatweContent.json";
import MissionContent from "../../content/MissionContent.json";
import AboutContent from "../../content/AboutContent.json";
import TenioContent from "../../content/TenioContent.json";
import ContactContent from "../../content/ContactContent.json";
import DigitalContent from "../../content/DigitalContent.json";
import Keenvisioncontent from "../../content/Keenvisioncontent.json";
import UnlockContent from "../../content/UnlockContent.json";
import { FlexCard, FlexCardContainer, WhatWeContainer } from "./styles";


const Contact = lazy(() => import("../../components/ContactForm"));
//const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

export const IntroContainer = styled.div`
  background-color: #000;
  width: 100%;
  margin: 0 ;
  padding: 0;
  color: #fff;

   h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    color: #fff!important;
    margin-left: 90px;
    margin-bottom: 40px;
  
  }

    @media only screen and (max-width: 768px) {
      margin-left: 0px; 
      font-size: 1.5rem; 
    }

    @media only screen and (max-width: 480px) {
      margin-left: 0px; 
      font-size: 1.2rem; 
      margin-bottom: 0px; 
    }
  }
  `
  
  
const Home = () => {
  return (
    
    <><IntroContainer>
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro" />
    </IntroContainer>
    <Container>
        <ScrollToTop />
        <ContentBlock
          direction="left"
          title={AboutContent.title}
          content={AboutContent.text}
          header={AboutContent.header}
          section={AboutContent.section}
          icon="waving.svg"
          id="product" />
          
      </Container>
      
        <WhatWeContainer>
          <ContentBlock
            direction="left"
            title={WhatweContent.title}
            content={WhatweContent.text}
            icon="whatwe.svg"
            id="about"
          />
        </WhatWeContainer>
    <Container>

        {/* New Flex Card Section for Our Vision and Our Mission */}
        <FlexCardContainer>
          <FlexCard>
            <img src="/img/svg/notes.svg" alt="Our Vision Icon" />
            <div className="text-content">
              <h6>Our Vision</h6>
              <p>Become the leading brand in Ghana and West Africa, setting the standard for excellence and innovation.</p>
            </div>
          </FlexCard>
          <FlexCard>
            <img src="/img/svg/notes2.svg" alt="Our Mission Icon" />
            <div className="text-content">
              <h6>Our Mission</h6>
              <p>Deliver professional services exceeding clients' expectations and empower businesses with innovative solutions in IT, event management, and data research.</p>
            </div>
          </FlexCard>
        </FlexCardContainer>
        <div id="brands" style={{ textAlign: 'center', margin: '90px 0' }}>
          <h2>Our Brands</h2>
        </div>
        <ContentBlock
          direction="left"
          title={TenioContent.title}
          content={TenioContent.text}
          tagline={TenioContent.tagline}
          button={TenioContent.button}
          icon="ourbrands.svg"
          id="tenio" />
        <ContentBlock
          direction="right"
          title={MissionContent.title}
          content={MissionContent.text}
          tagline={MissionContent.tagline}
          icon="qbeevents.svg"
          id="mission" />
        <ContentBlock
          direction="left"
          title={DigitalContent.title}
          content={DigitalContent.text}
          tagline={DigitalContent.tagline}
          icon="dds.svg"
          id="digital" />
        <ContentBlock
          direction="right"
          title={Keenvisioncontent.title}
          content={Keenvisioncontent.text}      
          tagline={Keenvisioncontent.tagline}
          icon="keenvision.svg"
          id="keen" />
          </Container>
        <IntroContainer>
            <ContentBlock
              direction="center"
              title=""
              content=""
              icon="rectangle.svg"
              id="image-block" />
        </IntroContainer>
       
        <Container>
        {/*
    <div className="content-block image-container">
      <img src={RectangleImage} alt="Rectangle" />
    </div>

     <MiddleBlock
      title={MiddleBlockContent.title}
      content={MiddleBlockContent.text}
      button={MiddleBlockContent.button}
    />
    */}
        <ContentBlock
          direction="left"
          title={UnlockContent.title}
          content={UnlockContent.text}
          button={UnlockContent.button}
          icon="unlock.svg"
          id="unlock" />
      </Container>
      <IntroContainer>
      <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact" />
    </IntroContainer>
      </>
  );
};

export default Home;
