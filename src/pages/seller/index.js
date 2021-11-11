import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { Layout, Menu, Breadcrumb } from "antd";
import {UserOutlined} from "@ant-design/icons"

import { SellerWrapper } from "./style";
import { sellerMenu } from "../../common/local-data";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Seller extends Component {
  
  render() {
    const {route} = this.props;

    return (
      <SellerWrapper>
        <Layout>
          <Header className="header">
            <div className="logo" />
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu> */}
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="第三方功能">
                  {sellerMenu.map((item,index) => {
                      return (
                        <Menu.Item key={item.link}>
                          <NavLink to={item.link}>{item.title}</NavLink>
                        </Menu.Item>
                      )
                    }
                  )}
                </SubMenu>
                
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 600,
                }}
              >
                {renderRoutes(route.routes)}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </SellerWrapper>
    );
  }
}

export default Seller;
