import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, Select, Alert, message, Menu } from "antd";
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

  useEffect(() => {
    if(localStorage.getItem("vip")) {
      history.push("/vip")
    }
  }, [])

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
            message.success("登陆成功")
            localStorage.setItem("vip", username)
            setTimeout(()=>{
              history.push("/vip")
            }, 1500)
          } else {
            message.error("登陆失败")
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
            message.success("登陆成功")
            localStorage.setItem("seller", username)
            setTimeout(()=>{
              history.push("/seller")
            }, 1500)
          } else {
            message.error("登陆失败")
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
            message.success("登陆成功")
            localStorage.setItem("admin", username)
            setTimeout(()=>{
              history.push("/admin")
            }, 1500)
          } else {
            message.error("登陆失败")

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
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["shop"]}>
            <Menu.Item key="shop">{"JOJO商城"}</Menu.Item>
            <Menu.Item key="exit">
            <NavLink to={"/"} >退出</NavLink>
            </Menu.Item>
            
          </Menu></Header>
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
                      placeholder="请选择一个角色"
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
                        message: "请输入您的用户名!",
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
                        message: "请输入你的密码!",
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
                      <Checkbox>记住我</Checkbox>
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
                      登陆
                    </Button>
                    Or 
                    <NavLink to={"/register"} style={{marginLeft: "10px"}}>注册!</NavLink>
                    
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

