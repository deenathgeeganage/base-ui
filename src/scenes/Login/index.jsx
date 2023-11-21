import { Form, Input, Checkbox, Button, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import axios from "../../components/Axios";
import { withConfigContext } from "../../components/context/ConfigContext";
import useAuth from "../../components/hooks/useAuth";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const form = useForm();
  const navigate = useNavigate();
  const [credentialError, setCredentialError] = useState(false);
  const onFinish = (values) => {
    axios
      .post("http://localhost:8080/api/v1/auth/authenticate", values)
      .then((res) => {
        // console.info(res.data, res.status);
        auth.setAuth(res.data);
        let redirectUrl = "/";
        const searchParams = new URLSearchParams(
          window.location.search.replace(window.location.origin, "")
        );
        if (searchParams.has("redirect")) {
          redirectUrl = searchParams.get("redirect");
        }
        navigate(redirectUrl);
      })
      .catch((err) => {
        message.error("Invalid Credentials !");
        console.log(form);
        setCredentialError(true);
      });
    // console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className={styles.background} />
      <div className={styles.login_form}>
        <div className={styles.heading}>Form</div>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            validateStatus={credentialError ? "error" : ""}
            rules={[
              // {
              //   type: "email",
              //   message: "The input is not valid E-mail!",
              // },
              { required: true, message: "Please input your Username!" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            validateStatus={credentialError ? "error" : ""}
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default withConfigContext(Login);
