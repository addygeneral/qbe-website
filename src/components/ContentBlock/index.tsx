import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";
import { SvgIconProps } from "../../common/types";
import styled from "styled-components";

const StyledSvgIcon = styled.img<SvgIconProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  @media (max-width: 768px) {
    width: 120px;  // Adjust the size for smaller screens
    height: 8px;  // Adjust the height for smaller screens
  }
`;
const ContentBlock: React.FC<ContentBlockProps> = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,  
  direction,
  header,
  tagline
}) => {

  const shouldShowUnderline = ['tenio', 'mission', 'keen', 'digital'].includes(id); 
  const shouldReplaceTitleWithSVG = ['tenio', 'mission', 'digital', 'keen'].includes(id);
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const showButtonForUnlockContent = id === 'unlock';
  
  return (
    <ContentSection>
      <Fade direction={direction !== "center" ? direction : undefined} triggerOnce>
        <StyledRow justify={direction === "center" ? "center" : "space-between"} align="middle" id={id} direction={direction}>
          {direction === "center" ? (
            <Col xs={24}>
              <SvgIcon src={icon} width="100%" height="auto" />
            </Col>
          ) : (
            <>
              <Col lg={11} md={11} sm={12} xs={24}>
                <SvgIcon src={icon} width="100%" height="100%" />
              </Col>
              <Col lg={11} md={11} sm={11} xs={24}>
                <ContentWrapper>
                 {shouldReplaceTitleWithSVG ? (
                    <div style={{ maxHeight: "200px", marginBottom: "5px", width: "50%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>                   
                     <SvgIcon
                      src={`/${id}TitleImage.svg`}
                      width=""
                      height="auto"
                      style={{ maxHeight: "200px", marginBottom: "10px" }} // Reasonable height for different screens
                    />
                  </div>
                  ) : (
                    <h6 style={{ marginBottom: "0.2rem", marginTop: "0px", fontWeight: "bold" }}>
                      {t(title)}
                    </h6>
                  )}
                  {shouldShowUnderline && (
                      <StyledSvgIcon
                        src="/img/svg/extraunderline.svg"
                        width="80px"
                        height="10px"
                        style={{ marginTop: "0px" }} // Ensure space between the image and the underline
                      />
                    )}
                  <Content>{t(content)}</Content>
                  {tagline && (
                    <p style={{ marginTop: "10px" }}>
                      <span style={{ fontWeight: "bold", color: "#636363", }}>{t(tagline.split(":")[0])}:</span>
                      <span style={{ color: "626262", fontStyle: "italic", marginLeft: "5px" }}>
                        {t(tagline.split(":")[1])}
                      </span>
                    </p>
                  )}
                  {header && <h5 style={{ marginTop: "0px", marginBottom: "20px", fontWeight: "bold" }}>{t(header)}</h5>}
                  {section && (
                    <ServiceWrapper>
                      {section.map((item, id) => (
                        <Col key={id} style={{ display: "flex", alignItems: "center" }}>
                          <SvgIcon src={item.icon} width="30px" height="30px" />
                          <MinTitle style={{ margin: 0, marginLeft: "7px" }}>{t(item.title)}</MinTitle>
                          <MinPara style={{ margin: 0 }}> : {t(item.content)}</MinPara>
                        </Col>
                      ))}
                    </ServiceWrapper>
                  )}
                  {showButtonForUnlockContent && button && button.length > 0 && (
                    <ButtonWrapper>
                      {button.map((btn, index) => (
                        <Button
                          key={index}
                          color={btn.color}
                          onClick={scrollToContact} 
                        >
                          {btn.title} 
                        </Button>
                      ))}
                    </ButtonWrapper>
                  )}
                </ContentWrapper>
              </Col>
            </>
          )}
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
