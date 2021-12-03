import React, {useState, useEffect} from 'react'
import { Table, Tag, Space, Button } from 'antd';
import { queryGoodsAbbreByName, changeStatus } from '../../../services/goods';

const category = {
  1: "重疾险",
  2: "医疗险",
  3: "意外险",
  4: "财富险",
  5: "旅游线",
  6: "定期寿险",
  7: "责任险",
  8: "家财险",
}

const status = {
  0: "待审核",
  1: "已上架",
  2: "已下架",
  
}

const columns = [
  {
    title: '保险商品',
    dataIndex: 'goodsName',
    key: 'name',
    fixed: 'left',
  },
  {
    title: '保险种类',
    dataIndex: 'goodsCategoryId',
    key: 'category',
    render: (test) => {
      return (
        <Space size="middle">
          <a>{category[test]}</a>
        </Space>
      )
    }
  },
  {
    title: '保险图片',
    dataIndex: 'goodsCoverImg',
    key: 'img',
    render: (img) => (
      <Space size="middle">
        <a href={img}>图片</a>
      </Space>
    ),
  },
  {
    title: '保险状态',
    dataIndex: 'goodsSellStatus',
    key: 'status',
    fixed: 'right',
    render: (status1) => {
      return (
        <Space size="middle">
          <Tag color={status1 == 1 ? "magenta" : status1 == 2 ? "green": "cyan"}>
            {status[status1]}
          </Tag>
        </Space>
      )
    }
  },
  
];

function offProduct(goodsName) {
  changeStatus(goodsName, 2).then(res => {
    console.log(res)
  })
}


export default function SearchProducts() {
  const [data, setData] = useState([])

  useEffect(() => {
    let name = localStorage.getItem("seller")
    queryGoodsAbbreByName(name).then(res=>{
      // console.log(res);
      setData(res.data)
    })
  }, [])

  return (
    <div>
     <h3 style={{marginBottom:"30px"}}>Products Search</h3>
     <Table columns={columns} dataSource={data} />
    </div>
  )
}
