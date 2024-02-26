import "./styles/App.scss";
import "./components/ui/Home/Home.module.scss";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./components/ui/Dashboard/Dashboard";
import Header from "./components/ui/Header/Header";
import { Typography, Space, Layout } from "antd";
import Exchanges from "./components/ui/Exchanges/Exchanges";
import News from "./components/ui/News/News";
import CryptoCurrencies from "./components/ui/CryptoCurrencies/CryptoCurrencies";
import CryptoDetails from "./components/ui/CryptoDetails/CryptoDetails";
import Demo from "./components/ui/Demo/Demo";
import Plans from "./components/ui/Subscription/Plans";
import Login from "./components/ui/Login/Login";
import { useState } from "react";
import Signup from "./components/ui/Signup/Signup";
import Screener from "./components/ui/Screener/Screener";
import ScreenerWrapper from "./components/ui/Screener/ScreenerWrapper";
import ScreenerForm from "./components/ui/Screener/ScreenerForm";
import CoinCompare from "./components/ui/Compare/CoinCompare";
const App = () => {
  const useStyle = makeStyles(() => ({
    App: {
      // backgroundColor: "#14161a",
      // backgroundColor: "white",
      // color: "black",
      minHeight: "100vh",
    },
  }));

  const [region, setRegion] = useState("yhjMzLPhuIDl");

  const classes = useStyle();
  return (
    <div className={classes.App}>
      <Header />
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route
                path="/dashboard"
                element={<Dashboard setRegion={setRegion} region={region} />}
              />
              <Route
                path="/"
                element={<Dashboard setRegion={setRegion} region={region} />}
              />
              <Route
                path="/cryptocurrencies"
                element={
                  <CryptoCurrencies setRegion={setRegion} region={region} />
                }
              />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route
                path="/crypto"
                element={
                  <CryptoDetails setRegion={setRegion} region={region} />
                }
              />
              <Route
                path="/news"
                element={<News setRegion={setRegion} region={region} />}
              />
              <Route path="/demo" element={<Demo />} />
              <Route path="/compareCoin" element={<CoinCompare />} />
              <Route path="/plans" element={<Plans />} />
              {/* <Route path="/" element={<Login />} /> */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/screener" element={<ScreenerForm />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <span>
            Copyright © 2023 <span className="">All rights reserved</span>
          </span>
          {/* <Typography.Title level={5} style={{ color: "white" }}>
            Copyright © 2023 <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Currencies</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/news">News</Link>
          </Space> */}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
