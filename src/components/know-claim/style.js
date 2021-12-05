import styled from "styled-components";

export const KnowClaimWrapper = styled.div`
  width: 1050px;
  height: 500px;
  overflow: auto;
  .pl30 {
    padding-left: 30px;
  }
  .pb30 {
    padding-bottom: 30px;
  }
  .pt30 {
    padding-top: 30px;
  }
  .pr30 {
    padding-right: 30px;
  }

  .detail-pane {
    min-height: 10px;
    height: auto !important;
    .detail-ensure-protect {
      border: 1px solid #dde9fd;
      .ensure-protect-list {
        border-bottom: none;
        border: none;
        .ensure-protect-item .ensure-protect-head {
          border-bottom: none;
          .protect-item-title {
            padding: 11px 20px;
          }
        }
      }
      .block-table {
        font-size: 12px;
        line-height: 24px;
        table .left {
          width: 192px;
          padding-left: 20px;
          color: #333;
          padding-right: 20px;
        }
        table .right {
          width: 800px;
          padding-right: 20px;
          color: #666;
          .diy-font-color {
            color: #2150a2 !important;
          }
        }
      }
      .clearfix {
        zoom: 1;
      }
      .notice-more-table {
        border-top: 1px solid #dde9fd !important;
        padding: 20px;
        margin-bottom: 4px;
        line-height: 24px;
         ol {
          list-style: none;
          margin-left: 0;
        }
      }
    }
  }
`;
