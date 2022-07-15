import React from "react"
import styled from "styled-components"

function CourseCard() {
  return (
    <Wrapper className="courseCard">
      <Illustration
        src="/images/illustrations/illustration-1.png/"
        alt="illustration"
      />
    </Wrapper>
  )
}

export default CourseCard

const Wrapper = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-content: center;
  max-width: 360px;
  width: 100%;
  height: 480px;
  background: linear-gradient(200.42deg, #ff8570 13.57%, #f9504a 98.35%);
  border-radius: 20px;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(225, 225, 225, 0.25);
`

const Illustration = styled.img`
  width: 300px;
`
