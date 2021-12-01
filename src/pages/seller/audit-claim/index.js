import React, {useState, useEffect} from 'react'
import { Table, Tag, Space, Button, Modal } from 'antd';
import { queryClaimsByCompanyName, changeStatus } from '../../../services/claim';

// import { queryByName } from '../../../../services/slip';

// const columns = [
//   {
//     title: '保单号',
//     dataIndex: 'guaranteeNo',
//     key: 'name',
//     render: text => <a>{text}</a>,
//   },
//   {
//     title: '公司',
//     dataIndex: 'company',
//     key: 'company',
//   },
//   {
//     title: '保单持有人',
//     dataIndex: 'owner',
//     key: 'age',
//   },
//   {
//     title: '购买日期',
//     dataIndex: 'createTime',
//     key: 'address',
//   },
//   {
//     title: '购买产品',
//     dataIndex: 'product',
//     key: 'address',
//   },
// ];

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
const status = {
  0: "待审核",
  1: "通过",
  2: "未通过",
  
}

export default function AuditClaim() {
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
      title: '报案人',
      dataIndex: 'submitter',
      key: 'no',
      render: text => <a>{text}</a>,
    },
    {
      title: '发生地点',
      dataIndex: 'locationAccident',
      key: 'location',
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
    {
      title: '案件描述',
      dataIndex: 'accidentDesc',
      key: 'desc',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          {
            record.status == 0 && 
            <Button type="primary"
          onClick={()=>Status(record.guaranteeNo, localStorage.getItem("seller"), 1)}
          // disabled={record.status == 1? true : false}
         >通过</Button>
          }
          {
            record.status == 0 && 
            <Button type="primary"  danger
          onClick={()=>Status(record.guaranteeNo, localStorage.getItem("seller"), 2)}
          // disabled={record.status == 2 ? true : false}
         >拒绝</Button>
          }

          
        </Space>
      ),
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
  
  useEffect(() => {
    
    refreshData()
  }, [])

  function refreshData() {
    const company = localStorage.getItem("seller")

    queryClaimsByCompanyName(company).then(res=>{
      console.log(res)
      setData(res.data)
    })

  }

  function Status(guaranteeNo, resolver, status) {
    let params = {
      guaranteeNo: guaranteeNo,
      resolver: resolver,
      status: status
    }
    changeStatus(params).then(res=>{console.log(res)})
    refreshData()
  }

  return (
    <div>
     <h3 style={{marginBottom:"30px"}}>Audit Claims</h3>
     <Table columns={columns} dataSource={data} />
    </div>
  )
}
