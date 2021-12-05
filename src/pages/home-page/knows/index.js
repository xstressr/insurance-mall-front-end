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
import { getTopList } from "../../../services/topline";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const { TabPane } = Tabs;

export default function Knows() {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("test");
    getTopList(1, 5).then((res) => {
      console.log(res);
      setTotal(res.total);
      setData(res.list);
    });
  }, []);

  function onChange(page, pageSize) {
    getTopList(page, pageSize).then((res) => {
      console.log(res);
      setData(res.list);
    });
    console.log("onChange");
  }

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
                    {data.map((item) => {
                      return (
                        <div className="style-listItem">
                          <div className="style-box">
                            <a className="style-title">
                              <h3>{item.messageTitle}</h3>
                            </a>
                            <div className="style-main">
                              <div className="style-twoRows">
                                <a>
                                  <div class="style-content">
                                    {item.messageContent}
                                  </div>
                                </a>
                              </div>
                            </div>
                            {/* <div class="style-footer">
                              <span style={{ paddingRight: "20px" }}>
                                推荐产品
                              </span>
                              <div className="commend-list">
                                <span className="style-tag">猪猪安全险</span>
                                <span className="style-tag">短期健康险</span>
                                <span className="style-tag">长期健康险</span>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
              </Tabs>
            </div>
            <div className="pagination">
              <Pagination
                defaultCurrent={1}
                total={total}
                onChange={onChange}
              />
            </div>
          </Content>
          <JYFooter></JYFooter>
        </Layout>
      </div>
    </KnowsWrapper>
  );
}
