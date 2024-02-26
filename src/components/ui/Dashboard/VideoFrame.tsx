import React from "react";
import ReactPlayer from "react-player";
import "../../../styles/VideoFrame.scss";

const VideoFrame = () => {
  //   const videoWidth="300px";
  //   const vidoHeight="200px";
  const videoWidth = "";
  const vidoHeight = "180";
  return (
    <>
      <div className="video-frame-div">
        <h2 className="vid-title">Investment Guide</h2>
        <div className="d-flex card-deck ">
          <div className="card .col-sm-12">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Yb6825iv0Vk"
              width={videoWidth}
              height={vidoHeight}
            />
            <div className="card-body">
              <h4 className="card-title">
                How To Invest In Crypto Full Beginners Guide
              </h4>
              <p className="card-text">
                This is the ULTIMATE Guide on how to get started in
                cryptocurrency investing for beginners.
              </p>
            </div>
          </div>
          <div className="card .col-sm-12">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=rYQgy8QDEBI"
              width={videoWidth}
              height={vidoHeight}
            />
            <div className="card-body">
              <h4 className="card-title">How Cryptocurrency Actually works</h4>
              <p className="card-text">
                Bitcoin, Dogecoin, Ethereum, NFT's, all explained in one simple
                guide! Do consider subscribing if you enjoyed!
              </p>
            </div>
          </div>
          <div className="card .col-sm-12">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=BWnV10hzzzw"
              width={videoWidth}
              height={vidoHeight}
            />
            <div className="card-body">
              <h4 className="card-title">
                Cryptocurrency Investing Mistakes to Avoid
              </h4>
              <p className="card-text">
                The 6 WORST Cryptocurrency Investing Mistakes to Avoid and Guide
                on how to get started in cryptocurrency investing for beginners.
              </p>
            </div>
          </div>
          <div className="card .col-sm-12">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Helf3Ku8kho"
              width={videoWidth}
              height={vidoHeight}
            />
            <div className="card-body">
              <h4 className="card-title">Crypto: a beginner’s guide</h4>
              <p className="card-text">
                Cryptocurrencies, decentralised finance and blockchain
                technology—what do these terms really mean? The Economist’s
                finance correspondents guide us through the key concepts of
                crypto.
              </p>
            </div>
          </div>
        </div>
        {/* <div classNameName="player-div">
            <ReactPlayer url="https://www.youtube.com/watch?v=ecKqPCYB_uA" width="200px" height="200px" />
        </div> */}
      </div>
    </>
  );
};

export default VideoFrame;
