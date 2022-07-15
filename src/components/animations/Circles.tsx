import React from "react"
import styled from "styled-components"

function Circles() {
  return (
    <Wrapper>
      <Circle />
      <Circle2 />
    </Wrapper>
  )
}

export default Circles

const Wrapper = styled.div`
  width: 420px;
  height: 420px;
`

const Circle = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  background: linear-gradient(
    180deg,
    #9fe1ff 0%,
    rgba(195, 236, 255, 0.0853208) 50.94%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 210px;
  left: calc(50% - 420px / 2);
  top: calc(50% - 420px / 2);
  animation: scale 5s 1s linear forwards;

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`
const Circle2 = styled(Circle)`
  width: 260px;
  height: 260px;
  border-radius: 135px;
  left: calc(50% - 260px / 2);
  top: calc(50% - 260px / 2);
`
