import React, { useCallback, useEffect, useState } from "react";
import { Typography, Select, Row, Col, Statistic } from "antd";
import { addSubscribe, getPlans, logout } from "../../user/UserAuth";
import { GetAllPlans } from "../../redux/actions/PlansAction";
import { useDispatch, useSelector } from "react-redux";

import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { CheckCircleFilled } from "@ant-design/icons";

const { Title } = Typography;

const Plans = (props) => {
  const dispatch = useDispatch();
  const PlansState = useSelector((state) => state.getPlans);

  const [error, isError] = useState(false);
  // const [isPopup, setPopup] = useState(false);
  // popup?setPopup(true):setPopup(false);
  let isPopup = props.popup ? true : false;
  console.log(isPopup);
  useEffect(() => {
    Promise.all([dispatch(GetAllPlans())]);
  }, []);

  // useEffect(() => {
  //   addSubscribe(selectedPlan);
  // }, [selectedPlan]);

  const [open, setOpen] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "Congratulations , You have successfully subscribed this plan"
  );
  const navigate = useNavigate();
  const handleOk = () => {
    Promise.all([logout(), setConfirmLoading(false), setOpen(false)]);
  };
  const handleErrorOk = () => {
    setErrorModal(false);
  };
  const choosePlan = (id) => {
    addSubscribe(id)
      .then((data) => {
        isError(false);
        setOpen(true);
        props.setOpen(false);
      })
      .catch((err) => {
        isError(true);
        setErrorModal(true);
      });
  };

  return (
    <>
      {PlansState && PlansState.available && (
        <>
          {!error ? (
            <Modal
              title="Congratulations , You have successfully subscribed this plan"
              open={open}
              closable={false}
              centered
              // onOk={handleOk}
              confirmLoading={confirmLoading}
              footer={[
                <Button type="primary" onClick={handleOk}>
                  Go to Login
                </Button>,
              ]}
            >
              {/* <p>{modalText}</p> */}
            </Modal>
          ) : (
            <Modal
              open={errorModal}
              centered
              title="Something went wrong!"
              onOk={handleErrorOk}
            >
              <p>Please try again later</p>
            </Modal>
          )}

          <div className="plans-heading">
            {" "}
            {/* {`${isPopup ? "" : "Subscription Options & Pricing"}`} */}
          </div>
          <div
            className={`${isPopup ? "price-main-div-popup" : "price-main-div"}`}
          >
            <div class="con-items ">
              <div
                class={`${
                  isPopup ? "item item-popup item1-popup" : "item item1"
                }`}
              >
                <div class="con-img">{/* <img src="1-3.png" alt=""> */}</div>
                <header>
                  <h3 className="plan-name">
                    {PlansState.data.data[0].plan_name}
                  </h3>
                  <p>
                    <b className="plan-cost-text">
                      ${PlansState.data.data[0].plan_cost_in_usd} / Month
                    </b>
                  </p>
                </header>
                <ul>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#5c47b0" }} />
                    </span>{" "}
                    You have access {""}
                    {PlansState.data.data[0].perDayCoins} coins/day
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#5c47b0" }} />
                    </span>{" "}
                    You are allowed to login {""}
                    {PlansState.data.data[0].loginPerDay} times in a day
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#5c47b0" }} />
                    </span>{" "}
                    Plan will be expired in {""}
                    {PlansState.data.data[0].plan_duration_in_days} days
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#5c47b0" }} />
                    </span>{" "}
                    You can choose this plan only upto {""}
                    {PlansState.data.data[0].lifeTimeLimit} times for an email
                    ID
                  </li>
                </ul>
                <button
                  onClick={() => {
                    choosePlan(PlansState.data.data[0].id);
                  }}
                >
                  Choose Plan
                </button>
              </div>
              <div
                class={`${
                  isPopup ? "item color item-popup" : "item color"
                } item2`}
              >
                <div class="con-img">{/* <img src="1-3.png" alt=""> */}</div>
                <span class={`${isPopup ? "badge-popup" : "badge"}`}>
                  Popular
                </span>
                <header>
                  <h3>{PlansState.data.data[1].plan_name}</h3>
                  <p>
                    <b className="plan-cost-text">
                      ${PlansState.data.data[1].plan_cost_in_usd} / Month
                    </b>
                  </p>
                </header>
                <ul>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#fff" }} />
                    </span>{" "}
                    You have access {""}
                    {PlansState.data.data[1].perDayCoins} coins/day
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#fff" }} />
                    </span>{" "}
                    You are allowed to login {""}
                    {PlansState.data.data[1].loginPerDay} times in a day
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#fff" }} />
                    </span>{" "}
                    Plan will be expired in {""}
                    {PlansState.data.data[1].plan_duration_in_days} days
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#fff" }} />
                    </span>{" "}
                    You can choose this plan only upto {""}
                    {PlansState.data.data[1].lifeTimeLimit} times for one email
                    ID
                  </li>
                </ul>
                <button
                  class="border"
                  onClick={() => {
                    choosePlan(PlansState.data.data[1].id);
                  }}
                >
                  Choose Plan
                </button>
              </div>

              <div
                class={`${
                  isPopup ? "item item-popup item3-popup" : "item item3"
                }`}
              >
                <div class="con-img"></div>
                <header>
                  <h3 className="plan-name">
                    {PlansState.data.data[2].plan_name}
                  </h3>
                  <p>
                    <b className="plan-cost-text">
                      ${PlansState.data.data[2].plan_cost_in_usd} / Month
                    </b>
                  </p>
                </header>
                <ul>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#5c47b0" }} />
                    </span>{" "}
                    You have access {""}
                    {PlansState.data.data[2].perDayCoins} times in a day
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#5c47b0" }} />
                    </span>{" "}
                    You are allowed to login {""}
                    Unlimited times per day
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#5c47b0" }} />
                    </span>{" "}
                    Plan will be expired in {""}
                    {PlansState.data.data[2].plan_duration_in_days} days
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#5c47b0" }} />
                    </span>{" "}
                    You can choose this plan any time with one email ID
                  </li>
                </ul>
                <button
                  onClick={() => {
                    choosePlan(PlansState.data.data[2].id);
                  }}
                >
                  Choose Plan
                </button>
              </div>

              <div
                class={`${
                  isPopup ? "item item-popup item3-popup" : "item item3"
                }`}
              >
                <div class="con-img"></div>
                <header>
                  <h3 className="plan-name">
                    {PlansState.data.data[3].plan_name}
                  </h3>
                  <p>
                    <b className="plan-cost-text">
                      ${PlansState.data.data[3].plan_cost_in_usd} / Month
                    </b>
                  </p>
                </header>
                <ul>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#5c47b0" }} />
                    </span>{" "}
                    You have access {""}
                    to Unlimited coins/day
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#5c47b0" }} />
                    </span>{" "}
                    You are allowed to login {""}
                    Unlimited times per day
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#5c47b0" }} />
                    </span>{" "}
                    Plan will be expired in {""}
                    {PlansState.data.data[3].plan_duration_in_days} days
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    <span className="plan-icon">
                      {" "}
                      <CheckCircleFilled style={{ color: "#5c47b0" }} />
                    </span>{" "}
                    You can choose this plan any time with one email ID
                  </li>
                </ul>
                <button
                  onClick={() => {
                    choosePlan(PlansState.data.data[3].id);
                  }}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Plans;
