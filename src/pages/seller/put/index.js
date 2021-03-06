import React from "react";
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
  message,
  DatePicker,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { insertGoods } from "../../../services/goods";

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
  console.log("Upload event:", e);

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

    let goodname = form.getFieldValue("goodname");
    let goodintroduce = form.getFieldValue("goodintroduce");
    let goodcontent = form.getFieldValue("goodcontent");
    let claimAmount = form.getFieldValue("claimamount");
    let goodprice = form.getFieldValue("goodprice");
    let category = form.getFieldValue("category");
    let period = form.getFieldValue("period");
    let minAge = form.getFieldValue("minAge");
    let maxAge = form.getFieldValue("maxAge");
    let minLevel = form.getFieldValue("minAge");
    let maxLevel = form.getFieldValue("maxAge");
    let imgUrl;
    let imgUrl2;
    if (form.getFieldValue("upload")) {
      imgUrl = form.getFieldValue("upload")[0].response.data;
    }

    if (form.getFieldValue("uploadAbbre")) {
      imgUrl2 = form.getFieldValue("uploadAbbre")[0].response.data;
    }

    let goodInfo = {
      goodsName: goodname,
      goodsIntro: goodintroduce,
      goodsDetailContent: goodcontent,
      originalPrice: goodprice,
      sellingPrice: goodprice,
      claimAmount: claimAmount,
      goodsCategoryId: category,
      goodsCoverImg: imgUrl,
      deadline: period,
      createUser: localStorage.getItem("seller"),
      minAge: minAge,
      maxAge: maxAge,
      minLevel: minLevel,
      maxLevel: maxLevel,

      goodsCarousel: imgUrl2,
    };
    insertGoods(goodInfo).then((res) => {
      console.log(res);
      if (res.resultCode) {
        message.success("????????????????????????????????????");
      } else {
        message.error("???????????????");
      }
    });
  }

  return (
    <div>
      <Form name="validate_other" form={form} {...formItemLayout}>
        <Form.Item label="????????????">
          <span className="ant-form-text">??????</span>
        </Form.Item>

        <Form.Item
          label="????????????"
          name="goodname"
          hasFeedback
          rules={[
            {
              required: true,
              message: "?????????????????????!",
              // pattern: new RegExp(/^[1-9]\d*$/, "g"),
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>

        <Form.Item
          label="????????????"
          name="goodintroduce"
          hasFeedback
          rules={[
            {
              required: true,
              message: "?????????????????????!",
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          label="????????????"
          name="goodcontent"
          hasFeedback
          rules={[
            {
              required: true,
              message: "?????????????????????!",
            },
          ]}
        >
          <TextArea showCount maxLength={200} allowClear />
        </Form.Item>

        <Form.Item
          label="??????????????????"
          name="goodprice"
          hasFeedback
          rules={[{ required: true }]}
        >
          <Input prefix="???" suffix="RMB" />
          {/* <InputNumber addonAfter={<Option value="CNY">??</Option>} /> */}
        </Form.Item>
        <Form.Item
          label="???????????????"
          name="claimamount"
          hasFeedback
          rules={[{ required: true }]}
        >
          <Input prefix="???" suffix="RMB" />
          {/* <InputNumber addonAfter={<Option value="CNY">??</Option>} /> */}
        </Form.Item>
        <Form.Item
          label="????????????"
          name="period"
          hasFeedback
          rules={[{ required: true }]}
        >
          <Input />
          {/* <InputNumber addonAfter={<Option value="CNY">??</Option>} /> */}
        </Form.Item>

        <Form.Item
          name="category"
          label="??????"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select your goods category!",
            },
          ]}
        >
          <Select placeholder="?????????????????????">
            <Option value="1">?????????</Option>
            <Option value="2">?????????</Option>
            <Option value="3">?????????</Option>
            {/* <Option value="4">?????????</Option> */}
            <Option value="5">?????????</Option>
            {/* <Option value="6">????????????</Option> */}
            <Option value="7">?????????</Option>
            <Option value="8">?????????</Option>
            {/* <Option value="7">?????????</Option> */}
          </Select>
        </Form.Item>
        <Form.Item label="?????????????????????" required style={{ marginBottom: 0 }}>
          <Form.Item
            validateStatus="error"
            help="?????????????????????????????????"
            name="minAge"
            style={{ display: "inline-block", width: "100px" }}
          >
            <Input />
          </Form.Item>
          <span
            style={{
              display: "inline-block",
              width: "24px",
              lineHeight: "32px",
              textAlign: "center",
            }}
          >
            -
          </span>
          <Form.Item
            validateStatus="error"
            help="?????????????????????????????????"
            name="maxAge"
            style={{ display: "inline-block", width: "100px" }}
          >
            <Input />
          </Form.Item>
        </Form.Item>
        <Form.Item label="??????????????????" required style={{ marginBottom: 0 }}>
          <Form.Item
            validateStatus="error"
            help="?????????????????????????????????"
            name="minLevel"
            style={{ display: "inline-block", width: "100px" }}
          >
            <Input />
          </Form.Item>
          <span
            style={{
              display: "inline-block",
              width: "24px",
              lineHeight: "32px",
              textAlign: "center",
            }}
          >
            -
          </span>
          <Form.Item
            validateStatus="error"
            help="?????????????????????????????????"
            name="maxLevel"
            style={{ display: "inline-block", width: "100px" }}
          >
            <Input />
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="upload"
          label="?????????????????????"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            {
              required: true,
              message: "????????????????????????!",
            },
          ]}
        >
          <Upload
            name="file"
            action="http://localhost:8081/api/testUpload"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>????????????</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="uploadAbbre"
          label="?????????????????????"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            {
              required: true,
              message: "????????????????????????!",
            },
          ]}
        >
          <Upload
            name="file"
            action="http://localhost:8081/api/testUpload"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>????????????</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={submit}
            style={{ marginRight: "8px" }}
          >
            ??????
          </Button>
          <Button htmlType="button" onClick={onReset}>
            ??????
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
