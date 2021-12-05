import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Form,
  Input,
  Radio,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  message,
  Modal,
} from "antd";
import { Layout, Menu, Breadcrumb } from "antd";
import { useHistory } from "react-router";

import { RegisterWrapper } from "./style";
import { JYFooter } from "../../components/footer";
import {
  vipRegister,
  thirdRegister,
  adminRegister,
} from "../../services/register";

const { Option } = Select;
const { Header, Content, Footer } = Layout;

export default function Register() {
  const [form] = Form.useForm();
  let history = useHistory();

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  // const suffixSelector = (
  //   <Form.Item name="suffix" noStyle>
  //     <Select style={{ width: 70 }}>
  //       <Option value="USD">$</Option>
  //       <Option value="CNY">¥</Option>
  //     </Select>
  //   </Form.Item>
  // );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const [dotPosition, setDotPosition] = useState("top");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const register = () => {
    console.log(form.getFieldValue("workType"));
    let workType = form.getFieldValue("workType");
    let loginName = form.getFieldValue("loginName");
    let loginPassword = form.getFieldValue("loginPassword");
    let nickName = form.getFieldValue("nickName");
    let loginMobile = form.getFieldValue("loginMobile");

    let registerInfo = {
      loginName: loginName,
      loginPassword: loginPassword,
      nickName: nickName,
      loginMobile: loginMobile,
    };

    switch (workType) {
      case "vip": {
        vipRegister(registerInfo)
          .then((res) => {
            console.log(res);
            if (res.resultCode) {
              message.success("Register success! The page will return");
              setTimeout(() => {
                history.push("/login");
              }, 1500);
            }
          })
          .catch((err) => {});

        break;
      }
      case "third": {
        thirdRegister(registerInfo)
          .then((res) => {
            console.log(res);
            if (res.resultCode) {
              message.success("Register success! The page will return");
              setTimeout(() => {
                history.push("/login");
              }, 1500);
            }
          })
          .catch((err) => {});
        break;
      }

      case "admin": {
        adminRegister(registerInfo)
          .then((res) => {
            console.log(res);
            if (res.resultCode) {
              message.success("Register success! The page will return");
              setTimeout(() => {
                history.push("/login");
              }, 1500);
            }
          })
          .catch((err) => {});
        break;
      }
      default:
    }
  };

  return (
    <RegisterWrapper>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["shop"]}>
            <Menu.Item key="shop">{"JOJO商城"}</Menu.Item>
            <Menu.Item key="exit">
            <NavLink to={"/"} >Exit</NavLink>
            </Menu.Item>
            
          </Menu>
        </Header>
        <Content style={{ padding: "50px 50px" }}>
          
          <div className="site-layout-content register-content">
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                prefix: "86",
              }}
              scrollToFirstError
            >
              <Form.Item name="workType" label="类型">
                <Radio.Group
                  onChange={handlePositionChange}
                  value={dotPosition}
                  style={{ marginBottom: 8 }}
                >
                  <Radio.Button value="vip">会员</Radio.Button>
                  <Radio.Button value="third">第三方公司</Radio.Button>
                  <Radio.Button value="admin">管理员</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="loginName"
                label="登录名"
                tooltip="您想要登陆网站的名字?"
                rules={[
                  {
                    required: true,
                    message: "请输入您的登录名!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="loginPassword"
                label="密码"
                rules={[
                  {
                    required: true,
                    message: "请输入您的密码!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="确认密码"
                dependencies={["loginPassword"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "请再输入一次密码!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("loginPassword") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error(
                          "两次输入密码不一致，请重新输入!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="nickName"
                label="昵称"
                tooltip="你想要其他用户叫你的名字?"
                rules={[
                  {
                    required: true,
                    message: "请输入您的昵称!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="loginMobile"
                label="手机号"
                rules={[
                  {
                    required: true,
                    message: "请输入您的手机号!",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="intro"
                label="自我介绍"
                rules={[
                  {
                    message: "请输入您的自我介绍",
                  },
                ]}
              >
                <Input.TextArea showCount maxLength={100} />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Should accept agreement")),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>
                  我已阅读 <a onClick={showModal}>注册协议</a>
                  <Modal
                    title="协议"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <div style={{ height: '60vh', overflowY: 'auto' }}>
                    <p>尊敬的会员：
欢迎注册JOJO网，在使用前请您仔细阅读会员协议。注册即视为同意《JOJO网会员协议》，则意味着您已接受并自愿遵守本协议。

一、会员权利和义务
      1、会员在遵守会员协议的前提下，依法享有本网站提供的服务，有权对本网站的服务进行监督、批评和指导，网站欢迎会员提出服务改进建议，并会以勤勉态度为会员提供服务。会员对于本网站提供的服务有任何疑问，应及时通知本网站。

      2、会员应当按照本协议和网站的有关管理规则提交注册信息，并保证注册信息的真实性和完整性。如发现会员账号中含有不雅文字或不恰当名称的，本系统保留取消其会员资格的权利。
      (1)请勿以党和国家领导人或其他社会名人的真实姓名、字号、艺名、笔名注册；
      (2)请勿以国家机构或其他机构的名称注册；
      (3)请勿注册不文明、不健康名字，或包含歧视、侮辱、猥亵类词语的账号；
      (4)请勿注册易产生歧义、引起他人误解或其它不符合法律规定的账号。

      3、会员有义务保证密码和账号的安全，不得以任何形式擅自转让或授权他人使用自己在本网站的会员账号，会员对其在本网站注册的会员名和密码、账户资金及其它保单资料的安全性负全部责任，并对以其会员名进行的所有活动和事件负全部责任。如会员发现账号遭到未授权的使用或发生其他任何安全问题，应立即修改账号密码并妥善保管，如有必要，请通知网站服务人员。

      4、会员通过本网站进行商务活动所引起的一切法律纠纷均与本网站无关。因会员违反有关法律、法规或本协议的有关规定而给本网站或者第三方造成损失的，会员同意赔偿因此而导致的全部损失，包括但不限于实际损失、可预期利益、因此发生的诉讼费、律师费、赔偿金等。

      5、会员在本网站实施了违法行为，导致第三方投诉（包括但不限于第三方以发函等形式指控本网站侵权，对本网站提起诉讼、仲裁，或使本网站面临相关主管机关的审查或质询)本网站有权先暂停会员对本网站的使用。会员应在收到本网站通知后，以自己名义出面与第三方协商、应诉或接受相关主管机关审查或质询，并承担所有费用，并赔偿因此给本网站造成的全部损失。

      6、会员不得通过任何方式攻击、干扰或试图攻击、干扰本网站的正常运作及有关活动，也不得帮助或教唆任何第三方从事上述活动。

二、慧择网权利义务

      1、本网站在线投保系统已嵌入承保保险公司的核保规则，所有核保工作将由系统自动进行，会员提交的投保资料将自动转入保险公司核心业务系统，若无特殊情况，将不会与会员进行二次确认信息。

      2、本网站不对外公开或向第三方提供会员的注册资料及会员在使用网络服务时存储在本系统的非公开内容，但下列情况除外：

      (1)事先获得会员的明确授权；

      (2)根据有关的法律法规要求；

      (3)按照相关政府主管部门的要求；

      (4)为维护社会公众的利益。

      3、本网站含有与其他网站的链接。本网站与链接的网站有合作关系，但并不能控制这些网站及其所提供的资源，所以本网站对链接网站上的内容、广告、服务、产品信息的真实有效性不负责任，并且对因链接网站上的内容、广告、服务、产品信息的失实而造成的损失不负任何法律责任。

      4、对于系统发生故障影响到本网站的正常运行，本网站承诺及时处理进行修复。

      5、本网站拥有对本协议条款的解释权。会员对服务或本协议条款的任何部分之意见及建议可通过客户服务部门与本网站联系。

三、版权声明

本网站特有的标识、版面设计、编排方式等版权均属本网站享有，未经本网站许可，不得任意复制或转载。

四、协议的变更、解除和终止

      1、变更

      本网站可以根据客观情况的变化随时进行业务性调整或产品性调整，并变更本会员协议，变更后的本会员协议将会在本网站上重新公布。会员可以选择继续使用调整后的业务或产品，但是如果会员对变更后的会员协议持有不同意见，可以选择退出本网站，但本网站对此不承担任何法律责任和费用补偿。如果会员继续选择享用本网站，则视为会员已经完全接受本协议及其修改。

      2、解除和终止

      如发生下列任何一种情形，本网站有权随时中断或终止向会员提供服务而无需通知该会员：

      （1）会员提供的个人资料不真实；

      （2）会员违反法律或者本协议及其修改文本的规定。

五、不可抗力

      1、本协议是指协议双方不能合理控制、不可预见或即使预见亦无法避免的事件，该事件使任何一方根据本协议履行其全部或部分义务已不可能。该事件包括但不限于政府行为、地震、台风、洪水、火灾或其它天灾、战争或任何其它类似事件。 鉴于互联网之特殊性质，不可抗力亦包括下列影响互联网正常运行之情形：1）黑客攻击；2）电信部门技术调整导致之重大影响；3）病毒侵袭等。

      2、本网站如遭受不可抗力事件，有权暂停或终止服务，不视为违约。在不可抗力事件影响结束后，应当继续按本协议履行其义务。

六、法律适用及争议解决

      1、本协议的订立、生效、解释、执行、管辖、争议的解决均适用中华人民共和国法律。

      2、因本协议引起的或与本协议有关的任何争议，应尽最大诚意进行友好协商，如果不能协商一致，可向本网站所属公司所在地人民法院提起诉讼。

七、附则

      1、本网站未行使或执行本会员协议任何权利或规定，不构成对前述权利或权益之放弃。

     2、如本会员协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本会员协议的其余条款仍应有效并且有约束力。

本协议解释权及修订权归JOJO保险经纪有限公司所有。</p>
                    
                    </div>
                  </Modal>
                </Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" onClick={register}>
                  注册
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <JYFooter />
      </Layout>
    </RegisterWrapper>
  );
}
