import React, {useState, useEffect} from 'react'
import { Table, Tag, Space, Button, Modal, message } from 'antd';
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
  const [text, setText] = useState();
  const [data, setData] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pagination, setPagination] = useState({current:1, pageSize: 5})


  const columns = [
    {
      title: '报案号',
      dataIndex: 'claimNo',
      key: 'no',
      render: text => <span>{text}</span>,
    },
    {
      title: '报案人',
      dataIndex: 'submitter',
      key: 'no',
      render: text => <span>{text}</span>,
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
      title: '报案金额',
      dataIndex: 'money',
      key: 'money',
      render: (text) => {
        return <span>{"¥"+text}</span>
      }
    },
    {
      title: '案件描述',
      dataIndex: 'accidentDesc',
      key: 'desc',
      render: (text) => {
        return (
          <Button type="primary" onClick={() => showModal(text)}>
            详情
          </Button>
        );
      },
    },
    {
      title: '动作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          {
            record.status == 0 && 
            <Button type="primary" key={record.claimNo}
          onClick={()=>Status(record.claimNo, localStorage.getItem("seller"), 1)}
          // disabled={record.status == 1? true : false}
         >通过</Button>
          }
          {
            record.status == 0 && 
            <Button type="primary"  danger  key={record.claimNo}
          onClick={()=>Status(record.claimNo, localStorage.getItem("seller"), 2)}
          // disabled={record.status == 2 ? true : false}
         >拒绝</Button>
          }

          
        </Space>
      ),
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
  
  useEffect(() => {
    
    let name = localStorage.getItem("seller")
    queryClaimsByCompanyName(name,1,5).then(res=>{
      console.log(res);
      if(res.data != null) {
      setData(res.data.list)
      setPagination({...pagination, total:res.data.total})
      }
    })
  }, [])

  function refreshData(pagination) {


    let name = localStorage.getItem("seller")
    const {current,pageSize} = pagination;
    queryClaimsByCompanyName(name,current,pageSize).then(res=>{
      console.log(res);

      setData(res.data.list)
      setPagination({current: current, total:res.data.total})
    })
  }

  function Status(claimNo, resolver, status) {
    let params = {
      claimNo: claimNo,
      resolver: resolver,
      status: status
    }
    changeStatus(params).then(res=>{
      console.log(res);
      message.success("操作成功")
      
    })
    refresh()
  }

  function refresh(){
    let name = localStorage.getItem("seller")
    const {current} = pagination;
    // console.log(pageSize)
    queryClaimsByCompanyName(name,current,5).then(res=>{
      console.log(res);

      setData(res.data.list)
      // setPagination({current: current, total:res.data.total})
    })
  }
  return (
    <div>
     <h3 style={{marginBottom:"30px"}}>理赔审计</h3>
     <Table columns={columns} dataSource={data} 
     pagination={pagination} onChange={(pagination)=>refreshData(pagination)}/>
     <Modal
        title="描述详情"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <pre>{text}</pre>
      </Modal>
    </div>
  )
}
