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
    const money = form.getFieldValue("claimMoney");
    let claimInfo = {
      guaranteeNo: no,
      eventTime: time,
      locationAccident: location,
      accidentDesc: desc,
      submitter: localStorage.getItem("vip"),
      money: money
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
      <h3>保单理赔</h3>
      <div style={{ width: "500px", margin: "0px auto" }}>
        <Form {...formItemLayout} form={form} name="updatePassword">
          <Form.Item
            name="no"
            label="保单号"
            rules={[
              {
                required: true,
                message: "请输入您的保单号!",
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
                message: "请输入报案时间!",
              },
            ]}
            hasFeedback
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
          label="报案金额"
          name="claimMoney"
          hasFeedback
          rules={[{ required: true }]}
        >
          <Input prefix="￥" suffix="RMB" />
          {/* <InputNumber addonAfter={<Option value="CNY">¥</Option>} /> */}
        </Form.Item>
          <Form.Item
            name="location"
            label="报案地点"
            rules={[
              {
                required: true,
                message: "请输入报案地点!",
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
                message: "请描述下事故!",
              },
            ]}
            hasFeedback
          >
            <TextArea />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" onClick={submitClaim}>
              报案
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
