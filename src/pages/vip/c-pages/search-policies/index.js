import React, { useState, useEffect } from "react";
import { Table, Tag, Space } from "antd";

import { queryByName } from "../../../../services/slip";

const columns = [
  {
    title: "保单号",
    dataIndex: "guaranteeNo",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "公司",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "保单持有人",
    dataIndex: "owner",
    key: "age",
  },
  {
    title: "购买日期",
    dataIndex: "createTime",
    key: "address",
  },
  {
    title: "购买产品",
    dataIndex: "product",
    key: "address",
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

export default function SearchPolicies() {
  const [loginName, setLoginName] = useState("");
  const [slipList, setSlipList] = useState();
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });

  // useEffect(() => {
  //   setLoginName(localStorage.getItem("vip"))
  //   console.log(loginName)
  // },[loginName])

  useEffect(() => {
    const loginName = localStorage.getItem("vip");
    queryByName(loginName, 1, 5).then((res) => {
      console.log(res);
      if(res.data != null) {

      
      setData(res.data.list);
      setPagination({...pagination, total:res.data.total})
      }
    });
  }, []);

  function refreshData(pagination) {
    let name = localStorage.getItem("vip");
    const { current, pageSize } = pagination;
    queryByName(name, current, pageSize).then((res) => {
      setData(res.data.list);
      setPagination({ current: current, total: res.data.total });
    });
  }

  return (
    <div>
      <h3 style={{ marginBottom: "30px" }}>查询保单</h3>
      <Table
        columns={columns}
        dataSource={data}
        pagination={pagination}
        onChange={(pagination) => refreshData(pagination)}
      />
    </div>
  );
}
