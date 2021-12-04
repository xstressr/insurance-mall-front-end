import styled from "styled-components";

export const KnowsWrapper = styled.div`
  a {
    text-decoration: none;
  }
  .content {
    height: 125vh;
    background-color: #fff;
    width: 70vw;
    margin: 0 auto;
    .knows-list {
      height: 118vh;
      .ant-tabs-nav-list {
        margin-left: 24px;
        .ant-tabs-tab {
          padding: 12px;
          margin: 0 32px 0 0;
        }
      }
      .style-list {
        padding: 24px;
        background-color: #fff;
        border-radius: 0 0 4px 4px;
        .style-listItem {
          margin-bottom: 16px;
          padding: 16px 24px;
          background: #fff;
          font-size: 14px;
          border: 1px solid #e6ecf6;
          -moz-border-radius: 9px;
          border-radius: 9px;
          .style-box {
            .style-title {
              display: flex;
              align-items: center;
            }
            .style-main {
              overflow: hidden;
              color: #5d687a;
              position: relative;
              .style-twoRows {
                position: relative;
                .style-content {
                  margin-top: 8px;
                  margin-bottom: 12px;
                  font-size: 14px;
                  amily: PingFangSC, PingFangSC-Regular;
                  font-weight: 400;
                  color: #2a313d;
                  line-height: 18px;
                  overflow: hidden;
                  -o-text-overflow: ellipsis;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                }
              }
            }
            .style-footer {
              display: flex;
              -moz-box-align: end;
              -ms-flex-align: end;
              align-items: flex-end;
              -moz-box-pack: justify;
              -ms-flex-pack: justify;
              justify-content: space-between;
              font-size: 12px;
              amily: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              color: #919cac;
            }
          }
        }
      }
    }
    .pagination {
      display: flex;
      justify-content: center;
    }
  }
`;
