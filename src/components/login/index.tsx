import { LockTwoTone, UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { rulePassword, ruleUsername } from "./constant/constants";
import { ValueLogin } from "../../models";
const Login = () => {
  const navi = useNavigate();
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFinish = async (value: ValueLogin) => {
    navi("/");
  };

  return (
    <Row className="container__layout layout" justify="center" align="middle">
      <Col sm={0} xl={12}>
        <div className="layout__left"></div>
      </Col>
      <Col xl={12} sm={24} className="col-right">
        <div className="layout__main">
          <h4 className="layout__main--title">Đăng nhập</h4>

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
              username: "admin",
              password: "123456",
            }}
            onFinish={onFinish}
          >
            <Form.Item
              wrapperCol={{
                span: 24,
              }}
              name="username"
              rules={ruleUsername}
              hasFeedback
            >
              <Input prefix={<UserOutlined style={{ color: "#1890ff" }} />} />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                span: 24,
              }}
              name="password"
              rules={rulePassword}
              hasFeedback
            >
              <Input.Password prefix={<LockTwoTone />} />
            </Form.Item>

            <div className="remember-forgot">
              <Checkbox>Ghi nhớ đăng nhập</Checkbox>
              <nav className="forgot-password" style={{ color: "#1890ff" }}>
                <a>Quên mật khẩu</a>
              </nav>
            </div>

            <Form.Item
              wrapperCol={{
                span: 24,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};
export default Login;
