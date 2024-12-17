import React from 'react'
import styled from 'styled-components'

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 100px;
`
const ContactTitle = styled.h1`
  text-align: center;
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  font-family: 'Abril Fatface', serif;
  font-size: 8rem;
  font-weight: 400;
  margin-bottom: 30px;
`
const ContactButton = styled.a`
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  font-family: 'Abril Fatface', serif;
  font-size: 1.2rem;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  background-color: black;
  margin-bottom: 100px;
  padding: 30px 80px;
  border-radius: 80px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>
        Let's talk!
      </ContactTitle>
      <ContactButton href="mailto:diiidhe@gmail.com?subject=Let's Connect!&body=Hi, I'd like to get in touch!">
        Contact Me ⬈
      </ContactButton>
    </ContactContainer>
  )
}

export default Contact
