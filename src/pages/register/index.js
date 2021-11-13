import React, { Component, useState } from "react";

import {
  Form,
  Input,
  Radio,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  message,
} from "antd";
import { Layout, Menu, Breadcrumb } from "antd";
import { useHistory } from "react-router";

import { RegisterWrapper } from "./style";
import { JYFooter } from "../../components/footer";
import { vipRegister, thirdRegister , adminRegister } from "../../services/register";

const { Option } = Select;
const { Header, Content, Footer } = Layout;

export default function Register() {
  const [form] = Form.useForm();
  let history = useHistory();
  
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  // const suffixSelector = (
  //   <Form.Item name="suffix" noStyle>
  //     <Select style={{ width: 70 }}>
  //       <Option value="USD">$</Option>
  //       <Option value="CNY">¥</Option>
  //     </Select>
  //   </Form.Item>
  // );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const [dotPosition, setDotPosition] = useState('top');

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const register = () => {
    console.log(form.getFieldValue("workType"));
    let workType = form.getFieldValue("workType");
    let loginName = form.getFieldValue("loginName");
    let loginPassword = form.getFieldValue("loginPassword");
    let nickName = form.getFieldValue("nickName");
    let loginMobile = form.getFieldValue("loginMobile");
    // let intro;
    //TODO:intro保留字段，以后在写吧
    // if(form.getFieldValue("intro")) {
    //   var intro = form.getFieldValue("intro");
    // }
    let registerInfo = {
      loginName: loginName,
      loginPassword: loginPassword,
      nickName: nickName,
      loginMobile: loginMobile
    }

    switch (workType) {
      case "vip": {
        vipRegister(registerInfo)
        .then(res => {
          console.log(res)
          if(res.resultCode) {
            message.success("Register success! The page will return");
            setTimeout(()=>{
              history.push("/login")
            }, 1500)
          }
        }).catch(err => {

        })

        break;
      }
      case "third": {
        thirdRegister(registerInfo)
        .then(res => {
          console.log(res)
          if(res.resultCode) {
            message.success("Register success! The page will return");
            setTimeout(()=>{
              history.push("/login")
            }, 1500)
          }
        }).catch(err => {

        })
        break;

      }

      //TODO:bug，手机号没有保存
      case "admin": {
        adminRegister(registerInfo)
        .then(res => {
          console.log(res)
          if(res.resultCode) {
            message.success("Register success! The page will return");
            setTimeout(()=>{
              history.push("/login")
            }, 1500)
          }
        }).catch(err => {

        })
        break;
      }
      default: 
    }
      
  }

  return (
    <RegisterWrapper>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: "50px 50px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
          <div className="site-layout-content register-content">
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                prefix: "86",
              }}
              scrollToFirstError
            >
              <Form.Item
                name="workType"
                label="类型">
                <Radio.Group onChange={handlePositionChange} value={dotPosition} style={{ marginBottom: 8 }}>
                  <Radio.Button value="vip">会员</Radio.Button>
                  <Radio.Button value="third">第三方公司</Radio.Button>
                  <Radio.Button value="admin">管理员</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="loginName"
                label="Login Name"
                tooltip="What name do you want to login website?"
                rules={[
                  {
                    required: true,
                    message: "Please input your login name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="loginPassword"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["loginPassword"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("loginPassword") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="nickName"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="loginMobile"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="intro"
                label="Intro"
                rules={[
                  {
                    message: "Please input Intro",
                  },
                ]}
              >
                <Input.TextArea showCount maxLength={100} />
              </Form.Item>

              {/* <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item> */}

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Should accept agreement")),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" onClick={register}>
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <JYFooter />
        
      </Layout>
    </RegisterWrapper>
  );
}
