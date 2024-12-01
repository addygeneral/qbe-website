import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer, ColumnWrapper, Header } from "./styles";
import { ContactSection } from "./ContactSection";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
       <Header>Get In Touch</Header>
       
      <Row justify="space-between" align="middle">
        <Col lg={16} md={16} sm={24} xs={24}>
        <Slide direction="left" triggerOnce>
        <ColumnWrapper>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                    type="text"
                    placeholder="Your Name"
                    value={values.name || ""}
                    onChange={handleChange} name={""}                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                    type="text"
                    placeholder="Your Email"
                    value={values.email || ""}
                    onChange={handleChange} name={""}                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <Input
                    type="text"
                    placeholder="Phone"
                    value={values.name || ""}
                    onChange={handleChange} name={""}                />
                <ValidationType type="phonenumber" />
              </Col>
              <Col span={24}>
                <TextArea
                    placeholder="Your Message"
                    value={values.message || ""}
                    onChange={handleChange} name={""}                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Send Now")}</Button>
              </ButtonContainer>
            </FormGroup>  
        </ColumnWrapper>
        </Slide>
        </Col>
        <Col lg={8} md={8} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
          <ContactSection />
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
