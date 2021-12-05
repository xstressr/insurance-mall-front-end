import styled from "styled-components";

export const ProductsWrapper = styled.div`
  .content {
    height: 1000px;
    background-color: #fff;
    width: 1200px;
    margin: 0 auto;
    .products-list {
      height: 935px;
      .product {
        display: flex;
        justify-content: space-between;
        padding: 24px 0;
        margin: 0 24px;
        border-bottom: 1px solid #e6ecf6;
        .left-box {
          display: flex;

          .img-box {
            margin-right: 16px;
            -moz-border-radius: 8px;
            border-radius: 8px;
            overflow: hidden;
            position: relative;
            img {
              width: 130px;
              height: 130px;
            }
            .style_cover {
              position: absolute;
              text-align: center;
              padding: 0 8px;
              line-height: 28px;
              font-size: 14px;
              color: #fff;
              background: linear-gradient(225deg, #55aeff, #2e82ff);
              border-radius: 0 0 6px 0;
              bottom: 0;
              width: 100%;
              overflow: hidden;
            }
          }
          .info-box {
            width: 800px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .style-row1 {
              color: #2a313d;
              font-weight: 700;
              display: -moz-box;
              display: -ms-flexbox;
              display: flex;
              -moz-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              font-size: 18px;
            }
            .style-row2 {
              font-size: 12px;
              color: #919cac;
              min-height: 18px;
            }
            .style-row3 {
            }
            .style-row4 {
              font-size: 14px;
              display: flex;
              flex-wrap: wrap;
              .style-item {
                width: 50%;
                font-size: 14px;
                display: flex;
                align-items: center;
                .style-label {
                  color: #919cac;
                  margin-right: 10px;
                }
                .style-value {
                  flex: 1 1;
                  color: #5d687a;
                }
              }
            }
          }
        }
        .right-box {
          text-align: right;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .style-company {
            font-size: 12px;
            color: #becadb;
          }
          .style-money {
            color: #ff5521;
            font-size: 24px;
            font-weight: 700;
            margin-top: 36px;
            img {
              width: 7px;
              height: 11px;
            }
            .style-text {
              font-size: 12px;
              margin-left: 2px;
              position:relative;
              top: -2px
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
