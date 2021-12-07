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
    let imgUrl;
    let imgUrl2;
    if (form.getFieldValue("upload")) {
      imgUrl = form.getFieldValue("upload")[0].response.data;
    }

    if (form.getFieldValue("uploadAbbre")) {
      imgUrl2 = form.getFieldValue("uploadAbbre")[0].response.data;
    }

    console.log(imgUrl2);

    console.log(minAge);
    console.log(maxAge);


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
      goodsCarousel: imgUrl2,
    };
    insertGoods(goodInfo).then((res) => {
      console.log(res);
      if (res.resultCode) {
        message.success("添加成功，等待管理员确认");
      } else {
        message.error("未添加成功");
      }
    });
  }

  return (
    <div>
      <Form name="validate_other" form={form} {...formItemLayout}>
        <Form.Item label="售卖国家">
          <span className="ant-form-text">中国</span>
        </Form.Item>

        <Form.Item
          label="产品名字"
          name="goodname"
          hasFeedback
          rules={[
            {
              required: true,
              message: "请输入产品名字!",
              // pattern: new RegExp(/^[1-9]\d*$/, "g"),
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>

        <Form.Item
          label="产品简介"
          name="goodintroduce"
          hasFeedback
          rules={[
            {
              required: true,
              message: "请输入产品简介!",
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          label="产品内容"
          name="goodcontent"
          hasFeedback
          rules={[
            {
              required: true,
              message: "请输入产品内容!",
            },
          ]}
        >
          <TextArea showCount maxLength={200} allowClear />
        </Form.Item>

        <Form.Item
          label="产品起始价格"
          name="goodprice"
          hasFeedback
          rules={[{ required: true }]}
        >
          <Input prefix="￥" suffix="RMB" />
          {/* <InputNumber addonAfter={<Option value="CNY">¥</Option>} /> */}
        </Form.Item>
        <Form.Item
          label="最高理赔额"
          name="claimamount"
          hasFeedback
          rules={[{ required: true }]}
        >
          <Input prefix="￥" suffix="RMB" />
          {/* <InputNumber addonAfter={<Option value="CNY">¥</Option>} /> */}
        </Form.Item>
        <Form.Item
          label="保障周期"
          name="period"
          hasFeedback
          rules={[{ required: true }]}
        >
          <Input />
          {/* <InputNumber addonAfter={<Option value="CNY">¥</Option>} /> */}
        </Form.Item>

        <Form.Item
          name="category"
          label="种类"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select your goods category!",
            },
          ]}
        >
          <Select placeholder="请选择一个种类">
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
        <Form.Item label="产品覆盖年龄段" required style={{ marginBottom: 0 }}>
          <Form.Item
            validateStatus="error"
            help="请输入产品覆盖最小年龄"
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
            help="请输入产品覆盖最大年龄"
            name="maxAge"
            style={{ display: "inline-block", width: "100px" }}
          >
            <Input />
          </Form.Item>
        </Form.Item>
        <Form.Item label="职业等级区间" required style={{ marginBottom: 0 }}>
          <Form.Item
            validateStatus="error"
            help="请输入最小支持职业等级"
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
            help="请输入最大支持职业等级"
            name="maxLevel"
            style={{ display: "inline-block", width: "100px" }}
          >
            <Input />
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="upload"
          label="上传产品页图片"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            {
              required: true,
              message: "请上传产品页图片!",
            },
          ]}
        >
          <Upload
            name="file"
            action="http://localhost:8081/api/testUpload"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>点击上传</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="uploadAbbre"
          label="上传产品缩略图"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            {
              required: true,
              message: "请上传产品缩略图!",
            },
          ]}
        >
          <Upload
            name="file"
            action="http://localhost:8081/api/testUpload"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>点击上传</Button>
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
            上架
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
