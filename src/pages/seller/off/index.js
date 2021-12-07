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



export default function Off() {
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState({current:1, pageSize: 5})

  useEffect(() => {
    let name = localStorage.getItem("seller")
    queryGoodsAbbreByName(name,1,5).then(res=>{
      console.log(res);
      if(res.data!=null){
      setData(res.data.list)
      setPagination({...pagination, total:res.data.total})
      }
    })
  }, [])

  function refreshData(pagination) {


    let name = localStorage.getItem("seller")
    const {current,pageSize} = pagination;
    // console.log(pagination)
    console.log(current);
    console.log(pageSize);
    queryGoodsAbbreByName(name,current,pageSize).then(res=>{
      console.log(res);
      
      setData(res.data.list)
      setPagination({current: current, total:res.data.total})
    })
  }

  const columns = [
    {
      title: '保险商品',
      dataIndex: 'goodsName',
      key: 'name',
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
    {
      title: 'Action',
      key: 'action',
      render: (text, record,index) => (
        <Space size="middle">
          <Button type="primary" danger 
          disabled={record.goodsSellStatus == 2 ? true : false}
          onClick={()=>offProduct(record.goodsName,index)}>下架</Button>
        </Space>
      ),
    },
  ];
  
  function offProduct(goodsName,index) {
    changeStatus(goodsName, 2).then(res => {
      console.log(res)
    })
    data.splice(index,1)
    const arr2 = [...data]
    setData(arr2)
  }
  

  return (
    <div>
     <h3 style={{marginBottom:"30px"}}>产品下架</h3>
     <Table columns={columns} dataSource={data} 
     pagination={pagination} onChange={(pagination)=>refreshData(pagination)}/>
    </div>
  )
}
