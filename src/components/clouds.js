import React from "react"
import styled, { keyframes } from "styled-components"

const AnimateCloud = keyframes`
  0% {
    right: -30vw;
  }
  100% {
    right: 100vw;
  }
`
const AnimateMediumCloud = keyframes`
  0% {
    right: -75vw;
  }
  100% {
    right: 100vw;
  }
`

const AnimateSmallCloud = keyframes`
  0% {
    right: -5vw;
  }
  100% {
    right: 100vw;
  }
`

const BigCloud = styled.div`
  & {
    position: absolute;
    opacity: 0.4;
    width: 25vh;
    height: 11vh;
    background: rgb(179, 209, 255);
    border-radius: 75px;
    top: 85vh;
    animation: ${AnimateCloud} 60s linear infinite;
    z-index: -1;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    background: #b3d1ff;
    z-index: -1;
  }

  &:after {
    width: 8vh;
    height: 8vh;
    top: -4.5vh;
    right: 4.5vh;
    border-radius: 4.5vh;
    z-index: -1;
  }
  &:before {
    width: 12vh;
    height: 12vh;
    top: -5.8vh;
    left: 2.4vh;
    border-radius: 11.6vh;
    z-index: -1;
  }
`

const MediumCloud = styled.div`
  & {
    position: absolute;
    opacity: 0.4;
    width: 20vh;
    height: 9vh;
    background: #b3d1ff;
    border-radius: 75px;
    top: 38vh;
    animation: ${AnimateMediumCloud} 53s linear infinite;
    z-index: -1;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    background: #b3d1ff;
    z-index: -1;
  }

  &:after {
    width: 6.5vh;
    height: 6.5vh;
    top: -4vh;
    right: 4vh;
    border-radius: 4vh;
    z-index: -1;
  }
  &:before {
    width: 10.5vh;
    height: 10.5vh;
    top: -4.5vh;
    left: 2vh;
    border-radius: 9vh;
    z-index: -1;
  }
`

const SmallCloud = styled.div`
  & {
    position: absolute;
    opacity: 0.4;
    width: 15vh;
    height: 7vh;
    background: #b3d1ff;
    border-radius: 75px;
    top: 30vh;
    animation: ${AnimateSmallCloud} 45s linear infinite;
    z-index: -1;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    background: #b3d1ff;
    z-index: -1;
  }

  &:after {
    width: 5vh;
    height: 5vh;
    top: -3vh;
    right: 3vh;
    border-radius: 3vh;
    z-index: -1;
  }
  &:before {
    width: 8vh;
    height: 8vh;
    top: -3.5vh;
    left: 1.5vh;
    border-radius: 7vh;
    z-index: -1;
  }
`

export { SmallCloud, MediumCloud, BigCloud }
