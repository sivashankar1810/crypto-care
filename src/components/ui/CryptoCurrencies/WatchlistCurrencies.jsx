import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCoins } from "../../redux/actions/CoinAction";
import { Collapse } from 'antd';
const { Panel } = Collapse;

const WatchlistCurrencies = ({ coinUuid,setCoinUuid,simplified, setRegion, region }) => {
  const count = simplified ? 8 : 50;

  const dispatch = useDispatch();
  const coinState = useSelector((state) => state.coins);

  useEffect(() => {
    Promise.all([dispatch(GetAllCoins())]);
  }, [coinUuid,setCoinUuid]);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(coinState?.data?.data?.coins);

    const filteredData = coinState?.data?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [coinState, searchTerm]);
  let activeCoin=()=>{
    
  }

  return (
    <>
     {coinState && coinState.available && (
   <>
    <div  className="crypto-card-container crypto-row">
             {cryptos?.map((currency, index) => {
              if (index < 5) {
                return (
      <Col
      span={24}
        className="crypto-card "
        // key={currency.uuid}
      >
       
          <div className={`coin-watch-card ${index+1===1?"active-dev-watch":""}`} id={index+1}
          onClick={()=>{
            setCoinUuid(currency?.uuid);
            console.log(coinUuid);
            console.log(currency.symbol)
            let borderColor=document.getElementsByClassName("coin-watch-card");
           for (var i = 0; i < borderColor.length; i++) {
            borderColor[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active-dev-watch");
            // if (current.length > 0) { 
            //   current[0].className = current[0].className.replace(" active", "");
            // }
            current[0].className = current[0].className.replace(" active-dev-watch", "");
            this.className += " active-dev-watch";            
            });
          }
         
          }}
            
          >
             <div className="coin-view-div">
            <div className="coin-details">
            {/* {`${currency.rank}`} */}
            <img
                className="crypto-image"
                src={currency.iconUrl}
              />
              <div className="coin-name">
              {`${currency.name}`}
              <span className="coin-symbol">{`${currency.symbol}`}</span>
              </div>
              </div>
             <div className={(currency.change.includes("-")?"live-price-down":"live-price-up")}>{currency.change.includes("-")?currency.change:`+${currency.change}`}%</div>
             </div>
            {/* <div className="coin-details">
            <img
                className="crypto-image"
                src={currency.iconUrl}
              />
              <div className="coin-name">
              {`${currency.name}`}
              <span className="coin-symbol">{`${currency.symbol}`}</span>
              </div>
              </div>
              <div className={(currency.change.includes("-")?"live-price-down":"live-price-up")}>{currency.change}%</div> */}
          </div>
      </Col>
                );
              }
            })}
          </div>

   </>
    )}
    </>
  );
};

export default WatchlistCurrencies;
