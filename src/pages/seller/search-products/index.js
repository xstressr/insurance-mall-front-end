import React, {useState, useEffect} from 'react'
import { Table, Tag, Space, Button, Modal } from 'antd';
import { queryGoodsByName, changeStatus } from '../../../services/goods';

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




export default function SearchProducts() {
  const [data, setData] = useState([])
  const [text, setText] = useState();
  const [pagination, setPagination] = useState({current:1, pageSize: 5})
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false)

  const columns = [
    
    {
      title: '保险公司',
      dataIndex: 'createUser',
      key: 'company',
      fixed: 'left',
      width:100,
      
    },
    {
      title: '保险商品',
      dataIndex: 'goodsName',
      key: 'name',
      fixed: 'left',
      width:150,
    },
    {
      title: '保险种类',
      dataIndex: 'goodsCategoryId',
      key: 'category',
      width:100,
      render: (test) => {
        return (
          <Space size="middle">
            <span>{category[test]}</span>
          </Space>
        )
      }
    },
    {
      title: '保险图片',
      dataIndex: 'goodsCoverImg',
      key: 'img',
      width: 100,
      render: (img) => (
        <Space size="middle">
          <a href={img}>图片</a>
        </Space>
      ),
    },
    {
      title: '保险介绍',
      dataIndex: 'goodsIntro',
      key: 'name',
      width:150,
    },
    {
      title: '保险内容',
      dataIndex: 'goodsDetailContent',
      key: 'name',
      width:150,
      render: (text) => {
        return (
          <Button type="primary" onClick={() => showModal(text)}>
            详情
          </Button>
        );
      },
    },
    {
      title: '保险初始售价',
      dataIndex: 'sellingPrice',
      key: 'name',
      width:150,
      render: (text) => {
        return <span>{"¥" + text}</span>;
      },
    },
    {
      title: '保障期限',
      dataIndex: 'deadline',
      key: 'name',
      width:150,
    },
    {
      title: '保障最高额度',
      dataIndex: 'claimAmount',
      key: 'name',
      width:150,
      render: (text) => {
        return <span>{"¥" + text}</span>;
      },
    },
    {
      title: '保险种类',
      dataIndex: 'goodsCategoryId',
      key: 'category',
      render: (test) => {
        return (
          <Space size="middle">
            <span>{category[test]}</span>
          </Space>
        )
      }
    },
    
    {
      title: '保险状态',
      dataIndex: 'goodsSellStatus',
      key: 'status',
      fixed: 'right',
      width: 100,
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
    setLoading(true)

    queryGoodsByName(name,1,5).then(res=>{
      console.log(res);
      setLoading(false)
      if(res.data != null){
      setData(res.data.list)
      setPagination({...pagination, total:res.data.total})
      }
    })
  }, [])

  function refreshData(pagination) {

    setLoading(true)
    let name = localStorage.getItem("seller")
    const {current,pageSize} = pagination;
    // console.log(pagination)
    console.log(current);
    console.log(pageSize);
    queryGoodsByName(name,current,pageSize).then(res=>{
      console.log(res);
      setLoading(false)
      setData(res.data.list)
      setPagination({current: current, total:res.data.total})
    })
  }

  return (
    <div>
     <h3 style={{marginBottom:"30px"}}>产品查询</h3>
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
