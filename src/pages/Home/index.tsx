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
          section={AboutContent.section}
          header="Core Values"
          icon="waving.svg"
          id="product" />
        <ContentBlock
          direction="left"
          title={WhatweContent.title}
          content={WhatweContent.text}
          section={WhatweContent.section}
          icon="graphs.svg"
          id="about" />
        <ContentBlock
          direction="left"
          title={TenioContent.title}
          content={TenioContent.text}
          button={TenioContent.button}
          icon="ourbrands.svg"
          id="product" />
        <ContentBlock
          direction="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="qbeevents.svg"
          id="mission" />
        <ContentBlock
          direction="left"
          title={DigitalContent.title}
          content={DigitalContent.text}
          icon="dds.svg"
          id="mission" />
        <ContentBlock
          direction="right"
          title={Keenvisioncontent.title}
          content={Keenvisioncontent.text}
          icon="keenvision.svg"
          id="mission" />
        <IntroContainer>
            <ContentBlock
              direction="center"
              title=""
              content=""
              icon="rectangle.svg"
              id="image-block" />
        </IntroContainer>
       
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
          icon="unlock.svg"
          id="mission" />
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
