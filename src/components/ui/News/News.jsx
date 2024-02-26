import React, { useEffect, useState } from "react";
import { useGetCryptoNewsQuery } from "../../api/CryptoNewsApi";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptosQuery } from "../../api/CryptoApi";
import { GetTredingNews } from "../../redux/actions/NewsAction";
import { useDispatch, useSelector } from "react-redux";
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  // const { data } = useGetCryptosQuery(100);
  const coinState = useSelector((state) => state.coins);
  const newsState = useSelector((state) => state.news);
  const count = simplified ? 3 : 50;
  // console.log("newsstate", newsState);

  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([dispatch(GetTredingNews(newsCategory, 10))]);
  }, [newsCategory]);
  // GetTredingNews

  // if (!cryptoNews) return "Loader";
  // console.log("crypto newssssss", cryptoNews.data);
  return (
    <>
      {coinState && coinState.available && newsState && newsState.available && (
        <>
          <Row gutter={[24, 24]}>
            {!simplified && (
              <Col span={24} className="news-search">
                <Select
                  showSearch
                  className="select-news"
                  placeholder="Search Crypto News"
                  optionFilterProp="children"
                  onChange={(value) => setNewsCategory(value)}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="Cryptocurency">Cryptocurrency</Option>
                  {/* {coinState?.data?.data?.coins?.map((currency) => (
                <Option value={currency.name}>{currency.name}</Option>
              ))} */}
                </Select>
              </Col>
            )}

            {newsState.data.data.map((news, i) => {
              if (i < count) {
                return (
                  <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                      <a href={news.news_url} target="_blank" rel="noreferrer">
                        <div className="news-image-container">
                          <Title className="news-title" level={4}>
                            {news.name}
                          </Title>
                          <img
                            src={news?.image?.thumbnail?.imageUrl || demoImage}
                            alt=""
                          />
                        </div>
                        <p>
                          {news.description.length > 100
                            ? `${news.description.substring(0, 100)}...`
                            : news.description}
                        </p>
                        <div className="provider-container">
                          <div>
                            <Avatar
                              src={
                                news.provider[0]?.image?.thumbnail
                                  ?.contentUrl || demoImage
                              }
                              alt=""
                            />
                            <Text className="provider-name">
                              {news.provider[0]?.name}
                            </Text>
                          </div>
                          <Text>
                            {moment(news.datePublished).startOf("ss").fromNow()}
                          </Text>
                        </div>
                      </a>
                    </Card>
                  </Col>
                );
              }
            })}
          </Row>
        </>
      )}
    </>
  );
};

export default News;
