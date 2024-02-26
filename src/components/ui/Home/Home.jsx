import React, { useEffect, useState } from "react";
import { Typography, Select, Row, Col, Statistic } from "antd";
// import { Select, Typography, Row, Col, Avatar, Card } from "antd";

import millify from "millify";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useGetCryptosQuery } from "../../api/CryptoApi";
import CryptoCurrencies from "../CryptoCurrencies/CryptoCurrencies";
import News from "../News/News";
import axios from "axios";
import "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCoins } from "../../redux/actions/CoinAction";
import CryptoDetails from "../CryptoDetails/CryptoDetails";
import { Button, Modal } from "antd";
import WatchlistCurrencies from "../CryptoCurrencies/WatchlistCurrencies";
import Plans from "../Subscription/Plans";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Option } = Select;

const Home = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log("props", props);
  // console.log("location", location);
  const coinState = useSelector((state) => state.coins);
  const [viewWatchlist, setViewWatchlist] = useState(false);
  const [viewCoinlist, setViewCoinlist] = useState(true);
  const [watclistCss, setWatchlistCss] = useState("coll-watch-div-hidden");
  const [coinCss, setCoinCss] = useState("coll-all-coin");
  const [coinUuid, setCoinUuid] = useState("Qwsogvtv82FCd");

  useEffect(() => {
    Promise.all([dispatch(GetAllCoins())]);
  }, [coinUuid, setCoinUuid]);
  // console.log("props", props);
  // const { data, isFetching } = useGetCryptosQuery(8, props.region);

  const globalStats = coinState?.data?.data?.stats;

  // useEffect(() => {
  //   // useGetCryptosQuery(8, props.region);
  //   // window.location.reload();
  // }, [props.region]);

  // if (isFetching) {
  //   return <>Loading</>;
  // }
  // console.log("globalStats", globalStats);

  let showWatchlist = () => {
    if (viewWatchlist === false) {
      setViewWatchlist(true);
      setWatchlistCss("coll-watch-div");
    } else if (viewWatchlist === true) {
      setViewWatchlist(false);
      setWatchlistCss("coll-watch-div-hidden");
    }
    // if(viewWatchlist===true && viewCoinlist===false)
    // {
    //   setViewWatchlist(false);
    //   setWatchlistCss("coll-watch-div-hidden");
    //   setViewCoinlist(true);
    //   setCoinCss("coll-all-coin");
    // }
  };

  let showCryptocoins = () => {
    if (viewCoinlist === true) {
      setViewCoinlist(false);
      setCoinCss("coll-all-coin-hidden");
    } else if (viewCoinlist === false) {
      setViewCoinlist(true);
      setCoinCss("coll-all-coin");
    }
  };

  const [open, setOpen] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "Please Subscribe to any of the plans by clicking below"
  );
  const navigate = useNavigate();
  const handleOk = () => {
    navigate("/Plans");
    setConfirmLoading(false);
    setOpen(false);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  // const [popUpClose, setPopUpClose] = useState(false);

  return (
    <>
      {/* {!location.state.subscribe_flag && (
        <Modal
          closable={false}
          
          title="Subscription Options & Pricing"
          open={open}
          centered
          onOk={handleOk}
          confirmLoading={confirmLoading}
          width={"70%"}
          footer={
            [
             
            ]
          }
          
        >
          <Plans popup setOpen={setOpen} open={open} />
          
        </Modal>
      )} */}
      {/* ) : ( */}
      <div className="home-main">
        <div className="home-main-left">
          <div className="head-tag">
            Watchlist
            <span className="show-more-span" onClick={showWatchlist}>
              {viewWatchlist ? (
                <MinusCircleOutlined
                  style={{
                    fontSize: "2rem",
                    color: "#5c47b0",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <>
                  <PlusCircleOutlined
                    style={{
                      fontSize: "2rem",
                      color: "#5c47b0",
                      cursor: "pointer",
                    }}
                  />
                </>
              )}
            </span>
          </div>
          <div className={watclistCss}>
            <div className="watchlist-coins-parent">
              <div className="watchlist-coins">
                <WatchlistCurrencies
                  coinUuid={coinUuid}
                  setCoinUuid={setCoinUuid}
                  simplified
                />
              </div>
            </div>
          </div>
          <div className="head-tag">
            Cryptocurrencies
            <span className="show-more-span" onClick={showCryptocoins}>
              {/* View All {`>`} */}
              {viewCoinlist ? (
                <MinusCircleOutlined
                  style={{
                    fontSize: "2rem",
                    color: "#5c47b0",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <>
                  <PlusCircleOutlined
                    style={{
                      fontSize: "2rem",
                      color: "#5c47b0",
                      cursor: "pointer",
                    }}
                  />
                </>
              )}
            </span>
          </div>
          <div className={coinCss}>
            <div className="watchlist-coins-parent">
              <div className="watchlist-coins">
                <CryptoCurrencies
                  coinUuid={coinUuid}
                  setCoinUuid={setCoinUuid}
                  simplified
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home-main-right">
          <CryptoDetails coinUuid={coinUuid} setCoinUuid={setCoinUuid} />
        </div>
      </div>
      {/* )} */}
    </>
  );
};

// {coinState && coinState.available && (
//   <>
//     <div className="home-heading">
//       <div>
//         {" "}
//         <Title level={2} className="heading">
//           {" "}
//           Dashboard
//         </Title>
//       </div>
//       <div>
//         <Select
//           showSearch
//           className="select-currency"
//           placeholder="Select Currency"
//           optionFilterProp="children"
//           onChange={(value) => props.setRegion(value)}
//           filterOption={(input, option) =>
//             option.children.toLowerCase().indexOf(input.toLowerCase()) >=
//             0
//           }
//         >
//           <Option value="yhjMzLPhuIDl">USD</Option>
//           <Option value="6mUvpzCc2lFo">INR</Option>
//         </Select>
//       </div>
//     </div>
//     <div className="top-content ">
//       <div className="crypto-main-left">
//         <div className="main-cont">
//           <div className="main-cont-head">
//             Total Crypto Currencies
//             <div className="sub-text">{globalStats.totalCoins}</div>
//           </div>
//           <div className="div-market">
//             Exchanges
//             <div className="sub-text">
//               {millify(globalStats.totalExchanges)}
//             </div>
//           </div>
//         </div>
//         <div className="img-div">
//           <img
//             className="coin-img"
//             src={process.env.PUBLIC_URL + "/Bitcoin.png"}
//           />
//         </div>
//       </div>
//       <div className="crypto-main-right">
//         <div className="card-one">
//           <div className="right-main-text">
//             Total Market Gap
//             <div className="right-sub-text">
//               {" "}
//               {millify(globalStats.totalMarketCap)}
//             </div>
//           </div>
//           <div className="right-main-text">
//             Total 24h Volume
//             <div className="right-sub-text">
//               {" "}
//               {millify(globalStats.total24hVolume)}
//             </div>
//           </div>
//           <div className="right-main-text">
//             Cryptos
//             <div className="right-sub-text">
//               {" "}
//               {globalStats.totalCoins}
//             </div>
//           </div>
//         </div>
//         <div className="card-two">
//           <div className="right-main-text">
//             Total Markets
//             <div className="right-sub-text">
//               {globalStats.totalMarkets}
//             </div>
//           </div>
//           <div className="right-main-text">
//             Total Exchanges
//             <div className="right-sub-text">
//               {globalStats.totalExchanges}
//             </div>
//           </div>
//           <div className="right-main-text">
//             Total
//             <div className="right-sub-text">{globalStats.total}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="home-heading-container">
//       <Title level={2} className="home-title">
//         Top 8 Cryto Currencies
//       </Title>
//       <Title level={3} className="show-more">
//         <Link to="/cryptocurrencies">
//           <span style={{ color: "#5c47b0" }}>View All</span>
//         </Link>
//       </Title>
//     </div>
//     <CryptoCurrencies simplified />
//     <div className="home-heading-container">
//       <Title level={2} className="home-title">
//         Trending News
//       </Title>
//       <Title level={3} className="show-more">
//         <Link to="/news">
//           <span style={{ color: "#5c47b0" }}>View All</span>
//         </Link>
//       </Title>
//     </div>
//     <News simplified />
//   </>
// )}

export default Home;
