import React, {useState, useEffect} from 'react'
import { Table, Tag, Space, Button, Modal } from 'antd';

import { queryByName } from '../../../../services/slip';
import { queryClaimsByName } from '../../../../services/claim';

const status = {
  0: "待审核",
  1: "通过",
  2: "未通过",
  
}

export default function SearchClaim() {
  const [loginName, setLoginName] = useState("");
  const [slipList, setSlipList] = useState();
  const [data, setData] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    {
      title: '保单号',
      dataIndex: 'guaranteeNo',
      key: 'no',
      render: text => <a>{text}</a>,
    },
    {
      title: '发生地点',
      dataIndex: 'locationAccident',
      key: 'location',
    },
    {
      title: '案件描述',
      dataIndex: 'accidentDesc',
      key: 'desc',
      // render: (text, record,index) => (
      //   <Space size="middle">
      //     <Button type="primary" onClick={showModal}>
      //     Open
      //   </Button>
      //   <Modal title="具体内容" key={index} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      //     <p>{text}</p>
      //   </Modal>
      //   </Space>
      // ),
    },
    {
      title: '报案日期',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '报案状态',
      dataIndex: 'status',
      key: 'status',
      render: (status1) => {
        return (
          <Space size="middle">
            <Tag color={status1 == 1 ? "green" : status1 == 2 ? "red": "gold"}>
              {status[status1]}
            </Tag>
          </Space>
        )
      }
    },
  ];

    const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  // useEffect(() => {
  //   setLoginName(localStorage.getItem("vip"))
  //   console.log(loginName)
  // },[loginName])

  useEffect(() => {
    const loginName = localStorage.getItem("vip")
    queryClaimsByName(loginName).then((res)=>{
      console.log(res)
      setData(res.data)
    })
  }, [])



  return (
    <div>
     <h3 style={{marginBottom:"30px"}}>Search Claims Status</h3>
     <Table columns={columns} dataSource={data} />
    </div>
  )
}
