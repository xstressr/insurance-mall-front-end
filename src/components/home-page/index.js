import { Carousel } from 'antd';
import React from 'react'
import { HomeWrapper } from './style'
import { VerifiedOutlined, ShopOutlined, SecurityScanOutlined, RedEnvelopeOutlined} from '@ant-design/icons'

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '200px',
  color: '#fff',
  // lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



export default function Home() {
  return (
    <HomeWrapper>
      <div className="header">
        <div className="header-top">
          <div className="header-left">欢迎登陆JOJO保险商城</div>
          <div className="header-right">
            <a href="/">登陆/注册</a>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div style={{display:"flex"}}>
          <div>
            <VerifiedOutlined style={{fontSize:"30px",margin:"0 10px"}}/>
          </div>
          <div>
          <ShopOutlined style={{fontSize:"30px",margin:"0 10px"}}/>
          </div>
          <div>
          <SecurityScanOutlined style={{fontSize:"30px",margin:"0 10px"}}/>

          </div>
          <div>
        <RedEnvelopeOutlined style={{fontSize:"30px",margin:"0 10px"}}/>

          </div>
        </div>

      </div>
      <div className="carousel">
        <Carousel afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    </HomeWrapper>
  )
}