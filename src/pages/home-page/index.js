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
  SmileOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import { HomeWrapper } from "./style";

import { Link, NavLink } from "react-router-dom";
import { findAll, queryAllByType } from "../../services/goods";
import { JYFooter } from "../../components/footer";
import { queryAll } from "../../services/topline";
import { queryAllCarousel } from "../../services/carousel";
import thunder from  '@/assets/img/thunder2.svg'


const { Panel } = Collapse;

const { Meta } = Card;

function callback(key) {
  console.log(key);
}

const contentStyle = {
  height: "400px",
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
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    getCarousel();
    getAllTopLine();
    getAllGoods();
    getAllByType(3);
    getAllByType(5);
    getAllByType(8);
  }, []);

  function getAllGoods() {
    findAll(1,8).then((res) => {
      console.log(res);
      if(res.list != null) {
        setData(res.list);

      }
    });

  }

  function getAllByType(type) {
    queryAllByType(type, 1, 8).then((res) => {
      switch (type) {
        case 3:
          if(res.data != null) {
            setAccident(res.data.list);

          }
          break;
        case 5:
          if(res.data != null) {

          setTravel(res.data.list);
          }
          break;
        case 8:
          if(res.data != null) {

          setWealth(res.data.list);
          }
          break;
        default:
          break;
      }

      return res.data;
    });
  }

  function getAllTopLine() {
    queryAll().then((res) => {
      console.log(res);
      if(res.data != null) {
        setTopline(res.data);

      }
    });
  }

  function getCarousel() {
    queryAllCarousel().then((res) => {
      console.log(res);
      if (res.data != null) {
        setCarousel(res.data);

      }
    });
  }

  return (
    <HomeWrapper>
      <div className="header">
        <div className="header-top">
          <div className="header-left">
            <ul className="left-item">
              <li>
                <a href="/" className="login">
                  ????????????JOJO????????????
                </a>
              </li>
              <li></li>
              <li className="tooltipBox">
                <a>??????</a>
                <div className="myTooltip">
                  <a>????????????</a>
                  <a>???????????????</a>
                  <a>????????????</a>
                  <a>????????????</a>
                  <a>????????????</a>
                </div>
              </li>
              <li></li>
              <li>????????????</li>
              <li></li>
              <li>????????????</li>
              <li></li>
              <li>????????????</li>
              <li></li>
            </ul>
          </div>
          <div className="header-right">
            <a href="/" className="login">
              ??????/??????
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
          {carousel != null
            ? carousel.map((item) => {
                return (
                  <div>
                    <h3 style={contentStyle}>
                      <div>{item.insuranceName}</div>
                      <div style={{ textAlign: "center" }}>
                        <Link
                          to={`/app/product?productCode=${item.insuranceName}`}
                        >
                          <img
                            src={item.imgurl}
                            alt={item.insuranceName}
                            style={{
                              margin: "0 auto",
                              width: "600px",
                              height: "350px",
                            }}
                          ></img>
                        </Link>
                      </div>
                    </h3>
                  </div>
                );
              })
            : null}
        </Carousel>
      </div>

      <div className="content">
        <div className="content-top">
          <div className="content-top-left">
            <div className="content-top-left-title">
              <Tabs defaultActiveKey="1">
                <TabPane tab="????????????" key="1">
                  <div className="product-more">
                    <Link to={"/app/productsType?type=3"}>??????</Link>
                  </div>
                  {/* <Skeleton active/> */}
                  <Row justify="center">
                    {accident != null
                      ? accident.map((item, index) => {
                          return (
                            <React.Fragment>
                          <Link
                                      to={`/app/product?productCode=${item.goodsName}`}
                                      style={{textDecoration:"none"}}
                                    >
                          <Col
                            // offset={index % 3 != 0 ? 1 : 0}
                            style={{ margin: "10px 10px 10px 0" }}
                          >
                            <Card
                              hoverable
                              style={{ width: 200, height:383 }}
                              cover={
                                <img
                                  style={{ width: "200px", height: "200px" }}
                                  alt="example"
                                  src={item.goodsCarousel}
                                />
                              }
                              // className={index < 3 ? "top3" : null}
                            >
                              <Meta
                                title={item.goodsName}
                                description={item.goodsIntro}
                              />
                              
                              <div className="style-money">
                                <img
                                  src="//img.huizecdn.com/hz/www/page/core_pc/planning_detail_money_icon.png"
                                  alt=""

                                />
                                <span>{item.sellingPrice}</span>
                                <span className="style-text">???</span>
                                <span style={{marginLeft:"10px"}}>?????? {item.total}</span>
                                {index < 3 ? 
                                <React.Fragment>
                               <img src={thunder} style={{width:"16px",height:"16px"}}></img>
                               <img src={thunder} style={{width:"16px",height:"16px"}}></img>
                               {/* <img src={thunder} style={{width:"16px",height:"16px"}}></img> */}

                                </React.Fragment>
                                
                                
                                :null}
                              </div>

                              
                            </Card>
                          </Col>
                          </Link>
                        </React.Fragment>
                          );
                        })
                      : null}
                  </Row>
                </TabPane>
                <TabPane tab="????????????" key="2">
                  <div className="product-more">
                    <Link to={"/app/productsType?type=8"}>??????</Link>
                  </div>
                  {/* <Skeleton active/> */}
                  <Row justify="center">
                    {wealth != null
                      ? wealth.map((item, index) => {
                          return (
                            <React.Fragment>
                          <Link
                                      to={`/app/product?productCode=${item.goodsName}`}
                                      style={{textDecoration:"none"}}
                                    >
                          <Col
                            // offset={index % 3 != 0 ? 1 : 0}
                            style={{ margin: "10px 10px 10px 0" }}
                          >
                            <Card
                              hoverable
                              style={{ width: 200, height:383 }}
                              cover={
                                <img
                                  style={{ width: "200px", height: "200px" }}
                                  alt="example"
                                  src={item.goodsCarousel}
                                />
                              }
                              // className={index < 3 ? "top3" : null}
                            >
                              <Meta
                                title={item.goodsName}
                                description={item.goodsIntro}
                              />
                              
                              <div className="style-money">
                                <img
                                  src="//img.huizecdn.com/hz/www/page/core_pc/planning_detail_money_icon.png"
                                  alt=""

                                />
                                <span>{item.sellingPrice}</span>
                                <span className="style-text">???</span>
                                <span style={{marginLeft:"10px"}}>?????? {item.total}</span>
                                {index < 3 ? 
                                <React.Fragment>
                               <img src={thunder} style={{width:"16px",height:"16px"}}></img>
                               <img src={thunder} style={{width:"16px",height:"16px"}}></img>
                               {/* <img src={thunder} style={{width:"16px",height:"16px"}}></img> */}

                                </React.Fragment>
                                
                                
                                :null}
                              </div>

                              
                            </Card>
                          </Col>
                          </Link>
                        </React.Fragment>
                          );
                        })
                      : null}
                  </Row>
                </TabPane>
                <TabPane tab="????????????" key="3">
                  <div className="product-more">
                    <Link to={"/app/productsType?type=5"}>??????</Link>
                  </div>
                  <Row justify="center">
                    {travel != null
                      ? travel.map((item, index) => {
                          return (
                            <React.Fragment>
                          <Link
                                      to={`/app/product?productCode=${item.goodsName}`}
                                      style={{textDecoration:"none"}}
                                    >
                          <Col
                            // offset={index % 3 != 0 ? 1 : 0}
                            style={{ margin: "10px 10px 10px 0" }}
                          >
                            <Card
                              hoverable
                              style={{ width: 200, height:383 }}
                              cover={
                                <img
                                  style={{ width: "200px", height: "200px" }}
                                  alt="example"
                                  src={item.goodsCarousel}
                                />
                              }
                              // className={index < 3 ? "top3" : null}
                            >
                              <Meta
                                title={item.goodsName}
                                description={item.goodsIntro}
                              />
                              
                              <div className="style-money">
                                <img
                                  src="//img.huizecdn.com/hz/www/page/core_pc/planning_detail_money_icon.png"
                                  alt=""

                                />
                                <span>{item.sellingPrice}</span>
                                <span className="style-text">???</span>
                                <span style={{marginLeft:"10px"}}>?????? {item.total}</span>
                                {index < 3 ? 
                                <React.Fragment>
                               <img src={thunder} style={{width:"16px",height:"16px"}}></img>
                               <img src={thunder} style={{width:"16px",height:"16px"}}></img>
                               {/* <img src={thunder} style={{width:"16px",height:"16px"}}></img> */}

                                </React.Fragment>
                                
                                
                                :null}
                              </div>

                              
                            </Card>
                          </Col>
                          </Link>
                        </React.Fragment>
                          );
                        })
                      : null}
                  </Row>
                </TabPane>
                <TabPane tab="????????????" key="4">
                  <div className="product-more">
                    <Link to={"/app/products"}>??????</Link>
                  </div>
                  <Row justify="center">
                    {data.map((item, index) => {
                      return (
                        <React.Fragment>
                          <Link
                                      to={`/app/product?productCode=${item.goodsName}`}
                                      style={{textDecoration:"none"}}
                                    >
                          <Col
                            // offset={index % 3 != 0 ? 1 : 0}
                            style={{ margin: "10px 10px 10px 0" }}
                          >
                            <Card
                              hoverable
                              style={{ width: 200, height:383 }}
                              cover={
                                <img
                                  style={{ width: "200px", height: "200px" }}
                                  alt="example"
                                  src={item.goodsCarousel}
                                />
                              }
                              // className={index < 3 ? "top3" : null}
                            >
                              <Meta
                                title={item.goodsName}
                                description={item.goodsIntro}
                              />
                              
                              <div className="style-money">
                                <img
                                  src="//img.huizecdn.com/hz/www/page/core_pc/planning_detail_money_icon.png"
                                  alt=""

                                />
                                <span>{item.sellingPrice}</span>
                                <span className="style-text">???</span>
                                <span style={{marginLeft:"10px"}}>?????? {item.total}</span>
                                {index < 3 ? 
                                <React.Fragment>
                               <img src={thunder} style={{width:"16px",height:"16px"}}></img>
                               <img src={thunder} style={{width:"16px",height:"16px"}}></img>
                               {/* <img src={thunder} style={{width:"16px",height:"16px"}}></img> */}

                                </React.Fragment>
                                
                                
                                :null}
                              </div>

                              
                            </Card>
                          </Col>
                          </Link>
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
                  src="//r6cyoe89d.hd-bkt.clouddn.com/7be530ef30274c7dbaf0b6f8c9216287.jpg"
                  alt="??????"
                  style={{ width: "48px", height: "48px" }}
                />
              </div>
              <div className="content-top-right-header">
                <h4>Hi~????????????????????????</h4>
              </div>
              <div className="content-top-right-header">
                <a href="/">
                  <Button type="primary">
                    <NavLink
                      className="navlink-no-deco"
                      to={"/login"}
                      style={{ textDecoration: "none" }}
                    >
                      ?????? / ??????
                    </NavLink>
                  </Button>
                </a>
              </div>
            </div>
            {/* <Divider /> */}
            <div>
              <div>
                <h4 className="insurance-title">
                  <span style={{ fontSize: "16px" }}>????????????</span>
                  <a href="https://www.huize.com/hz-planet/lanmu/tuijian/0">
                    <span>??????</span>
                  </a>
                </h4>
                <div>
                  <a href="//www.huize.com/hz-planet/article/15397">
                    <img
                      src="//img.huizecdn.com/hz/www/page/core_pc/1.png"
                      alt=""
                      style={{ width: "7px", marginLeft: "3px" }}
                    />
                    <span> ????????????????????????????????????????????????</span>
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
                      ?????????2022???????????????245???????????????????????????????????????
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
                    <span>??????????????????????????????????????????5??????????????????</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 style={{ margin: "10px 0" }}>????????????</h3>
        <div className="insurance-know">
          <div className="product-more">
            <Link to={"/app/knows"}>??????</Link>
          </div>

          <Collapse
            bordered={false}
            // defaultActiveKey={["0"]}
            onChange={callback}
          >
            {topline.map((item, index) => {
              return (
                <Panel header={item.messageTitle} key={index}>
                  <p>{item.messageContent}</p>
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </div>
      <JYFooter />
    </HomeWrapper>
  );
}
