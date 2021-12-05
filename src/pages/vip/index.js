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
              <NavLink to={"/"} >主页</NavLink>
              </Menu.Item>

              <Menu.Item key="3" icon={<ArrowUpOutlined />} >
              <NavLink to={"/"} onClick={()=>this.removeLocalStorage()}>退出</NavLink>

                
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
