import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import btc from "../../widgets/MockData/btc.json";
import TradeViewChart from 'react-crypto-chart';
import React, { useEffect, useState } from "react";


const { Title } = Typography;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName,symbol }) => {
  const coinSymbol={
    BTC:"BTCUSDT",
    ETH:"ETHUSDT",
    USDT:"ADAUSDT",
    USDC:"LINKUSDT",
    BNB:"BNBUSDT",
    BUSD:"BUSDUSDT",
    XRP:"XRPUSDT",
    DOGE:"DOGEUSDT",
    ADA:"ADAUSDT",
    LINK:"LINKUSDT"
  }
  const coinPrice = [];
  const coinTimestamp = [];

  const coinPrice2 = [];
  const coinTimestamp2 = ["11/25/2022","11/24/2022","11/23/2022","11/22/2022","11/21/2022","11/20/2022","11/19/2022"];

  // for (let i = 0; i < btc?.data?.history?.length; i += 1) {
  //   coinPrice2.push(btc?.data?.history[i].price);
  // }

  // for (let i = 0; i < btc?.data?.history?.length; i += 1) {
  //   coinTimestamp2.push(
  //     new Date(btc?.data?.history[i].timestamp).toLocaleDateString()
  //   );
  // }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        // backgroundColor: "#0071bd",
        // borderColor: "#0071bd",
        backgroundColor: "#5c47b0",
        borderColor: "#5c47b0",
      },

      // {
      //   label: "Price In USD",
      //   data: coinPrice2,
      //   fill: false,
      //   // backgroundColor: "#0071bd",
      //   // borderColor: "#0071bd",
      //   backgroundColor: "#5c47b0",
      //   borderColor: "#5c47b0",
      // },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      // y1: {
      //   // type: 'linear' as const,
      //   // display: true,
      //   // position: 'right' as const,
      //   grid: {
      //     drawOnChartArea: false,
      //   },
      // },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <div  className="chart-title">
          {coinName} Price Chart{" "}
        </div>
        <Col className="price-container">
          <div className="price-change">
            Change: {coinHistory?.data?.change}%
          </div>
          <div className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </div>
        </Col>
      </Row>
      <Line  options={options} data={data} />
      {symbol && symbol!==undefined?

      <TradeViewChart
containerStyle={{

  minHeight: "200px",

  minWidth: "200px",

  marginBottom: "30px",

}}
pair={symbol}
//pair="BTCUSDT"

/>:<></>}
    </>
  );
};

export default LineChart;
