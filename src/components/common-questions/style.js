import styled from "styled-components";

export const CommonQuesWrapper = styled.div`
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
  .ml30 {
    margin-left: 30px;
  }

  .detail-pane {
    min-height: 10px;
    height: auto !important;
    .detail-product-faq {
      border-right: 1px solid #f0f0f0;
      min-height: 350px;
      height: auto !important;
      height: 350px;
      padding-right: 30px;
      .detail-product-faq-list {
        line-height: 2;
        .product-faq-reply {
          margin: 6px 0 20px;
          padding-bottom: 20px;
          border-bottom: 1px dotted #c8c8c8;
        }
      }
    }
  }
`;
