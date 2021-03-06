import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Layout,
  Image,
  Button,
  Menu,
  Select,
  Tooltip,
  Typography,
  Row,
  Col,
  Space,
  message,
} from "antd";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { queryGoodDetail } from "../../../services/goods";
import { JYFooter } from "../../../components/footer";
import { InsuredWrapper } from "./style";
import { registerInsurer } from "../../../services/login";
import { calcuPrice } from "../../../services/calcu";
import { insertSlip } from "../../../services/slip";
import { MinusCircleFilled } from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

export default function Insured(props) {
  const [form] = Form.useForm();
  const [detail, setDetail] = useState({});
  const [price, setPrice] = useState(0);
  const [productName, setProductName] = useState("");
  let history = useHistory();

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
    const productName = new URLSearchParams(props.location.search).get(
      "productCode"
    );
    setProductName(productName);
    queryGoodDetail(productName).then((res) => {
      // console.log(res);
      setDetail(res.data);
    });
  }, []);

  function addInsurer() {
    let name = form.getFieldValue("name");
    console.log(name)
    let idno = form.getFieldValue("idno");
    let age = form.getFieldValue("age");
    let height = form.getFieldValue("height");
    let weight = form.getFieldValue("weight");
    let occupation = form.getFieldValue("occupation");
    let mobile = form.getFieldValue("mobile");
    let email = form.getFieldValue("email");
    let address = form.getFieldValue("address");
    const insurerInfo = {
      name: name,
      idNo: idno,
      age: age,
      height: height,
      weight: weight,
      career: occupation,
      address: address,
      belongAcc: localStorage.getItem("vip"),
      email: email,
      mobile: mobile,
    };
    registerInsurer(insurerInfo).then((res) => {
      console.log(res);
      if (res.resultCode) {
        message.success("????????????");
      } else {
        message.error("????????????");
      }
    });
  }

  function calculate() {
    let occupation = form.getFieldValue("occupation");
    let age = form.getFieldValue("age");
    let baseCount = detail.sellingPrice;
    let insuranceType = detail.goodsCategoryId;
    console.log(occupation);

    let params = {
      age: age,
      baseCount: baseCount,
      insuranceType: insuranceType,
      occupationType: occupation,
    };

    calcuPrice(params).then((res) => {
      console.log(res);
      setPrice(res);
    });
  }

  function pay() {
    let idno = form.getFieldValue("idno");
    let goodsName = detail.goodsName;
    let slipInfo = {
      owner: idno,
      product: goodsName,
      price: price,
      productClaimMax: detail.claimAmount,
      productClaimMin: 1,
      company: detail.createUser,
      buyer: localStorage.getItem("vip"),
    };
    insertSlip(slipInfo).then((res) => {
      console.log(res);
      if (res.resultCode) {
        message.success("????????????");
        setTimeout(() => {
          history.push("/");
        }, 1500);
      } else {
        message.error("??????????????????????????????????????????");
      }
    });
  }

  function judge() {
    let age = form.getFieldValue("age");
    let maxAge = detail.maxAge;
    let minAge = detail.minAge;
    if(age >= minAge && age <= maxAge) {
      message.success("????????????")
    } else {
      message.error("???????????????")
    }
    console.log(age);
  }

  return (
    <InsuredWrapper>
      <div>
        <Layout>
          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["shop"]}>
              <Menu.Item key="shop">{"JOJO??????"}</Menu.Item>
              <Menu.Item key="exit">
                <NavLink to={"/"}>??????</NavLink>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <div className="item">
              <h1>????????????</h1>

              <div className="item-title">
                <h3>{detail.goodsName}</h3>
                <Image width={200} src={detail.goodsCoverImg} />
                {/* <div>
                  <div className="item-content">
                    <h4>{detail.goodsIntro}</h4>
                    <p>{detail.goodsDetailContent}</p>
                  </div>
                </div> */}
              </div>
              <h3>???????????????</h3>
              <Row>
                <Col>
                  <div style={{ width: "450px" }}>
                    <Form {...formItemLayout} form={form} name="updatePassword">
                      <Form.Item
                        name="name"
                        label="??????"
                        rules={[
                          {
                            required: true,
                            message: "Please input your name!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="idno"
                        label="???????????????"
                        rules={[
                          {
                            required: true,
                            message: "Please input your ID No!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="age"
                        label="??????"
                        rules={[
                          {
                            required: true,
                            message: "Please input your age!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input />
                        
                      </Form.Item>
                      <Form.Item >
                      <Col push="12">
                          <Button type="primary" onClick={judge}>
                            ??????????????????
                          </Button>
                        </Col>
                      </Form.Item>
                      <Form.Item
                        name="height"
                        label="??????"
                        rules={[
                          {
                            required: true,
                            message: "Please input your height!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="weight"
                        label="??????"
                        rules={[
                          {
                            required: true,
                            message: "Please input your weight!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="occupation"
                        label="????????????"
                        rules={[
                          {
                            required: true,
                            message: "Please input your occupation!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Select
                          placeholder="Select a option and change input text above"
                          allowClear
                        >
                          <Option value="1">???????????????</Option>
                          <Option value="2">???????????????</Option>
                          <Option value="3">???????????????</Option>
                          <Option value="4">???????????????</Option>
                          <Option value="5">???????????????</Option>
                          <Option value="6">???????????????</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        name="info"
                        rules={[
                          {
                            message: "Please input your mobile!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Col push="12">
                        <Tooltip title="Useful information">
                          <Typography.Link href="https://www.huize.com/apps/cps/index/product/job-102172-104957.html">
                            ???????????????
                          </Typography.Link>
                        </Tooltip>
                        </Col>
                      </Form.Item>

                      <Form.Item
                        name="mobile"
                        label="?????????"
                        rules={[
                          {
                            required: true,
                            message: "Please input your mobile!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="email"
                        label="??????"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="address"
                        label="??????"
                        rules={[
                          {
                            required: true,
                            message: "Please input your address!",
                          },
                        ]}
                        hasFeedback
                      >
                        <TextArea />
                      </Form.Item>

                      <Form.Item {...tailFormItemLayout}>
                        <Button
                          type="primary"
                          htmlType="submit"
                          onClick={addInsurer}
                        >
                          ???????????????
                        </Button>
                      </Form.Item>

                      <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" onClick={pay}>
                          ??????
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </Col>

                <Col>
                  <div className="item-calc">
                    <div style={{ textAlign: "center" }}>
                      <h2>????????????</h2>
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <span>????????????:</span>
                      <span>{detail.deadline}</span>
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <span>????????????:</span>
                      <span>
                        {detail.claimAmount}
                        {"???"}
                      </span>
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <span>????????????:</span>
                      <span> ??????</span>
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <Button type="primary" onClick={calculate}>
                        ????????????
                      </Button>
                    </div>
                    <div style={{ marginLeft: "10px", marginTop: "100px" }}>
                      <span>??????:</span>
                      <p className="primary-color diy-font-color fr">
                        ???{" "}
                        <span className="product-price total-price f36">
                          <i>{price}</i>
                        </span>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
          <JYFooter />
        </Layout>
      </div>
    </InsuredWrapper>
  );
}
