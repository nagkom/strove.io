import React from "react";
import GitHubButton from "react-github-button";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { Button } from "antd";
import BannerSVGAnim from "./component/BannerSVGAnim";

function Banner(props) {
  return (
    <div className="banner-wrapper">
      {props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <div className="home-banner-image">
            <img
              alt="banner"
              src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
              width="100%"
            />
          </div>
        </TweenOne>
      )}
      <QueueAnim
        className="banner-title-wrapper"
        type={props.isMobile ? "bottom" : "right"}
      >
        <div key="line" className="title-line-wrapper">
          <div
            className="title-line"
            style={{ transform: "translateX(-64px)" }}
          />
        </div>
        <h1 key="h1">SiliSky</h1>
        <p key="content">Code in clouds. One evironment for everyone.</p>
        <div key="button" className="button-wrapper">
          <a
            href="http://preview.pro.ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="primary">Button 1</Button>
          </a>
          <Button style={{ margin: "0 16px" }} type="primary" ghost>
            Button 2
          </Button>
          <GitHubButton
            key="github-button"
            type="stargazers"
            namespace="ant-design"
            repo="ant-design-pro"
          />
        </div>
      </QueueAnim>
      {!props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <BannerSVGAnim />
        </TweenOne>
      )}
    </div>
  );
}

export default Banner;