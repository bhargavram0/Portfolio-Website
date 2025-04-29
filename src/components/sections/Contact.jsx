import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background-color: transparent;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.input`
  border: 1px solid ${({ theme }) => theme.primary};
  text-shadow: 0 0 5px #00b894, 0 0 10px #00b894, 0 0 20px #00b894;  
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  text-decoration: none;
  text-align: center;
  padding: 13px 16px;
  background-color: transparent;
  margin-top: 2px;
  border-radius: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  &:hover {
  transform: scale(1.05);
      transition: all 0.4s ease-in-out;
      box-shadow:  20px 20px 60px #1F2634,
      color: ${({ theme }) => theme.text_primary};
      filter: brightness(1);
      text-shadow: 0 0 10px #ff6b6b, 0 0 20px #ff6b6b, 0 0 40px #ff6b6b;
      box-shadow: 0 0 10px #ff6b6b, 0 0 20px #ff6b6b, 0 0 40px #ff6b6b;
      border-color: #ff6b6b;
`;

const Contact = () => {
  const form = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0z27m7e",
        "template_di2f1b9",
        form.current,
        "TSe0hRzuK1IRgRtjF"
      )
      .then(
        (result) => {
          alert("Message Sent");
          form.current.result();
        },
        (error) => {
          alert(error);
        }
      );
  };
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Contact</Title>
        <ContactForm onSubmit={handelSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" name="message" rows={4} />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
