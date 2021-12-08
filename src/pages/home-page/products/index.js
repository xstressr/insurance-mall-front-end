import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Image, Button, Menu, Descriptions, Pagination } from "antd";
import {
  UserOutlined,
  InsuranceOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { JYFooter } from "../../../components/footer";
import { findAll } from "../../../services/goods";
import { ProductsWrapper } from "./style";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function Products() {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    findAll(1, 5).then((res) => {
      console.log(res);
      setTotal(res.total);
      setData(res.list);
    });
  }, []);

  function onChange(page, pageSize) {
    findAll(page, pageSize).then((res) => {
      console.log(res);
      setData(res.list);
    });
    console.log("onChange");
  }

  return (
    <ProductsWrapper>
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
            <div className="products-list">
              {data.map((item) => {
                return (
                  <div className="product">
                    <div className="left-box">
                      <div className="img-box">
                        <img src={item.goodsCarousel} alt="" />
                        <div className="style_cover">{item.goodsName}</div>
                      </div>
                      <div className="info-box">
                        <h3 className="style-row1">
                          <NavLink
                            to={`/app/product?productCode=${item.goodsName}`}
                          >
                            {item.goodsName}
                          </NavLink>
                        </h3>
                        <div
                          className="style-row2"
                          style={{ marginTop: "-10px" }}
                        >
                          {item.goodsIntro}
                        </div>
                        {/* //TODO: 金色小标标先不写 */}
                        <div className="style-row3"></div>
                        <div className="style-row4">
                          <div className="style-item">
                            <UserOutlined style={{ marginRight: "14px" }} />
                            <span className="style-label">投保年龄</span>
                            <span className="style-value">
                              {item.minAge + "周岁-" + item.maxAge + "周岁"}
                            </span>
                          </div>
                          <div className="style-item">
                            <DashboardOutlined
                              style={{ marginRight: "14px" }}
                            />

                            <span className="style-label">保障期限</span>
                            <span className="style-value">{item.deadline}</span>
                          </div>

                          <div className="style-item">
                            <InsuranceOutlined
                              style={{ marginRight: "14px" }}
                            />

                            <span className="style-label">职业类别</span>
                            <span className="style-value">
                              {item.minLevel + "-" + item.maxLevel + "类"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right-box">
                      <span className="style-company">{item.createUser}</span>
                      <div className="style-money">
                        <img
                          src="//img.huizecdn.com/hz/www/page/core_pc/planning_detail_money_icon.png"
                          alt=""
                        />
                        <span>{item.sellingPrice}</span>
                        <span className="style-text">起</span>
                      </div>
                      <a className="style-btn">
                        <Button>
                          <span>立即查看</span>
                        </Button>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pagination">
              <Pagination
                defaultCurrent={1}
                total={total}
                pageSize={5}
                onChange={onChange}
              />
            </div>
          </Content>
          <JYFooter></JYFooter>
        </Layout>
      </div>
    </ProductsWrapper>
  );
}
