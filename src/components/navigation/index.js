import React from "react";
import { NaviWrapper } from "./style";

export default function ProductNavi() {
  return (
    <NaviWrapper>
      <div className="detail-pane pt30 pl30 pb30">
        <div className="detail-product-claims pr30">
          <div className="product-claims-service">
            <div className="claims-service-box">
              <ul className="claims-service-tab-menu tac clearfix">
                <li className="claims-service-tab-item active">

                  <p className="pt20">1、报案</p>
                </li>

                

                <li className="claims-service-tab-item ">

                  <p className="pt20">2、提交理赔资料</p>
                </li>

                <li className="claims-service-tab-item claims-service-tab-separator">

                </li>

                <li className="claims-service-tab-item ">

                  <p className="pt20">3、理赔资料审核</p>
                </li>



                <li className="claims-service-tab-item ">

                  <p className="pt20">4、领取赔款</p>
                </li>
              </ul>

              <div className="claims-service-tab-container">
                <div className="claims-service-tab-pane ">
                  您可通过如下方式报案:
                  <br />{" "}
                  ①微信报案:您可通过微信公众号在线报案
                  <br /> ②电话报案:拨打电话13381501606
                  <br />
                </div>

                <div className="claims-service-tab-pane fn-hide">
                  1、报案成功后，我们会给您发送索赔指引邮件,告知您理赔流程、资料要求及资料递交方式。
                  <br />{" "}
                  2、同时，我们还会给您发送报案短信，点击短信中的链接，可在线查看索赔指引、理赔联系方式、理赔进度等。
                  <br />{" "}
                  3、如您不确定资料是否齐全，可通过短信链接在线上传或拍照发至您的理赔经纪人邮箱，我们将会协助您进行预审，并指引您办理后续索赔。
                  <br />
                </div>

                <div className="claims-service-tab-pane fn-hide">
                  事故责任明确、理赔资料齐全的案件,审核周期为:小马闪赔（如支持）一般为1个工作日,普通类一般为5-7个工作日,重大类一般为20-22个工作日。
                </div>

                <div className="claims-service-tab-pane fn-hide">
                  理赔款一般在结案后的1-2个工作日可以到账。为保障到账时效,建议在提交理赔资料时以工、农、中、建、交或邮储等银行卡作为收款账户，并在申请书上写明具体开户行。
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div className="product-claims-notice">
            <h3 className="f14 pb20 pt20 mb20 fc6 fb bor-bottom">理赔须知</h3>

            <div className="f12 lh20 clearfix">
              1、发生保险事故,请联系慧择报案，可拨打全国服务电话13381501606，或通过微信公众号在线报案。
              <br /> <br />{" "}
              2、报案时，请您提供保单号(或有效证件号码)、出险人姓名、出险时间、出险地点、出险原因、治疗就医情况等基本信息。
              <br /> <br />{" "}
              3、您向慧择报案后,我们将会给您发送索赔指引邮件、报案短信，告知您理赔流程、索赔资料、资料递交方式、后续理赔进度查询方式等。
              <br /> <br />{" "}
              4、发生保险事故如需前往医院就诊，请到合同约定的医院(境内一般是二级或二级以上公立医院)进行就诊治疗，并请提醒主治医生使用医保范围内可报销的药品、诊疗项目及服务设施。
              <br /> <br />{" "}
              5、就诊同时，请妥善保存病历(包含首诊病历)、发票、费用清单、处方、诊断证明、检查化验报告、住院病历等就医材料,以便后续向保险公司办理索赔。
              <br /> <br />{" "}
              6、在整个理赔过程中，慧择会为您提供全程理赔协助服务:包括理赔风险评估、理赔资料准备指导、理赔办理流程指引、全程跟进理赔进展、理赔结果合理性评估等。
              <br /> <br /> 7、【强制隔离每日津贴保险金申请材料】
              <br />{" "}
              保险金申请人向保险人申请给付保险金时，应提交以下材料。保险金申请人因特殊原因不能提供以下材料的，应提供其他合法有效的材料。保险金申请人未能提供有关材料，导致保险公司无法核实该申请的真实性的，保险公司对无法核实部分不承担给付保险金的责任。
              <br /> （1）索赔申请表；
              <br /> （2）被保险人身份证明；
              <br />{" "}
              （3）居住地或工作所在地、旅行途经地或目的地的当地政府或防疫部门授权强制隔离命令文件；
              <br />{" "}
              （4）当地防疫部门或保险人认可的医疗机构出具的强制隔离日数和地点的证明文件；
              <br />{" "}
              （5）其他与确认保险事故的性质、原因、损失程度等有关的证明和资料。
              <br />{" "}
              除强制隔离每日津贴保险金以外的其他理赔申请材料以合同约定和理赔规则为准。
            </div>
          </div>
        </div>
      </div>
    </NaviWrapper>
  );
}
