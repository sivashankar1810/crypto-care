import { Col, Row, Typography, Select } from "antd";
import { Form, Input, Checkbox, Button } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../../user/UserAuth";
import { UserContext } from "../../user/UserContext";
// import { usePostUserManagementQuery } from "../../api/UserManagementApi";

const Signup = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    createAccount(
      values.username,
      values.email,
      values.password,
      values.confirm_password,
      values.mobile_number
    )
      .then((data) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper"></div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Create an account</p>
          <p>
            One account for everything,including for premium plans{" "}
            <span>
              <a>Learn more</a>
            </span>
          </p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email id!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirm_password"
            rules={[
              {
                required: true,
                message: "Please input your confirm password!",
              },
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item
            name="mobile_number"
            rules={[
              { required: true, message: "Please input your mobile number!" },
            ]}
          >
            <Input placeholder="Mobile Number" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="login-checkbox">Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              CREATE ACCOUNT
            </Button>
          </Form.Item>

          <div>
            By clicking create account, you agree to our{" "}
            <span>
              <a> Terms and conditions</a>{" "}
            </span>
            {""}and acknowledge our{" "}
            <span>
              <a>Global Privacy Statement</a>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
