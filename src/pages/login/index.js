import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LoginWrapper } from "./style";
import { Layout } from "antd";

import { vipLogin, thirdLogin, adminLogin } from "../../services/login";


const {Option} = Select;


export default function Login() {

  const { Header, Footer, Sider, Content } = Layout;

  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case 'vip':
        console.log("vip")
        return;
      case 'third':
        console.log("third")
        return;
      case 'admin':
        console.log("admin")
        return;
      default:
        console.log("object")
    }
  };

  const submit = () => {
    // console.log(form.getFieldInstance("username"))
    // form.setFieldsValue({username: "hhh"})
    console.log(form.getFieldsValue(["occupationType","username","password"]))
    const {occupationType,username,password} = form.getFieldsValue(["occupationType","username","password"])
    // console.log(username)
    const loginInfo = {
      loginName: username,
      loginPassword: password
    }
    switch (occupationType) {
      case 'vip':
        console.log("vip")
        vipLogin(loginInfo).then(res=>{
          console.log(res)
        })
        return;
      case 'third':
        console.log("third")
        return;
      case 'admin':
        console.log("admin")
        return;
      default:
        console.log("null")
    }
  }

  return (
    <LoginWrapper>
      <Layout>
        <Header>Header</Header>
        <Content>
            <div className="login-form-root">
              <div>
                <Form
                  form={form}
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                >
                  <Form.Item name="occupationType" >
                    <Select
                      placeholder="Select a option and change input text above"
                      onChange={onGenderChange}
                      allowClear
                    >
                      <Option value="vip">会员</Option>
                      <Option value="third">第三方公司</Option>
                      <Option value="admin">管理员</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    {/* <a className="login-form-forgot" href="">
                      Forgot password
                    </a> */}
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      onClick={submit}
                    >
                      Log in
                    </Button>
                    Or <a href="">register now!</a>
                  </Form.Item>
                </Form>
              </div>
            </div>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </LoginWrapper>
  )
}

