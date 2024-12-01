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

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction !== "center" ? direction : undefined} triggerOnce>
      <StyledRow
  justify={direction === "center" ? "center" : "space-between"} // Center content if "center"
  align="middle"
  id={id}
  direction={direction}
>
  {direction === "center" ? (
    <Col xs={24}>
      <SvgIcon src={icon} width="100%" height="auto" /> {/* Display centered image */}
    </Col>
  ) : (
    <>
      <Col lg={11} md={11} sm={12} xs={24}>
        <SvgIcon src={icon} width="100%" height="100%" />
      </Col>
      <Col lg={11} md={11} sm={11} xs={24}>
        <ContentWrapper>
          <h6>{t(title)}</h6>
          <Content>{t(content)}</Content>
          
          {direction === "left" && section && (
            <ServiceWrapper>
              {typeof section === "object" &&
      section.map((item, id) => (
        <Row justify="center" key={id} style={{ marginBottom: '20px' }}>
          <Col span={24}>
            <SvgIcon
              src={item.icon}
              width="60px"
              height="60px"
            />
            <MinTitle>{t(item.title)}</MinTitle>
            <MinPara>{t(item.content)}</MinPara>
          </Col>
        </Row>
      ))}
            </ServiceWrapper>
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
