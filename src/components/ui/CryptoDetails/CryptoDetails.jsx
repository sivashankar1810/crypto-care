import React, { useEffect, useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useNavigate, useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../../api/CryptoApi";
// import Loader from './Loader';
import LineChart from "./LineChart";
import { useDispatch, useSelector } from "react-redux";
import { GetIndividualCoinDetails } from "../../redux/actions/IndividualCoinAction";
import { GetCryptoHistory } from "../../redux/actions/CryptoHistoryAction";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = ({coinUuid,setCoinUuid}) => {
  const  coinId  = "Qwsogvtv82FCd";
  let coinSymbol=new Map();
  coinSymbol.set("BTC","BTCUSDT");
  coinSymbol.set("ETH","ETHUSDT");
  coinSymbol.set("BNB","BNBUSDT");
  coinSymbol.set("BUSD","BUSDUSDT");
  coinSymbol.set("XRP","XRPUSDT");
  coinSymbol.set("DOGE","DOGEUSDT");
  coinSymbol.set("ADA","ADAUSDT");
  coinSymbol.set("LINK","LINKUSDT");
  // const coinSymbol={
  //   BTC:"BTCUSDT",
  //   ETH:"ETHUSDT",
  //   BNB:"BNBUSDT",
  //   BUSD:"BUSDUSDT",
  //   XRP:"XRPUSDT",
  //   DOGE:"DOGEUSDT",
  //   ADA:"ADAUSDT",
  //   LINK:"LINKUSDT"
  // }
  let[coinSbl,setCoinSbl]=useState("BTCUSDT");

  const [timeperiod, setTimeperiod] = useState("7d");
  const [addWatchList, setAddWatchList] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("cryDetails",coinUuid)
    Promise.all([dispatch(GetIndividualCoinDetails(coinUuid))]);
  },[coinUuid]);
  useEffect(() => {
    Promise.all([dispatch(GetCryptoHistory(coinUuid, timeperiod))]);
    
  }, [coinUuid]);
  const singleCoinState = useSelector((state) => state.getCoinDetails);
  const coinHistoryState = useSelector((state) => state.getCryptoHistory);

  const cryptoDetails = singleCoinState?.data?.data?.coin;
   let coinBsl=singleCoinState?.data?.data?.symbol;
  // console.log(coinSymbol.get(coinBsl))
  // console.log(coinBsl)
  // // console.log(cryptoDetails);
    useEffect(()=>{
      
    },[coinBsl])

  useEffect(()=>{
    setCoinSbl(undefined);
    setTimeout(() => {
      setCoinSbl(coinSymbol.get(coinBsl));
    }, 100);
   
  },[coinBsl])

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${
        singleCoinState &&
        singleCoinState.available &&
        cryptoDetails?.price &&
        millify(cryptoDetails?.price)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "Rank",
      value:
        singleCoinState && singleCoinState.available && cryptoDetails?.rank,
      icon: <NumberOutlined />,
    },
    {
      title: "24h Volume",
      value: `$ ${
        singleCoinState &&
        singleCoinState.available &&
        cryptoDetails["24hVolume"] &&
        millify(
          singleCoinState && singleCoinState.available && cryptoDetails?.price
        )
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        singleCoinState &&
        singleCoinState.available &&
        cryptoDetails?.marketCap &&
        millify(
          singleCoinState &&
            singleCoinState.available &&
            cryptoDetails?.marketCap
        )
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        singleCoinState &&
        singleCoinState.available &&
        cryptoDetails?.allTimeHigh?.price &&
        millify(
          singleCoinState &&
            singleCoinState.available &&
            cryptoDetails?.allTimeHigh?.price
        )
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value:
        singleCoinState &&
        singleCoinState.available &&
        cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value:
        singleCoinState &&
        singleCoinState.available &&
        cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value:
        singleCoinState &&
        singleCoinState.available &&
        cryptoDetails?.supply?.confirmed ? (
          <CheckOutlined />
        ) : (
          <StopOutlined />
        ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        singleCoinState &&
        singleCoinState.available &&
        cryptoDetails?.supply?.total &&
        millify(
          singleCoinState &&
            singleCoinState.available &&
            cryptoDetails?.supply?.total
        )
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        singleCoinState &&
        singleCoinState.available &&
        cryptoDetails?.supply?.circulating &&
        millify(
          singleCoinState &&
            singleCoinState.available &&
            cryptoDetails?.supply?.circulating
        )
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <>
      {coinHistoryState &&
        coinHistoryState.available &&
        singleCoinState &&
        singleCoinState.available && (
          <>
            <div className="coin-detail-container">
              <div className="coin-heading-container">
                <div  className="coin-name">
                  {cryptoDetails.name} ({cryptoDetails.symbol}) Price
                </div>
                {/* <p>
                  {cryptoDetails.name} live price in US Dollar (USD). View value
                  statistics, market cap and supply.
                </p> */}
              </div>

              <div className="cryptoDetails-select">
                {/* <Select
                  defaultValue="7d"
                  className="select-timeperiod"
                  placeholder="Select Timeperiod"
                  onChange={(value) => setTimeperiod(value)}
                >
                  {time.map((date) => (
                    <Option key={date}>{date}</Option>
                  ))}
                </Select> */}
                <div className="cryptoDetails-buttons">
                  <button
                    className="cryptoDetails-subscription"
                    onClick={() => {
                      navigate("/compareCoin",{state:{coinDetails:cryptoDetails,uuid:cryptoDetails.uuid,coinName:cryptoDetails.name}});
                    }}
                  >
                    {/* <span className="cryptoDetails-icon">
                      <CheckCircleOutlined />
                    </span> */}
                    COMPARE
                  </button>

                  {!addWatchList ? (
                    <button
                      className="cryptoDetails-watchlist"
                      onClick={() => {
                        setAddWatchList(!addWatchList);
                      }}
                    >
                      <span className="cryptoDetails-icon">
                        <CheckCircleOutlined />
                      </span>
                      ADD TO WATCHLIST
                    </button>
                  ) : (
                    <button
                      className="cryptoDetails-removelist"
                      onClick={() => {
                        setAddWatchList(!addWatchList);
                      }}
                    >
                      <span className="cryptoDetails-icon">
                        <CloseCircleOutlined />
                      </span>
                      REMOVE FROM WATCHLIST
                    </button>
                  )}
                </div>
              </div>

              <LineChart
                coinHistory={coinHistoryState.data}
                currentPrice={millify(cryptoDetails?.price)}
                coinName={cryptoDetails?.name}
                symbol={coinSbl}
              />

              <Col className="stats-container">
                <Col className="coin-value-statistics">
                  <Col className="coin-value-statistics-heading">
                    <Title level={3} className="coin-details-heading">
                      {cryptoDetails.name} Value Statistics
                    </Title>
                    <p>
                      An overview showing the statistics of {cryptoDetails.name}
                      , such as the base and quote currency, the rank, and
                      trading volume.
                    </p>
                  </Col>
                  {stats.map(({ icon, title, value }) => (
                    <Col className="coin-stats">
                      <Col className="coin-stats-name">
                        <Text>{icon}</Text>
                        <Text>{title}</Text>
                      </Col>
                      <Text className="stats">{value}</Text>
                    </Col>
                  ))}
                </Col>
                <Col className="other-stats-info">
                  <Col className="coin-value-statistics-heading">
                    <Title level={3} className="coin-details-heading">
                      Other Stats Info
                    </Title>
                    <p>
                      An overview showing the statistics of {cryptoDetails.name}
                      , such as the base and quote currency, the rank, and
                      trading volume.
                    </p>
                  </Col>
                  {genericStats.map(({ icon, title, value }) => (
                    <Col className="coin-stats">
                      <Col className="coin-stats-name">
                        <Text>{icon}</Text>
                        <Text>{title}</Text>
                      </Col>
                      <Text className="stats">{value}</Text>
                    </Col>
                  ))}
                </Col>
              </Col>
              <Col className="coin-desc-link">
                <Row className="coin-desc">
                  <div className="coin-details-heading">
                    What is {cryptoDetails.name}?                   
                  </div>
                  {(cryptoDetails.description)}
                 
                </Row>
                <Col className="coin-links">
                  <Title level={3} className="coin-details-heading">
                    {cryptoDetails.name} Links
                  </Title>
                  {cryptoDetails.links?.map((link) => (
                    <Row className="coin-link" key={link.name}>
                      <Title level={5} className="link-name">
                        {link.type}
                      </Title>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.name}
                      </a>
                    </Row>
                  ))}
                </Col>  
              </Col>
            </div>
          </>
        )}
    </>
  );
};

export default CryptoDetails;
