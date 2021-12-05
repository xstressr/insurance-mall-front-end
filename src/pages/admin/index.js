import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  AppstoreOutlined,
  SettingOutlined,
  ArrowUpOutlined 
} from "@ant-design/icons";

import { AdminWrapper } from "./style";

import { AdminMenu } from "../../common/local-data";
import { JYFooter } from "../../components/footer";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Admin extends Component {

  removeLocalStorage() {
    // console.log("test")
    localStorage.removeItem("admin")
  }
  
  render() {
    const {route} = this.props;

    return (
      <AdminWrapper>
        <Layout>
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1" icon={<AppstoreOutlined />}>nav 1</Menu.Item>
              <Menu.Item key="2" icon={<SettingOutlined />}>nav 2</Menu.Item>
              <Menu.Item key="3" icon={<ArrowUpOutlined />}>
                <NavLink to={"/login"} onClick={()=>this.removeLocalStorage()}>Exit</NavLink>
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
                <SubMenu key="sub1" icon={<UserOutlined />} title="管理员功能">
                  {AdminMenu.map((item,index) => {
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
      </AdminWrapper>
    );
  }
}

export default Admin;
