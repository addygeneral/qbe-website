import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  SocialLinkContainer,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="35px" height="35px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
            <br/>y
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="60px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <br/>
              <Para>
                {t(`QBE Ghana Limited - Premium Quality & Elegance`)}
              </Para>
              {/*<a href="mailto:l.sammcaddy@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>*/}
              
              <Empty />
              <SocialLinkContainer>
                <SocialLink href="/" src="linkedin.svg" />
                <SocialLink href="/" src="instagram.svg" />
                <SocialLink href="/" src="facebook.svg" />
                <SocialLink href="/" src="twitter.svg" />
              </SocialLinkContainer>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Links")}</Title>
              <SvgIcon
                    src="underline.svg"
                    aria-label="homepage"
                    width="40px"
                    height="30px"
                  />
              <Large to="/">{t("About")}</Large>
              <Large to="/">{t("Contact")}</Large>
              <Large to="/">{t("Our Brands")}</Large>
              <Large to="/">{t("Our Promise")}</Large>
              <Large to="/">{t("Privacy")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{t("Our Brands")}</Title>
              <SvgIcon
                    src="underline.svg"
                    aria-label="homepage"
                    width="50px"
                    height="30px"
                  />
              <Large to="/"><SvgIcon
                    src="ourbrandsIcon.svg"
                    aria-label="homepage"
                    width="50px"
                    height="30px"
                  /> {t("Ten-io")}</Large>
              <Large to="/"><SvgIcon
                    src="ourbrandsIcon.svg"
                    aria-label="homepage"
                    width="50px"
                    height="30px"
                  />{t("QBE Events")}</Large>
              <Large to="/"><SvgIcon
                    src="ourbrandsIcon.svg"
                    aria-label="homepage"
                    width="50px"
                    height="30px"
                  />{t("Digital Design Studio")}</Large>
              <Large to="/"><SvgIcon
                    src="ourbrandsIcon.svg"
                    aria-label="homepage"
                    width="50px"
                    height="30px"
                  />{t("Keen Vision Labs")}</Large>
            </Col>
          </Row>
          {/*<Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
            </Col>
            
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>*/}
        </Container>
      </FooterSection>
      
    </>
  );
};

export default withTranslation()(Footer);
