import React, {useState, useEffect} from 'react'
import { Table, Tag, Space } from 'antd';

import { queryByName } from '../../../../services/slip';

const columns = [
  {
    title: '保单号',
    dataIndex: 'guaranteeNo',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '公司',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: '保单持有人',
    dataIndex: 'owner',
    key: 'age',
  },
  {
    title: '购买日期',
    dataIndex: 'createTime',
    key: 'address',
  },
  {
    title: '购买产品',
    dataIndex: 'product',
    key: 'address',
  },
];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

export default function SearchClaim() {
  const [loginName, setLoginName] = useState("");
  const [slipList, setSlipList] = useState();
  const [data, setData] = useState([])

  // useEffect(() => {
  //   setLoginName(localStorage.getItem("vip"))
  //   console.log(loginName)
  // },[loginName])

  useEffect(() => {
    const loginName = localStorage.getItem("vip")
    queryByName(loginName).then((res)=>{
      console.log(res)
      setData(res.data)
    })
  }, [])

  function querySlips() {
    

  }


  return (
    <div>
     <h3 style={{marginBottom:"30px"}}>Search Policies</h3>
     <Table columns={columns} dataSource={data} />
    </div>
  )
}
