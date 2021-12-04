import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Image, Button, Menu, Descriptions } from "antd";
import { renderRoutes } from "react-router-config";
import { useHistory } from "react-router";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { JYFooter } from "../../../components/footer";
import { queryGoodDetail } from "../../../services/goods";
import { ProductWrapper } from "./style";
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function Product(props) {
  const [detail, setDetail] = useState({});
  const [productName, setProductName] = useState("");
  let history = useHistory();

  useEffect(() => {
    const productName = new URLSearchParams(props.location.search).get(
      "productCode"
    );
    setProductName(productName);
    queryGoodDetail(productName).then((res) => {
      console.log(res);
      setDetail(res.data);
    });
  }, []);

  return (
    <ProductWrapper>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["shop"]}>
            <Menu.Item key="shop">{"JOJO商城"}</Menu.Item>
            <Menu.Item key="exit">
              <NavLink to={"/"}>Exit</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div className="item">
            <div className="item-title">
              
              <div style={{paddingTop:"30px"}}>
                <Descriptions
                  bordered
                  title="Good Detail"
                  extra={<Button
                    type="primary"
                    onClick={() => {
                      history.push(`/app/insured?productCode=${productName}`);
                    }}
                  >
                    投保
                  </Button>}
                >
                  <Descriptions.Item label="Product">
                  {detail.goodsName}
                  </Descriptions.Item>
                  <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                  <Descriptions.Item label="time">{detail.createTime}</Descriptions.Item>
                  <Descriptions.Item label="Amount">{"¥"+detail.sellingPrice}</Descriptions.Item>
                  <Descriptions.Item label="Product Image"><Image width={200} src={detail.goodsCoverImg} /></Descriptions.Item>
                  <Descriptions.Item label="Sales">{detail.total}</Descriptions.Item>
                  <Descriptions.Item label="Good Info">
                  {detail.goodsIntro}
                    <br />
                  </Descriptions.Item>
                  <Descriptions.Item label="Good Content">
                  {detail.goodsDetailContent}
                    <br />
                  </Descriptions.Item>
                </Descriptions>
              </div>
              <div>
                
              </div>
            </div>
          </div>
          <div className="item">
            <Menu mode="horizontal">
              {/* <Menu.Item key="mail" icon={<MailOutlined />}>
              <Link to={"/app/product/detail"}>保障详情</Link>
              
            </Menu.Item> */}
              <Menu.Item key="app" icon={<AppstoreOutlined />}>
                <Link to={"/app/product/know"}>投保须知</Link>
              </Menu.Item>
              <Menu.Item key="nav" icon={<AppstoreOutlined />}>
                <Link to={"/app/product/navi"}>理赔指引</Link>
              </Menu.Item>
              <Menu.Item key="alipay">
                <Link to={"/app/product/question"}>常见问题</Link>
              </Menu.Item>
            </Menu>
            {renderRoutes(props.route.routes)}
          </div>
        </Content>
        <JYFooter></JYFooter>
      </Layout>
    </ProductWrapper>
  );
}
