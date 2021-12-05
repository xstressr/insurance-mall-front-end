import React from "react";
import { KnowClaimWrapper } from "./style";

export default function KnowClaim() {
  return (
    <KnowClaimWrapper>
      <div className="detail-pane pt30 pl30 pb30 detail-ensure-notice">
        <div className="detail-ensure-protect">
          <ul className="ensure-protect-list">
            <li className="ensure-protect-item ensure-protect-head">
              <h4 className="protect-item-title diy-f14-bold">投保须知</h4>
            </li>
          </ul>

          <div className="block-table">
            <table>
              <tbody>
                <tr>
                  <td className="left">重要提示</td>

                  <td className="right">
                    <a
                      className="diy-font-color"
                      href="https://files2.huizecdn.com/file1/M00/78/2D/CgUA3GGNuuyAQivxAAFSh58MHMo777.pdf"
                      target="_blank"
                    >
                      费率表
                    </a>

                    <a
                      className="diy-font-color"
                      href="claimList-101848-104275-20812.html"
                      target="_blank"
                    >
                      保险金赔付比例
                    </a>

                    <a
                      className="diy-font-color"
                      href="https://files2.huizecdn.com/file1/M00/A8/C1/CgUA3GBii_SAG1gDAByZaA0r13w13.html"
                      target="_blank"
                    >
                      客户告知书
                    </a>

                    <a
                      className="diy-font-color"
                      href="http://files2.huizecdn.com/file1/M00/37/4F/CgUA3GAT1hiADVMGACP---NRzl0107.pdf"
                      target="_blank"
                    >
                      保单样本
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="left">承保机构</td>

                  <td className="right">
                    本产品由复星联合健康保险股份有限公司承保，目前复星联合健康保险仅在广东省、北京市、上海市、四川省、江苏省、重庆市辖区域设立有分支机构。本产品销售区域为全国（不含港澳台）。保险公司暂未设立分支机构的区域的客户投保本产品，可能存在服务环节增加、时效相对较长等问题，请投保人对此予以确认后再进行投保。
                  </td>
                </tr>

                <tr>
                  <td className="left">线上服务</td>

                  <td className="right">
                    本产品已实现在线咨询、投保、承保、犹豫期退保、报案索赔全流程线上服务。
                  </td>
                </tr>

                <tr>
                  <td className="left">如实告知</td>

                  <td className="right">
                    投保人应当提供真实的投保信息，并就复星联合健康保险提出的询问如实告知。如被保险人健康和职业状况与告知内容不符或者投保人以及被保险人在保单承保后又提出补充告知，且足以影响保险公司决定是否同意承保或者提高保险费率的：
                    （1）复星联合健康保险有权不同意承保或解除合同；
                    （2）如发生保险事故，复星联合健康保险不承担赔偿或给付保险金的责任，对于故意不如实告知的，不退还保险费。
                  </td>
                </tr>

                <tr>
                  <td className="left">费用扣除</td>

                  <td className="right">
                    如果您申请解除合同，自保险公司收到您解除合同申请书时起，保险合同效力终止。保险公司将在30日内退还合同的未满期净保险费。未满期净保险费计算公式为“保险费×（1-35%）×(1-经过天数/保险期间天数)”，经过天数不足一天的按一天计算。
                  </td>
                </tr>

                <tr>
                  <td className="left">退保损失</td>

                  <td className="right">
                    本产品无犹豫期。投保人解除合同会遭受一定损失。
                  </td>
                </tr>

                <tr>
                  <td className="left">支付和凭证</td>

                  <td className="right">
                    本产品为一年期产品，保费由慧择保险经纪代收。
                    本产品仅提供电子保单，您在投保成功后24小时内，电子保单会发送到您填写的投保人邮箱中，电子保单与纸质保单具有同等法律效力。
                    本产品仅提供电子发票。
                  </td>
                </tr>

                <tr>
                  <td className="left">续保提示</td>

                  <td className="right">
                    本产品为一年期非保证续保产品。保险期间届满，投保人需要重新向保险公司申请投保本产品，并经保险人同意，保险公司按续保时重新厘定的费率标准收取新续保合同的保险费。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="clearfix notice-more-table">
            <p>其余须知：</p>
            <ol className="f12">
              <li>
                <strong>1. </strong>
                本产品承保年龄为出生满30天-65周岁（含30天、65周岁）
              </li>

              <li>
                <strong>2. </strong>
                本产品仅承保1-3类职业人员（不承保家庭主妇/夫、离退休人员（无兼职）、待业人员、下岗人员）。凡从事高空作业工作人员均不可作为被保险人投保本产品。职业类别参照《复星联合健康保险职业分类表》，判定职业类别以出险时被保险人的职业类别为准。
              </li>

              <li>
                <strong>3. </strong>
                按中国保监会规定,10周岁以下的未成年人累计身故保险金额不得超过人民币20万元;10至17周岁的未成年人累计身故保险金额不得超过人民币50万元。保险公司仅于保监发[2015]90号文规定的未成年人死亡保险金限额内承担保险责任。
              </li>

              <li>
                <strong>4. </strong>本产品不支持外籍人士购买。
              </li>

              <li>
                <strong>5. </strong>
                同一被保险人在同一保险期间内，0-9周岁最多投保意外身故/伤残：20万元，10-65周岁最多投保意外身故/伤残：50万元，多投部分无效。
              </li>

              <li>
                <strong>6. </strong>本产品仅提供电子保单。
              </li>

              <li>
                <strong>7. </strong>
                本保单扩展赔付新冠肺炎（COVID-19）身故保险金：本保险合同生效后，被保险人经医院确诊感染新型冠状病毒，并因此导致被保险人身故的，
                适用意外伤害责任。
              </li>

              <li>
                <strong>8. </strong>请认真阅读并理解《
                <a
                  href="http://files2.huizecdn.com/file1/M00/E1/F8/CgUA3GCI_vGAMg53AAZBqJwNNJs234.pdf"
                  target="_blank"
                >
                  <strong>投保须知</strong>
                </a>
                》。
              </li>

              <li>
                <strong>9. </strong>【释义】
                <br />
                （1）医院：指国家各级卫生主管部门公布的感染新型冠状病毒的医疗救治定点医院。
                <br />
                （2）感染新型冠状病毒：新型冠状病毒是指世界卫生组织（WHO）命名的“2019新型冠状病毒”（简称：2019-nCov),感染新型冠状病毒需由国家卫生行政机关指定的医院或者国家正式卫生检疫机构确诊。
                <br />
                （3）中高风险地区：指根据“国务院客户端”APP及各地市疫情防控中心公告对全国发布的中高风险地区目录内地区以及所有中国境外地区。
                <br />
                （4）强制隔离：指根据被保险人所在地国家的政府监管当局或医院为保护健康人群免受病源感染，依据该国法律法规或者其他相关规定，对被保险人所采取的要求被保险人于指定场所进行定期医学隔离观察，从而切断病源与易感者之间的联系的一项强制措施。
                <br />
                （5）强制隔离日数：是指被保险人实际被强制隔离的时间持续达到24小时或以上，每满24小时为一日。强制隔离日数以当地防疫部门或保险公司认可的医疗机构出具的证明文件为准。
                <br />
                （6）新冠肺炎：指经保险公司指定或认可的医疗机构采用国家卫健委《新型冠状病毒肺炎诊疗方案》最新版本的诊断标准（包含轻型、普通型、重型和危重型）确诊的疾病(COVID-19)。
                <br />
                （7）新冠肺炎轻型或普通型：指经保险公司指定或认可的医疗机构采用国家卫健委《新型冠状病毒肺炎诊疗方案》的诊断标准确诊为轻型和普通型疾病的情况。
                <br />
                （8）新冠肺炎重症或危重症疾病：指经保险公司指定或认可的医疗机构采用国家卫健委《新型冠状病毒肺炎诊疗方案》的诊断标准确诊为重型和危重型疾病的情况。
                <br />
              </li>

              <li>
                <strong>10. </strong>新冠肺炎身故保险金责任免除
                <br />
                在本保险合同生效之前，被保险人存在以下情形的，保险公司不承担新型冠状病毒扩展责任：
                <br />
                （1）已经确诊感染或疑似感染新型冠状病毒的；
                <br />
                （2）因有与新型冠状病毒肺炎病人接触史，尚在医学隔离或医学观察中的。
                <br />
              </li>

              <li>
                <strong>11. </strong>强制隔离每日津贴保险金责任免除
                <br />
                被保险人因任何下列情形而遭受的损失，或具备任一下列情形的，保险公司不承担赔偿责任：
                <br />
                （1）在保险合同生效前，被保险人所在地区已被国家确定为中高风险地区或被当地政府宣布为全域封闭管理地区且保单生效时仍属于上述两类地区；
                <br />
                （2）被保险人未遵守防疫规定而主动前往或离开已知的中高风险地区或全域封闭管理地区导致被强制隔离；
                <br />
                （3）在保险合同生效前，被保险人已经确诊感染新型冠状病毒或疑似感染新型冠状病毒或因有与新冠肺炎病人接触史，尚在医学隔离或医学观察中。
                <br />
                （4）各地政府或防疫部门要求的对来自非中高风险地区或全域封闭管理地区的返乡或探亲人员的集中隔离或居家隔离。
              </li>

              <li>
                <strong>12. </strong>新冠肺炎确诊津贴保险金责任免除
                <br />
                在保险合同生效前，被保险人已经确诊感染新型冠状病毒或疑似感染新型冠状病毒或因有与新冠肺炎病人接触史，尚在医学隔离或医学观察中。
              </li>

              <li>
                <strong>13. </strong>
                本产品同一被保险人仅限投保一单，强制隔离津贴日额为200元/日（投保多份隔离津贴不叠加），强制隔离时间超过24小时后未满24小时者，按照一日计。每一保单最高给付的强制隔离津贴日数以30日为限。
              </li>
            </ol>
          </div>
        </div>

        <div className="detail-ensure-protect mt30">
          <ul className="ensure-protect-list">
            <li className="ensure-protect-item ensure-protect-head">
              <h4 className="protect-item-title diy-f14-bold">保险条款</h4>
            </li>
          </ul>
          <div className="block-table clause-table">
            <table>
              <tbody>
                <tr className="title-tr">
                  <td className="left">主条款</td>
                  <td className="right"></td>
                </tr>

                <tr>
                  <td className="left">
                    <a href="./provision/detail-20811.html" target="_blank">
                      复星联合爱无忧意外伤害保险条款
                    </a>
                  </td>
                  <td className="right">
                    复星联合健康保险（2019）意外伤害保险010号/复星联合健康保险发【2019】98号
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </KnowClaimWrapper>
  );
}
