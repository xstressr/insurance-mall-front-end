import React, { useState, useEffect } from "react";

import {
  Carousel,
  Tabs,
  Button,
  Divider,
  Skeleton,
  Card,
  Row,
  Col,
  Collapse,
} from "antd";
import {
  VerifiedOutlined,
  ShopOutlined,
  SecurityScanOutlined,
  RedEnvelopeOutlined,
} from "@ant-design/icons";
import { HomeWrapper } from "./style";
import astronaut from "@/assets/img/astronaut.jpg";
import pexels from "@/assets/img/pexels.jpg";
import { Link, NavLink } from "react-router-dom";
import { queryAllGoods } from "../../services/goods";
import { JYFooter } from "../../components/footer";
import { queryAll } from "../../services/topline";
import { queryAllCarousel } from "../../services/carousel";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const contentStyle = {
  height: "300px",
  color: "#fff",
  // lineHeight: '160px',
  textAlign: "center",
  background: "#364d79",
};

export default function Home() {
  const { TabPane } = Tabs;

  const [data, setData] = useState([]);
  const [accident, setAccident] = useState([]);
  const [wealth, setWealth] = useState([]);
  const [travel, setTravel] = useState([]);
  const [topline, setTopline] = useState([]);
  const [carousel, setCarousel] = useState([])

  useEffect(() => {
    queryAllGoods().then((res) => {
      console.log(res);
      setData(res.data);

      const acc = res.data.filter((word) => word.goodsCategoryId == 3);
      const wea = res.data.filter((word) => word.goodsCategoryId == 8);
      const tra = res.data.filter((word) => word.goodsCategoryId == 5);

      setAccident(acc);
      setWealth(wea);
      setTravel(tra);
    });
  }, []);

  useEffect(() => {
    queryAll().then((res) => {
      console.log(res);
      setTopline(res.data);
    });
  }, []);

  useEffect(() => {
    queryAllCarousel().then(res=>{
      console.log(res)
      setCarousel(res.data)
    })
    
  }, [])

  return (
    <HomeWrapper>
      <div className="header">
        <div className="header-top">
          <div className="header-left">
            <ul className="left-item">
              <li>
                <a href="/" className="login">
                  欢迎登陆JOJO保险商城
                </a>
              </li>
              <li></li>
              <li className="tooltipBox">
                <a>我的</a>
                <div className="myTooltip">
                  <a>我的订单</a>
                  <a>我的购物车</a>
                  <a>快速理赔</a>
                  <a>服务记录</a>
                  <a>核保记录</a>
                </div>
              </li>
              <li></li>
              <li>商家入住</li>
              <li></li>
              <li>积分商城</li>
              <li></li>
              <li>保单查询</li>
              <li></li>
            </ul>
          </div>
          <div className="header-right">
            <a href="/" className="login">
              登陆/注册
            </a>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div style={{ display: "flex" }}>
          <div>
            <VerifiedOutlined style={{ fontSize: "30px", margin: "0 10px" }} />
          </div>
          <div>
            <ShopOutlined style={{ fontSize: "30px", margin: "0 10px" }} />
          </div>
          <div>
            <SecurityScanOutlined
              style={{ fontSize: "30px", margin: "0 10px" }}
            />
          </div>
          <div>
            <RedEnvelopeOutlined
              style={{ fontSize: "30px", margin: "0 10px" }}
            />
          </div>
        </div>
      </div>
      <div className="carousel">
        <Carousel autoplay>
         {carousel.map((item)=>{
           return (
            <div>
            <h3 style={contentStyle}>
              <img src={item.imgurl} alt="轮播图1"></img>
            </h3>
          </div>
           )
         })}
        </Carousel>
      </div>

      <div className="content">
        <div className="content-top">
          <div className="content-top-left">
            <div className="content-top-left-title">
              <Tabs defaultActiveKey="1">
                <TabPane tab="人身保障" key="1">
                  {/* <Skeleton active/> */}
                  <Row justify="center">
                    {accident.map((item, index) => {
                      return (
                        <React.Fragment>
                          <Col offset={index % 3 != 0 ? 1 : 0}
                          style={{ marginBottom: "20px" }}>
                            <Card style={{ width: 250 }}>
                              <p><Link to= {`/app/product?productCode=${item.goodsName}`}>{item.goodsName}</Link></p>
                            </Card>
                          </Col>
                        </React.Fragment>
                      );
                    })}
                  </Row>
                </TabPane>
                <TabPane tab="财富保险" key="2">
                  {/* <Skeleton active/> */}
                  <Row justify="center">
                    {wealth.map((item, index) => {
                      return (
                        <React.Fragment>
                          <Col offset={index % 3 != 0 ? 1 : 0}
                          style={{ marginBottom: "20px" }}>
                            <Card style={{ width: 250 }}>
                            <p><Link to= {`/app/product?productCode=${item.goodsName}`}>{item.goodsName}</Link></p>
                            </Card>
                          </Col>
                        </React.Fragment>
                      );
                    })}
                  </Row>
                </TabPane>
                <TabPane tab="旅游出行" key="3">
                  <Row justify="center">
                    {travel.map((item, index) => {
                      return (
                        <React.Fragment>
                          <Col offset={index % 3 != 0 ? 1 : 0}
                          style={{ marginBottom: "20px" }}>
                            <Card style={{ width: 250 }}>
                            <p><Link to= {`/app/product?productCode=${item.goodsName}`}>{item.goodsName}</Link></p>
                            </Card>
                          </Col>
                        </React.Fragment>
                      );
                    })}
                  </Row>
                </TabPane>
                <TabPane tab="全部产品" key="4">
                  <Row justify="center">
                    {data.map((item, index) => {
                      return (
                        <React.Fragment>
                          <Col
                            offset={index % 3 != 0 ? 1 : 0}
                            style={{ marginBottom: "20px" }}
                          >
                            <Card style={{ width: 250 }}>
                            <p><Link to= {`/app/product?productCode=${item.goodsName}`}>{item.goodsName}</Link></p>
                            </Card>
                          </Col>
                        </React.Fragment>
                      );
                    })}
                  </Row>
                </TabPane>
              </Tabs>
            </div>
          </div>
          <div className="content-top-right">
            <div className="content-top-right-title">
              <div className="pic">
                <img
                  src="//r1y3bddb4.hd-bkt.clouddn.com/51194f6e609c40eba3c5274e80fd2cf1.jpeg"
                  alt="头像"
                  style={{ width: "48px", height: "48px" }}
                />
              </div>
              <div className="content-top-right-header">
                <h4>Hi~登录发现更多精彩</h4>
              </div>
              <div className="content-top-right-header">
                <a href="/">
                  <Button type="primary">
                    <NavLink
                      className="navlink-no-deco"
                      to={"/login"}
                      style={{ textDecoration: "none" }}
                    >
                      登录 / 注册
                    </NavLink>
                  </Button>
                </a>
              </div>
            </div>
            {/* <Divider /> */}
            <div>
              <div>
                <h4 className="insurance-title">
                  <span style={{ fontSize: "16px" }}>保险头条</span>
                  <a href="https://www.huize.com/hz-planet/lanmu/tuijian/0">
                    <span>更多</span>
                  </a>
                </h4>
                <div>
                  <a href="//www.huize.com/hz-planet/article/15397">
                    <img
                      src="//img.huizecdn.com/hz/www/page/core_pc/1.png"
                      alt=""
                      style={{ width: "7px", marginLeft: "3px" }}
                    />
                    <span> 又要年度体检了，这件事情赶紧做！</span>
                  </a>
                </div>
                <div>
                  <a href="//www.huize.com/hz-planet/article/15396">
                    <img
                      src="//img.huizecdn.com/hz/www/page/core_pc/2.png"
                      alt=""
                      style={{ width: "7px", marginLeft: "3px" }}
                    />
                    <span>
                      穗岁康2022强势回归！245万保额，有既往病史也能赔！
                    </span>
                  </a>
                </div>
                <div>
                  <a href="//www.huize.com/hz-planet/article/15398">
                    <img
                      src="//img.huizecdn.com/hz/www/page/core_pc/3.png"
                      alt=""
                      style={{ width: "7px", marginLeft: "3px" }}
                    />
                    <span>北京人寿超好保，要超越达尔文5号换新版了！</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 style={{ margin: "10px 0" }}>保险知识</h3>
        <div className="insurance-know">
          <Collapse defaultActiveKey={["0"]} onChange={callback}>
            {topline.map((item, index)=>{
              return (
                <Panel header={item.messageTitle} key={index}>
              <p>{item.messageContent}</p>
            </Panel>
              )
            })}
            
            
          </Collapse>
        </div>
      </div>
      <JYFooter />
    </HomeWrapper>
  );
}
