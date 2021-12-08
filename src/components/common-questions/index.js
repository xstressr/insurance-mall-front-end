import React from "react";
import { CommonQuesWrapper } from "./style";

export default function CommonQuestions() {
  return (
    <CommonQuesWrapper>
      <div className="detail-pane pt30 pb30">
        <div className="detail-product-faq pr30">
          <dl className="detail-product-faq-list ml30">
            <dt className="product-faq-qution fb">
              <i className="ico">Q</i>
              <strong>本产品是否承保本市出行？</strong>
            </dt>
            <dd className="product-faq-reply">
              <i className="ico">A</i>本产品可承保本市出行。
            </dd>

            <dt className="product-faq-qution fb">
              <i className="ico">Q</i>
              <strong>什么是猝死？</strong>
            </dt>
            <dd className="product-faq-reply">
              <i className="ico">A</i>
              指被保险人由于患有潜在的疾病或机能障碍，发生率突然的，出乎意料的非暴力自然死亡。猝死的时间限度，目前一般指从开始发病(或病情突变)到死亡在24小时以内者。
            </dd>

            <dt className="product-faq-qution fb">
              <i className="ico">Q</i>
              <strong>如何查询验证保单?</strong>
            </dt>
            <dd className="product-faq-reply">
              <i className="ico">A</i>
              您通过全国客服热线13381501606
              <strong>
                <a href="https://www.fosun-uhi.com/" target="_blank">
                  官网
                </a>
              </strong>
              及官方微信公众号进行保单查询、验真。
            </dd>

            <dt className="product-faq-qution fb">
              <i className="ico">Q</i>
              <strong>强制隔离每日津贴保险金申请材料需要什么？</strong>
            </dt>
            <dd className="product-faq-reply">
              <i className="ico">A</i>
              保险金申请人向保险公司申请给付保险金时，应提交以下材料。保险金申请人因特殊原因不能提供以下材料的，应提供其他合法有效的材料。保险金申请人未能提供有关材料，导致保险公司无法核实该申请的真实性的，保险公司对无法核实部分不承担给付保险金的责任。
              <br />
              （1）索赔申请表；
              <br />
              （2）被保险人身份证明；
              <br />
              （3）居住地或工作所在地、旅行途经地或目的地的当地政府或防疫部门授权强制隔离命令文件；
              <br />
              （4）当地防疫部门或保险人认可的医疗机构出具的强制隔离日数和地点的证明文件；
              <br />
              （5）其他与确认保险事故的性质、原因、损失程度等有关的证明和资料。
              <br />
              除强制隔离每日津贴保险金以外的其他理赔申请材料以合同约定和理赔规则为准。
            </dd>

            <dt className="product-faq-qution fb">
              <i className="ico">Q</i>
              <strong>这款产品扩展的新冠责任是否承保“德尔塔”变异病毒？</strong>
            </dt>
            <dd className="product-faq-reply">
              <i className="ico">A</i>
              根据国务院联防联控机制发布会权威解答，“德尔塔”变异株是目前全球新冠肺炎疫情流行的主要毒株。故，因德尔塔毒株导致的保险事故，适用于爱无忧意外险中扩展新冠肺炎(COVID-19)的相关责任。
            </dd>

            <dt className="product-faq-qution fb">
              <i className="ico">Q</i>
              <strong>提供居家健康监测证明材料是否可以申请隔离津贴?</strong>
            </dt>
            <dd className="product-faq-reply">
              <i className="ico">A</i>
              根据保险合同要求，申请隔离津贴需提供当地防疫部门或保险人认可的医疗机构出具的强制隔离日数和地点的证明文件。居家健康监测证明，不属于强制隔离的命令类型文件，歉难给付。
            </dd>

            <dt className="product-faq-qution fb">
              <i className="ico">Q</i>
              <strong>
                所在的隔离点出具的证明资料无法盖章，能否申请隔离津贴？
              </strong>
            </dt>
            <dd className="product-faq-reply">
              <i className="ico">A</i>
              根据保险合同要求，申请资料应提供合法有效资料，未加盖印章的证明材料无法证实材料的有效性和真实性，建议到相应机构或部门补充印章后提交理赔申请。
            </dd>
          </dl>
        </div>
      </div>
    </CommonQuesWrapper>
  );
}
