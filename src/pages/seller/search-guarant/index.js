import React, {useState, useEffect} from 'react'
import { Table, Tag, Space, Button, Modal,Input } from 'antd';
import { queryGoodsByName, changeStatus } from '../../../services/goods';
import { queryByCompany } from '../../../services/slip';


const { Search } = Input;

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




export default function SearchGuarant() {
  const [data, setData] = useState([])
  const [text, setText] = useState();
  const [pagination, setPagination] = useState({current:1, pageSize: 5})
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [company, setCompany] = useState("")

  const columns = [
    
    
    {
      title: '保险商品',
      dataIndex: 'product',
      key: 'name',
      fixed: 'left',
      width:150,
    },
    {
      title: '保单号',
      dataIndex: 'guaranteeNo',
      key: 'name',
      fixed: 'left',
      width:150,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'category',
      width:100,
      // render: text => {
      //   return <span>{formatDate(text)}</span>
      // }
    },
    {
      title: '购买价格',
      dataIndex: 'price',
      key: 'img',
      width: 100,
      render: (text) => {
        return <span>{"¥" + text}</span>;
      },
    },
    {
      title: '被保人名字',
      dataIndex: 'name',
      key: 'name',
      width:150,
    },
    {
      title: '被保人身份证号',
      dataIndex: 'idNo',
      key: 'name',
      width:150,
    },
    {
      title: '被保人年龄',
      dataIndex: 'age',
      key: 'name',
      width:150,
    },
    {
      title: '被保人职业等级',
      dataIndex: 'career',
      key: 'name',
      width:150,
    },
    {
      title: '被保人手机号',
      dataIndex: 'mobile',
      key: 'name',
      width:150,
    },
    {
      title: '被保人邮箱',
      dataIndex: 'email',
      key: 'name',
      width:150,
    },
    {
      title: '被保人地址',
      dataIndex: 'address',
      key: 'name',
      width:150,
    },
    {
      title: '被保人身高',
      dataIndex: 'height',
      key: 'name',
      width:150,
      render: text => {
        return <span>{text+"cm"}</span>
      }
    },
    // {
    //   title: '被保人身高',
    //   dataIndex: 'weight',
    //   key: 'name',
    //   width:150,
    //   render: (text) => {
    //     return (
    //       <Button type="primary" onClick={() => showModal(text)}>
    //         详情
    //       </Button>
    //     );
    //   },
    // },
    // {
    //   title: '保险初始售价',
    //   dataIndex: 'sellingPrice',
    //   key: 'name',
    //   width:150,
    //   render: (text) => {
    //     return <span>{"¥" + text}</span>;
    //   },
    // },
    // {
    //   title: '保障期限',
    //   dataIndex: 'deadline',
    //   key: 'name',
    //   width:150,
    // },
    // {
    //   title: '保险状态',
    //   dataIndex: 'goodsSellStatus',
    //   key: 'status',
    //   fixed: 'right',
    //   width: 100,
    //   render: (status1) => {
    //     return (
    //       <Space size="middle">
    //         <Tag color={status1 == 1 ? "magenta" : status1 == 2 ? "green": "cyan"}>
    //           {status[status1]}
    //         </Tag>
    //       </Space>
    //     )
    //   }
    // },
    
  ];
  
  // function offProduct(goodsName) {
  //   changeStatus(goodsName, 2).then(res => {
  //     console.log(res)
  //   })
  // }

  // const showModal = (text) => {
  //   setText(text);
  //   setIsModalVisible(true);
  // };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    let name = localStorage.getItem("seller")
    setCompany(name)
    
  }, [])

  function refreshData(pagination) {
    let name = localStorage.getItem("seller")
    const {current,pageSize} = pagination;
    queryByCompany(name,1,5,username).then(res=>{
      if(res.data != null){
      setData(res.data.list)
      setPagination({...pagination, total:res.data.total})
      }
    })
  }
  // function formatDate(date) {
  //   var d =new Date(date).format('yyyy-MM-dd');
  //   console.log(d)
  //   return d;
  // }
  // function formatDate (date, format = 'YYYY-MM-DD') {
  //   if (!date) {
  //     return null
  //   }
  //   return moment(date).format(format)
  // }

  function onSearch(value) {
    queryByCompany(company,1,5,value).then(res=>{
      if(res.data != null){
      setData(res.data.list)
      setPagination({...pagination, total:res.data.total})
      } else {
        setData([])
      }
    })
  };

  return (
    <div>
     <h3 style={{marginBottom:"30px"}}>用户保单查询</h3>
     <Search
      placeholder="输入购买账号查询"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={(value)=>onSearch(value)}
      style={{margin:"20px 0px"}}
    />
     <Table columns={columns} dataSource={data} scroll={{ x: 1000 }} loading={loading}
     pagination={pagination} onChange={(pagination)=>refreshData(pagination)}/>
     <Modal
        title="描述详情"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{text}</p>
      </Modal>
    </div>
  )
}
