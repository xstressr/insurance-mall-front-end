import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Layout,
  Image,
  Button,
  Menu,
  Descriptions,
  Pagination,
  Tabs,
} from "antd";
import { JYFooter } from "../../../components/footer";
import { KnowsWrapper } from "./style";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const { TabPane } = Tabs;

export default function Knows() {
  useEffect(() => {
    console.log("test");
  }, []);

  return (
    <KnowsWrapper>
      <div>
        <Layout>
          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["shop"]}>
              <Menu.Item key="shop">{"JOJO商城"}</Menu.Item>
              <Menu.Item key="exit">
                <NavLink to={"/"}>Exit</NavLink>
              </Menu.Item>
            </Menu>
          </Header>
          <Content className="content">
            <div className="knows-list">
              <Tabs defaultActiveKey="1">
                <TabPane tab="全部" key="1">
                  <div className="style-list">
                    <div className="style-listItem">
                      <div className="style-box">
                        <a className="style-title">
                          <h3>投保信息填错了，需要修改吗？</h3>
                        </a>
                        <div className="style-main">
                          <div className="style-twoRows">
                            <a>
                              <div class="style-content">
                                为避免后续理赔、续保等服务受影响，建议及时联系保险公司进行修改。但涉及保额、保障期限、保障时间等，签订保险合同后是不能修改的。
                                信息变更资料多流程繁琐，建议大家在填写个人信息的时候尽量细心，避免日后的麻烦。
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="style-footer">
                          {/* <span>回答帮助了178个人</span> */}
                          <span style={{paddingRight: "20px"}}>推荐产品</span>
                          <div className="commend-list">
                            <span className="style-tag">猪猪安全险</span>
                            <span className="style-tag">短期健康险</span>
                            <span className="style-tag">长期健康险</span>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </div>
            <div className="pagination">
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </Content>
          <JYFooter></JYFooter>
        </Layout>
      </div>
    </KnowsWrapper>
  );
}
