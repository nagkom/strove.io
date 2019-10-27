import React, { useState, memo } from 'react'
import { Parallax } from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import { SmallCloud, MediumCloud, BigCloud } from 'components'
import { Icon } from 'antd'
import { VSCode } from 'images/logos'
import styled from 'styled-components'
import { isMobileOnly } from 'react-device-detect'

const { TweenOneGroup } = TweenOne

const StyledFeatureTitle = styled.h3`
  color: rgb(105, 123, 140);
  font-size: 16px;
`

const StyledFeatureContent = styled.p`
  color: rgb(105, 123, 140);
  font-size: 14px;
`

const StyledAnchor = styled.a`
  text-decoration: none;
  color: rgb(105, 123, 140);
`

const StyledFeatureWrapper = styled.div`
  width: 100vw;
  margin: 50px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  align-items: center;
  overflow: hidden;
`

const featuresCN = [
  {
    title: 'Run projects straight in the browser',
    content: 'No setup needed',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/aLQyKyUyssIUhHTZqCIb.svg',
    color: '#EB2F96',
    shadowColor: 'rgba(235,45,150,.12)',
    type: 'chrome',
  },
  {
    title: 'Work with VSCode',
    content: 'You can even use your favorite extensions',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg',
    color: '#0072ce',
    shadowColor: 'rgba(0, 114, 206, 0.12)',
  },
  {
    title: 'Access your code anywhere',
    content: 'Log in to your account from any computer and code in the cloud',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg',
    color: '#13C2C2',
    shadowColor: 'rgba(19,194,194,.12)',
    type: 'global',
  },
  {
    title: 'Code in all major programming languages',
    content:
      'You can even use a particular language version. Need Python 2.7.3 for chemistry? We got you covered!',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg',
    color: '#722ED1',
    shadowColor: 'rgba(114,46,209,.12)',
    type: 'code',
  },
  {
    title: "Don't lose time, one environment for the whole team",
    content:
      'Once a project has been set up, any member can access it without needing to configure everything again',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg',
    color: '#FAAD14',
    shadowColor: 'rgba(250,173,20,.12)',
    type: 'team',
  },
  {
    title: 'Build fullstack apps',
    content:
      'and save battery, CPU and RAM. Expensive computations are done in the cloud',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg',
    color: '#F5222D',
    shadowColor: 'rgba(245,34,45,.12)',
    type: 'appstore',
  },
  {
    title: "It's open-source",
    content: 'Contribute! Strove has been built with contributors in mind',
    href: 'https://github.com/stroveio/strove.io-client',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/pbmKMSFpLurLALLNliUQ.svg',
    color: '#FA8C16',
    shadowColor: 'rgba(250,140,22,.12)',
    type: 'github',
  },
  {
    title: 'Push straight to GitHub, Gitlab or Bitbucket',
    content: 'Strove is made with seamless git experience in mind',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/VriUmzNjDnjoFoFFZvuh.svg',
    color: '#1AC44D',
    shadowColor: 'rgba(26,196,77,.12)',
    type: 'cloud',
  },
  {
    title: "Say goodbye to 'it works on my machine'",
    content:
      'Thanks to docker based infrastructure every member of the team works on the same environment',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/RpJIQitGbSCHwLMimybX.svg',
    color: '#1890FF',
    shadowColor: 'rgba(24,144,255,.12)',
    type: 'desktop',
  },
]

const pointPos = [
  { x: -30, y: -10 },
  { x: 20, y: -20 },
  { x: -65, y: 15 },
  { x: -45, y: 80 },
  { x: 35, y: 5 },
  { x: 50, y: 50, opacity: 0.2 },
]

const Features = () => {
  const [hoverNum, setHoverNum] = useState()
  const onMouseOver = i => setHoverNum(i)
  const onMouseOut = () => setHoverNum(null)

  const getEnter = e => {
    const i = e.index
    const r = Math.random() * 2 - 1
    const y = Math.random() * 10 + 5
    const delay = Math.round(Math.random() * (i * 50))
    return [
      {
        delay,
        opacity: 0.4,
        ...pointPos[e.index],
        ease: 'easeOutBack',
        duration: 300,
      },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: Math.random() * 1000 + 2000,
        yoyo: true,
        repeat: -1,
      },
    ]
  }

  let children = [[], [], []]
  featuresCN.forEach((item, i) => {
    const isHover = hoverNum === i
    const pointChild = [
      'point-0 left',
      'point-0 right',
      'point-ring',
      'point-1',
      'point-2',
      'point-3',
    ].map((className, index) => (
      <TweenOne
        component="i"
        className={className}
        key={index}
        style={{
          background: item.color,
          borderColor: item.color,
        }}
      />
    ))
    const child = (
      <>
        <TweenOneGroup
          className="page1-point-wrapper"
          enter={getEnter}
          leave={{
            x: 0,
            y: 30,
            opacity: 0,
            duration: 300,
            ease: 'easeInBack',
          }}
          resetStyleBool={false}
        >
          {(isMobileOnly || isHover) && pointChild}
        </TweenOneGroup>
        <div
          className="page1-image"
          style={{
            boxShadow: `${isHover ? '0 12px 24px' : '0 6px 12px'} ${
              item.shadowColor
            }`,
          }}
        >
          {item.type ? (
            <Icon
              type={item.type}
              style={{
                fontSize: '32px',
                color: `${item.color}`,
                marginTop: '10px',
              }}
            />
          ) : (
            <VSCode width="38px" height="auto" fill={item.color} />
          )}
        </div>
        <StyledFeatureTitle>{item.title}</StyledFeatureTitle>
        <StyledFeatureContent>{item.content}</StyledFeatureContent>
      </>
    )
    if (item.href) {
      children[Math.floor(i / 3)].push(
        <li key={i.toString()}>
          <div
            className="page1-box"
            onMouseEnter={() => {
              onMouseOver(i)
            }}
            onMouseLeave={() => {
              onMouseOut()
            }}
          >
            <StyledAnchor
              rel="noopener noreferrer"
              target="_blank"
              href={item.href}
            >
              {child}
            </StyledAnchor>
          </div>
        </li>
      )
    } else {
      children[Math.floor(i / 3)].push(
        <li key={i.toString()}>
          <div
            className="page1-box"
            onMouseEnter={() => {
              onMouseOver(i)
            }}
            onMouseLeave={() => {
              onMouseOut()
            }}
          >
            {child}
          </div>
        </li>
      )
    }
  })

  children = children.map((item, i) => (
    <QueueAnim
      className="page1-box-wrapper"
      key={i.toString()}
      type="bottom"
      leaveReverse
      delay={[i * 100, (children.length - 1 - i) * 100]}
      component="ul"
    >
      {item}
    </QueueAnim>
  ))

  return (
    <StyledFeatureWrapper id="page1-wrapper">
      {!isMobileOnly && (
        <Parallax
          className="page1-bg"
          animation={{
            translateY: 300,
            ease: 'linear',
            playScale: [0, 1.65],
          }}
          style={{ top: '-30vh' }}
          location="page1-wrapper"
        >
          <SmallCloud />
          <MediumCloud />
          <BigCloud />
        </Parallax>
      )}
      <div className="tiles-wrapper" style={{ width: '80vw' }}>
        {children}
      </div>
    </StyledFeatureWrapper>
  )
}

export default memo(Features)
