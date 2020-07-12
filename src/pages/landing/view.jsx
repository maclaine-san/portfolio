import React, { useCallback, useMemo } from "react";
import { useContext, useState } from "react";
import { PageContext } from "../../lib/context";
import { Animated } from "react-animated-css";
import { useEffect } from "react";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoInstagram,
} from "react-icons/io";
import Tools from "./components/tools";
import { Tooltip } from "antd";
import _ from "lodash";
import ImageViewer from "react-simple-image-viewer";

const LandingView = (props) => {
  const { userInfo, loading, projects } = useContext(PageContext);
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([])
  console.log("info ", userInfo);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 4000);
  }, []);

  useMemo(()=>{
    for(var index in projects) {
      const project = projects[index]
      setImages(image => [...image,project.image.url])
    }
  },[projects])

  function createMarkup() {
    return { __html: userInfo[0].info.html };
  }

  const openImageViewer = (url) => {
    const index = images.findIndex(element => element === url)
    console.log('index',index)
    console.log('url',url)
    console.log('images',images)
    setCurrentImage(index);
    setIsViewerOpen(true);
  }

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div
      className={`h-auto w-full flex flex-row overflow-y-auto`}
      style={{
        backgroundImage: `url(${require("../../assets/blob-bg.png")})`,
        objectFit: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {loading && (
        <Animated
          animationIn="fadeIn"
          animationOut="bounceUp"
          isVisible={loading}
        >
          <div className={`wrapper self-center items-center`}>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <span>Maclaine's Lab</span>
          </div>
        </Animated>
      )}
      {!loading && (
        <>
          <Animated
            className="h-auto flex w-full"
            animationInDuration={2000}
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={!loading}
          >
            <div className="w-2/4 flex self-start mt-20">
              <div className="container flex-col">
                <div
                  className="container__image"
                  style={{
                    backgroundImage: `url(${userInfo[0].image.url})`,
                  }}
                >
                  <div className="container__info container__author">
                    <a className="link">{userInfo[0].name}</a>{" "}
                    {userInfo[0].aboutMe}
                  </div>
                  <div className="container__info container__location">
                    {userInfo[0].address}
                  </div>
                </div>
                <div className="flex flex-row text-blue-600">
                  <a href="https://www.facebook.com/profile.php?id=100000211374678" target="_blank"><IoLogoFacebook size={30} color="#A13941" /></a>
                  <IoLogoInstagram size={30} color="#A13941" />
                  <a href="https://twitter.com/akosiMaklen" target="_blank"><IoLogoTwitter size={30} color="#A13941" /></a>
                  <a href="https://github.com/maclaine-san" target="_blank"><IoLogoGithub size={30} color="#A13941" /></a>
                </div>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col p-20">
              <div className="items-start">
                <p className="text-xl font-semibold">
                  My most recent and commonly used tools and technologies
                </p>
              </div>
              <div
                className="flex flex-row mt-5 mr-5 flex-wrap"
                style={{ width: "50%" }}
              >
                <Tools />
              </div>
              <div className="mt-10 p-5">
                <p dangerouslySetInnerHTML={createMarkup()} />
              </div>
              <div className="mt-10 rounded-lg p-5">
                <p className="text-3xl">Projects</p>
                <p className="self-center text-xl">Pasajob Seeker Mobile</p>
                <div
                  id="style-2"
                  style={{
                    display: "flex",
                    overflowX: "auto",
                    scrollbarWidth: "thin",
                  }}
                >
                  {_.filter(projects, { name: "Pasajob-mobile" }).map(
                    (project, key) => (
                      <Tooltip
                        style={{ height: 800, width: 600 }}
                        title={project.description}
                        color="#A13941"
                        onClick={()=>openImageViewer(project.image.url)}
                      >
                        <img
                          src={project.image.url}
                          style={{
                            height: 450,
                            width: 250,
                            objectFit: "contain",
                          }}
                        />
                      </Tooltip>
                    )
                  )}
                </div>

                <p className="self-center text-xl mt-20">Pasajob Web</p>
                <div
                  id="style-2"
                  style={{
                    display: "flex",
                    overflowX: "auto",
                    scrollbarWidth: "thin",
                  }}
                >
                  {_.filter(projects, { name: "Pasajob-web" }).map(
                    (project, key) => (
                      <Tooltip
                        className="mr-5"
                        title={project.description}
                        color="#A13941"
                        onClick={()=>openImageViewer(project.image.url)}
                      >
                        <img
                          src={project.image.url}
                          style={{
                            height: 400,
                            width: 400,
                            objectFit: "contain",
                          }}
                        />
                      </Tooltip>
                    )
                  )}
                </div>
              </div>
            </div>
          </Animated>
        </>
      )}

      {isViewerOpen && images.length > 2 && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default LandingView;
