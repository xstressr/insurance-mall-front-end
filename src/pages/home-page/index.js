import React from 'react'

import { Carousel, Tabs, Button, Divider } from 'antd';
import { VerifiedOutlined, ShopOutlined, SecurityScanOutlined, RedEnvelopeOutlined } from '@ant-design/icons'


import { HomeWrapper } from './style'
import astronaut from "@/assets/img/astronaut.jpg"
import pexels from "@/assets/img/pexels.jpg"

const contentStyle = {
  height: '300px',
  color: '#fff',
  // lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



export default function Home() {
  const { TabPane } = Tabs;
  return (
    <HomeWrapper>
      <div className="header">
        <div className="header-top">
          <div className="header-left">
          <ul className="left-item">
            <li><a href="/" className="login">欢迎登陆JOJO保险商城</a></li>
            <li></li>
            <li className="tooltipBox">
              <a>我的</a>
              <div className="myTooltip">
                <a>我的订单</a>
                <a>我的购物车</a>
                <a>快速理赔</a>
                <a>服务记录</a>
                <a>核保记录</a>
              </div>
            </li>
            <li></li>
            <li>商家入住</li>
            <li></li>
            <li>积分商城</li>
            <li></li>
            <li>保单查询</li>
            <li></li>
          </ul>
          
          </div>
          <div className="header-right">
            <a href="/" className="login">登陆/注册</a>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div style={{ display: "flex" }}>
          <div>
            <VerifiedOutlined style={{ fontSize: "30px", margin: "0 10px" }} />
          </div>
          <div>
            <ShopOutlined style={{ fontSize: "30px", margin: "0 10px" }} />
          </div>
          <div>
            <SecurityScanOutlined style={{ fontSize: "30px", margin: "0 10px" }} />

          </div>
          <div>
            <RedEnvelopeOutlined style={{ fontSize: "30px", margin: "0 10px" }} />

          </div>
        </div>

      </div>
      <div className="carousel">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <img src={astronaut} alt="轮播图1"></img>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src={pexels} alt="轮播图2"></img>
            </h3>
          </div>
        </Carousel>
      </div>

      <div className="content">
        <div className="content-top">
          <div className="content-top-left">
            <div className="content-top-left-title" >
              <Tabs defaultActiveKey="1" >
                <TabPane tab="人身保障" key="1">
                  <a>成人保险</a>
                  <div style={{display:"inline-block"}}>
                    <a>test </a>
                    <a>test </a>
                    <a>test </a>
                  </div>
                </TabPane>
                <TabPane tab="财富保险" key="2">
                  
                <a>test保险</a>
                  <div style={{display:"inline-block"}}>
                    <a>test </a>
                    <a>test </a>
                    <a>test </a>
                  </div>
                </TabPane>
                <TabPane tab="旅游出行" key="3">
                  
                <a>小孩保险</a>
                  <div style={{display:"inline-block"}}>
                    <a>test </a>
                    <a>test </a>
                    <a>test </a>
                  </div>
                </TabPane>
                <TabPane tab="全部产品" key="4">
                <a>全部保险</a>
                  <div style={{display:"inline-block"}}>
                    <a>test </a>
                    <a>test </a>
                    <a>test </a>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
          <div className="content-top-right">
            <div className="content-top-right-title">
              <div className="pic">
                <img src="//img.huizecdn.com/hz/www/page/core_pc/avator.png" alt="头像" style={{ width: "48px", height: "48px" }} />
              </div>
              <div className="content-top-right-header">Hi~登录发现更多精彩</div>
              <div className="content-top-right-header">
                <a href="/">
                  <Button type="primary" >
                    <span>登录 / 注册</span>
                  </Button>
                </a>
                <Button >
                  <span>新人福利</span>
                </Button>
              </div>

            </div>
            {/* <Divider /> */}
            <div>
              <div >
                <h4  href="https://www.huize.com/hz-planet/lanmu/tuijian/0">
                  <span style={{fontSize:"16px"}}>保险头条</span>
                  <a  href="https://www.huize.com/hz-planet/lanmu/tuijian/0" target="_blank">
                    <span>更多</span>
                    <div >
                    </div>
                  </a>
                </h4>
                <a  target="_blank"  href="//www.huize.com/hz-planet/article/15397">
                  <img src="//img.huizecdn.com/hz/www/page/core_pc/1.png" alt="" style={{width:"7px",marginLeft:"3px"}} />
                  <span>又要年度体检了，这件事情赶紧做！</span>
                </a>
                <a  target="_blank"  href="//www.huize.com/hz-planet/article/15396">
                  <img src="//img.huizecdn.com/hz/www/page/core_pc/2.png" alt="" style={{width:"7px",marginLeft:"3px"}} />
                  <span>穗岁康2022强势回归！245万保额，有既往病史也能赔！</span>
                </a><a  href="//www.huize.com/hz-planet/article/15398">
                  <img src="//img.huizecdn.com/hz/www/page/core_pc/3.png" alt="" style={{width:"7px",marginLeft:"3px"}} />
                  <span>北京人寿超好保，要超越达尔文5号换新版了！</span></a></div>

            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  )
}