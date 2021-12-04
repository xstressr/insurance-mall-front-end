import styled from "styled-components";

export const HomeWrapper = styled.div`
  
  background-color: rgb(246, 248, 252);
  

  .header {
    height: 30px;
    background-color: rgb(43,50,62);
    
    .header-top {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    }

    .header-left {
      font-size: 12px;
      color: rgb(100, 110, 120);
      line-height: 30px;
      .left-item {
        display: flex;

        li:nth-of-type(2n) {
          height: 8px;
          background-color: #5d687a;
          width: 1px;
          margin: 16px 12px 0;
        }
        
        .tooltipBox:hover .myTooltip  
        {
            visibility: visible;
        }

        .myTooltip {
          visibility: hidden;
          position: absolute;
          z-index: 100;
          background: #fff;
          border: 1px solid #e6ecf6;
          box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
          a {
            display: block;
            width: 80px;
            height: 32px;
            line-height: 32px;
            text-align: center;

          }
        }

        
      }
      
      a {
        color: rgb(100, 110, 120);
      }

      a:hover {
        color: #fff
      }
    }

    .header-right {
      font-size: 12px;
      color: rgb(95, 102, 115);
      line-height: 30px;
      
      a:hover {
        color: #fff
      }
    }
  }

  

  .header-bottom {
    width: 1200px;
    margin: auto;
    display: flex;
    /* flex-direction: row-reverse; */
    justify-content: flex-end;
    /* margin: 10px 0; */
    margin-bottom: 10px;
    margin-top: 10px;

  }

  .carousel {
    width: 100vw;
    height: 400px;
    margin: auto;
  }

  .content {
    width: 1200px;
    margin: auto;

    .content-top {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      .content-top-left {
        width: 890px;
        height: 450px;
        background-color: #fff;
        border-radius: 15px;

        .product-more {
          display: flex;
          flex-direction: row-reverse;
          padding-right: 25px

        }

        .top3 {
          border-color: #eb2f96;
        }

        .content-top-left-title {
          padding-left: 10px;
        }
      }

      .content-top-right {
        width: 300px;
        height: 350px;
        background-color: #fff;
        border-radius: 15px;

        .content-top-right-title {
          .pic {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .content-top-right-header{
            text-align: center;
            margin: 10px 0;
          }
          
        }
        .insurance-title {
            display:flex;
            justify-content: space-between
          }
      }
      .margin-bottom {
        margin-bottom: 10px;
      }
    }

    .insurance-know {
      height: 400px;
      background-color: #fff;
    }
  }
`