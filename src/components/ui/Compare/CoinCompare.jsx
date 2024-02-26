import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import mockData from "../../widgets/MockData/coinDetailsMockData.json";
import {
  GetIndividualCoinDetails,
  GetIndividualCoinDetailsThree,
  GetIndividualCoinDetailsTwo,
} from "../../redux/actions/IndividualCoinAction";
import { StopOutlined, CheckOutlined } from "@ant-design/icons";
import millify from "millify";
import { color } from "highcharts";
const CoinCompare = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 // const coinDetails = useLocation().state.coinDetails;
  // const uuid = useLocation().state.uuid;
  const [compareItemTwo, setCompareItemTwo] = useState("");
  const [compareItemThree, setCompareItemThree] = useState("");
  const [compareItemOne, setCompareItemOne] = useState("");
  // console.log(useLocation().state.uuid)
  useEffect(() => {
    Promise.all([dispatch(GetIndividualCoinDetails(compareItemOne))]);
  }, [compareItemOne]);
  useEffect(() => {
    Promise.all([dispatch(GetIndividualCoinDetailsTwo(compareItemTwo))]);
  }, [compareItemTwo]);
  useEffect(() => {
    Promise.all([dispatch(GetIndividualCoinDetailsThree(compareItemThree))]);
  }, [compareItemThree]);
  const singleCoinStateTwo = useSelector((state) => state.getCoinDetailsTwo);
  const singleCoinStateThree = useSelector(
    (state) => state.getCoinDetailsThree
  );
  const coinDetails = useSelector(
    (state) => state.getCoinDetails?.data?.data?.coin
  );
  let compareCoinOne = (value) => {
    setCompareItemOne("");
    setCompareItemOne(value);
  };

  let compareCoinTwo = (value) => {
    setCompareItemTwo("");
    setCompareItemTwo(value);
  };
  let compareCoinThree = (value) => {
    setCompareItemThree("");
    setCompareItemThree(value);
  };
  useEffect(() => {}, [singleCoinStateTwo, singleCoinStateThree,coinDetails]);
  let options = [
    {
      value: "Qwsogvtv82FCd",
      label: "Bitcoin",
    },
    {
      value: "razxDUgYGNAdQ",
      label: "Ethereum",
    },
    {
      value: "HIVsRcGKkPFtW",
      label: "Tether USD",
    },
    {
      value: "aKzUVe4Hh_CON",
      label: "USDC",
    },
    {
      value: "WcwrkfNI4FUAe",
      label: "BNB",
    },
    {
      value: "vSo2fu9iE1s0Y",
      label: "Binance USD",
    },
    {
      value: "-l8Mn2pVlRs-p",
      label: "XRP",
    },
    {
      value: "a91GCGd_u96cF",
      label: "Dogecoin",
    },
    {
      value: "qzawljRxB5bYu",
      label: "Cardano",
    },
    {
      value: "VLqpJwogdhHNb",
      label: "Chainlink",
    },
  ];

  return (
    <>
      <div className="compare-main">
        <div><button className="go-bck-btn" onClick={()=>navigate("/dashboard")}>Go back</button></div>
        <div className="compare-title"></div>
        <div className="main-container">
          <div className="compare-container">
            <div class="compare-tbl">
              <div className="compare-tbl-th comp-category" scope="col">
                CATEGORY
              </div>
              <div className="compare-tbl-th-md" scope="col">
                <div className="compare-tbl-th-md-row">
                  <img
                    className="coin-logo logo-1"
                    src={coinDetails?.iconUrl}
                  />
                 
                  {/* <p>{coinDetails?.name}</p> */}
                </div>
                <Select
                    size={"middle"}
                    listHeight={200}
                    defaultValue={coinDetails?.name}
                    style={{ width: 200 }}
                    onChange={compareCoinOne}
                    options={options} />
              </div>
              <div className="compare-tbl-th-md" scope="col">
                <div className="compare-tbl-th-md-row">
                  <img
                    className="coin-logo"
                    src={(singleCoinStateTwo?.available===true)?singleCoinStateTwo?.data?.data?.coin?.iconUrl:process.env.PUBLIC_URL + "/empty.png"}
                  />
                  {/* <p>{singleCoinStateTwo?.data?.data?.name}</p> */}
                </div>
                <Select
                  size={"middle"}
                  listHeight={200}
                  defaultValue={(singleCoinStateTwo?.available===true)?singleCoinStateTwo?.data?.data?.coin?.name:"--Please Select--"}
                  style={{ width: 200 }}
                  options={options}
                  onChange={compareCoinTwo}
                />
              </div>
              <div className="compare-tbl-th-md" scope="col">
                <div className="compare-tbl-th-md-row">
                  <img
                    className="coin-logo"
                    src={(singleCoinStateThree?.available===true)?singleCoinStateThree?.data?.data?.coin?.iconUrl:process.env.PUBLIC_URL + "/empty.png"}
                  />
                  {/* <p>{singleCoinStateThree?.data?.data?.name}</p> */}
                </div>
                <Select
                  size={"middle"}
                  listHeight={200}
                  defaultValue="--Please Select--"
                  style={{ width: 200 }}
                  options={options}
                  onChange={compareCoinThree}
                />
              </div>
            </div>
            <div className="compare-item-title">CRYPTOCURRENCY VALUE STATS</div>
            <div class="compare-tbl1">
              <div className="tr-row">
                <div className="compare-tbl-th coin-tbl">Rank</div>
                <div className="compare-tbl-th coin-th">
                  {coinDetails?.rank}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateTwo?.data?.data?.coin?.rank}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateThree?.data?.data?.coin?.rank}
                </div>
              </div>
              <div className="tr-row">
                <div className="compare-tbl-th coin-tbl">Price to USD</div>
                <div className="compare-tbl-th coin-th">
                  {millify(coinDetails?.price)}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateTwo &&
                    singleCoinStateTwo.available &&
                    singleCoinStateTwo.data.data.coin["24hVolume"] &&
                    millify(
                      singleCoinStateTwo &&
                        singleCoinStateTwo.available &&
                        singleCoinStateTwo?.data?.data?.coin?.price
                    )}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateThree &&
                    singleCoinStateThree.available &&
                    singleCoinStateThree.data.data.coin["24hVolume"] &&
                    millify(
                      singleCoinStateThree &&
                        singleCoinStateThree.available &&
                        singleCoinStateThree?.data?.data?.coin?.price
                    )}
                </div>
              </div>
              <div className="tr-row">
                <div className="compare-tbl-th coin-tbl">24H volume</div>
                <div className="compare-tbl-th coin-th">
                  {millify(coinDetails && coinDetails["24hVolume"])}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateTwo.available === true
                    ? millify(singleCoinStateTwo.data?.data?.coin["24hVolume"])
                    : ""}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateThree.available === true
                    ? millify(singleCoinStateThree.data?.data?.coin["24hVolume"])
                    : ""}
                </div>
              </div>
              <div className="tr-row">
                <div className="compare-tbl-th coin-tbl">Market Cap</div>
                <div className="compare-tbl-th coin-th">
                  {millify(coinDetails?.marketCap)}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateTwo.available === true
                    ? millify(singleCoinStateTwo?.data?.data?.coin?.marketCap)
                    : ""}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateThree.available === true
                    ? millify(singleCoinStateThree?.data?.data?.coin?.marketCap)
                    : ""}
                </div>
              </div>
              <div className="tr-row">
                <div className="compare-tbl-th coin-tbl">All-time-high</div>
                <div className="compare-tbl-th coin-th">
                  {millify(coinDetails?.allTimeHigh?.price)}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateTwo.available === true
                    ? millify(
                        singleCoinStateTwo?.data?.data?.coin?.allTimeHigh?.price
                      )
                    : ""}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateThree?.available === true
                    ? millify(
                        singleCoinStateThree?.data?.data?.coin?.allTimeHigh?.price
                      )
                    : ""}
                </div>
              </div>
            </div>
            <div className="compare-item-title">OTHER INFO</div>
            <div class="compare-tbl1">
              <div className="tr-row">
                <div className="compare-tbl-th coin-tbl">Number of Markets</div>
                <div className="compare-tbl-th coin-th">
                  {coinDetails?.numberOfMarkets}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateTwo.available === true
                    ? millify(singleCoinStateTwo?.data?.data?.coin?.numberOfMarkets)
                    : ""}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateThree.available === true
                    ? millify(singleCoinStateThree?.data?.data?.coin?.numberOfMarkets)
                    : ""}
                </div>
              </div>
              <div className="tr-row">
                <div className="compare-tbl-th coin-tbl">
                  Number of Exchanges
                </div>
                <div className="compare-tbl-th coin-th">
                  {coinDetails?.numberOfExchanges}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateTwo.available === true
                    ? millify(singleCoinStateTwo?.data?.data?.coin?.numberOfExchanges)
                    : ""}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateThree.available === true
                    ? millify(
                        singleCoinStateThree?.data?.data?.coin?.numberOfExchanges
                      )
                    : ""}
                </div>
              </div>
              <div className="tr-row">
                <div className="compare-tbl-th coin-tbl">Approved Supply</div>
                <div className="compare-tbl-th coin-th">
                  {coinDetails?.supply?.confirmed ? (
                    <CheckOutlined style={{color:"#008000"}} />
                  ) : (
                    <StopOutlined style={{color:"#FF0000"}} />
                  )}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateTwo?.available===true?(singleCoinStateTwo?.data?.data?.coin?.supply?.confirmed? (
                   <CheckOutlined style={{color:"#008000"}} />
                  ) : (
                    <StopOutlined style={{color:"#FF0000"}} />
                  )):""} 
                </div>
                <div className="compare-tbl-th coin-th">
                {singleCoinStateThree?.available===true?(singleCoinStateThree?.data?.data?.coin?.supply?.confirmed? (
                    <CheckOutlined style={{color:"#008000"}} />
                  ) : (
                    <StopOutlined style={{color:"#FF0000"}} />
                  )):""}
                </div>
              </div>
              <div className="tr-row">
                <div className="compare-tbl-th coin-tbl">Total Supply</div>
                <div className="compare-tbl-th coin-th">
                  {(coinDetails?.supply?.total !== null) | undefined
                    ? millify(coinDetails?.supply?.total)
                    : ""}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateTwo.available === true
                    ? millify(singleCoinStateTwo?.data?.data?.coin?.supply?.total)
                    : ""}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateThree.available === true
                    ? millify(singleCoinStateThree?.data?.data?.coin?.supply?.total)
                    : ""}
                </div>
              </div>
              <div className="tr-row">
                <div className="compare-tbl-th coin-tbl">
                  Circulating Supply
                </div>
                <div className="compare-tbl-th coin-th">
                  {millify(coinDetails?.supply?.circulating)}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateTwo.available === true
                    ? millify(
                        singleCoinStateTwo?.data?.data?.coin?.supply?.circulating
                      )
                    : ""}
                </div>
                <div className="compare-tbl-th coin-th">
                  {singleCoinStateThree.available === true
                    ? millify(
                        singleCoinStateThree?.data?.data?.coin?.supply?.circulating
                      )
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CoinCompare;
