import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined, 
  LaptopOutlined, 
  NotificationOutlined, 
  AppstoreOutlined,
  SettingOutlined,
  ArrowUpOutlined } from '@ant-design/icons';

import { SellerWrapper } from "./style";
import { sellerMenu } from "../../common/local-data";
import { JYFooter } from "../../components/footer";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Seller extends Component {
  
  removeLocalStorage() {
    // console.log("test")
    localStorage.removeItem("seller")
  }

  render() {
    const {route} = this.props;

    return (
      <SellerWrapper>
        <Layout>
          <Header className="header">
              <div className="logo" />
               
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1" icon={<AppstoreOutlined />}>
              <NavLink to={"/"} >主页</NavLink>
              </Menu.Item>

              <Menu.Item key="3" icon={<ArrowUpOutlined />} >
              <NavLink to={"/login"} onClick={()=>this.removeLocalStorage()}>退出</NavLink>

                
              </Menu.Item>
            </Menu>          
            </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{  borderRight: 0 }}
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
              
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  
                }}
              >
                {renderRoutes(route.routes)}
              </Content>
            </Layout>
          </Layout>
          <JYFooter/>
        </Layout>
      </SellerWrapper>
    );
  }
}

export default Seller;
