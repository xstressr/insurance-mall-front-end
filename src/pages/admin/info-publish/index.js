import React from 'react'
import {
  Form,
  Select,
  InputNumber,
  Input,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
  message
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { insertGoods } from '../../../services/goods';
import { insert, queryAll } from '../../../services/topline';

const { Option } = Select;
const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

export default function InfoPublish() {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  function submit() {
    const topname = form.getFieldValue("topname");
    const topcontent = form.getFieldValue("topcontent");
    const topline = {
      "createUser": localStorage.getItem("seller"),
      "messageTitle": topname,
      "messageContent": topcontent,
    }
    insert(topline).then(res=>{
      console.log(res);
      if(res.resultCode) {
        message.success("添加成功")
      } else {
        message.error("未添加成功")
      }
    })
    // queryAll().then(res=>console.log(res))
  }
  return (
    <div>
      <Form
      name="validate_other"
      form={form}
      {...formItemLayout}
    >
     
      
      <Form.Item label="Topline Name"
      name="topname"
      hasFeedback 
      rules={[
        {
          required: true,
          message: 'Please input your good name!',
          // pattern: new RegExp(/^[1-9]\d*$/, "g"),
        },
      ]}>
          <Input placeholder="input placeholder" allowClear/>
      </Form.Item>

      <Form.Item label="Topline content"
      name="topcontent"
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Please input your good content!',
        },
      ]}>
        <TextArea showCount maxLength={500} autoSize={{ minRows: 10, maxRows: 15 }} allowClear />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={submit} style={{marginRight: "8px"}}>
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}
