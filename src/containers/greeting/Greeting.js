import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting, portfolioSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="联系我" href="#contact" />
                {/* 👇 添加作品集按钮 */}
                {portfolioSection.display && portfolioSection.portfolioLink && (
                  <Button
                    text="作品集"
                    newTab={true}
                    href={
                      "https://v01mc2mbc8k.feishu.cn/file/XRZfbF3MsozZIHxUW8ecA95AnLR?from=from_copylink"
                    }
                  />
                )}
                {greeting.resumeLink && (
                  <Button 
                    text="下载简历" 
                    newTab={true}
                    href="https://v01mc2mbc8k.feishu.cn/file/BLisbbbifowo4xxID6ScxTlonAh?from=from_copylink" 
                    />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* 👇 修改这部分：添加个人照片显示逻辑 */}
            {greeting.displayProfileImage && greeting.profileImage ? (
              <div className="profile-image-container">
                <img
                  src={greeting.profileImage}
                  alt={greeting.username}
                  className="profile-image"
                />
              </div>
            ) : illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
