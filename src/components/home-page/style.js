import styled from "styled-components";

export const HomeWrapper = styled.div`

  .header {
    height: 30px;
    background-color: rgb(245,245,245);
    
    .header-top {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    }

    .header-left {
      font-size: 12px;
      line-height: 30px;
    }

    .header-right {
      font-size: 12px;
      line-height: 30px;
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
    width: 1200px;
    height: 300px;
    margin: auto;
  }
`