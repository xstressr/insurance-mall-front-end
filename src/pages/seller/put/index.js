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
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

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



export default function Put() {
  return (
    <div>
      <Form
      name="validate_other"
      {...formItemLayout}
      
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
    >
      <Form.Item label="Plain Text">
        <span className="ant-form-text">China</span>
      </Form.Item>
      
      <Form.Item label="Good Name">
          <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item label="Good Introduce">
          <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Good content">
        <TextArea showCount maxLength={200}  />
      </Form.Item>

      <Form.Item label="Good Introduce">
        <Input prefix="￥" suffix="RMB" />
      </Form.Item>

      <Form.Item
        name="select"
        label="Select"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please select your goods category!',
          },
        ]}
      >
        <Select placeholder="Please select a category">
          <Option value="1">重疾险</Option>
          <Option value="2">医疗险</Option>
          <Option value="3">意外险</Option>
          {/* <Option value="4">财富险</Option> */}
          <Option value="5">旅游线</Option>
          {/* <Option value="6">定期寿险</Option> */}
          <Option value="7">责任险</Option>
          <Option value="8">家财险</Option>
          {/* <Option value="7">责任险</Option> */}

        </Select>
      </Form.Item>

      

      
      

      

      

      

  



      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}
