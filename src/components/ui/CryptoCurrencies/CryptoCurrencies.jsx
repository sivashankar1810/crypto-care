import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCoins } from "../../redux/actions/CoinAction";
import { Collapse } from 'antd';
const { Panel } = Collapse;

const CryptoCurrencies = ({ coinUuid,setCoinUuid,simplified, setRegion, region }) => {
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
              if (index < 10) {
                return (
  //                 <Collapse
  //   bordered={false}
  //   destroyInactivePanel={true}
  //    defaultActiveKey={['1']}
    
  //   className="site-collapse-custom-collapse"
  // >
  //    <Panel showArrow={false} header={
      <Col
      span={24}
        className="crypto-card "
        // key={currency.uuid}
      >
        {/* <Link to={`/crypto/${currency.uuid}`}> */}
          <div className={`coin-watch-card ${index+1===1?"active-dev":""}`} id={index+1}
          onClick={()=>{
            setCoinUuid(currency?.uuid);
            console.log(coinUuid);
            console.log(currency.symbol)
            let borderColor=document.getElementsByClassName("coin-watch-card");
           for (var i = 0; i < borderColor.length; i++) {
            borderColor[i].addEventListener("click", function() {
            var currentMaiDiv = document.getElementsByClassName("active-dev");
           // var currentCoinDiv = document.getElementsByClassName("coin-market-main");
            // if (currentMaiDIv.length > 0) { 
            //   currentMaiDIv[0].className = currentMaiDIv[0].className.replace(" active", "");
            // }
            currentMaiDiv[0].className = currentMaiDiv[0].className.replaceAll(" active-dev", "");
            // currentCoinDiv[i].setAttribute("hidden",true);
            // currentCoinDiv[i].removeAttribute("hidden");
            //className = currentCoinDiv[0].className.replaceAll(" coin-market-main", "");
            this.className += " active-dev";            
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
             <div className="coin-market-main">
              <div className="coin-market-main-price">Price<p style={{color:"black"}} className="cap-price-clr">{millify(currency.price)}</p></div>
              <div className="coin-market-main-price">Market Cap<p className="cap-price-clr">{millify(currency.marketCap)}</p></div>
             </div> 

            {/* <p>Price: {millify(currency.price)}</p>
            <p>Market Cap: {millify(currency.marketCap)}</p>
            <p>Daily Change: {millify(currency.change)}</p> */}
          </div>
        {/* </Link> */}
      </Col>
    //  } key={index+1} className="site-collapse-custom-panel crypto-col">
    //   <p>      
    //   <p>Market Cap: {millify(currency.marketCap)}</p>
    //         <p>Daily Change: {millify(currency.change)}</p>  
    //               </p>
    //               </Panel>
                
    //               </Collapse>
                );
              }
            })}
          </div>

   </>
    )}
    </>
  );
};

// {coinState && coinState.available && (
//   <>
//     {!simplified && (
//       <div className="search-crypto">
//         <Input
//           placeholder="Search Cryptocurrency"
//           onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
//         />
//       </div>
//     )}

//     <Row gutter={[32, 32]} className="crypto-card-container">
//       {cryptos?.map((currency, index) => {
//         if (index < count) {
//           return (
//             <Col
//               xs={24}
//               sm={12}
//               lg={6}
//               className="crypto-card"
//               key={currency.uuid}
//             >
//               <Link to={`/crypto/${currency.uuid}`}>
//                 <Card
//                   title={`${currency.rank}. ${currency.name}`}
//                   extra={
//                     <img
//                       className="crypto-image"
//                       src={currency.iconUrl}
//                     />
//                   }
//                   hoverable
//                 >
//                   <p>Price: {millify(currency.price)}</p>
//                   <p>Market Cap: {millify(currency.marketCap)}</p>
//                   <p>Daily Change: {millify(currency.change)}</p>
//                 </Card>
//               </Link>
//             </Col>
//           );
//         }
//       })}
//     </Row>
//   </>
// )}

export default CryptoCurrencies;
