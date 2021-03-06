import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Image, Button, Menu, Descriptions, Tabs } from "antd";
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
import ClaimInfo from "../../../components/claim-info";
import CommonQuestions from "../../../components/common-questions";
import KnowClaim from "../../../components/know-claim";
import ProductNavi from "../../../components/navigation";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const { TabPane } = Tabs;

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
              <NavLink to={"/"}>退出</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div className="item">
            <div className="item-title">
              <div style={{ paddingTop: "30px" }}>
                <Descriptions
                  bordered
                  title="商品详情"
                  extra={
                    <Button
                      type="primary"
                      onClick={() => {
                        history.push(`/app/insured?productCode=${productName}`);
                      }}
                    >
                      投保
                    </Button>
                  }
                >
                  <Descriptions.Item label="商品名字">
                    {detail.goodsName}
                  </Descriptions.Item>
                  <Descriptions.Item label="付费方式">预付费</Descriptions.Item>
                  <Descriptions.Item label="创建时间">
                    {detail.createTime}
                  </Descriptions.Item>
                  <Descriptions.Item label="商家起始价">
                    {"¥" + detail.sellingPrice}
                  </Descriptions.Item>
                  <Descriptions.Item label="图片">
                    <Image width={200} src={detail.goodsCoverImg} />
                  </Descriptions.Item>
                  <Descriptions.Item label="销量">
                    {detail.total}
                  </Descriptions.Item>
                  <Descriptions.Item label="商品介绍">
                    {detail.goodsIntro}
                    <br />
                  </Descriptions.Item>
                  <Descriptions.Item label="商品具体内容">
                    {detail.goodsDetailContent}
                    <br />
                  </Descriptions.Item>
                </Descriptions>
              </div>
              <div></div>
            </div>
          </div>
          <div className="item">
            

            <Tabs defaultActiveKey="1">
              <TabPane tab="投保须知" key="1">
                <KnowClaim/>
              </TabPane>
              <TabPane tab="报案指引" key="2">
                <ProductNavi />
              </TabPane>
              <TabPane tab="常见问题" key="3">
                <CommonQuestions />
              </TabPane>
            </Tabs>
            {/* {renderRoutes(props.route.routes)} */}
          </div>
        </Content>
        <JYFooter></JYFooter>
      </Layout>
    </ProductWrapper>
  );
}
