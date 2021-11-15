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
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  function submit() {
    console.log(form.getFieldValue("upload"))
    let goodname = form.getFieldValue("goodname")
    let goodintroduce = form.getFieldValue("goodintroduce")
    let goodcontent = form.getFieldValue("goodcontent")
    let goodprice = form.getFieldValue("goodprice")
    let category = form.getFieldValue("category")
    console.log(form.getFieldValue("upload"))
    let imgUrl
    if(form.getFieldValue("upload")){
      imgUrl = form.getFieldValue("upload")[0].response.data
    }
    
    
    let goodInfo = {
      goodsName: goodname,
      goodsIntro: goodintroduce,
      goodsDetailContent: goodcontent,
      originalPrice: goodprice,
      sellingPrice: goodprice,
      goodsCategoryId: category,
      goodsCoverImg: imgUrl,
      createUser: localStorage.getItem("seller")
    }
    insertGoods(goodInfo).then(res=>{
      console.log(res)
      if(res.resultCode) {
        message.success("添加成功，等待管理员确认")
      } else {
        message.error("未添加成功")
      }
    })

  }

  return (
    <div>
      <Form
      name="validate_other"
      form={form}
      {...formItemLayout}
    >
      <Form.Item label="Plain Text"
      >
        <span className="ant-form-text">China</span>
      </Form.Item>
      
      <Form.Item label="Good Name"
      name="goodname"
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

      <Form.Item label="Good Introduce"
      name="goodintroduce"
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Please input your good introduce!',
        },
      ]}>
          <Input placeholder="input placeholder" allowClear/>
      </Form.Item>
      <Form.Item label="Good content"
      name="goodcontent"
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Please input your good content!',
        },
      ]}>
        <TextArea showCount maxLength={200} allowClear />
      </Form.Item>

      <Form.Item label="Good Price"
      name="goodprice"
      hasFeedback
      rules={[{required: true}]}>
        <Input prefix="￥" suffix="RMB" />
        {/* <InputNumber addonAfter={<Option value="CNY">¥</Option>} /> */}
      </Form.Item>

      <Form.Item
        name="category"
        label="Category"
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
        rules={[
          {
            required: true,
            message: 'Please upload the image to show the insurance!',
          },
        ]}
      >
        <Upload name="file" action="http://localhost:8081/api/testUpload" 
          listType="picture"
          >
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
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
