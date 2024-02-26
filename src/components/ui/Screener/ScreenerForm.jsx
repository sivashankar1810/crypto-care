import { Card, Row, Col, Input } from "antd";
import { useEffect, useState } from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GetAllFilters } from "../../redux/actions/SearchFilterAction";
import {
  CaretRightOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Screener from "./Screener";

const ScreenerForm = () => {
  const [category, setCategory] = useState();
  const [operator, setOperator] = useState();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const [requestArray, setRequestArray] = useState([]);
  const [click, setClick] = useState(false);

  const searchResultState = useSelector((state) => state.searchResult);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    // console.log("useeffe");
  }, [requestArray, click]);

  const addFilterData = () => {
    console.log("clicked");
    let ogData = {
      name: category,
      operator: operator,
      value: value,
    };

    setRequestArray([...requestArray, ogData]);
    setClick(true);
  };

  const getFilterData = () => {
    let requestBody = {
      queries: requestArray,
    };
    Promise.all([dispatch(GetAllFilters(requestBody))]);
    setClick(false);
  };

  return (
    <div className="screenerWrappper">
      <div className="screenerForm-top">Create a Search Query</div>
      <div className="screenerWrapper-form">
        <Col xs={24} sm={24} lg={24}>
          <Card className="screenerForm-card">
            <div className="screenerForm-cardLayout">
              {/* <div className="screenerForm-top">Create a Search Query</div> */}
              <div className="screenerForm-middle">
                {/* <div className="screenerForm-query">Query</div> */}
                <div className="screenerForm-userInput">
                  <div className="screenerForm-input">
                    <Select
                      showSearch
                      placeholder="Search a Category"
                      optionFilterProp="children"
                      onChange={(value) => setCategory(value)}
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "marketCap",
                          label: "Market Capitalization",
                        },
                        {
                          value: "price",
                          label: "Price",
                        },
                        {
                          value: "change",
                          label: "Exchange Rate",
                        },
                        {
                          value: "rank",
                          label: "Rank",
                        },
                      ]}
                    />

                    <Select
                      showSearch
                      placeholder="Search to Select"
                      optionFilterProp="children"
                      onChange={(value) => setOperator(value)}
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: ">",
                          label: ">",
                        },
                        {
                          value: "<",
                          label: "<",
                        },
                        {
                          value: "==",
                          label: "==",
                        },
                        {
                          value: ">=",
                          label: ">=",
                        },
                        {
                          value: "<=",
                          label: "<=",
                        },
                      ]}
                    />

                    <Input
                      placeholder="Enter a Value"
                      type={"number"}
                      value={value}
                      onChange={onChange}
                    />
                  </div>

                  <div className="screenerForm-example">
                    <div className="screenerForm-exampleInput">
                      <div className="screenerForm-content">
                        {click && requestArray && requestArray.length >= 1 ? (
                          <>
                            <div className="screenerForm-market">
                              Yours filters
                            </div>
                            <div className="screenerForm-desc">
                              <div>
                                {requestArray && requestArray.length >= 1 && (
                                  <>
                                    {" "}
                                    {requestArray[0].name}{" "}
                                    <span>{requestArray[0].operator}</span>{" "}
                                    {requestArray[0].value} AND{" "}
                                  </>
                                )}
                              </div>
                              <div>
                                {requestArray && requestArray.length >= 2 && (
                                  <>
                                    {" "}
                                    {requestArray[1].name}{" "}
                                    <span>{requestArray[1].operator}</span>{" "}
                                    {requestArray[1].value} AND{" "}
                                  </>
                                )}
                              </div>
                              <div>
                                {requestArray && requestArray.length >= 3 && (
                                  <>
                                    {" "}
                                    {requestArray[2].name}{" "}
                                    <span>{requestArray[2].operator}</span>{" "}
                                    {requestArray[2].value}{" "}
                                  </>
                                )}
                              </div>
                            </div>
                            {/* <div className="screenerForm-value">
                              Value in: Rs.Cr.
                            </div> */}
                          </>
                        ) : (
                          <>
                            <div className="screenerForm-market">
                              Custom query
                            </div>
                            <div className="screenerForm-desc">
                              <div>
                                Market capitalization <span>{"<"}</span> 500 AND
                              </div>
                              <div>
                                Price to earning <span>{"<"}</span> 15 AND
                              </div>
                              <div>
                                Return on capital employed <span>{"<"}</span>{" "}
                                22%
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="screenerForm-bottom">
                <button
                  onClick={() => {
                    addFilterData();
                  }}
                  className="screenerForm-button"
                >
                  <span className="screenerForm-plusIcon">
                    <PlusCircleOutlined />
                  </span>
                  ADD FILTER
                </button>

                <button
                  onClick={() => {
                    getFilterData();
                  }}
                  className="screenerForm-button"
                >
                  <CaretRightOutlined />
                  RUN THIS QUERY
                </button>
              </div>
            </div>
          </Card>
        </Col>
      </div>
      <div className="screenerWrapper-table">
        <Screener filterData={searchResultState.data} />
      </div>
    </div>
  );
};

export default ScreenerForm;
