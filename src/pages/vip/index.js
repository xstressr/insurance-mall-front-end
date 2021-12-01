import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";


import { VipWrapper } from "./style";
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { UserOutlined, 
  LaptopOutlined, 
  NotificationOutlined, 
  AppstoreOutlined,
  SettingOutlined,
  ArrowUpOutlined } from '@ant-design/icons';

import { vipMenu } from "../../common/local-data";
import { JYFooter } from "../../components/footer";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class Vip extends Component {

  removeLocalStorage() {
    // console.log("test")
    localStorage.removeItem("vip")
  }

  redirectToHome() {
    this.props.history.push('/')
  }

  render() {
    const {route} = this.props;
    return (
      <VipWrapper>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1" icon={<AppstoreOutlined />}>
              <NavLink to={"/"} >Home</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<SettingOutlined />}>nav 2</Menu.Item>
              <Menu.Item key="3" icon={<ArrowUpOutlined />} >
              <NavLink to={"/"} onClick={()=>this.removeLocalStorage()}>Exit</NavLink>

                
              </Menu.Item>
            </Menu>            
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="会员功能">
                  {vipMenu.map((item,index) => {
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
          <JYFooter />
        </Layout>
      </VipWrapper>
    );
  }
}

export default Vip;
