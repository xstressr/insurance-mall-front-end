import React, {useState, useEffect} from "react";
import {
  Form,
  Input,
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

import { vipUpdatePass } from "../../../../services/login";

export default function UpdatePassword() {
  const [form] = Form.useForm();

  const [loginName, setLoginName] = useState("");

  useEffect(() => {
    setLoginName(localStorage.getItem("vip"))
    // console.log(loginName)
  },[loginName])

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
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

  function updatePass() {
    // console.log("tes")
    let password =  form.getFieldValue("password");
    let updateInfo = {
      loginName: loginName,
      loginPassword: password
    }
    vipUpdatePass(updateInfo)
    .then(res=>{
      console.log(res)
      if(res.resultCode)
      {
        message.success("成功更新密码")
      }
    }).catch(err=>{

    })
  }
  

  return (
    <div>
      <h3>修改密码</h3>
      <div style={{width: "500px", margin: "0px auto"}}>
        <Form {...formItemLayout} form={form} name="updatePassword" >
          <Form.Item
            name="password"
            label="新密码"
            rules={[
              {
                required: true,
                message: "请输入新密码!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="确认新密码"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "请再次输入新密码!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "两次密码不匹配，请重新输入!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" onClick={updatePass}>
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
