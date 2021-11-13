import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Select, Alert, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LoginWrapper } from "./style";
import { Layout } from "antd";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

import { vipLogin, thirdLogin, adminLogin } from "../../services/login";
import axios from "axios";
import { JYFooter } from "../../components/footer";


const {Option} = Select;


export default function Login() {

  const { Header, Footer, Sider, Content } = Layout;

  const [form] = Form.useForm();
  let history = useHistory();


  const submit = () => {
    // console.log(form.getFieldInstance("username"))
    // form.setFieldsValue({username: "hhh"})
    // console.log(form.getFieldsValue(["occupationType","username","password"]))
    const {occupationType,username,password} = form.getFieldsValue(["occupationType","username","password"])
    // console.log(username)
    const loginInfo = {
      loginName: username,
      loginPassword: password
    }
    switch (occupationType) {
      case 'vip':
        // console.log("vip")
        // axios.post("/apis/customer/login",loginInfo).then(res=> {console.log(res)})
        vipLogin(loginInfo)
        .then(res=>{
          // console.log(res)
          if(res.resultCode) {
            message.success("Login success")
            setTimeout(()=>{
              history.push("/vip")
            }, 1500)
          } else {
            message.error("Login failed")
          }
        }).catch(err => {
        })
        return;
      case 'third':
        // console.log("third")
        thirdLogin(loginInfo)
        .then(res=>{
          console.log(res)
          if(res.resultCode) {
            message.success("Login success")
            setTimeout(()=>{
              history.push("/seller")
            }, 1500)
          } else {
            message.error("Login failed")
          }
        }).catch(err => {
        })
        return;
      case 'admin':
        console.log("admin")
        adminLogin(loginInfo)
        .then(res=>{
          console.log(res)
          if(res.resultCode) {
            message.success("Login success")
            setTimeout(()=>{
              history.push("/admin")
            }, 1500)
          } else {
            message.error("Login failed")

          }
        }).catch(err => {
        })
        return;
      default:
        console.log("null")
    }
  }

  return (
    <LoginWrapper>
      <Layout>
        <Header>Header</Header>
        <Content className="login-content">
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
                      style={{marginRight: "10px"}}
                    >
                      Log in
                    </Button>
                    Or 
                    <NavLink to={"/register"} style={{marginLeft: "10px"}}>register now!</NavLink>
                    
                  </Form.Item>
                </Form>
              </div>
            </div>
        </Content>
        <JYFooter/>
        {/* <Footer style={{ textAlign: "center" }}>
          JOJO保险商城 ©2018 Created by Ant UED
        </Footer> */}
      </Layout>
    </LoginWrapper>
  )
}

