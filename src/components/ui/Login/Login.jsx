import { Col, Row, Typography, Select } from "antd";
import { Form, Input, Checkbox, Button } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../user/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { authenticate, userInfo, setUserInfo } = useContext(UserContext);

  const onFinish = (values) => {
    authenticate(values.username, values.password)
      .then((data) => {
        localStorage.setItem("REACT_TOKEN_AUTH", JSON.stringify(data.token));
        navigate("/dashboard", { state: data.data });
        // if (data.data.subscribe_flag === true) {
        //   navigate("/Dashboard");
        //   localStorage.setItem("REACT_TOKEN_AUTH", JSON.stringify(data.token));
        // } else {
        //   navigate("/Plans");
        // }
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
        <div className="illustration-wrapper">
          <img
            // src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            // src="https://yt3.ggpht.com/a/AATXAJxBLWl2bSXKTrv6ju5ILpAy9MbXZiNh87OE9rSg=s900-c-k-c0xffffffff-no-rj-mo"
            src="https://digitaledge.org/wp-content/uploads/2018/06/Crypto.jpg"
            alt="Login"
          />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
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
              LOGIN
            </Button>
          </Form.Item>
          <div>
            <span>Don't have an account ? </span>
            <span>
              <a
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Create One
              </a>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
