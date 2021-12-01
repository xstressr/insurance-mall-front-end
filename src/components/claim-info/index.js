import React, {useEffect} from 'react'
import { Image,Button } from 'antd'

export default function ClaimInfo(props) {
  useEffect(() => {
    console.log(props)
    
  }, [])
  return (
    <div>
      <div className="item">
        {/* <div className="item-title">
          <h1>{props.detail.goodsName}</h1>
          <Image width={200} src={props.detail.goodsCoverImg} />
          <div>
            <h4>{props.detail.goodsIntro}</h4>
            <p>{props.detail.goodsDetailContent}</p>
          </div>
          <div>
            <Button type="primary">投保</Button>
          </div>
        </div> */}
        test
      </div>
    </div>
  )
}
