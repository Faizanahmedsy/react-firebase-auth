import { Button, Form, Input, message } from "antd";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [error, setError] = useState(null);

  const [form] = Form.useForm();

  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);

    console.log("values.email", values.email);
    console.log("values.password", values.password);

    try {
      let resp = await signUp(values.email, values.password);
      console.log("resp", resp);
      message.success("Sign up successful");
      navigate("/home");
    } catch (error) {
      console.log(error);

      setError(error.message);

      message.error(error.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {" "}
      <Form layout="vertical" onFinish={handleSubmit} form={form}>
        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input placeholder="Enter password" htmlType="password" />
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            style={{
              width: "100%",
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
