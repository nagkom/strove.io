import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { useSelector } from 'react-redux'

import { selectors } from 'state'

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.4;
  }

`

const ButtonFadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 0.9;
}

`

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

const Text = styled.p`
  color: #0072ce;
  font-size: 1rem;
  margin-left: 2%;
  margin-bottom: 0;
  white-space: normal;
  text-overflow: wrap;
  overflow: visible;
  text-align: center;
`

const Button = styled.button`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 45%;
  min-width: 70px;
  margin: 5px;
  padding: 0.5vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${props => (props.primary ? '#0072ce' : '#ffffff')};
  border-width: 1px;
  border-style: solid;
  font-size: 0.9rem;
  color: ${props => (props.primary ? '#ffffff' : '#0072ce')};
  border-radius: 1vh;
  border-color: #0072ce;
  box-shadow: 0 1vh 1vh -1.5vh #0072ce;
  text-decoration: none;
  transition: all 0.2s ease;
  animation: ${FadeIn} 0.5s ease-out;
  opacity: 0.9;

  :focus {
    outline: 0;
  }

  &:disabled {
    opacity: 0.4;
  }

  ${props =>
    !props.disabled &&
    css`
      animation: ${ButtonFadeIn} 1s ease-out;
      cursor: pointer;
      &:hover {
        opacity: 1;
        transform: translateY(-3px);
        box-shadow: 0 1.2vh 1.2vh -1.3vh #0072ce;
      }
    `}
`

const AddProjectModals = () => {
  const repoLink = 'https://gitlab.com/AdamZaczek/codengo'
  const user = useSelector(selectors.getUser)
  const repoUrlParts = repoLink.split('/')
  const repoProvider = repoUrlParts[2].split('.')[0]
  const privateRepo = false

  return (
    <>
      {privateRepo ? (
        <>
          <Text>
            We couldn't clone your repository. This may happen due to one of the
            following reasons:
          </Text>
          <ul>
            <li>The repository you are trying to clone is private</li>
            <li>
              You do not have access rights to the repository you are trying to
              reach
            </li>
            <li>Repository from the provided link does not exist</li>
          </ul>
          <Text>For more information check out pricing</Text>
          <Button primary onClick={console.log('Log in')}>
            Pricing
          </Button>
        </>
      ) : (
        <>
          <Text>
            You are not logged in{user && ` with ${repoProvider}`}. To clone
            repository from provided link you have to log in with {repoProvider}
          </Text>
          <Button primary onClick={console.log('Log in')}>
            Log in with {repoProvider}
          </Button>
        </>
      )}{' '}
      <Button onClick={console.log('Close the modal')}>Close</Button>
    </>
  )
}

export default AddProjectModals