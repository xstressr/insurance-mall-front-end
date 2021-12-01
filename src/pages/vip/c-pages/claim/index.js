import React, { useState, useEffect } from "react";
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
  DatePicker,
} from "antd";
import { insertClaim } from "../../../../services/claim";

const { TextArea } = Input;

export default function Claim() {
  const [form] = Form.useForm();

  const [loginName, setLoginName] = useState("");

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

  useEffect(() => {
    setLoginName(localStorage.getItem("vip"));
    console.log(loginName);
  });

  function submitClaim() {
    console.log("test");
    const no = form.getFieldValue("no");
    const time = form.getFieldValue("time");
    const location = form.getFieldValue("location");
    const desc = form.getFieldValue("desc");
    let claimInfo = {
      guaranteeNo: no,
      eventTime: time,
      locationAccident: location,
      accidentDesc: desc,
      submitter: localStorage.getItem("vip"),
    };
    insertClaim(claimInfo).then((res) => {
      // console.log(res);
      if(res.resultCode)
      {
        message.success("报案成功")
      }
    });
  }

  return (
    <div>
      <h3>Policy claims</h3>
      <div style={{ width: "500px", margin: "0px auto" }}>
        <Form {...formItemLayout} form={form} name="updatePassword">
          <Form.Item
            name="no"
            label="保单号"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="time"
            label="报案时间"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="location"
            label="报案地点"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="desc"
            label="事故描述"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <TextArea />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" onClick={submitClaim}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
