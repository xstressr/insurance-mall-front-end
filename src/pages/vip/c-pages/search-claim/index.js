import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Button, Modal } from "antd";

import { queryByName } from "../../../../services/slip";
import { queryClaimsByName } from "../../../../services/claim";

const status = {
  0: "待审核",
  1: "通过",
  2: "未通过",
};

export default function SearchClaim() {
  const [loginName, setLoginName] = useState("");
  const [slipList, setSlipList] = useState();
  const [data, setData] = useState([]);
  const [text, setText] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pagination, setPagination] = useState({current:1, pageSize: 5})

  const columns = [
    {
      title: "报案号",
      dataIndex: "claimNo",
      key: "no",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "发生地点",
      dataIndex: "locationAccident",
      key: "location",
    },
    {
      title: "案件描述",
      dataIndex: "accidentDesc",
      key: "desc",
      render: (text) => {
        return (
          <Button type="primary" onClick={() => showModal(text)}>
            详情
          </Button>
        );
      },
    },
    {
      title: "报案金额",
      dataIndex: "money",
      key: "money",
      render: (text) => {
        return <span>{"¥" + text}</span>;
      },
    },
    {
      title: "报案日期",
      dataIndex: "createTime",
      key: "createTime",
    },
    {
      title: "报案状态",
      dataIndex: "status",
      key: "status",
      render: (status1) => {
        return (
          <Space size="middle">
            <Tag color={status1 == 1 ? "green" : status1 == 2 ? "red" : "gold"}>
              {status[status1]}
            </Tag>
          </Space>
        );
      },
    },
  ];

  const showModal = (text) => {
    setText(text);
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
    const loginName = localStorage.getItem("vip");
    queryClaimsByName(loginName,1,5).then((res) => {
      console.log(res);
      if(res.data != null) {
      setData(res.data.list);
      setPagination({...pagination, total:res.data.total})
      }
    });
  }, []);

  function refreshData(pagination) {


    let name = localStorage.getItem("vip")
    const {current,pageSize} = pagination;



    queryClaimsByName(name,current,pageSize).then(res=>{
      console.log(res);

      setData(res.data.list)
      setPagination({current: current, total:res.data.total})
    })
  }

  return (
    <div>
      <h3 style={{ marginBottom: "30px" }}>查询理赔状态</h3>
      <Table columns={columns} dataSource={data} pagination={pagination} onChange={(pagination)=>refreshData(pagination)}/>
      <Modal
        title="描述详情"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <pre>{text}</pre>
      </Modal>
    </div>
  );
}
